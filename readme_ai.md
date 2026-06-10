# AI Project Handoff Notes

## 项目一句话说明
这是一个基于 `React + Vite` 的个人品牌型简历站，不是传统简历模板，而是面向 `AI Developer / RPA Developer / AI Agent Engineer / Python Developer` 的作品集式单页展示网站。

## 在线地址与本地地址
- 线上展示地址：[https://chenwenwen1007.github.io/Personal-Resume-Webpage/#home](https://chenwenwen1007.github.io/Personal-Resume-Webpage/#home)
- 本地开发常用地址：`http://127.0.0.1:4173/Personal-Resume-Webpage/#home`
- GitHub 仓库：`https://github.com/Chenwenwen1007/Personal-Resume-Webpage`

## 项目目标
这个项目围绕“从 RPA 流程自动化到 AI 原生业务系统”的个人定位展开，核心目标不是展示花哨技术，而是把个人经历、项目能力、技术栈、业务理解和联系方式组织成一个适合求职、合作、对外介绍的品牌型页面。

## 技术栈
- 前端：`React 19`、`Vite 8`
- 3D/背景效果：`three`
- 部署方式：`GitHub Pages`

## 目录与关键文件
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\src\App.jsx`
  页面主体结构、所有文案数据、弹窗逻辑、指标动画、移动端入场逻辑，几乎所有核心内容都在这里。
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\src\App.css`
  页面绝大多数样式、响应式断点、skill marquee、hover 提示层、弹窗、移动端卡片动画都在这里。
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\src\main.jsx`
  React 入口，同时把网页标签 favicon 指向头像图片。
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\src\components\LiquidEther.jsx`
  首页视觉背景组件。
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\vite.config.js`
  已配置 `base: '/Personal-Resume-Webpage/'`，这是 GitHub Pages 正常访问的关键配置，不要随便删。
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\.github\workflows\deploy.yml`
  GitHub Pages 自动部署工作流，推送到 `master` 后会自动构建并发布。

## 图片资源位置
目前实际使用到的图片已经统一放在：
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\img\profile-avatar-square.png`
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\img\wechat-qr-b.png`
- `F:\Pyhton_Project\Personal_Resume_Webpage\Personal_Resume_Webpage_App\img\rpa-proof-2026-06-10.png`

相关引用位置：
- `src/main.jsx` 引用头像做 favicon
- `src/App.jsx` 引用头像、微信二维码、RPA 证明图

## 页面结构概览
页面是单页结构，顶部导航锚点切换，主要包括：
- `#home`：Hero 首屏
- `#experience`：经历区
- `#projects`：项目区
- `#strengths`：优势区
- `#contact`：联系区

## App.jsx 里的数据入口
后续如果要改内容，优先改这些常量数据，而不是直接在 JSX 里硬找文本：
- `navigation`
  顶部导航 5 个标签。
- `metrics`
  首页右侧指标卡数据，包含数字滚动。
- `timeline`
  工作经历时间轴。
- `projects`
  项目卡片内容。
- `strengths`
  核心优势内容。
- `contacts`
  联系方式摘要。
- `contactChannels`
  联系合作弹窗内的渠道卡。
- `skillCatalog`
  所有技能标签的名称、分类、brief、detail。
- `heroSkillRows`
  两条滚动技能带的技能顺序。

## 当前已经做过的重要交互
### 1. Skill marquee 无缝滚动
- 首页有两条技能滚动带。
- 现在已经从“定期重复动画”改成“首尾闭环的无缝滚动”。
- 目标效果是最后一个标签后面立刻接第一个标签，例如 `MySQL -> Coze`、`Business System -> Python`。

### 2. Skill pill 悬停提示层
- 悬停 skill 标签时，会显示独立的共享 tooltip。
- tooltip 不是放在标签内部，而是脱离 marquee 容器单独渲染，避免被父容器裁切。
- tooltip 现在应保持 `pointer-events: none`，否则很容易引发 hover 闪屏或抖动。

### 3. Skill pill 点击详情弹层
- 点击技能标签，会打开详情弹层，展示更完整的能力说明。

### 4. 联系区弹窗交互
- 支持邮箱复制反馈。
- 支持微信二维码放大预览。

### 5. 指标卡数字滚动动画
- 首页右侧 metrics 区域进入视口后会触发数字增长动画。
- 逻辑使用 `IntersectionObserver` + `requestAnimationFrame`。

### 6. 300+ 指标点击证明图
- `300+ 累计开发 RPA 流程数` 这个卡片支持点击。
- 点击后会弹出证明截图。

### 7. 移动端卡片入场动画
- 手机端对部分卡片加了入场动画，使用 `data-mobile-stack-card` 和 `mobile-stack-visible`。
- 目的是让内容进入视口时有一种卡片入栈的感觉，而不是生硬地直接出现。

## 与内容有关的当前状态
### 工作经历文案
目前经历区中的公司文案已调整为：
- `任职公司：广州乐百畅厨具有限公司（百畅 / 韩笑）`
- `任职公司：广州碧莹化妆品有限公司 / 广州欧佩化妆品有限公司`

### 指标卡当前数据
当前 `metrics` 包含：
- `20+` AI 工具账号与团队落地经验
- `60%` 核心部门任务耗时缩减
- `100%` 企业 AI 覆盖率
- `10+` 主流电商与业务平台实战
- `300+` 累计开发 RPA 流程数
- `0→1` 自动化与 AI 系统搭建经历

## 移动端适配现状
项目已经做过一轮手机端优化，重点适配过：
- `430 x 932`
- `390 x 844`

已经处理过的点包括：
- 手机端顶部 `nav-links` 缩小并尽量保持一排
- Hero 区内容重排
- metrics 卡片与人物卡移动端入场动画
- 部分卡片和联系区在小屏下的间距与布局调整
- skill marquee 在手机端的高度、留白和可视范围微调

## 后续 AI 改项目时最容易改错的地方
### 1. 不要随便改 `vite.config.js` 的 `base`
GitHub Pages 当前依赖：
- `base: '/Personal-Resume-Webpage/'`

如果删掉或改错，线上资源路径会错，表现通常是：
- 页面空白
- 图片丢失
- CSS/JS 404

### 2. 图片不要再写本地磁盘绝对路径
之前图片来源里出现过类似 `F:\...` 的本地路径，但真正进入项目后，必须放到仓库目录里并通过 `import` 引用。
正确做法是：
- 把图片放到 `img/` 或 `public/` 内
- 在 React 文件中 `import xxx from '../img/xxx.png'`

### 3. Skill tooltip 不要再塞回 marquee 容器内部
skill 区曾经出现过这些问题：
- tooltip 被 `overflow: hidden` 裁切
- 悬停出现明显闪屏
- 标签上浮后被容器边界切掉

现在的稳定方案是：
- marquee 负责滚动
- tooltip 独立绝对定位显示
- tooltip 使用 `pointer-events: none`
- skill pill 悬停位移不要过大

### 4. 修改 skill marquee 时要同时看结构和样式
相关逻辑分散在：
- `src/App.jsx` 的 `heroSkillRows`、skill 映射结构
- `src/App.css` 的 `.hero-skill-marquees`、`.skill-marquee`、`.skill-marquee-viewport`、`.skill-marquee-inner`、`.skill-pill`
- `@keyframes marqueeLeft` / `@keyframes marqueeRight`

只改其中一边，通常会造成：
- 首尾不闭环
- 高度不一致
- hover 被裁切
- 手机端显示异常

### 5. 指标卡点击证明图逻辑有一点“写死”
当前 `300+` 卡片可点击的判断是基于数据特征做的，不是完全配置化。
如果后续要新增更多可点击指标，建议把“是否可点击、点击展示什么弹窗”抽成明确字段，而不是继续靠数字判断。

### 6. 手机端适配不要只改一个断点
当前样式里至少要一起关注：
- `@media (max-width: 1024px)`
- `@media (max-width: 920px)`
- `@media (max-width: 640px)`
- `@media (max-width: 430px)`
- `@media (max-width: 420px)`

很多问题在桌面端看不出来，但会在小屏下暴露，比如：
- 导航挤压换行
- skill 区高度不协调
- 卡片动画过重
- 弹窗超出视口

### 7. `App.jsx` 和 `App.css` 现在都比较大
当前项目能快速改，但维护成本开始上升。
后续如果要继续迭代，优先考虑：
- 把常量数据抽到单独 data 文件
- 把 Hero、Experience、Projects、Contact 拆成组件
- 把 tooltip、lightbox、metrics 计数器单独拆组件

## 推荐的后续改法
如果下一个 AI 要继续改项目，建议按下面顺序：
1. 先读 `README.md`
2. 再读 `readme_ai.md`
3. 重点看 `src/App.jsx` 顶部的数据常量和底部弹窗区域
4. 再看 `src/App.css` 里对应模块的 class
5. 如果涉及移动端，一定同时检查 `640 / 430 / 420` 断点
6. 如果涉及部署，一定检查 `vite.config.js` 和 `.github/workflows/deploy.yml`

## 可直接复制给下一个 AI 的说明模板
你可以在新对话里直接发类似这段：

```text
这是一个 React + Vite 的个人品牌型简历站项目，请先阅读 README.md 和 readme_ai.md，再开始修改。
重点关注 src/App.jsx 和 src/App.css。
这个项目已经做过 GitHub Pages 适配、skill marquee 无缝滚动、skill hover tooltip 独立浮层、metrics 数字滚动、300+ 指标证明图弹窗、移动端适配。
修改时请避免破坏 PC 端显示，并特别检查 430x932 和 390x844 两种手机尺寸。
```

## 这次项目里的避坑经验总结
- skill 标签的 hover 提示层如果参与鼠标命中，会导致闪屏和抖动。
- 有 `overflow: hidden` 的父容器很容易裁切 tooltip、hover 上浮元素和弹窗边缘。
- 做“无缝滚动”不能只靠重复动画时长，必须保证视觉上首尾闭环。
- 手机端动效不能直接照搬 PC，容易显得挤、重、乱。
- GitHub Pages 项目最容易出问题的是资源路径和 `base` 配置。
- 图片资源最好统一收口到项目目录，不要继续引用外部磁盘路径。
- 指标、项目、经历这类文案最好始终从数据数组改，避免 JSX 和数据源双处不一致。

## 当前项目适合继续优化的方向
- 把内容数据完全配置化
- 拆分大型组件
- 给 metrics 点击逻辑做配置化
- 增加更多真实项目截图和外链
- 继续细化移动端触屏体验
- 视情况迁移到 TypeScript

# Personal Resume Webpage

一个基于 `React + Vite` 构建的个人简历展示站，面向 `AI Developer / RPA Developer / AI Agent Engineer / Python Developer` 等方向，强调作品集化呈现，而不是传统模板式简历。

## 项目概览

当前页面围绕“从 RPA 流程自动化到 AI 原生业务系统”的个人定位展开，主打暗色、科技感、玻璃拟态与动态展示，聚焦以下内容：

- 个人职业定位与核心介绍
- 技术栈与能力标签展示
- 工作经历与业务落地经验
- 精选项目与交付方向
- 核心优势总结
- 联系方式与合作入口

## 当前已实现内容

### 1. Hero 首屏

- 视频背景与网格叠层氛围
- 顶部导航与联系合作 CTA
- 动态打字标题
- 双向无缝滚动技能标签
- 技能标签点击详情弹层
- 技能标签悬停独立提示层
- 右侧人物介绍卡与指标数据卡

### 2. Personal Experience

- 头像与身份信息展示
- 个人简介与求职方向
- 联系方式摘要
- 时间轴式工作经历模块

### 3. Selected Projects

- AI Agent / Workflow 方向项目
- 电商自动化流程体系项目
- AIGC 图像/视频生产系统项目

### 4. Core Strengths

- 跨角色复合能力
- 0 到 1 搭建能力
- 电商业务场景理解
- AI 工程化落地能力

### 5. Contact & Collaboration

- 联系合作主入口
- 邮箱联系卡片
- 微信二维码卡片
- 联系方式弹窗与二维码预览

## 近期更新总结

本轮主要完成了首页交互与展示细节优化：

- 技能标签滚动由“节拍感明显”的动画改为真正无缝闭环滚动
- 技能区横向边界重新收口，避免滚动内容溢出到右侧信息卡
- 技能标签悬停提示从标签内部改为共享浮层，解决被 `skill-marquee` 裁切的问题
- 技能滚动区域的高度、留白与 hover 视觉持续微调
- 技能标签悬停时去除了偏重的黑色阴影效果
- 页面 favicon 已切换为头像资源
- 联系合作区域补充了更完整的弹窗、复制与二维码预览体验

## 交互特性

- Hero 标题打字动画
- 双向 marquee 技能滚动
- hover/focus 技能说明提示
- skill 点击详情弹层
- 联系合作弹窗
- 邮箱复制反馈
- 微信二维码预览

## 技术栈

### 前端

- React 19
- Vite 8

### 工程依赖

- react
- react-dom
- @vitejs/plugin-react
- eslint

## 运行方式

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 本地预览

```bash
npm run preview
```

## 项目结构

```text
src/
  App.jsx        页面主体结构与交互逻辑
  App.css        页面样式与动画
  main.jsx       应用入口与 favicon 注入
  assets/        头像、二维码等静态资源
public/
  hero-background.webm
```

## 当前页面内容结构

1. `#home` Hero 首屏
2. `#experience` 个人经历
3. `#projects` 精选项目
4. `#strengths` 核心优势
5. `#contact` 联系合作

## 后续可继续优化的方向

- 进一步拆分组件，降低 `App.jsx` 复杂度
- 将静态内容抽离为配置数据文件
- 增加移动端细节适配与触屏交互优化
- 补充真实项目截图、链接与成果数据
- 引入 TypeScript 与更清晰的组件边界

## 说明

该项目当前更偏“个人品牌首页 + 求职作品集首页”，适合用于：

- AI / RPA / Agent 方向求职展示
- 面试前的个人能力说明页
- 对外合作时的个人介绍页
- 后续继续扩展为完整个人站点的基础版本

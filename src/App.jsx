import { useEffect, useState } from 'react'
import './App.css'
import profileAvatar from './assets/profile-avatar-square.png'

const navigation = [
  { label: '经历', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
]

const metrics = [
  { value: '20+', label: 'AI 工具账号与团队落地经验' },
  { value: '60%', label: '核心部门任务耗时缩减' },
  { value: '10+', label: '主流电商与业务平台实战' },
  { value: '0→1', label: '自动化与 AI 系统搭建经历' },
]

const timeline = [
  {
    period: '2024.11 - 至今',
    role: 'RPA 开发工程师 / 组长 / AI Agent 开发管理 / AI 系统架构',
    company: '电商厨具品牌 · 百畅 / 韩笑',
    description:
      '从 0 到 1 搭建公司自动化与 AI 体系，面向财务、客服、新媒体、设计与业务团队交付流程平台、智能选品系统、AIGC 生产系统和业务智能体。',
    highlights: [
      '覆盖物流赔付、仅退款拦截、竞品抓取、潜力爆品抓取等核心 RPA 流程',
      '参与流程制定后，单部门任务耗时下降约 60%，释放大量人工重复劳动',
      '建设智能选品、新品池、可行性评估与业务投票闭环系统',
      '落地生图与生视频系统，沉淀企业私有化 AI 数据资产',
    ],
  },
  {
    period: '2022.03 - 2024.10',
    role: 'RPA 实习开发',
    company: '电商美妆品牌 · 碧莹 / 欧佩 / 兰韵',
    description:
      '服务京东、抖音、拼多多、淘宝、天猫、1688、快手、小红书等主流电商平台，推进财务、客服和运营类流程的标准化与自动化。',
    highlights: [
      '具备国内主流全电商平台流程经验',
      '支持涉税信息导出、发票处理、客服绩效汇总等业务自动化',
      '积累跨平台流程复用与稳定运行经验',
      '形成面向电商场景的流程拆解与快速交付能力',
    ],
  },
]

const projects = [
  {
    tag: 'AI Agent / Workflow',
    title: '企业级 AI Agent 工作流矩阵',
    description:
      '使用扣子、Gem、n8n、ComfyUI 搭建文案生成、商品卡创作、运营生图与业务决策工作流，让团队在 AI 早期快速形成可复用生产力。',
    accent: '智能体编排',
  },
  {
    tag: 'RPA Automation',
    title: '电商全平台自动化流程体系',
    description:
      '围绕财务、客服、运营场景，覆盖物流赔付、保证金导出、仅退款拦截、竞品抓取与商品监控，实现跨平台稳定执行与规模化复用。',
    accent: '流程效率',
  },
  {
    tag: 'AIGC System',
    title: '生图 / 生视频私有化生产系统',
    description:
      '面向抖音新媒体与设计部门交付 AIGC 生产系统，沉淀本地生成数据，兼顾内容产能、数据留存和 AI 使用成本控制。',
    accent: '内容引擎',
  },
]

const strengths = [
  {
    title: '跨角色复合能力',
    text: '同时覆盖 Python 开发、RPA、AI Agent、系统架构和业务流程设计，能把技术方案直接推进到业务落地。',
  },
  {
    title: '0 到 1 交付能力',
    text: '擅长从混乱需求中拆出闭环，快速搭建 MVP，并把原型沉淀成团队可持续复用的系统或工作流。',
  },
  {
    title: '电商场景深度理解',
    text: '熟悉主流电商平台运营与履约链路，能把自动化、智能体与 AIGC 放到真实业务节点里发挥价值。',
  },
  {
    title: 'AI 工具工程化落地',
    text: '不仅会使用模型，更关注账号策略、提示词标准化、私有化沉淀与组织协同，让 AI 真正进入生产环境。',
  },
]

const contacts = [
  { label: '求职方向', value: 'AI 开发工程师 / RPA 开发工程师 / AI Agent 开发工程师 / Python 开发工程师' },
  { label: '技术关键词', value: 'Python · RPA · n8n · Coze · ComfyUI · AIGC · Workflow · Agent' },
  { label: '合作方式', value: '全职 / 项目制 / AI 自动化咨询' },
]

const heroSkillRows = [
  [
    'Python',
    'Java',
    'RPA',
    'JS',
    'AIAgent',
    'N8N',
    'ComfyUI',
    'AIGC',
    'Workflow',
    '影刀RPA',
    '实在智能RPA',
    '蓝印RPA',
    'Business System',
  ],
  [
    'MySQL',
    'SQLite',
    'PostgreSQL',
    'React',
    'TypeScript',
    'RocketMQ',
    'RabbitMQ',
    'Spring Boot',
    'MyBatis-Plus',
    'Redis',
    'Pandas',
    'NumPy',
    '帆软BI',
    'FastAPI',
    'Coze',
  ],
]

const heroHeadlineFullText =
  '\u3000从 RPA 流程自动化到 AI 原生业务系统：\n\u3000构建全链路智能运营体系，赋能创意生产与业务决策双升级'

function App() {
  const [typedHeadline, setTypedHeadline] = useState('')

  useEffect(() => {
    let charIndex = 0
    let timerId

    const typeNextCharacter = () => {
      const nextCharIndex = charIndex + 1
      setTypedHeadline(heroHeadlineFullText.slice(0, nextCharIndex))

      if (nextCharIndex < heroHeadlineFullText.length) {
        charIndex = nextCharIndex
        timerId = window.setTimeout(typeNextCharacter, 145)
      }
    }

    timerId = window.setTimeout(typeNextCharacter, 260)

    return () => window.clearTimeout(timerId)
  }, [])

  const headlineTyping = typedHeadline.length < heroHeadlineFullText.length

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-mark">
          <span className="brand-dot" />
          <span>CHEN XIN / AI ENGINEER</span>
        </div>
        <nav className="nav-links" aria-label="主导航">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="interactive-button nav-button">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="interactive-button contact-cta">
          联系合作
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%2306080c'/%3E%3Ccircle cx='300' cy='240' r='240' fill='%2317a8ff' fill-opacity='0.18'/%3E%3Ccircle cx='880' cy='520' r='280' fill='%2376ff87' fill-opacity='0.12'/%3E%3C/svg%3E"
          >
            <source src="/hero-background.webm" type="video/webm" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-grid" />

          <div className="hero-panel content-width">
            <div className="hero-copy glass-panel">
              <p className="eyebrow">AI Developer / RPA Developer / AI Agent Engineer</p>
              <h1
                className="hero-headline-box"
                data-typing={headlineTyping ? 'true' : 'false'}
              >
                {typedHeadline}
              </h1>
              <div className="hero-bottom-stack">
                <div className="hero-skill-marquees" aria-label="核心技术栈">
                  {heroSkillRows.map((row, index) => (
                    <div
                      key={`skill-row-${index}`}
                      className={`skill-marquee skill-marquee-${index + 1}`}
                    >
                      <div className="skill-track">
                        {[...row, ...row].map((item, itemIndex) => (
                          <span key={`${item}-${itemIndex}`} className="skill-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="hero-description">
                  我专注于用 Python、RPA、智能体工作流和 AIGC 系统，把电商业务里的重复劳动、内容生产和决策链路做成可持续运转的工程化能力。
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="interactive-button primary-button">
                    查看精选项目
                  </a>
                  <a href="#experience" className="interactive-button secondary-button">
                    了解我的经历
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-side-column">
              <div className="hero-persona glass-panel">
                <p className="persona-kicker">人物介绍</p>
                <div className="persona-name">
                  <div className="persona-identity">
                    <strong>Chin Chan</strong>
                    <span>陈鑫</span>
                  </div>
                  <div className="persona-stamp">AI / RPA / Agent</div>
                </div>
                <p className="persona-roleline">AI Developer · RPA Developer · AI Agent Engineer</p>
                <p className="persona-summary">
                  AI 开发工程师 / RPA 开发工程师 / AI Agent 开发工程师，专注把自动化、智能体与业务场景真正连接到生产链路。
                </p>
              </div>

              <div className="hero-side glass-panel">
                <div className="status-chip">Available for Opportunity</div>
                <div className="signal-card">
                  <p>Focus</p>
                  <strong>AI + Automation + E-commerce Workflow</strong>
                </div>
                <div className="metrics-grid">
                  {metrics.map((item) => (
                    <article key={item.label} className="metric-card">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section content-width" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Personal Experience</p>
            <h2>从电商自动化到 AI 系统搭建的成长路径</h2>
          </div>

          <div className="experience-layout">
            <aside className="profile-card glass-panel">
              <div className="portrait-frame">
                <img className="portrait-image" src={profileAvatar} alt="陈鑫头像" />
              </div>
              <h3>陈鑫</h3>
              <p className="profile-title">AI 开发工程师 / RPA 开发工程师 / AI Agent 开发工程师 / Python 开发工程师</p>
              <p className="profile-summary">
                擅长把复杂业务拆解成自动化流程、智能体工作流和可持续迭代的系统，关注的不只是“能不能做”，更是“能不能稳定交付并持续创造价值”。
              </p>
              <div className="contact-list">
                {contacts.map((item) => (
                  <div key={item.label} className="contact-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </aside>

            <div className="timeline">
              {timeline.map((item) => (
                <article key={item.period} className="timeline-card glass-panel">
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <span className="timeline-line" />
                  </div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                  <ul className="timeline-points">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section content-width" id="projects">
          <div className="section-heading projects-heading">
            <p className="section-kicker">Selected Projects</p>
            <h2>围绕真实业务闭环打造的精选项目</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card project-card-${index + 1}`}>
                <div className="project-visual">
                  <span>{project.tag}</span>
                  <div className="visual-screen">
                    <div className="visual-orbit" />
                    <div className="visual-bars">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
                <div className="project-content glass-panel">
                  <p className="project-accent">{project.accent}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#contact" className="interactive-button project-button">
                    预约沟通
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section content-width" id="strengths">
          <div className="section-heading">
            <p className="section-kicker">Core Strengths</p>
            <h2>我的核心优势不只是技术栈，而是交付方式</h2>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => (
              <article key={item.title} className="strength-card glass-panel">
                <span className="strength-index">0{strengths.indexOf(item) + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-backdrop" />
          <div className="content-width contact-content">
            <div className="contact-copy">
              <p className="section-kicker">Contact & Collaboration</p>
              <h2>如果你正在寻找能把 AI 与业务真正跑起来的人，我们可以聊聊。</h2>
              <p>
                这个版本先聚焦整体视觉方向、结构层次和可运行预览。后面你给我截图和参考网站之后，我们可以继续把图片素材、真实联系方式、项目细节和动画表现打磨到更完整。
              </p>
            </div>
            <div className="contact-actions glass-panel">
              <a href="mailto:hello@portfolio.dev" className="interactive-button primary-button wide-button">
                发邮件联系
              </a>
              <a href="#home" className="interactive-button secondary-button wide-button">
                返回顶部
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

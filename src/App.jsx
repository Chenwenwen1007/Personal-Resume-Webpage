import { useEffect, useRef, useState } from 'react'
import './App.css'
import profileAvatar from '../img/profile-avatar-square.png'
import rpaProofImage from '../img/rpa-proof-2026-06-10.png'
import wechatQr from '../img/wechat-qr-b.png'
import LiquidEther from './components/LiquidEther'

const heroLiquidEtherColors = ['#d8ff62', '#63d9ff', '#f4fbff']

const navigation = [
  { label: 'Home Page', href: '#home' },
  { label: '经历', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
]

const metrics = [
  { countTo: 20, label: 'AI 工具账号与团队落地经验', suffix: '+' },
  { countTo: 60, label: '核心部门任务耗时缩减', suffix: '%' },
  { countTo: 100, label: '企业 AI 覆盖率', suffix: '%' },
  { countTo: 10, label: '主流电商与业务平台实战', suffix: '+' },
  { countTo: 300, label: '累计开发 RPA 流程数', suffix: '+' },
  { countTo: 1, label: '自动化与 AI 系统搭建经历', prefix: '0→' },
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
  { label: '联系邮箱', value: 'chenwenyu998@gmail.com' },
  { label: '微信号', value: 'xuandong__happy' },
  { label: '合作方式', value: '全职 / 项目制 / AI 自动化咨询' },
]

const contactChannels = [
  {
    id: 'email',
    kind: 'email',
    label: 'Email',
    title: '发邮件联系',
    value: 'chenwenyu998@gmail.com',
    description: '适合项目合作、岗位沟通、简历投递与长期联系。',
    href: 'mailto:chenwenyu998@gmail.com?subject=合作咨询',
  },
  {
    id: 'wechat',
    kind: 'wechat',
    label: 'WeChat',
    title: '联系合作',
    value: 'xuandong__happy',
    description: '适合快速沟通需求、确认合作方向与预约进一步交流。',
    href: '#wechat-qr',
  },
]

const skillCatalog = {
  python: {
    label: 'Python',
    category: 'Core Language',
    brief: '自动化、AI 工作流和后端脚本的主力语言。',
    detail:
      '我会用 Python 去搭建自动化脚本、业务系统接口、数据处理管道和 AI 集成逻辑，它通常是我把想法最快落成可运行成果的第一选择。',
  },
  java: {
    label: 'Java',
    category: 'Backend',
    brief: '适合承接更稳定的企业级后端能力。',
    detail:
      'Java 更多用于对接成熟业务系统和企业级服务，在需要更规范工程结构、服务化接口和团队协作时，它能很好补足系统稳定性。',
  },
  rpa: {
    label: 'RPA',
    category: 'Automation',
    brief: '把重复流程转成可批量执行的机器人任务。',
    detail:
      'RPA 是我连接业务一线最直接的手段，尤其适合电商财务、客服、运营这些强流程岗位，把重复操作标准化后就能快速形成可量化收益。',
  },
  js: {
    label: 'JS',
    category: 'Web',
    brief: '用于前端交互和轻量工具开发。',
    detail:
      'JavaScript 主要用于页面交互、前端工具和浏览器自动化辅助逻辑，让产品展示层与业务逻辑层之间更顺滑地连接起来。',
  },
  aiagent: {
    label: 'AIAgent',
    category: 'Agent',
    brief: '面向任务拆解、决策和执行的智能体设计。',
    detail:
      '我更关注 AIAgent 在真实业务里的组织方式，包括角色分工、提示词约束、工具调用和结果回流，而不只是做一个能聊天的演示入口。',
  },
  n8n: {
    label: 'N8N',
    category: 'Workflow',
    brief: '适合快速编排跨系统自动化工作流。',
    detail:
      'n8n 让我能把表单、数据库、模型服务、消息通知和业务接口串成完整流程，特别适合快速搭建 AI + 自动化的原型和生产链路。',
  },
  comfyui: {
    label: 'ComfyUI',
    category: 'AIGC',
    brief: '图像工作流编排和私有化生图的重要工具。',
    detail:
      'ComfyUI 用于搭建图像生成与节点化处理流程，适合沉淀企业内部的生图能力、参数模板和内容生产标准。',
  },
  aigc: {
    label: 'AIGC',
    category: 'Generative AI',
    brief: '关注内容生成真正进入生产环境的方式。',
    detail:
      '我做 AIGC 不只关注能不能生成，而是更看重产能、稳定性、可复用模板、数据沉淀以及团队成员是否能低门槛使用。',
  },
  workflow: {
    label: 'Workflow',
    category: 'Process Design',
    brief: '把复杂任务拆成可执行、可复用的流程模块。',
    detail:
      'Workflow 是我做系统和自动化的核心思维方式，任何复杂业务我都会先拆出输入、处理、判断、输出，再决定如何技术落地。',
  },
  yingdao: {
    label: '影刀RPA',
    category: 'RPA Platform',
    brief: '国内电商场景里非常实用的 RPA 平台。',
    detail:
      '影刀 RPA 在电商业务自动化里上手快、交付快，适合财务、客服、运营等团队的流程机器人搭建与规模化复用。',
  },
  shizai: {
    label: '实在智能RPA',
    category: 'RPA Platform',
    brief: '适合复杂业务桌面流程自动化。',
    detail:
      '实在智能 RPA 更适合一些流程稳定、跨桌面软件较多的场景，我会结合实际业务复杂度来选用合适平台。',
  },
  lanyin: {
    label: '蓝印RPA',
    category: 'RPA Platform',
    brief: '多平台电商流程自动化的补充方案。',
    detail:
      '蓝印 RPA 让我在不同业务环境里有更多平台选择，减少单一工具依赖，适合做不同团队、不同流程之间的适配交付。',
  },
  businessSystem: {
    label: 'Business System',
    category: 'System Design',
    brief: '把业务流程沉淀成真正可用的系统产品。',
    detail:
      '相比单点工具，我更重视把高频动作和核心判断沉淀成业务系统，让组织能力不再只依赖某个会操作的人。',
  },
  mysql: {
    label: 'MySQL',
    category: 'Database',
    brief: '适合业务系统的主数据库承载。',
    detail:
      'MySQL 更多承接结构化业务数据，适合选品、任务、流程、结果回流等系统化数据存储，是业务平台的基础设施之一。',
  },
  sqlite: {
    label: 'SQLite',
    category: 'Database',
    brief: '轻量项目和本地工具的高效数据存储。',
    detail:
      'SQLite 非常适合本地脚本、小型工具和原型系统，让我能在不引入复杂部署的情况下快速验证数据流程。',
  },
  postgresql: {
    label: 'PostgreSQL',
    category: 'Database',
    brief: '更适合复杂数据结构与扩展能力。',
    detail:
      '当系统需要更复杂的数据建模、查询能力或扩展性时，PostgreSQL 会是更稳的选择，也方便后续系统演进。',
  },
  react: {
    label: 'React',
    category: 'Frontend',
    brief: '当前站点与前端产品交互的核心框架。',
    detail:
      'React 让我能快速搭建交互型前端页面，尤其适合把个人作品集、业务后台和 AI 工具面板做得更灵活、更模块化。',
  },
  typescript: {
    label: 'TypeScript',
    category: 'Frontend Engineering',
    brief: '提升前后端协作时的数据约束与可维护性。',
    detail:
      'TypeScript 适合把接口、状态和组件约束清晰化，尤其在页面规模变大或多人协作时，能显著降低维护成本。',
  },
  rocketmq: {
    label: 'RocketMQ',
    category: 'Message Queue',
    brief: '适合处理异步任务和系统间解耦。',
    detail:
      'RocketMQ 可以把流程中的异步环节拆开处理，在任务堆积、结果回传和服务解耦这些场景里非常有价值。',
  },
  rabbitmq: {
    label: 'RabbitMQ',
    category: 'Message Queue',
    brief: '用于业务消息分发与异步处理。',
    detail:
      'RabbitMQ 更适合中小型服务间的异步通信和任务队列场景，能帮助系统把高峰任务处理得更平滑。',
  },
  springboot: {
    label: 'Spring Boot',
    category: 'Backend Framework',
    brief: '企业级 Java 服务开发的成熟框架。',
    detail:
      'Spring Boot 适合搭建规范化后端服务，在业务系统逐渐变复杂时，它能提供稳定的接口组织和服务管理能力。',
  },
  mybatisplus: {
    label: 'MyBatis-Plus',
    category: 'Persistence',
    brief: '提升数据库开发效率的 ORM 增强方案。',
    detail:
      'MyBatis-Plus 能减少大量重复的数据访问代码，在企业项目里有助于提升 CRUD 和查询层的交付效率。',
  },
  redis: {
    label: 'Redis',
    category: 'Cache',
    brief: '缓存、状态和临时队列的高频工具。',
    detail:
      'Redis 常用于缓存热点数据、保存临时状态、做轻量队列或限流控制，能有效提升系统响应和并发处理能力。',
  },
  pandas: {
    label: 'Pandas',
    category: 'Data',
    brief: '面向业务数据清洗与表格处理的核心工具。',
    detail:
      'Pandas 是我处理 Excel、业务报表、流程中间结果和运营数据时最常用的工具，尤其适合脏数据清洗与规则加工。',
  },
  numpy: {
    label: 'NumPy',
    category: 'Data',
    brief: '为数据处理和科学计算提供底层能力。',
    detail:
      'NumPy 主要作为数据处理与算法计算的基础能力，在需要向量化操作或批量数值计算时非常高效。',
  },
  fanruan: {
    label: '帆软BI',
    category: 'BI',
    brief: '适合业务结果展示和数据可视化。',
    detail:
      '帆软 BI 更偏向结果呈现，让前面自动化与系统沉淀下来的数据能被管理层和业务人员更直观看到、理解和使用。',
  },
  fastapi: {
    label: 'FastAPI',
    category: 'Backend API',
    brief: '轻量高效，适合快速搭建 AI 接口服务。',
    detail:
      'FastAPI 在我做 AI 服务封装、自动化接口输出和轻量系统中非常高效，启动快、开发快，也方便后续扩展。',
  },
  coze: {
    label: 'Coze',
    category: 'Agent Platform',
    brief: '用于快速验证智能体应用与业务对话流。',
    detail:
      'Coze 适合快速搭建 Agent 原型和业务流程型对话应用，我通常会把它作为验证阶段的高效率工具，再决定是否工程化扩展。',
  },
}

const heroSkillRows = [
  [
    'python',
    'java',
    'rpa',
    'js',
    'aiagent',
    'n8n',
    'comfyui',
    'aigc',
    'workflow',
    'yingdao',
    'shizai',
    'lanyin',
    'businessSystem',
  ],
  [
    'mysql',
    'sqlite',
    'postgresql',
    'react',
    'typescript',
    'rocketmq',
    'rabbitmq',
    'springboot',
    'mybatisplus',
    'redis',
    'pandas',
    'numpy',
    'fanruan',
    'fastapi',
    'coze',
  ],
]

const heroHeadlineFullText =
  '\u3000从 RPA 流程自动化到 AI 原生业务系统：\n\u3000构建全链路智能运营体系，赋能创意生产与业务决策双升级'

function App() {
  const [typedHeadline, setTypedHeadline] = useState('')
  const [isQrPreviewOpen, setIsQrPreviewOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMetricProofOpen, setIsMetricProofOpen] = useState(false)
  const [activeSkillId, setActiveSkillId] = useState('')
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [copiedChannelId, setCopiedChannelId] = useState('')
  const [hasAnimatedMetrics, setHasAnimatedMetrics] = useState(false)
  const [metricCounts, setMetricCounts] = useState(() => metrics.map(() => 0))
  const metricsGridRef = useRef(null)
  const metricAnimationStartedRef = useRef(false)

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

  useEffect(() => {
    if (!isQrPreviewOpen && !isContactModalOpen && !isMetricProofOpen && !activeSkillId) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsQrPreviewOpen(false)
        setIsContactModalOpen(false)
        setIsMetricProofOpen(false)
        setActiveSkillId('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSkillId, isContactModalOpen, isMetricProofOpen, isQrPreviewOpen])

  useEffect(() => {
    if (!copiedChannelId) {
      return undefined
    }

    const timerId = window.setTimeout(() => {
      setCopiedChannelId('')
    }, 1800)

    return () => window.clearTimeout(timerId)
  }, [copiedChannelId])

  useEffect(() => {
    const metricsGrid = metricsGridRef.current

    if (!metricsGrid || metricAnimationStartedRef.current) {
      return undefined
    }

    const startMetricsAnimation = () => {
      if (metricAnimationStartedRef.current) {
        return
      }

      metricAnimationStartedRef.current = true
      setHasAnimatedMetrics(true)
    }

    const rect = metricsGrid.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const isAlreadyVisible = rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08

    if (isAlreadyVisible) {
      startMetricsAnimation()
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      startMetricsAnimation()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting && entry?.intersectionRatio <= 0.16) {
          return
        }

        startMetricsAnimation()
        observer.disconnect()
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: [0, 0.16, 0.32],
      },
    )

    observer.observe(metricsGrid)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasAnimatedMetrics) {
      return undefined
    }

    let animationFrameId = 0
    const duration = 1400
    const startTime = performance.now()

    const easeOutCubic = (progress) => 1 - (1 - progress) ** 3

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = easeOutCubic(progress)

      setMetricCounts(metrics.map((item) => Math.round(item.countTo * easedProgress)))

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(tick)
      }
    }

    animationFrameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [hasAnimatedMetrics])

  useEffect(() => {
    if (!hoveredSkill) {
      return undefined
    }

    const clearHoveredSkill = () => {
      setHoveredSkill(null)
    }

    window.addEventListener('scroll', clearHoveredSkill, true)
    window.addEventListener('resize', clearHoveredSkill)

    return () => {
      window.removeEventListener('scroll', clearHoveredSkill, true)
      window.removeEventListener('resize', clearHoveredSkill)
    }
  }, [hoveredSkill])

  const headlineTyping = typedHeadline.length < heroHeadlineFullText.length

  const handleCopyText = async (channelId, value) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        const tempInput = document.createElement('textarea')
        tempInput.value = value
        tempInput.setAttribute('readonly', 'true')
        tempInput.style.position = 'absolute'
        tempInput.style.left = '-9999px'
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand('copy')
        document.body.removeChild(tempInput)
      }

      setCopiedChannelId(channelId)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  const activeSkill = activeSkillId ? skillCatalog[activeSkillId] : null

  const formatMetricValue = (item, index) => `${item.prefix ?? ''}${metricCounts[index]}${item.suffix ?? ''}`

  const showSkillTooltip = (event, itemId) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const tooltipWidth = 280
    const screenPadding = 18
    const centeredLeft = rect.left + rect.width / 2
    const minLeft = screenPadding + tooltipWidth / 2
    const maxLeft = window.innerWidth - screenPadding - tooltipWidth / 2

    setHoveredSkill({
      brief: skillCatalog[itemId].brief,
      id: itemId,
      left: Math.min(Math.max(centeredLeft, minLeft), maxLeft),
      top: rect.top - 14,
    })
  }

  const hideSkillTooltip = () => {
    setHoveredSkill(null)
  }

  const openMetricProof = () => {
    setIsMetricProofOpen(true)
  }

  const renderContactActions = (wrapperClassName = '') => (
    <div className={`contact-actions glass-panel ${wrapperClassName}`.trim()}>
      <div className="contact-channel-grid">
        {contactChannels.map((channel) => (
          <article key={channel.id} className="contact-channel-card">
            <span className="contact-channel-label">{channel.label}</span>
            <strong>{channel.title}</strong>
            <em
              className={
                channel.kind === 'email'
                  ? 'contact-channel-value contact-channel-value-copyable'
                  : 'contact-channel-value'
              }
            >
              {channel.value}
            </em>
            <p>{channel.description}</p>
            <div className="contact-channel-actions">
              <a
                href={channel.href}
                className="interactive-button contact-inline-link"
              >
                {channel.kind === 'email' ? '发邮件' : '查看二维码'}
              </a>
              {channel.kind === 'email' ? (
                <button
                  type="button"
                  className="contact-copy-button"
                  onClick={() => handleCopyText(channel.id, channel.value)}
                >
                  {copiedChannelId === channel.id ? '已复制' : '复制邮箱'}
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <div className="wechat-qr-panel" id="wechat-qr">
        <div className="wechat-qr-copy">
          <span className="contact-channel-label">WeChat QR</span>
          <strong>联系</strong>
          <em>扫码添加微信 xuandong__happy</em>
          <p>如果你更习惯微信沟通，可以直接扫码添加，我会尽快通过并回复。</p>
        </div>
        <button
          type="button"
          className="wechat-qr-frame"
          onClick={() => setIsQrPreviewOpen(true)}
          aria-label="点击放大查看微信二维码"
        >
          <img src={wechatQr} alt="陈鑫微信二维码" className="wechat-qr-image" />
          <span className="wechat-qr-hint">点击放大</span>
        </button>
      </div>
      <div className="contact-footer-actions">
        <a
          href="mailto:chenwenyu998@gmail.com?subject=合作咨询"
          className="interactive-button primary-button wide-button"
        >
          发邮件联系
        </a>
        <a href="#home" className="interactive-button secondary-button wide-button">
          返回顶部
        </a>
      </div>
    </div>
  )

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
        <button
          type="button"
          className="interactive-button contact-cta"
          onClick={() => setIsContactModalOpen(true)}
        >
          联系合作
        </button>
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
          <div className="hero-liquid-ether-layer" aria-hidden="true">
            <LiquidEther
              colors={heroLiquidEtherColors}
              mouseForce={18}
              cursorSize={72}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={28}
              resolution={0.45}
              isBounce={false}
              autoDemo
              autoSpeed={0.65}
              autoIntensity={1.75}
              takeoverDuration={0.25}
              autoResumeDelay={2600}
              autoRampDuration={0.6}
            />
          </div>
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
                      <div className="skill-marquee-viewport">
                        <div className="skill-marquee-inner">
                          <div className="skill-track" aria-hidden="true">
                            {row.map((itemId, itemIndex) => (
                              <button
                                key={`${itemId}-${itemIndex}`}
                                type="button"
                                className="skill-pill"
                                onClick={() => setActiveSkillId(itemId)}
                                onMouseEnter={(event) => showSkillTooltip(event, itemId)}
                                onMouseLeave={hideSkillTooltip}
                                onFocus={(event) => showSkillTooltip(event, itemId)}
                                onBlur={hideSkillTooltip}
                              >
                                <span className="skill-pill-label">{skillCatalog[itemId].label}</span>
                              </button>
                            ))}
                          </div>
                          <div className="skill-track" aria-hidden="true">
                            {row.map((itemId, itemIndex) => (
                              <button
                                key={`${itemId}-clone-${itemIndex}`}
                              type="button"
                              className="skill-pill"
                              onClick={() => setActiveSkillId(itemId)}
                              onMouseEnter={(event) => showSkillTooltip(event, itemId)}
                              onMouseLeave={hideSkillTooltip}
                              tabIndex={-1}
                            >
                              <span className="skill-pill-label">{skillCatalog[itemId].label}</span>
                            </button>
                          ))}
                        </div>
                        </div>
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
                <div className="metrics-grid" ref={metricsGridRef}>
                  {metrics.map((item, index) => {
                    const isProofMetric = item.countTo === 300 && item.suffix === '+'

                    return (
                      <article
                        key={item.label}
                        className={`metric-card${isProofMetric ? ' metric-card-clickable' : ''}`}
                        onClick={isProofMetric ? openMetricProof : undefined}
                        onKeyDown={
                          isProofMetric
                            ? (event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault()
                                  openMetricProof()
                                }
                              }
                            : undefined
                        }
                        role={isProofMetric ? 'button' : undefined}
                        tabIndex={isProofMetric ? 0 : undefined}
                        aria-label={isProofMetric ? '查看 RPA 流程开发证明图片' : undefined}
                      >
                        <strong>{formatMetricValue(item, index)}</strong>
                        <span>{item.label}</span>
                      </article>
                    )
                  })}
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
            </div>
            {renderContactActions()}
          </div>
        </section>
      </main>

      {hoveredSkill ? (
        <div
          className="skill-hover-tooltip"
          style={{
            left: `${hoveredSkill.left}px`,
            top: `${hoveredSkill.top}px`,
          }}
        >
          {hoveredSkill.brief}
        </div>
      ) : null}

      {isContactModalOpen ? (
        <div
          className="contact-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="联系合作弹窗"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="contact-modal-shell"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="qr-lightbox-close contact-modal-close"
              onClick={() => setIsContactModalOpen(false)}
              aria-label="关闭联系合作弹窗"
            >
              &times;
            </button>
            <div className="contact-modal-copy">
              <p className="section-kicker">Contact & Collaboration</p>
              <h2>联系合作</h2>
            </div>
            {renderContactActions('contact-actions-modal')}
          </div>
        </div>
      ) : null}

      {isQrPreviewOpen ? (
        <div
          className="qr-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="微信二维码预览"
          onClick={() => setIsQrPreviewOpen(false)}
        >
          <div
            className="qr-lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="qr-lightbox-close"
              onClick={() => setIsQrPreviewOpen(false)}
              aria-label="关闭二维码预览"
            >
              &times;
            </button>
            <p className="qr-lightbox-kicker">WeChat QR</p>
            <h3>扫码添加微信</h3>
            <p className="qr-lightbox-id">xuandong__happy</p>
            <img src={wechatQr} alt="陈鑫微信二维码大图" className="qr-lightbox-image" />
          </div>
        </div>
      ) : null}

      {isMetricProofOpen ? (
        <div
          className="qr-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="RPA 流程开发证明图片"
          onClick={() => setIsMetricProofOpen(false)}
        >
          <div
            className="qr-lightbox-card metric-proof-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="qr-lightbox-close"
              onClick={() => setIsMetricProofOpen(false)}
              aria-label="关闭 RPA 流程开发证明图片"
            >
              &times;
            </button>
            <p className="qr-lightbox-kicker">Proof of Work</p>
            <h3>300+ RPA 流程开发证明</h3>
            <p className="qr-lightbox-id">累计开发流程数相关截图</p>
            <img src={rpaProofImage} alt="300+ RPA 流程开发证明截图" className="qr-lightbox-image metric-proof-image" />
          </div>
        </div>
      ) : null}

      {activeSkill ? (
        <div
          className="skill-detail-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeSkill.label} 技能详情`}
          onClick={() => setActiveSkillId('')}
        >
          <div
            className="skill-detail-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="qr-lightbox-close skill-detail-close"
              onClick={() => setActiveSkillId('')}
              aria-label="关闭技能详情"
            >
              &times;
            </button>
            <p className="skill-detail-kicker">{activeSkill.category}</p>
            <h3>{activeSkill.label}</h3>
            <p className="skill-detail-brief">{activeSkill.brief}</p>
            <p className="skill-detail-description">{activeSkill.detail}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App

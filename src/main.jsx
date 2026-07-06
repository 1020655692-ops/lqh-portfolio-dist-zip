import React from 'react'
import { createRoot } from 'react-dom/client'
import bench01 from './assets/works/bench-01.png'
import bench02 from './assets/works/bench-02.png'
import bench03 from './assets/works/bench-03.png'
import bench04 from './assets/works/bench-04.png'
import bench05 from './assets/works/bench-05.png'
import boxingNew01 from './assets/works/boxing-new-01.png'
import boxingNew02 from './assets/works/boxing-new-02.png'
import boxingNew03 from './assets/works/boxing-new-03.png'
import boxingNew04 from './assets/works/boxing-new-04.png'
import boxingNew05 from './assets/works/boxing-new-05.png'
import boxingNew06 from './assets/works/boxing-new-06.png'
import heroBackground from './assets/hero-background.png'
import heroCover from './assets/hero-cover.png'
import mower01 from './assets/works/mower-01.png'
import mower02 from './assets/works/mower-02.png'
import mower04 from './assets/works/mower-04.png'
import mowerTrimEdge from './assets/works/mower-trim-edge.png'
import mowerPowerful from './assets/works/mower-powerful-efficient.png'
import profileImage from './assets/profile.jpg'
import render01 from './assets/works/render-01.jpg'
import render02 from './assets/works/render-02.jpg'
import render03 from './assets/works/render-03.jpg'
import render04 from './assets/works/render-04.jpg'
import render05 from './assets/works/render-05.jpg'
import render06 from './assets/works/render-06.jpg'
import render07 from './assets/works/render-07.png'
import render08 from './assets/works/render-08.png'
import render09 from './assets/works/render-09.png'
import render10 from './assets/works/render-10.png'
import render11 from './assets/works/render-11.png'
import render12 from './assets/works/render-12.png'
import render13 from './assets/works/render-13.png'
import render14 from './assets/works/render-14.jpg'
import render15 from './assets/works/render-15.jpg'
import render16 from './assets/works/render-16.jpg'
import render17 from './assets/works/render-17.jpg'
import render18 from './assets/works/render-18.jpg'
import render19 from './assets/works/render-19.jpg'
import render20 from './assets/works/render-20.jpg'
import render21 from './assets/works/render-21.png'
import render22 from './assets/works/render-22.jpg'
import render23 from './assets/works/render-23.jpg'
import render24 from './assets/works/render-24.png'
import treadmill01 from './assets/works/treadmill-01.png'
import treadmill02 from './assets/works/treadmill-02.png'
import treadmill03 from './assets/works/treadmill-03.png'
import treadmill04 from './assets/works/treadmill-04.png'
import treadmill05 from './assets/works/treadmill-05.png'
import treadmill06 from './assets/works/treadmill-06.png'
import './styles.css'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
const isLightPackage = import.meta.env.VITE_LIGHT_PACKAGE === 'true'
const hideAigcProject = import.meta.env.VITE_HIDE_AIGC === 'true'

const navItems = ['经历', '项目', '优势', '联系']

const heroTags = hideAigcProject
  ? ['割草机', '哑铃凳', '拳击垫', '产品渲染']
  : ['割草机', '哑铃凳', '拳击垫', '产品渲染', '三维动态']

const stats = [
  { value: '3+', label: '核心设计方向' },
  { value: '30+', label: '产品视觉资产' },
  { value: '5', label: '精选项目分类' },
  { value: 'AI × 3D', label: '复合型工作流' },
]

const projects = [
  {
    id: 'mower',
    title: '割草机视觉',
    category: 'Lawn Mower / Product Visual',
    image: mower01,
    description: '围绕户外庭院场景，建立清爽、可信赖的产品主图与卖点展示。',
    detail: '以轻量化、易操作和户外庭院使用场景为核心，完成一整套产品展示视觉。',
    gallery: [mower01, mower02, mower04, mowerTrimEdge, mowerPowerful],
  },
  {
    id: 'treadmill',
    title: '家用跑步机视觉',
    category: 'Treadmill / E-commerce Design',
    image: treadmill01,
    description: '以运动空间、结构细节与功能层级，完成高转化商品视觉表达。',
    detail: '从家庭运动场景、尺寸信息、使用体验到卖点拆解，构建完整电商详情视觉。',
    gallery: [treadmill01, treadmill02, treadmill03, treadmill04, treadmill05, treadmill06],
  },
  {
    id: 'boxing',
    title: '拳击垫视觉',
    category: 'Boxing Pad / Graphic Design',
    image: boxingNew01,
    description: '通过强对比构图与材质细节，呈现力量感、耐用性与训练氛围。',
    detail: '以训练强度、材质耐久和使用动作作为核心信息，输出成套商品视觉。',
    gallery: [boxingNew01, boxingNew02, boxingNew03, boxingNew04, boxingNew05, boxingNew06],
  },
  {
    id: 'bench',
    title: '哑铃凳视觉',
    category: 'Weight Bench / Amazon Listing',
    image: bench01,
    description: '将结构、承重、调节方式拆解成清晰的购买理由。',
    detail: '通过结构展示、功能拆解与场景化表达，让健身器材的专业性更易理解。',
    gallery: [bench01, bench02, bench03, bench04, bench05],
  },
  {
    id: 'rendering',
    title: '三维渲染',
    category: '3D Rendering / CGI',
    image: render01,
    description: '结合建模、材质、灯光和后期，输出高级克制的产品表现。',
    detail: '展示产品建模、材质灯光、空间氛围和后期合成能力，适合品牌和产品视觉。',
    gallery: [
      render01,
      render02,
      render03,
      render04,
      render05,
      render06,
      render07,
      render08,
      render09,
      render10,
      render11,
      render12,
      render13,
      render14,
      render15,
      render16,
      render17,
      render18,
      render19,
      render20,
      render21,
      render22,
      render23,
      render24,
    ],
  },
  ...(hideAigcProject
    ? []
    : [
        {
          id: 'aigc',
          title: '品牌动态设计',
          category: 'AIGC / Concept Direction',
          image: heroCover,
          ...(isLightPackage ? {} : { video: publicAsset('/videos/portfolio-video-01.mp4') }),
          description: '用 AI 辅助探索场景、氛围和广告画面，提高前期视觉提案效率。',
          detail: '以 AI 生成辅助完成概念探索、氛围推演和广告画面方向，为项目早期提案加速。',
          gallery: isLightPackage
            ? [heroCover]
            : [
                { type: 'video', src: publicAsset('/videos/portfolio-video-01.mp4'), title: 'Video Work 01' },
                { type: 'video', src: publicAsset('/videos/portfolio-video-02.mp4'), title: 'Video Work 02' },
                { type: 'video', src: publicAsset('/videos/portfolio-video-03.mp4'), poster: publicAsset('/video-posters/portfolio-video-03-poster.png'), title: 'Video Work 03' },
              ],
        },
      ]),
]

const PROJECT_RETURN_STATE_KEY = 'lqhPortfolioReturnState'
let projectReturnStateMemory = null

function getProjectReturnState() {
  try {
    return JSON.parse(sessionStorage.getItem(PROJECT_RETURN_STATE_KEY)) || projectReturnStateMemory
  } catch {
    return projectReturnStateMemory
  }
}

function setProjectReturnState(state) {
  projectReturnStateMemory = state

  try {
    sessionStorage.setItem(PROJECT_RETURN_STATE_KEY, JSON.stringify(state))
  } catch {
    // If storage is unavailable, the hash fallback still returns to the project section.
  }
}

function clearProjectReturnState() {
  projectReturnStateMemory = null

  try {
    sessionStorage.removeItem(PROJECT_RETURN_STATE_KEY)
  } catch {
    // Ignore private-mode storage errors.
  }
}

function getSectionIdFromHash(hash) {
  if (!hash || hash.startsWith('#/project/')) {
    return ''
  }

  try {
    return decodeURIComponent(hash.slice(1))
  } catch {
    return hash.slice(1)
  }
}

function saveProjectEntryPoint(projectId) {
  setProjectReturnState({
    hash: '#项目',
    scrollY: window.scrollY,
    projectId,
  })
}

const strengths = [
  {
    title: '平面与电商视觉',
    text: '擅长产品主图、详情页、卖点信息层级与平台化视觉表达。',
  },
  {
    title: 'AI 创意生成',
    text: '能用 AIGC 快速完成概念探索、氛围图、视觉方向和提案素材。',
  },
  {
    title: '三维设计能力',
    text: '具备产品建模、材质灯光、渲染构图与后期合成的完整意识。',
  },
  {
    title: '产品叙事思维',
    text: '从用户场景、功能卖点和视觉节奏出发，让作品不止好看。',
  },
]

function Header() {
  const [isPinned, setIsPinned] = React.useState(false)

  React.useEffect(() => {
    const updateHeaderState = () => {
      setIsPinned(window.scrollY >= window.innerHeight * 0.92)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [])

  return (
    <header className={`site-header ${isPinned ? 'is-pinned' : ''}`}>
      <a className="brand" href="#top" aria-label="返回首页">
        LQH<span>PORTFOLIO</span>
      </a>
      <nav aria-label="项目分类">
        {heroTags.map((tag) => (
          <a href="#项目" key={tag}>{tag}</a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-background" src={heroBackground} alt="" aria-hidden="true" />
      <div className="hero-wash" />
      <div className="container hero-content">
        <div className="hero-resume-main">
          <figure className="hero-avatar">
            <img src={profileImage} alt="廖麒航个人头像" />
          </figure>
          <div>
            <p className="hero-kicker">Resume / Portfolio</p>
            <h1>廖麒航</h1>
          </div>
          <div className="hero-profile">
            <p><span>求职方向</span>平面设计 / 三维动态 / AICG</p>
            <p><span>专业技能</span>C4D · OC · AE · PR · PS · AICG</p>
            <p><span>能力标签</span>亚马逊A+ · 视频剪辑 · 视觉海报 · AICG · 三维动态</p>
          </div>
        </div>
        <div className="hero-resume-side" aria-label="工作经历摘要">
          <div className="hero-work-list" aria-label="工作经历">
            <article>
              <span>2024.03 - 2026.03</span>
              <strong>厦门安北工贸有限公司 / 动画设计</strong>
              <ul>
                <li>负责店铺产品视觉渲染方案，统一产品图、A+图与场景图的整体风格。</li>
                <li>配合运营活动制作宣传视觉素材，并根据数据反馈优化点击率与曝光度。</li>
                <li>完成产品场景建模、三维动画、视频剪辑与卖点渲染，支持店铺日常上新。</li>
              </ul>
            </article>
            <article>
              <span>2022.08 - 2024.03</span>
              <strong>厦门聚风视效有限公司 / 3D设计师</strong>
              <ul>
                <li>参与九牧、安踏等品牌创意短片，负责前期沟通、产品卖点拆解与视觉执行。</li>
                <li>独立完成产品动画、材质灯光、渲染输出和后期合成，保证短片交付质量。</li>
                <li>参与安踏短袖广告、九牧智能马桶、淋浴房、恒温花洒等动画项目。</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience" id="经历">
      <div className="container experience-grid">
        <div className="portrait-card">
          <img src={profileImage} alt="廖麒航个人头像" />
          <div className="portrait-caption">
            <span>Available for product visual projects</span>
            <strong>AI + Graphic + 3D</strong>
          </div>
        </div>
        <div className="experience-copy">
          <p className="section-kicker">Profile</p>
          <h2>把产品卖点、画面审美和技术流程整合成稳定输出。</h2>
          <p>
            我的身份是平面设计师、AI 设计师与三维设计师。作品覆盖割草机、跑步机、拳击垫、哑铃凳与三维渲染等方向，擅长用干净的构图、准确的信息层级和真实质感建立产品信任感。
          </p>
          <div className="contact-line">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <span>WeChat / Phone：待补充</span>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectMedia({ project, className = '' }) {
  if (project.video) {
    return (
      <video
        className={className}
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        poster={project.image}
      />
    )
  }

  return <img className={className} src={project.image} alt={project.title} />
}

function GalleryMedia({ item, title, index }) {
  if (typeof item === 'object' && item.type === 'video') {
    return (
      <>
        <video src={item.src} autoPlay muted loop playsInline poster={item.poster} controls />
        <figcaption>{item.title}</figcaption>
      </>
    )
  }

  return <img src={item} alt={`${title} 作品图 ${index + 1}`} />
}

function VideoCarousel({ items, title }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [focusedIndex, setFocusedIndex] = React.useState(null)

  const activeItem = items[activeIndex]
  const focusedItem = focusedIndex === null ? null : items[focusedIndex]
  const pageLabel = `${activeIndex + 1}/${items.length}`

  const goTo = (index) => {
    const nextIndex = (index + items.length) % items.length
    setActiveIndex(nextIndex)
  }

  const previewSrc = (src) => `${src}#t=0.1`

  React.useEffect(() => {
    if (focusedIndex === null) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setFocusedIndex(null)
      if (event.key === 'ArrowLeft') setFocusedIndex((index) => (index - 1 + items.length) % items.length)
      if (event.key === 'ArrowRight') setFocusedIndex((index) => (index + 1) % items.length)
    }

    document.body.classList.add('is-video-focused')
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('is-video-focused')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [focusedIndex, items.length])

  if (!activeItem) return null

  return (
    <div className="video-showcase">
      <div className="video-main-column">
        <div className="video-player-shell">
          <button className="video-focus-trigger" type="button" aria-label={`聚焦查看 ${activeItem.title || title}`} onClick={() => setFocusedIndex(activeIndex)}>
            <video src={activeItem.src} autoPlay muted loop playsInline poster={activeItem.poster} />
            <span className="video-page-count">{pageLabel}</span>
            <span className="video-focus-badge">聚焦</span>
          </button>
        </div>
        <div className="video-info-panel">
          <div>
            <p className="video-info-kicker">AIGC / Concept Direction</p>
            <h2>{activeItem.title || title}</h2>
          </div>
          <div className="video-step-actions">
            <button type="button" aria-label="上一个视频" onClick={() => goTo(activeIndex - 1)}>‹</button>
            <span>{pageLabel}</span>
            <button type="button" aria-label="下一个视频" onClick={() => goTo(activeIndex + 1)}>›</button>
          </div>
        </div>
        <div className="video-pager" aria-label="视频页码">
          {items.map((item, index) => (
            <button
              className={index === activeIndex ? 'is-active' : ''}
              type="button"
              aria-label={`第 ${index + 1} 个视频`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => goTo(index)}
              key={item.src}
            />
          ))}
        </div>
      </div>
      <aside className="video-more-panel" aria-label="更多视频">
        <div className="video-more-head">
          <span />
          <strong>更多视频</strong>
        </div>
        <div className="video-list">
          {items.map((item, index) => (
            <button
              className={`video-list-item ${index === activeIndex ? 'is-active' : ''}`}
              type="button"
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => goTo(index)}
              key={item.src}
            >
              <span className="video-thumb">
                {item.poster ? (
                  <img src={item.poster} alt={`${item.title || title} 封面`} />
                ) : (
                  <video src={previewSrc(item.src)} muted playsInline preload="metadata" />
                )}
                <em>{String(index + 1).padStart(2, '0')}</em>
              </span>
              <span className="video-list-copy">
                <strong>{item.title || `${title} ${index + 1}`}</strong>
                <small>AI concept video</small>
              </span>
            </button>
          ))}
        </div>
      </aside>
      {focusedItem && (
        <div className="video-lightbox" role="dialog" aria-modal="true" aria-label={focusedItem.title || title} onClick={() => setFocusedIndex(null)}>
          <div className="video-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="video-lightbox-close" type="button" aria-label="关闭视频" onClick={() => setFocusedIndex(null)}>
              ×
            </button>
            <video src={focusedItem.src} controls autoPlay playsInline poster={focusedItem.poster} />
            <div className="video-lightbox-nav">
              <button type="button" aria-label="上一个视频" onClick={() => setFocusedIndex((focusedIndex - 1 + items.length) % items.length)}>
                ‹
              </button>
              <span>{focusedIndex + 1}/{items.length}</span>
              <button type="button" aria-label="下一个视频" onClick={() => setFocusedIndex((focusedIndex + 1) % items.length)}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Projects() {
  return (
    <section className="section projects" id="项目">
      <div className="container section-head">
        <p className="section-kicker">Selected Works</p>
        <h2>作品合集</h2>
        <p>点击任意项目卡片，可进入独立页面查看一整套作品图片。</p>
      </div>
      <div className="container project-grid">
        {projects.map((project, index) => (
          <a
            className={`project-card ${index === 0 ? 'featured' : ''}`}
            href={`#/project/${project.id}`}
            id={`project-card-${project.id}`}
            key={project.title}
            onClick={() => saveProjectEntryPoint(project.id)}
          >
            <div className="project-image">
              <ProjectMedia project={project} />
            </div>
            <div className="project-info">
              <span>PRODUCT VISUAL</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function ProjectDetail({ project }) {
  const isVideoGallery = project.gallery.some((item) => typeof item === 'object' && item.type === 'video')
  const returnState = getProjectReturnState()
  const returnHref = returnState?.hash || '#项目'

  const handlePortfolioReturn = (event) => {
    event.preventDefault()

    setProjectReturnState({
      hash: returnHref,
      scrollY: returnState?.scrollY,
      projectId: returnState?.projectId || project.id,
      shouldRestore: true,
    })

    window.location.hash = returnHref
  }

  return (
    <>
      <header className="detail-nav">
        <a href={returnHref} onClick={handlePortfolioReturn}>← 返回作品集</a>
        <span>{project.category}</span>
      </header>
      <main className={`detail-page detail-page-${project.id}`}>
        <section className="detail-hero">
          <div className="container detail-hero-inner">
            <p className="section-kicker">Project Detail</p>
            <h1>{project.title}</h1>
            <p>{project.detail}</p>
          </div>
        </section>
        <section className="detail-gallery">
          {isVideoGallery ? (
            <div className="container">
              <VideoCarousel items={project.gallery} title={project.title} />
            </div>
          ) : (
            <div className="container detail-gallery-grid">
              {project.gallery.map((image, index) => (
                <figure className="detail-image-card" key={`${project.id}-${index}`}>
                  <GalleryMedia item={image} title={project.title} index={index} />
                </figure>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}

function Strengths() {
  return (
    <section className="section strengths" id="优势">
      <div className="container strengths-layout">
        <div className="strengths-intro-row">
          <div className="strengths-title-block">
            <p className="strengths-index">— 02 / 个人介绍</p>
            <h2>四年产品视觉经验，专注海外健身运动、户外产品视觉。</h2>
          </div>
          <div className="strengths-copy-block">
            <p>四年产品视觉经验，专注海外健身运动与户外产品视觉。</p>
            <p>以 AI 生成、C4D 渲染、PS 后期与版式系统，完成从视觉方向、产品表达，到最终交付的完整项目流程。</p>
            <p>核心能力不止于生成画面，而是将产品卖点转译为适合海外市场的品牌视觉故事。</p>
            <span>OVERSEAS VISUAL · AI + C4D · BRAND DELIVERY</span>
          </div>
        </div>
        <div className="strengths-position-row">
          <div className="strengths-position-copy">
            <p className="strengths-kicker">Creative Position</p>
            <h3>将产品卖点重新组织成可被记住、可被交付的视觉故事。</h3>
            <p>每组作品先判断产品适合的情绪、场景与品牌语气，再用 AI 发散、3D 控制、后期合成和版式收束，让画面既有想象力，也能进入海外营销页面与广告投放。</p>
          </div>
          <div className="strength-grid">
            <article className="strength-point">
              <span>01 Strategy</span>
              <h4>把功能卖点转成消费理由。</h4>
              <p>将功能参数转译为用户可感知的使用理由与场景情绪。</p>
            </article>
            <article className="strength-point">
              <span>02 Imagination</span>
              <h4>为产品建立独特视觉记忆点。</h4>
              <p>通过空间、光线、材质和镜头语言，让每个产品都有自己的品牌气质。</p>
            </article>
            <article className="strength-point">
              <span>03 Delivery</span>
              <h4>让创意最终能落到页面和物料。</h4>
              <p>控制留白、信息层级和系列统一性，确保视觉能直接进入作品集、官网和营销场景。</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact-page" id="联系">
      <div className="container contact-inner">
        <div className="contact-top">
          <p className="contact-badge"><span />平面设计 · 三维渲染 · AICG</p>
          <div className="contact-heading-row">
            <div>
              <p className="contact-index">— 05 / 联系方式</p>
              <h2>期待加入您的团队</h2>
            </div>
          </div>
          <div className="contact-actions" aria-label="联系方式">
            <a href="mailto:1020655692@qq.com"><small>— 邮箱</small>1020655692@qq.com</a>
            <span><small>— 微信</small>1020655692</span>
          </div>
        </div>
        <div className="contact-footer">
          <div>
            <strong>廖麒航 / LQH</strong>
            <p>品牌视觉 · 产品KV · AICG</p>
          </div>
          <div>
            <strong>作品 / WORKS</strong>
            <p>割草机视觉</p>
            <p>家用跑步机视觉</p>
            <p>拳击垫视觉</p>
            <p>三维渲染</p>
          </div>
          <div>
            <strong>更多 / MORE</strong>
            <p>亚马逊 A+</p>
            <p>产品详情页</p>
            <p>AI 视觉</p>
          </div>
        </div>
        <p className="footer-note">© 2026 LQH. PORTFOLIO ONLY.</p>
      </div>
    </footer>
  )
}

function App() {
  const [hash, setHash] = React.useState(window.location.hash)

  React.useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const projectId = hash.replace('#/project/', '')
  const activeProject = projects.find((project) => project.id === projectId)

  React.useEffect(() => {
    if (activeProject) {
      return undefined
    }

    const returnState = getProjectReturnState()
    const sectionId = getSectionIdFromHash(hash)
    const timers = []
    let frameId

    const restoreEntryPoint = () => {
      if (returnState?.shouldRestore) {
        const projectCard = returnState.projectId ? document.getElementById(`project-card-${returnState.projectId}`) : null
        if (projectCard) {
          projectCard.scrollIntoView({ block: 'start' })
          return
        }

        if (Number.isFinite(returnState.scrollY)) {
          window.scrollTo({ top: returnState.scrollY, behavior: 'auto' })
          return
        }
      }

      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ block: 'start' })
      }
    }

    frameId = window.requestAnimationFrame(() => {
      restoreEntryPoint()
      timers.push(window.setTimeout(restoreEntryPoint, 120))
      timers.push(window.setTimeout(() => {
        restoreEntryPoint()
        if (returnState?.shouldRestore) {
          clearProjectReturnState()
        }
      }, 320))
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [hash, activeProject])

  if (activeProject) {
    return <ProjectDetail project={activeProject} />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
















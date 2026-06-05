import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import ProjectGraphic from './ProjectGraphic'
import styles from './ProjectDetail.module.css'

const PANELS = [
  { bg: '#0D1829', accent: '#7FA8D4', dim: '#1E3350' },
  { bg: '#1C0D12', accent: '#C48EA0', dim: '#4A1828' },
  { bg: '#0C1C10', accent: '#6BAF7E', dim: '#1A4A24' },
  { bg: '#1C180A', accent: '#C4A84A', dim: '#4A3E10' },
  { bg: '#14101E', accent: '#9A84C4', dim: '#2E1E5A' },
]

// Vite eagerly maps all MDX files in src/content/
const contentModules = import.meta.glob('../content/*.mdx')

export default function ProjectDetail() {
  const { slug }   = useParams()
  const navigate   = useNavigate()
  const index      = PROJECTS.findIndex(p => p.slug === slug)
  const project    = PROJECTS[index]

  const [Content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const key = `../content/${slug}.mdx`
    if (contentModules[key]) {
      contentModules[key]().then(mod => {
        setContent(() => mod.default)
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [slug])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <button className={styles.back} onClick={() => navigate('/')}>← Back</button>
        <p>Project not found.</p>
      </div>
    )
  }

  const c = PANELS[index % PANELS.length]

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.back} onClick={() => navigate('/')}>← Projects</button>
        <a className={styles.extLink} href={project.link} target="_blank" rel="noopener">
          View project ↗
        </a>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          {(project.domain ?? []).map(t => (
            <span key={t} className={styles.tagDomain} style={{ borderColor: c.accent, color: c.accent }}>{t}</span>
          ))}
          {(project.tech ?? []).map(t => (
            <span key={t} className={styles.tagTech} style={{ background: c.dim }}>{t}</span>
          ))}
        </div>

        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.banner} style={{ '--bg': c.bg, '--accent': c.accent, '--dim': c.dim }}>
          {project.image
            ? <img src={project.image} alt={project.title} className={styles.bannerImg} />
            : <div className={styles.bannerGraphic}>
                <ProjectGraphic index={index} accent={c.accent} dim={c.dim} />
              </div>
          }
        </div>

        <div className={styles.mdx}>
          {loading
            ? null
            : Content
              ? <Content />
              : <p className={styles.empty}>No content yet. Check back soon! This is a work in Progress.</p>
          }
        </div>
      </div>
    </div>
  )
}

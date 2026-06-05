import { Link } from 'react-router-dom'
import ProjectGraphic from './ProjectGraphic'
import styles from './Projects.module.css'

const PANELS = [
  { bg: '#0D1829', accent: '#7FA8D4', dim: '#1E3350' },
  { bg: '#1C0D12', accent: '#C48EA0', dim: '#4A1828' },
  { bg: '#0C1C10', accent: '#6BAF7E', dim: '#1A4A24' },
  { bg: '#1C180A', accent: '#C4A84A', dim: '#4A3E10' },
  { bg: '#14101E', accent: '#9A84C4', dim: '#2E1E5A' },
]

export default function Projects({ projects }) {
  const list = projects.slice(0, 5)
  const cols  = Math.min(list.length, 4)

  return (
    <section>
      <div className={styles.bar}>
        <span className={styles.barNum}>01</span>
        <span className={styles.barLabel}>Selected Work</span>
        <span className={styles.leader} aria-hidden="true" />
        <span className={styles.barCount}>{String(list.length).padStart(3, '0')}</span>
      </div>

      <div className={styles.grid} style={{ '--cols': cols }}>
        {list.map((p, i) => {
          const c = PANELS[i % PANELS.length]
          return (
            <Link
              key={p.title}
              className={styles.panel}
              to={`/project/${p.slug}`}
              style={{ '--bg': c.bg, '--accent': c.accent, '--dim': c.dim }}
            >
              <div className={styles.graphic}>
                {p.image
                  ? <img src={p.image} alt={p.title} className={styles.image} />
                  : <ProjectGraphic index={i} accent={c.accent} dim={c.dim} />
                }
              </div>

              <div className={styles.info}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <h2 className={styles.title}>{p.title}</h2>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.footer}>
                  <div className={styles.tagGroups}>
                    <div className={styles.tags}>
                      {(p.tech ?? []).map(t => (
                        <span key={t} className={styles.tagTech}>{t}</span>
                      ))}
                    </div>
                    <div className={styles.tags}>
                      {(p.domain ?? []).map(t => (
                        <span key={t} className={styles.tagDomain}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className={styles.arrow}>↗</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

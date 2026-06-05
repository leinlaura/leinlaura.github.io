import styles from './Hero.module.css'

export default function Hero({ name, tagline, bio, stats }) {
  const paragraphs = bio.split(/\n\n+/)

  return (
    <div className={styles.hero}>

      <div className={styles.top}>
        <h1 className={styles.name}>{name}</h1>
        <p  className={styles.tagline}>{tagline}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bio}>
          {paragraphs.map((p, i) => <p key={i}>{p.replace(/\n/g, ' ')}</p>)}
        </div>

        {stats?.length > 0 && (
          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.leader} aria-hidden="true" />
                <span className={styles.statValue}>{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

import styles from './About.module.css'

export default function About({ bio, links }) {
  const paragraphs = bio.split(/\n\n+/)

  return (
    <section>
      <div className={styles.label}>About Me</div>

      <div className={styles.grid}>
        <div className={styles.bioPanel}>
          <p className={styles.panelLabel}>Bio</p>
          <div className={styles.bioText}>
            {paragraphs.map((p, i) => <p key={i}>{p.replace(/\n/g, ' ')}</p>)}
          </div>
        </div>

        <div className={styles.linksPanel}>
          <p className={styles.panelLabel}>Links</p>
          {links.map(l => (
            <a key={l.label} className={styles.linkRow} href={l.href} target="_blank" rel="noopener">
              <span>{l.label}</span>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

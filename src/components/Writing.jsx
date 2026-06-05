import { useState } from 'react'
import styles from './Writing.module.css'

const CAT = {
  AI:       { bg: '#0D1829', accent: '#7FA8D4', border: '#1E3A5C' },
  Language: { bg: '#0C1C10', accent: '#6BAF7E', border: '#1A4A24' },
  Books:    { bg: '#1C0D12', accent: '#C48EA0', border: '#4A1828' },
  Travel:   { bg: '#14101E', accent: '#9A84C4', border: '#2E1E5A' },
  Tech:     { bg: '#1C180A', accent: '#C4A84A', border: '#4A3E10' },
}
const DEFAULT_CAT = { bg: '#111', accent: '#888', border: '#333' }

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function Writing({ essays }) {
  const [active, setActive] = useState(null)
  const sorted = [...essays].sort((a, b) => b.date.localeCompare(a.date))

  if (active) {
    const c = CAT[active.category] || DEFAULT_CAT
    return (
      <section>
        <div className={styles.label}>
          <span>Writing &amp; Case Studies</span>
          <span className={styles.count}>{String(sorted.length).padStart(3, '0')}</span>
        </div>
        <div className={styles.reader} style={{ '--bg': c.bg, '--accent': c.accent }}>
          <button className={styles.back} onClick={() => setActive(null)}>← All Writing</button>
          <div className={styles.readerMeta}>
            <span className={styles.catBadge} style={{ borderColor: c.accent, color: c.accent }}>
              {active.category}
            </span>
            <span className={styles.readerDate}>
              {new Date(active.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h2 className={styles.readerTitle}>{active.title}</h2>
          <div className={styles.readerBody}>
            {active.body.split(/\n\n+/).map((p, i) => <p key={i}>{p.replace(/\n/g, ' ')}</p>)}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className={styles.label}>
        <span className={styles.labelNum}>02</span>
        <span>Writing &amp; Case Studies</span>
        <span className={styles.leader} aria-hidden="true" />
        <span className={styles.count}>{String(sorted.length).padStart(3, '0')}</span>
      </div>

      <div className={styles.grid}>
        {sorted.map((e, i) => {
          const c = CAT[e.category] || DEFAULT_CAT
          const onClick = e.external
            ? undefined
            : () => setActive(e)
          const El = e.external ? 'a' : 'button'
          const extra = e.external ? { href: e.external, target: '_blank', rel: 'noopener' } : { onClick }

          return (
            <El key={i} className={styles.cell} style={{ '--bg': c.bg, '--accent': c.accent, '--border': c.border }} {...extra}>
              <div className={styles.cellTop}>
                <span className={styles.cat} style={{ color: c.accent }}>{e.category}</span>
                <span className={styles.date}>{formatDate(e.date)}</span>
              </div>
              <h3 className={styles.cellTitle}>{e.title}</h3>
              <p className={styles.cellSummary}>{e.summary}</p>
              <span className={styles.cellArrow}>→</span>
            </El>
          )
        })}
      </div>
    </section>
  )
}

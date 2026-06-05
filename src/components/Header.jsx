import styles from './Header.module.css'

export default function Header({ name, links, activeTab, onTabChange }) {
  const tabs = [
    { id: 'projects', label: 'Projects' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.name}>{name}</div>

      <nav className={styles.nav}>
        {tabs.map(t => (
          <button
            key={t.id}
            className={`${styles.tab} ${activeTab === t.id ? styles.active : ''}`}
            onClick={() => onTabChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className={styles.links}>
        {links.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener">
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}

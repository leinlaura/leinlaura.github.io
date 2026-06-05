import styles from './Ticker.module.css'

const ITEMS = [
  'Glasgow', 'AI Systems', 'Fintech', 'Transit Infrastructure',
  'Renewable Energy', 'Data Pipelines', 'Python', 'LangChain',
  'Public Services', 'Language & Linguistics', 'Financial Markets',
  'Systems Thinking', 'MCP Servers', 'Apache Airflow',
]

const joined = ITEMS.map(i => i.toUpperCase()).join('  ·  ') + '  ·  '

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        <span className={styles.content}>{joined}</span>
        <span className={styles.content}>{joined}</span>
      </div>
    </div>
  )
}

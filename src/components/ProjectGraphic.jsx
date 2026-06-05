/* Abstract SVG graphic for each project panel — swap these for real screenshots later */

const graphics = [
  // 0 — transit network: nodes + connecting lines
  ({ accent, dim }) => (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="90" x2="240" y2="90" stroke={dim} strokeWidth="1"/>
      <line x1="140" y1="20" x2="140" y2="160" stroke={dim} strokeWidth="1"/>
      <line x1="40" y1="40" x2="240" y2="140" stroke={dim} strokeWidth="0.5"/>
      <line x1="40" y1="140" x2="240" y2="40" stroke={dim} strokeWidth="0.5"/>
      {[[140,90],[40,90],[240,90],[140,20],[140,160],[80,55],[200,55],[80,125],[200,125]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i===0?8:4} fill={i===0?accent:dim} opacity={i===0?1:0.6}/>
      ))}
      <circle cx="140" cy="90" r="24" stroke={accent} strokeWidth="1" opacity="0.3"/>
      <circle cx="140" cy="90" r="48" stroke={accent} strokeWidth="0.5" opacity="0.15"/>
    </svg>
  ),

  // 1 — energy grid: circuit-like
  ({ accent, dim }) => (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,1,2,3].map(i => (
        <line key={i} x1={40+i*56} y1="20" x2={40+i*56} y2="160" stroke={dim} strokeWidth="0.75" opacity="0.4"/>
      ))}
      {[0,1,2,3].map(i => (
        <line key={i} x1="20" y1={30+i*42} x2="260" y2={30+i*42} stroke={dim} strokeWidth="0.75" opacity="0.4"/>
      ))}
      <polyline points="40,90 96,30 152,90 208,60 240,90" stroke={accent} strokeWidth="2" fill="none"/>
      <polyline points="40,90 96,30 152,90 208,60 240,90" stroke={accent} strokeWidth="8" fill="none" opacity="0.08"/>
      {[[40,90],[96,30],[152,90],[208,60],[240,90]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={accent}/>
      ))}
    </svg>
  ),

  // 2 — systems: recursive squares
  ({ accent, dim }) => (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="240" height="160" stroke={dim} strokeWidth="0.75" opacity="0.3"/>
      <rect x="50" y="30" width="180" height="120" stroke={dim} strokeWidth="0.75" opacity="0.4"/>
      <rect x="80" y="50" width="120" height="80" stroke={accent} strokeWidth="1" opacity="0.5"/>
      <rect x="110" y="65" width="60" height="50" stroke={accent} strokeWidth="1.5" opacity="0.8"/>
      <rect x="128" y="78" width="24" height="24" fill={accent} opacity="0.9"/>
      <line x1="20" y1="10" x2="80" y2="50" stroke={dim} strokeWidth="0.5" opacity="0.3"/>
      <line x1="260" y1="10" x2="200" y2="50" stroke={dim} strokeWidth="0.5" opacity="0.3"/>
      <line x1="20" y1="170" x2="80" y2="130" stroke={dim} strokeWidth="0.5" opacity="0.3"/>
      <line x1="260" y1="170" x2="200" y2="130" stroke={dim} strokeWidth="0.5" opacity="0.3"/>
    </svg>
  ),

  // 3 — data: waveform bars
  ({ accent, dim }) => (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="140" x2="260" y2="140" stroke={dim} strokeWidth="0.75" opacity="0.4"/>
      {[28,52,76,100,124,148,172,196,220,244].map((x, i) => {
        const heights = [40,90,55,110,70,130,50,95,60,80]
        const h = heights[i]
        const isHigh = h > 100
        return (
          <rect key={i} x={x} y={140-h} width="18" height={h}
            fill={isHigh ? accent : dim}
            opacity={isHigh ? 0.9 : 0.25}
          />
        )
      })}
    </svg>
  ),

  // 4 — finance: candlestick / timeline
  ({ accent, dim }) => (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,1,2,3].map(i => (
        <line key={i} x1="20" y1={40+i*36} x2="260" y2={40+i*36} stroke={dim} strokeWidth="0.5" opacity="0.25"/>
      ))}
      {[
        [35,60,110,30],[75,45,100,20],[115,80,100,35],[155,55,90,25],[195,35,80,15],[235,65,100,30]
      ].map(([x,y,h,w], i) => (
        <g key={i}>
          <line x1={x+w/2} y1={y-10} x2={x+w/2} y2={y+h+10} stroke={i%2===0?accent:dim} strokeWidth="1" opacity="0.6"/>
          <rect x={x} y={y} width={w} height={h} fill={i%2===0?accent:dim} opacity={i%2===0?0.85:0.2}/>
        </g>
      ))}
    </svg>
  ),
]

export default function ProjectGraphic({ index, accent, dim }) {
  const Graphic = graphics[index % graphics.length]
  return <Graphic accent={accent} dim={dim} />
}

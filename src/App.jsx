import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ABOUT }    from './data/about'
import { PROJECTS } from './data/projects'
import { ESSAYS }   from './data/essays'

import Header        from './components/Header'
import Hero          from './components/Hero'
import Projects      from './components/Projects'
import Writing       from './components/Writing'
import ProjectDetail from './components/ProjectDetail'

const TABS = ['projects']

function MainLayout() {
  const location = useLocation()
  const [tab, setTab] = useState(() => {
    const hash = location.hash.replace('#', '')
    return TABS.includes(hash) ? hash : 'projects'
  })

  useEffect(() => {
    history.replaceState(null, '', '/#' + tab)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [tab])

  return (
    <>
      <Header name={ABOUT.name} links={ABOUT.links} activeTab={tab} onTabChange={setTab} />
      <Hero   name={ABOUT.name} tagline={ABOUT.tagline} bio={ABOUT.bio} stats={ABOUT.stats} />
{tab === 'projects' && <Projects projects={PROJECTS} />}
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"                  element={<MainLayout />} />
      <Route path="/project/:slug"     element={<ProjectDetail />} />
    </Routes>
  )
}

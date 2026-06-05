// ─── YOUR PROJECTS ────────────────────────────────────────────────────────────
// Up to 5 shown at a time. Fields:
//   title       — project name
//   slug        — URL-safe identifier, e.g. "glasgow-transit" (no spaces)
//   description — 1–3 sentences shown on the card
//   domain      — problem area tags, e.g. ["Public Transit", "Urban Data"]
//   tech        — tech stack tags, e.g. ["Python", "pandas"]
//   link        — primary URL (GitHub, live demo, etc.)
//   image       — optional: drop a file in public/ and reference it, e.g. "/my-project.png"

export const PROJECTS = [
  {
    slug: "glasgow-transit-visualisation",
    title: "Why is Glasgow's public transit so hard to navigate?",
    image: "/overview-departures-top-level.png",
    description: `Glasgow is Scotland's largest city and boasts one of the oldest subway systems in the world, an extensive rail network, and, in theory, a quite extensive bus network too. So why is it so hard to navigate the city?`,
    domain: ["Public Transit", "Urban Mobility", "Open Data"],
    tech:   ["Python", "Fast API", "Data Visualisation"],
    link: "https://github.com/leinlaura/glasgow-transit-visualisation-and-reachability",
  },
  {
    slug: "language-switching-spa-eng",
    title: "When do bilingual speakers switch between languages?",
    image: "/overview-spanish-english.png",
    description: `A lot of bilingual speakers will know the scenario: You are speaking to your family, friends and you seem to just automatically switch between languages, even though you are fluent in both. What triggers code switching between languages?`,
    domain: ["Linguistics", "Sociolinguistics"],
    tech:   ["Python", "Machine Learning", "sklearn", "pytorch"],
    link: ""
  },
  {
    slug: "simd",
    title: "What are the factors that contribute to deprivation in Scotland?",
    image: "/deprivation-overview.png",
    description: `Scotland has a long history of deprivation, with some areas experiencing high levels of poverty and social exclusion. What are the factors that contribute to deprivation in Scotland, and how can we address them?`,
    domain: ["Social Deprivation", "Public Policy"],
    tech:   ["Python", "Data Analysis", "Data Visualisation"],
    link: "",
  },
]

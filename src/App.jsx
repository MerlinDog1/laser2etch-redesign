import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Factory,
  FlaskConical,
  Globe,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  ScanSearch,
  Blocks,
  MessageCircleMore,
  Building2,
  BadgeCheck,
  X,
} from 'lucide-react'
import './index.css'

const site = {
  phone: '+44 (0) 1536 266 288',
  email: 'Info@laser2etch.com',
  address: ['Unit 10 Pywell Court', 'Corby, Northants', 'UK, NN15 5WA'],
  whatsapp: 'https://wa.me/441536266288',
}

const gallery = [
  { src: '/assets/Deep+etched+metal+sign-558w.jpg', alt: 'Deep etched metal sign produced using the Laser2Etch process' },
  { src: '/assets/etched+stainless+steel+sign-558w.jpg', alt: 'Deep etched stainless steel sign example' },
  { src: '/assets/Deep+etched+metal+sign+%281%29-558w.jpg', alt: 'Deep etched metal sign detail' },
  { src: '/assets/Deep+etched+metal+sign+%282%29-558w.jpg', alt: 'Deep etched signage example in metal' },
  { src: '/assets/Deep+etched+metal+sign+%283%29-558w.jpg', alt: 'Deep etched plaque style metal sign' },
  { src: '/assets/Deep+etched+metal+sign+%284%29-558w.jpg', alt: 'Deep etched commercial sign example' },
  { src: '/assets/Deep+etched+metal+sign+%285%29-558w.jpg', alt: 'Deep etched plaque detail in metal' },
  { src: '/assets/Deep+etched+metal+sign+%286%29-558w.jpg', alt: 'Deep etched metal sign with textured finish' },
  { src: '/assets/Deep+etched+metal+sign+%287%29-558w.jpg', alt: 'Deep etched metal signage proof sample' },
  { src: '/assets/Deep+etched+metal+sign+%288%29-558w.jpg', alt: 'Deep etched signage result in metal' },
]

const nav = [
  { to: '/', label: 'Home' },
  { to: '/etching-process', label: 'Etching Process' },
  { to: '/etching-machine', label: 'Etching Machine' },
  { to: '/applications', label: 'Applications' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

function Shell() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <div className="app-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
          <div className="utility-copy">
            <span><BadgeCheck size={14} /> Developed by Masteretch</span>
            <span><Globe size={14} /> Installations in 40+ countries</span>
            <span><Factory size={14} /> Since 1983</span>
          </div>
          <div className="utility-links">
            <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}><Phone size={14} /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={14} /> {site.email}</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">L2E</span>
            <div>
              <strong>Laser2Etch</strong>
              <span>Laser engraving meets chemical etching</span>
            </div>
          </Link>

          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={`site-nav ${open ? 'open' : ''}`}>
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="button button-primary nav-cta">Request a Quote</Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/etching-process" element={<ProcessPage />} />
          <Route path="/etching-machine" element={<MachinePage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">L2E</span>
              <div>
                <strong>Laser2Etch</strong>
                <span>Developed by Masteretch</span>
              </div>
            </div>
            <p className="muted">Add deep metal etching capability to your laser engraving business through a more practical route that works alongside existing CO2 or Fiber laser equipment.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              {nav.map((item) => (
                <Link key={item.to} to={item.to}>{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Direct contact</h4>
            <div className="footer-links">
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">Talk to us via WhatsApp</a>
            </div>
            <p className="muted compact">{site.address.join(', ')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Hero({ eyebrow, title, description, image, imageAlt, primary, secondary, bullets, stats }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="hero-copy">{description}</p>
          <div className="button-row">
            <Link to={primary.to} className="button button-primary">{primary.label}</Link>
            <Link to={secondary.to} className="button button-secondary">{secondary.label}</Link>
          </div>
          <ul className="proof-list">
            {bullets.map((bullet) => (
              <li key={bullet}><Check size={16} /> {bullet}</li>
            ))}
          </ul>
          {stats && <MiniStats items={stats} />}
        </div>
        <div className="hero-card hero-visual-wrap">
          <img src={image} alt={imageAlt} />
          <div className="hero-floating-card">
            <span className="kicker">Why it resonates</span>
            <strong>Built for laser-based businesses that want deeper metal capability without reinventing their workflow.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ eyebrow, title, text, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {text && <p className="section-intro">{text}</p>}
        {children}
      </div>
    </section>
  )
}

function PageLead({ items }) {
  return (
    <div className="page-lead-grid">
      {items.map(({ title, copy, icon: Icon }) => (
        <div className="info-card tone-soft" key={title}>
          <Icon size={20} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
      ))}
    </div>
  )
}

function CTA({ title, text, primaryLabel = 'Request a Quote', primaryTo = '/contact', secondaryLabel = 'Request Brochure', secondaryTo = '/contact' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="button-stack">
            <Link to={primaryTo} className="button button-primary">{primaryLabel}</Link>
            <Link to={secondaryTo} className="button button-secondary">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    ['1983', 'Chemical etching equipment expertise since'],
    ['40+', 'Countries with installations'],
    ['35', 'US states with installations'],
    ['CO2 / Fiber', 'Existing laser compatibility at the core'],
  ]
  return (
    <div className="stats-grid">
      {items.map(([value, label]) => (
        <div className="stat-card" key={value + label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function MiniStats({ items }) {
  return (
    <div className="mini-stats-grid">
      {items.map(([value, label]) => (
        <div className="mini-stat" key={value + label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function Gallery({ items = gallery.slice(0, 6) }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <figure className="gallery-card" key={item.src}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

function ContactStrip() {
  return (
    <div className="contact-strip">
      <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}><Phone size={16} /> {site.phone}</a>
      <a href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a>
      <a href={site.whatsapp} target="_blank" rel="noreferrer"><Sparkles size={16} /> WhatsApp</a>
    </div>
  )
}

function TrustBand() {
  return (
    <section className="trust-band-section">
      <div className="container">
        <div className="trust-band">
          {[
            ['Developed by Masteretch', 'Family-owned chemical etching equipment expertise'],
            ['Compact machine concept', 'Designed for practical workshop, lab, and maker environments'],
            ['Broad application fit', 'Plaques, signage, labels, decorative and industrial work'],
            ['Clear next step', 'Quote, brochure, or application discussion'],
          ].map(([title, copy]) => (
            <div key={title} className="trust-band-item">
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQList({ items }) {
  return (
    <div className="faq-list">
      {items.map(({ q, a }) => (
        <details className="faq-item" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

function HomePage() {
  const apps = ['Memorial plaques', 'Outdoor and indoor signage', 'Awards, medals and trophies', 'Industrial labels and tags', 'Nameplates', 'Jewelry', 'Decorative panels', 'Promotional items', 'Knife and gun personalization']
  const lead = [
    { title: 'Built around current laser capability', copy: 'Laser2Etch is framed for businesses already using CO2 or Fiber lasers and looking to expand their metal offering.', icon: ScanSearch },
    { title: 'A more approachable workflow', copy: 'The proposition is not to overwhelm shops with a traditional multi-stage setup, but to offer a simpler route into deep etching.', icon: Blocks },
    { title: 'Commercially credible applications', copy: 'The strongest current proof points support plaques, signage, labels, decorative work, and broader business enquiry conversations.', icon: Building2 },
  ]

  return (
    <>
      <SEO title="Deep Metal Etching for Laser Engraving Businesses | Laser2Etch" description="Add deep metal etching capability to your laser engraving business. Laser2Etch combines your existing CO2 or Fiber laser with a simple, affordable chemical etching process." />
      <Hero
        eyebrow="Laser engraving meets chemical etching"
        title="Add Deep Metal Etching to Your Laser Engraving Business"
        description="Laser2Etch is the simple and affordable way to add deep metal etching capabilities to your laser engraving business. Deep etch steel, brass, bronze, copper and more in minutes when you pair your existing laser engraving equipment with the L2E chemical etching machine."
        image="/assets/Deep+etched+metal+sign-558w.jpg"
        imageAlt="Deep etched metal sign produced using the Laser2Etch process"
        primary={{ label: 'Request a Quote', to: '/contact' }}
        secondary={{ label: 'Download Brochure', to: '/contact' }}
        bullets={['Works with existing CO2 or Fiber lasers', 'Deep etch steel, brass, bronze, copper and more', 'Developed by Masteretch']}
        stats={[
          ['1983', 'Masteretch heritage'],
          ['40+', 'Countries with installations'],
          ['35', 'US states with installations'],
        ]}
      />

      <TrustBand />

      <Section title="A clearer route into deep metal etching" text="Deep laser engraving metal can be a slow process involving expensive equipment. Laser2Etch positions chemical etching as the power stage and your current laser as the practical starting point, making the proposition easier to adopt and easier to understand.">
        <PageLead items={lead} />
      </Section>

      <Section eyebrow="Applications" title="Commercial and industrial use cases" text="Laser2Etch opens up a broad application range for businesses that want deeper visual impact, durable metal results, and a more premium offer across etched products.">
        <div className="chips">
          {apps.map((item) => <span key={item} className="chip">{item}</span>)}
        </div>
        <div className="highlight-grid">
          {[
            ['Plaques and commemorative work', 'A natural fit where depth, material presence, and durability matter.'],
            ['Signage and architectural use', 'Useful for indoor and outdoor signage where a richer etched finish adds visual weight.'],
            ['Industrial and identification products', 'Strong potential for labels, tags, and nameplates where metal is already the right substrate.'],
          ].map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <div className="section-link"><Link to="/applications">View Applications <ArrowRight size={16} /></Link></div>
        <Gallery items={gallery.slice(2, 8)} />
      </Section>

      <Section eyebrow="Three simple steps" title="The Laser2Etch process" text="Traditionally, chemical etching has been a multi-stage process requiring lots of space, time, and equipment. The L2E proposition condenses that into a more practical journey for laser-based businesses.">
        <div className="process-grid enhanced-process-grid">
          {[
            ['1', 'Use your existing laser', 'Start with the equipment already central to your current workflow rather than replacing what already works.'],
            ['2', 'Add the L2E etching stage', 'Bring the chemical etching stage into a compact, more approachable machine-led setup.'],
            ['3', 'Produce deeper etched results', 'Open the door to deeper metal work across commercial, commemorative, industrial, and decorative applications.'],
          ].map(([num, title, copy]) => (
            <div className="process-card process-card-numbered" key={num}>
              <span className="process-number">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <div className="split-panel premium-panel">
          <img src="/assets/laser2etch+etch+process-558w.jpg" alt="Laser2Etch process illustration" />
          <div>
            <span className="kicker">Workflow clarity</span>
            <h3>Move from curiosity to process confidence</h3>
            <p>If you already operate a laser in your business, the important question is not whether you can understand the Laser2Etch proposition, but whether it suits your application, materials, and working environment.</p>
            <ul className="mini-list">
              <li>Best for buyers evaluating fit before they invest</li>
              <li>Useful for teams comparing deep laser engraving vs. etching routes</li>
              <li>Supports technical conversations without overclaiming specifications</li>
            </ul>
            <Link to="/etching-process" className="text-link">Learn more about the etching process <ChevronRight size={16} /></Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Equipment" title="The L2E chemical etching machine" text="The machine story matters because it reassures buyers that this is intended for real working environments, not just theoretical capability.">
        <div className="split-panel reverse premium-panel">
          <img src="/assets/L2E+etching+machine-558w.jpg" alt="L2E chemical etching machine" />
          <div>
            <span className="kicker">Practical adoption</span>
            <h3>Compact, credible, and positioned for real shops and departments</h3>
            <p>The L2E machine is presented as safe, clean, and simple to operate, making it a credible entry point into deep chemical etching for laser engraving businesses, sign shops, labs, and maker environments.</p>
            <div className="mini-feature-grid">
              <div className="mini-feature"><Wrench size={16} /><span>Workshop-friendly positioning</span></div>
              <div className="mini-feature"><ShieldCheck size={16} /><span>Simple operating proposition</span></div>
              <div className="mini-feature"><Factory size={16} /><span>Designed around existing laser workflows</span></div>
            </div>
            <Link to="/etching-machine" className="text-link">Take a closer look at the L2E Etching Machine <ChevronRight size={16} /></Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Why trust Laser2Etch" title="Developed by Masteretch" text="Laser2Etch is developed by Masteretch, a family-owned business and leading manufacturer of chemical etching equipment since 1983.">
        <Stats />
      </Section>

      <Section title="Talk to us about your application" text="Have questions about the Laser2Etch process? Need a quote? Would you like a copy of our brochure? Contact us today to find out how you could add more depth to your laser engraving business.">
        <ContactStrip />
      </Section>

      <CTA title="Ready to explore fit, pricing, or brochure information?" text="Tell us about your current laser setup, materials, and application goals and we can advise on the right next step without forcing a generic sales journey." />
    </>
  )
}

function ProcessPage() {
  const faq = [
    { q: 'Who is the Laser2Etch process aimed at?', a: 'The proposition is aimed at businesses and departments already using a CO2 or Fiber laser and looking for a more practical route into deep metal etching.' },
    { q: 'Is the process presented as a replacement for existing laser capability?', a: 'No. The current business story is built around using the laser equipment you already have as part of the workflow rather than replacing it.' },
    { q: 'What kinds of work does the process support?', a: 'The supported application story includes plaques, signage, labels and tags, decorative panels, nameplates, awards, and broader custom metal products.' },
  ]

  return (
    <>
      <SEO title="How the Laser2Etch Process Works | Deep Metal Etching Made Simple" description="Learn how Laser2Etch combines laser engraving with a simplified chemical etching process to make deep metal etching more accessible for laser-based businesses." />
      <Hero eyebrow="Etching Process" title="How Laser2Etch Works" description="Laser2Etch brings laser engraving and chemical etching together in a simpler workflow designed for businesses that already operate a CO2 or Fiber laser." image="/assets/laser2etch+etch+process-558w.jpg" imageAlt="Laser2Etch process illustration" primary={{ label: 'Talk to Us About Your Application', to: '/contact' }} secondary={{ label: 'View the Etching Machine', to: '/etching-machine' }} bullets={['Existing CO2 or Fiber laser stays central', 'Simplifies access to deep etched metal work', 'Designed for real business environments']} stats={[['3', 'Core workflow stages'], ['CO2 / Fiber', 'Laser types referenced'], ['B2B', 'Shops, labs, and departments']]}/>

      <TrustBand />

      <Section title="Why traditional chemical etching can be harder to adopt" text="Traditionally, chemical etching has been a multi-stage process requiring lots of space, time, and equipment. For smaller businesses, that can make adoption feel heavier than the opportunity itself.">
        <div className="content-grid three">
          <div className="info-card"><h3>Space</h3><p>Traditional setups can demand more room, more process infrastructure, and more commitment than many smaller operations want at the start.</p></div>
          <div className="info-card"><h3>Time</h3><p>Multi-stage workflows can slow decision-making for buyers who want a clearer route to deeper etched work.</p></div>
          <div className="info-card"><h3>Complexity</h3><p>Laser2Etch is positioned to lower that barrier by combining chemical etching capability with equipment businesses already understand.</p></div>
        </div>
      </Section>

      <Section title="A simpler route to deep metal etching" text="The Laser2Etch process breaks etching down into three simple steps by using your existing CO2 or Fiber laser. The value is not just the end result, but the more understandable path to getting there.">
        <div className="timeline-grid">
          {[
            { title: 'Use your existing CO2 or Fiber laser', copy: 'Your current laser equipment remains central to the workflow, so the proposition starts from capability you already know.', image: '/assets/Deep+etched+epilog+logo-558w.png', alt: 'Close-up of deep etched metal detail' },
            { title: 'Add the L2E chemical etching stage', copy: 'The L2E machine brings the chemical etching stage into a compact setup intended for real-world working environments.', image: '/assets/L2E+etching+machine-558w.jpg', alt: 'L2E chemical etching machine' },
            { title: 'Produce deep etched metal results', copy: 'This opens up a more practical route into plaques, signage, labels, panels, and other premium metal outcomes.', image: '/assets/etched+stainless+steel+sign-558w.jpg', alt: 'Deep etched stainless steel sign example' },
          ].map((step, index) => (
            <div className="timeline-card" key={step.title}>
              <div className="timeline-index">0{index + 1}</div>
              <img src={step.image} alt={step.alt} />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Materials and application direction" text="Laser2Etch is presented as a solution for deep etching steel, brass, bronze, copper and more across memorial plaques, signage, awards, labels and tags, nameplates, decorative panels, and other metal products.">
        <div className="split-panel premium-panel">
          <div>
            <span className="kicker">What this means commercially</span>
            <h3>A process page should help buyers picture their own work, not just admire the idea</h3>
            <p>That is why the strongest message here is fit: fit with your existing laser, fit with the materials you care about, and fit with the kinds of products your business already sells or plans to introduce.</p>
            <div className="chips">
              {['Steel', 'Brass', 'Bronze', 'Copper', 'Plaques', 'Signage', 'Labels & tags', 'Decorative panels'].map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
          <Gallery items={gallery.slice(0, 4)} />
        </div>
      </Section>

      <Section title="Designed to fit where lasers are already in use" text="The Laser2Etch workflow is intended for laser engraving and sign shops, research departments, universities, fabrication labs, and maker spaces.">
        <PageLead items={[
          { title: 'Laser engraving businesses', copy: 'Relevant where deep etched capability could extend the value of an existing customer base.', icon: Factory },
          { title: 'Research and education', copy: 'The current positioning also suits departments and institutions working with fabrication and prototyping environments.', icon: FlaskConical },
          { title: 'Maker and lab spaces', copy: 'Compact-machine positioning helps the story feel practical even outside a large industrial footprint.', icon: Sparkles },
        ]} />
      </Section>

      <Section eyebrow="Common questions" title="Process clarity for cautious buyers" text="These are the kinds of practical questions buyers often want answered before they move from browsing to enquiry.">
        <FAQList items={faq} />
      </Section>

      <CTA title="Discuss your setup" text="If you would like to know whether Laser2Etch is suitable for your current laser, materials, or application, get in touch and we can discuss your requirements." primaryLabel="Talk to Us About Your Application" secondaryLabel="Request Brochure" />
    </>
  )
}

function MachinePage() {
  const environments = ['Laser engraving businesses', 'Sign shops', 'Research departments', 'Universities', 'Fabrication labs', 'Maker spaces']

  return (
    <>
      <SEO title="L2E Chemical Etching Machine | Compact Deep Metal Etching Equipment" description="Discover the L2E chemical etching machine, a compact and practical solution for businesses and departments looking to add deep metal etching alongside existing laser equipment." />
      <Hero eyebrow="Etching Machine" title="The L2E Etching Machine" description="The L2E chemical etching machine is a compact but powerful machine designed to work with the Laser2Etch process and help businesses add deep metal etching capability alongside their existing laser setup." image="/assets/L2E+etching+machine-558w.jpg" imageAlt="L2E chemical etching machine" primary={{ label: 'Request a Quote', to: '/contact' }} secondary={{ label: 'Download Brochure', to: '/contact' }} bullets={['Compact but powerful', 'Safe, clean and simple to operate', 'Designed to work with your existing laser']} stats={[['Compact', 'Machine positioning'], ['Clean', 'Operating proposition'], ['Practical', 'Adoption story']]}/>

      <TrustBand />

      <Section title="Compact, practical, and built for real working environments" text="The L2E chemical etching machine can easily be installed and operated in laser engraving and sign shops, research departments, universities, fabrication labs, and maker spaces.">
        <div className="content-grid three">
          <div className="info-card"><h3>Practical footprint</h3><p>Presented as a compact machine suited to real workshop, lab, and department environments rather than a sprawling specialist installation.</p></div>
          <div className="info-card"><h3>Accessible adoption</h3><p>Intended as a cleaner and more approachable route into deep chemical etching for teams already comfortable with laser production.</p></div>
          <div className="info-card"><h3>Serious output potential</h3><p>Built to support deep etched metal capability alongside existing laser production and broaden what a business can offer.</p></div>
        </div>
      </Section>

      <Section title="Where the machine fits best" text="The machine story becomes strongest when buyers can quickly picture where it belongs in their own working environment.">
        <div className="split-panel premium-panel reverse">
          <img src="/assets/Deep+etched+epilog+logo-558w.png" alt="Close-up of deep etched metal detail" />
          <div>
            <span className="kicker">Buyer reassurance</span>
            <h3>Designed around current capability, not a forced operational reset</h3>
            <p>Laser2Etch is built around the idea that businesses can use their existing CO2 or Fiber laser as part of a simplified route into deep metal etching. That compatibility is central to the value of the system.</p>
            <div className="chips">
              {environments.map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
            <Link to="/etching-process" className="text-link">See how the process works <ArrowRight size={16} /></Link>
          </div>
        </div>
      </Section>

      <Section title="What makes the machine page feel credible" text="A strong machine page should combine positioning, environment fit, workflow context, and finished-result proof rather than sounding like a thin product stub.">
        <div className="highlight-grid">
          {[
            ['Safe, clean, simple to operate', 'This line is already core to the proposition and should stay visible near the top of the machine page.'],
            ['Relevant to serious buyers', 'Shops, labs, universities, and maker spaces each need to see where the machine fits in their environment.'],
            ['Supported by result imagery', 'The machine story works better when paired with premium finished examples rather than isolated claims.'],
          ].map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Example results" text="The examples below show the style of finished results associated with the combined Laser2Etch workflow.">
        <Gallery items={gallery.slice(6, 10)} />
      </Section>

      <Section eyebrow="Machine FAQs" title="Questions buyers naturally ask" text="The current source material does not support detailed specification claims, so these answers stay grounded in the real proposition.">
        <FAQList items={[
          { q: 'Is the L2E machine meant for only large industrial facilities?', a: 'No. The positioning specifically includes engraving and sign shops, research departments, universities, fabrication labs, and maker spaces.' },
          { q: 'Does the machine replace the laser stage?', a: 'No. The core proposition is that the laser remains central and the L2E machine adds the chemical etching stage to the workflow.' },
          { q: 'What should a buyer enquire about next?', a: 'The most useful next step is to discuss current laser type, intended materials, application goals, and whether brochure or pricing information is needed.' },
        ]} />
      </Section>

      <CTA title="Talk to us about the L2E machine" text="If you would like pricing, a brochure, or guidance on whether the L2E machine is right for your setup, contact us and we can discuss your requirements." primaryLabel="Request Machine Pricing" secondaryLabel="Ask if It Fits Your Setup" />
    </>
  )
}

function ApplicationsPage() {
  const categories = useMemo(() => ([
    ['Commemorative', 'Laser2Etch is well suited to commemorative work such as memorial plaques, where depth, durability, and visual presence are important.'],
    ['Signage', 'Outdoor and indoor signage are core application areas for deep etched metal, especially where added depth and visual impact matter.'],
    ['Recognition', 'The stated application range includes awards, medals, and trophies for businesses expanding into recognition products.'],
    ['Industrial', 'Industrial labels, tags, and identification products are another strong application area where metal durability is important.'],
    ['Decorative', 'Decorative panels and other visual metalwork sit naturally within the proposition.'],
    ['Personalization', 'The current proposition also includes jewelry, promotional items, and knife and gun personalization.'],
  ]), [])

  return (
    <>
      <SEO title="Deep Etched Metal Applications | Plaques, Signage, Labels and More" description="Explore Laser2Etch applications for memorial plaques, signage, industrial labels and tags, nameplates, awards, decorative panels, and more." />
      <Hero eyebrow="Applications" title="Applications for Deep Etched Metal" description="Laser2Etch is designed to support a broad range of deep etched metal applications for businesses, workshops, labs, and departments looking to expand what they can produce." image="/assets/Deep+etched+metal+sign-558w.jpg" imageAlt="Deep etched metal sign produced using the Laser2Etch process" primary={{ label: 'Talk to Us About Your Application', to: '/contact' }} secondary={{ label: 'View the Etching Process', to: '/etching-process' }} bullets={['Commemorative, industrial, decorative, and signage uses', 'Built around real business workflows', 'Materials include steel, brass, bronze, copper and more']} stats={[['9+', 'Named use categories'], ['Metal', 'Premium output focus'], ['B2B', 'Commercial application path']]}/>

      <TrustBand />

      <Section title="Application range" text="The current Laser2Etch proposition spans commemorative, signage, recognition, industrial, decorative, and personalized metal work.">
        <div className="content-grid three">
          {categories.map(([title, copy]) => (
            <div className="info-card" key={title}><h3>{title}</h3><p>{copy}</p></div>
          ))}
        </div>
      </Section>

      <Section title="How this expands a laser business" text="Applications matter because they help a buyer connect the Laser2Etch proposition to revenue opportunities, product range expansion, and stronger premium positioning.">
        <div className="highlight-grid four-up">
          {[
            ['Memorial plaques', 'A depth-led category where finish quality and permanence carry obvious value.'],
            ['Architectural signage', 'Useful for interior and exterior projects where metal presence supports a premium brief.'],
            ['Industrial identification', 'Relevant for labels, tags, and nameplates where durability is part of the requirement.'],
            ['Decorative and custom work', 'Supports a broader story for panels, promotional items, jewelry, and personalization.'],
          ].map(([title, copy]) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Featured gallery" text="The current image set strongly supports signage and plaque-style results, so the gallery focuses on those proven visuals rather than overstating unsupported categories.">
        <Gallery items={gallery} />
      </Section>

      <Section title="Materials" text="Laser2Etch is presented as suitable for deep etching steel, brass, bronze, copper and more. That material flexibility supports a wide range of end products across industrial, commemorative, decorative, and commercial work.">
        <div className="split-panel premium-panel">
          <img src="/assets/Deep+etched+epilog+logo-558w.png" alt="Close-up of deep etched metal detail" />
          <div>
            <span className="kicker">Honest positioning</span>
            <h3>Show proven strengths visually, present broader categories responsibly</h3>
            <p>The current scraped imagery is weighted toward signs and plaques, so categories like awards, industrial tags, jewelry, and personalization are presented textually without misleading visual overclaiming.</p>
            <div className="chips">
              {['Steel', 'Brass', 'Bronze', 'Copper', 'Plaques', 'Signs', 'Nameplates', 'Panels'].map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Application FAQs" title="Useful prompts before you enquire" text="These keep the application page practical for visitors comparing their own use case against the current proposition.">
        <FAQList items={[
          { q: 'Do the current visuals support every named application category equally?', a: 'No. The strongest current imagery supports signage and plaque-style work, so other categories are presented conservatively in copy rather than overstated visually.' },
          { q: 'What should I include in an application enquiry?', a: 'The best enquiry includes your current laser type, intended materials, target product category, and whether you want pricing, brochure information, or a suitability discussion.' },
          { q: 'Can this help broaden an existing product range?', a: 'Yes, that is one of the clearest commercial themes in the current proposition: expanding what an existing laser-based business can offer.' },
        ]} />
      </Section>

      <CTA title="Tell us what you want to etch" text="If you have a specific application in mind, get in touch and we can discuss how Laser2Etch may fit your current setup, materials, and end-product goals." primaryLabel="Talk to Us About Your Application" secondaryLabel="Request Brochure" />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <SEO title="About Laser2Etch and Masteretch | Chemical Etching Expertise Since 1983" description="Laser2Etch is developed by Masteretch, a family-owned manufacturer of chemical etching equipment since 1983 with installations in over 40 countries and 35 US states." />
      <Hero eyebrow="About Laser2Etch" title="About Laser2Etch" description="Laser2Etch is developed by Masteretch and built on decades of chemical etching equipment experience." image="/assets/Untitled+design+%2883%29-1152w.png" imageAlt="Laser2Etch brand graphic" primary={{ label: 'Contact Laser2Etch', to: '/contact' }} secondary={{ label: 'Request Brochure', to: '/contact' }} bullets={['Developed by Masteretch', 'Family-owned business', 'Chemical etching equipment expertise since 1983']} stats={[['1983', 'Heritage'], ['40+', 'Countries'], ['35', 'US states']]}/>

      <TrustBand />

      <Section title="Developed by Masteretch" text="Laser2Etch is developed by Masteretch, a family-owned business that has been a leading manufacturer of chemical etching equipment since 1983.">
        <div className="split-panel premium-panel">
          <img src="/assets/6e0410f1-22dc-4531-b16c-78b086860cb1-445w.png" alt="Laser2Etch logo mark" />
          <div>
            <span className="kicker">Why that matters</span>
            <h3>Established manufacturing credibility strengthens the whole offer</h3>
            <p>That background matters because Laser2Etch is not presented as a novelty product. It comes from an established company with real experience in chemical etching equipment and process knowledge.</p>
          </div>
        </div>
      </Section>

      <Section title="A family-owned manufacturer with international reach" text="Masteretch has installations in over 40 countries and 35 US states. That footprint reflects a long-standing presence in the chemical etching equipment sector and provides important reassurance for customers considering adding deep metal etching to their business.">
        <Stats />
      </Section>

      <Section title="Experience that supports customer success" text="We have the knowledge and experience to help customers make a success of adding chemical etching to their business.">
        <div className="content-grid two">
          <div className="info-card"><Globe size={20} /><h3>Global installations</h3><p>International deployment supports the credibility of the Laser2Etch proposition and helps reassure buyers this is grounded in real-world use.</p></div>
          <div className="info-card"><Factory size={20} /><h3>Built on manufacturing know-how</h3><p>Laser2Etch exists to help CO2 and Fiber laser users add deep metal etching in a more practical, accessible way.</p></div>
        </div>
      </Section>

      <Section title="What the brand promise is really saying" text="The Laser2Etch proposition is simple: help businesses that already operate a CO2 or Fiber laser add deep metal etching capability in a way that is easier to adopt than a conventional multi-stage setup.">
        <PageLead items={[
          { title: 'Not a novelty story', copy: 'The proposition is backed by a long-established manufacturer, which matters in B2B capital-equipment conversations.', icon: BadgeCheck },
          { title: 'Not a generic brochure claim', copy: 'The current messaging is grounded in specific environments, application categories, and contact routes.', icon: MessageCircleMore },
          { title: 'Not disconnected from business reality', copy: 'It is framed around laser-based companies and departments that need practical fit, not hype.', icon: Building2 },
        ]} />
      </Section>

      <CTA title="Talk to the team" text="If you would like to learn more about Laser2Etch, request a brochure, or discuss how the process could fit your business, get in touch." primaryLabel="Contact Laser2Etch" secondaryLabel="View the Etching Process" secondaryTo="/etching-process" />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <SEO title="Contact Laser2Etch | Request a Quote or Brochure" description="Contact Laser2Etch for quotes, brochure requests, and guidance on adding deep metal etching capability to your laser engraving business." />
      <section className="hero-section compact-hero">
        <div className="container narrow">
          <span className="eyebrow">Contact</span>
          <h1>Contact Laser2Etch</h1>
          <p className="hero-copy">Have questions about the Laser2Etch process? Need a quote? Would you like a copy of our brochure? Get in touch and we can discuss your requirements.</p>
          <ContactStrip />
          <MiniStats items={[['Quote', 'Request pricing'], ['Brochure', 'Ask for product info'], ['Fit', 'Discuss your setup']]}/>
        </div>
      </section>

      <TrustBand />

      <Section title="How we can help" text="Contact Laser2Etch if you would like to request a quote, ask about the process, request a brochure, discuss your application, or check whether Laser2Etch is suitable for your current laser setup.">
        <div className="chips">
          {['Request a quote', 'Ask about the process', 'Request a brochure', 'Discuss your application', 'Check suitability for your laser'].map((item) => <span key={item} className="chip">{item}</span>)}
        </div>
      </Section>

      <Section title="Request information" text="Tell us about your business, your current laser setup, and the kind of metal work you are looking to produce. We can then advise on the next step.">
        <div className="contact-layout">
          <form className="contact-form">
            <div className="form-grid">
              {['Name', 'Company', 'Email', 'Phone', 'Country'].map((label) => (
                <label key={label}><span>{label}</span><input type="text" placeholder={label} /></label>
              ))}
              <label><span>Current laser type</span><select><option>CO2</option><option>Fiber</option><option>Not sure</option></select></label>
              <label><span>Main application</span><input type="text" placeholder="Signage, plaques, labels, decorative work..." /></label>
              <label className="full"><span>Materials of interest</span><input type="text" placeholder="Steel, brass, bronze, copper..." /></label>
              <label className="full"><span>Message</span><textarea rows="5" placeholder="Tell us about your current setup and what you would like to produce." /></label>
            </div>
            <button type="button" className="button button-primary">Submit Enquiry</button>
            <p className="muted compact">Demo form for brochure-site build. Wire this to your preferred submission endpoint or CRM.</p>
          </form>
          <div className="contact-card contact-stack">
            <div>
              <h3>Direct contact details</h3>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}><Phone size={18} /> {site.phone}</a>
              <a href={`mailto:${site.email}`}><Mail size={18} /> {site.email}</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer"><Sparkles size={18} /> Talk to us via WhatsApp</a>
              <div className="address-block">
                {site.address.map((line) => <span key={line}>{line}</span>)}
              </div>
            </div>
            <div className="resource-panel">
              <span className="kicker">Helpful next steps</span>
              <h3>Need technical context first?</h3>
              <p>If you would like product and process information you can review internally or share with colleagues, request a Laser2Etch brochure and we will send it to you.</p>
              <div className="footer-links">
                <Link to="/etching-process" className="text-link">View the Etching Process <ChevronRight size={16} /></Link>
                <Link to="/etching-machine" className="text-link">View the Etching Machine <ChevronRight size={16} /></Link>
                <Link to="/applications" className="text-link">View Applications <ChevronRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default App

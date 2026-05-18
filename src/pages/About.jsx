import { motion } from 'framer-motion'

const team = [
  { name: 'Rania Al Mansoori', role: 'Chief Executive Officer' },
  { name: 'David Mercer', role: 'Head of Global Trade' },
  { name: 'Layla Hashmi', role: 'Design Director' },
]

const timeline = [
  { year: '2007', text: 'Freya Jewels founded in Dubai with an artisan-first approach.' },
  { year: '2010', text: 'Expanded manufacturing capabilities and wholesale network.' },
  { year: '2015', text: 'Launched international delivery channels across EMEA and APAC.' },
  { year: '2020', text: 'Introduced digital client onboarding and live quote workflows.' },
  { year: '2024', text: 'Crossed key milestone in global bespoke and investment orders.' },
]

const certs = ['LBMA Aligned', 'DMCC Registered', 'ISO 9001 Quality', 'Responsible Sourcing']

function About() {
  return (
    <main style={{ color: '#fff', backgroundColor: '#070C1A' }}>
      <section
        style={{
          background: 'linear-gradient(160deg, #070C1A 0%, #101F48 100%)',
          padding: '7rem 1.5rem 4rem',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · About</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500 }}>
            About Freya Jewels
          </h1>
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.2rem 1.5rem' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 500 }}>
          Our Company Story
        </motion.h2>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.9, marginTop: '0.9rem', fontSize: '0.92rem' }}>
          Since 2007, Freya Jewels has built its reputation on quality-focused manufacturing, transparent sourcing, and refined jewellery craftsmanship. From our Dubai base, we serve a global network of wholesalers, private clients, and investment partners.
        </p>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <h2 style={{ margin: '0 0 1rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 500 }}>Our Team</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {team.map((member) => (
            <div key={member.name} style={{ border: '1px solid rgba(201,168,76,0.25)', backgroundColor: 'rgba(16,31,72,0.45)', padding: '1rem' }}>
              <div style={{ width: '100%', minHeight: '120px', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C' }}>
                <i className="fas fa-user-tie" />
              </div>
              <h3 style={{ margin: '0.8rem 0 0.3rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>{member.name}</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <h2 style={{ margin: '0 0 1rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 500 }}>Timeline</h2>
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          {timeline.map((item) => (
            <div key={item.year} style={{ border: '1px solid rgba(201,168,76,0.2)', backgroundColor: 'rgba(16,31,72,0.35)', padding: '0.8rem 1rem', display: 'grid', gridTemplateColumns: '90px 1fr', gap: '0.8rem' }}>
              <p style={{ margin: 0, color: '#E8D5A3', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>{item.year}</p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.72)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.86rem', lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ margin: '0 0 1rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 500 }}>Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certs.map((cert) => (
            <div key={cert} style={{ border: '1px solid rgba(201,168,76,0.3)', backgroundColor: 'rgba(7,12,26,0.6)', padding: '0.9rem', textAlign: 'center' }}>
              <i className="fas fa-award" style={{ color: '#C9A84C' }} />
              <p style={{ margin: '0.45rem 0 0', color: '#E8D5A3', fontFamily: "'Montserrat', sans-serif", fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{cert}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About

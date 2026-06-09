import ContactSection from '../components/ContactSection'

function Contact() {
  return (
    <main style={{ backgroundColor: '#001935', color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: '#001935',
          padding: 'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.25rem, 5vw, 3rem)',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · Contact</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500 }}>
            Get In Touch
          </h1>
        </div>
      </section>

      <ContactSection />

      <section style={{ padding: '0 clamp(1rem, 4vw, 1.5rem) 3rem' }}>
        <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto', border: '1px solid rgba(201,168,76,0.25)', backgroundColor: 'rgba(16,31,72,0.35)', minHeight: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.25rem' }}>
          <i className="fas fa-map-location-dot" style={{ color: '#C9A84C', fontSize: '2rem' }} />
          <h2 style={{ margin: '0.7rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 500 }}>Map Location</h2>
          <p style={{ margin: '0.4rem 0 0', color: 'rgba(255,255,255,0.72)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.86rem' }}>
            Unit F, 26/F, 8 Hart Avenue, TST, Kowloon, Hong Kong
          </p>
        </div>
      </section>
    </main>
  )
}

export default Contact

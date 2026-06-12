import ContactSection from '../components/ContactSection'

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4734.498102929008!2d114.1746715!3d22.2981888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ee1480419d%3A0x53c93486db514b9e!2s8%20Hart%20Ave%2C%20Tsim%20Sha%20Tsui%2C%20Hong%20Kong!5e1!3m2!1sen!2sae!4v1781270980621!5m2!1sen!2sae'

function Contact() {
  return (
    <main style={{ backgroundColor: '#001935', color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: '#001935',
          padding: 'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) 0',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="page-container" style={{ maxWidth: '1520px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · Contact</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500, lineHeight: 1 }}>
            Get In Touch
          </h1>
        </div>
      </section>

      <ContactSection />

      <section style={{ padding: '0 clamp(1rem, 4vw, 1.5rem) 3rem' }}>
        <div
          className="page-container"
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            border: '1px solid rgba(201,168,76,0.25)',
            backgroundColor: 'rgba(16,31,72,0.35)',
            padding: 'clamp(0.75rem, 2vw, 1rem)',
            boxShadow: '0 28px 80px -56px rgba(209,165,80,0.45)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 'clamp(320px, 46vw, 520px)',
              overflow: 'hidden',
              backgroundColor: '#071225',
            }}
          >
            <iframe
              src={mapEmbedUrl}
              title="Freya Trading Hong Kong office map"
              width="600"
              height="450"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0,
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

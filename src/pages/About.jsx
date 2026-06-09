import { motion } from 'framer-motion'

const ABOUT_PARAGRAPHS = [
  'Established in Hong Kong in 2019, Freya Trading (HK) Ltd. has emerged as a dynamic and trusted participant in the global bullion and precious metals market. As a proud member of the SuGandh Group, a respected business group headquartered in Dubai, UAE, we combine international market expertise with the strength, credibility, and legacy of a well-established organization.',
  'Over the years, Freya Trading has built a strong reputation for reliability, transparency, and excellence in bullion trading. Through strategic partnerships, disciplined risk management, and an unwavering commitment to customer satisfaction, we have successfully expanded our presence across key international markets.',
  "Backed by the SuGandh Group's business values and entrepreneurial vision, we have consistently delivered secure and efficient trading solutions while fostering long-term relationships with clients, suppliers, and financial institutions worldwide. Our growth story reflects not only our market expertise but also the trust and confidence placed in us by our stakeholders.",
  'Today, Freya Trading (HK) Ltd. stands as a symbol of professionalism, integrity, and innovation in the precious metals industry. As we continue our journey, we remain dedicated to creating sustainable value, expanding our global footprint, and strengthening our position as a preferred partner in the international bullion market.',
  'Driven by trust, powered by experience, and backed by the strength of the SuGandh Group, Freya Trading continues to shape the future of global bullion trading.',
]

function About() {
  return (
    <main style={{ color: '#fff', backgroundColor: '#001935' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: '#001935',
          padding: 'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.25rem, 5vw, 3rem)',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · About</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500 }}>
            About Us
          </h1>
        </div>
      </section>

      <section className="page-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 2.6rem) clamp(1rem, 4vw, 1.5rem)' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 6vw, 2.4rem)', fontWeight: 500, lineHeight: 1.15 }}>
          Freya Trading (HK) Ltd. – A Proud Member of the SuGandh Group
        </motion.h2>
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: 1.9,
              marginTop: index === 0 ? '0.9rem' : '1rem',
              fontSize: '0.92rem',
            }}
          >
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  )
}

export default About

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'James Khoury', role: 'CFO, Emirates Wealth', text: 'Freya delivers consistent purity and premium finishing with outstanding communication.', initials: 'JK' },
  { name: 'Sofia Reinhardt', role: 'Private Investor, Berlin', text: 'From quote to delivery, every step was transparent and executed with precision.', initials: 'SR' },
  { name: 'Marcus Thornton', role: 'Head of Operations, Meridian', text: 'Their logistics reliability and insured shipping process are unmatched in the market.', initials: 'MT' },
  { name: 'Angela Lim', role: 'Family Office, Singapore', text: 'Freya combines craftsmanship and compliance standards we can confidently rely on.', initials: 'AL' },
  { name: 'Raj Nair', role: 'Owner, Nair Fine Jewellery, Mumbai', text: 'Excellent wholesale partner with strong product quality and dependable timelines.', initials: 'RN' },
]

function Testimonials() {
  const [start, setStart] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3)

  useEffect(() => {
    const handleResize = () => setCardsPerView(window.innerWidth < 768 ? 1 : 3)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const visibleItems = useMemo(
    () => Array.from({ length: cardsPerView }, (_, offset) => testimonials[(start + offset) % testimonials.length]),
    [start, cardsPerView]
  )

  const goPrev = () => setStart((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const goNext = () => setStart((prev) => (prev + 1) % testimonials.length)

  return (
    <section id="testimonials" style={{ backgroundColor: '#070C1A', color: '#fff', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 500 }}>
            Trusted by Clients Worldwide
          </h2>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <button onClick={goPrev} aria-label="Previous testimonial" style={{ width: '36px', height: '36px', borderRadius: '999px', border: '1px solid rgba(201,168,76,0.45)', background: 'transparent', color: '#C9A84C', cursor: 'pointer' }}>
            ‹
          </button>
          <button onClick={goNext} aria-label="Next testimonial" style={{ width: '36px', height: '36px', borderRadius: '999px', border: '1px solid rgba(201,168,76,0.45)', background: 'transparent', color: '#C9A84C', cursor: 'pointer' }}>
            ›
          </button>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))` }}>
          {visibleItems.map((item) => (
            <motion.article
              key={`${item.name}-${start}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                backgroundColor: 'rgba(16,31,72,0.45)',
                padding: '1.25rem',
              }}
            >
              <p style={{ margin: 0, color: '#C9A84C', letterSpacing: '0.08em' }}>★★★★★</p>
              <p style={{ margin: '0.9rem 0 1rem', fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontStyle: 'italic', fontSize: '0.9rem' }}>
                “{item.text}”
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '999px', border: '1px solid rgba(201,168,76,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8D5A3', fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                  {item.initials}
                </div>
                <div>
                  <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem' }}>{item.name}</p>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.65)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem' }}>{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', marginTop: '1rem' }}>
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStart(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: index === start ? '#C9A84C' : 'rgba(201,168,76,0.35)',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

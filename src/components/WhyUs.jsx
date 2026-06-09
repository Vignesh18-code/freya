import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const reasons = [
  {
    num: '01',
    icon: 'fa-tags',
    title: 'Wholesale Market Pricing',
    text: 'We trade at competitive wholesale market rates with a fixed, clear premium. No hidden markups and no inflated spreads.',
  },
  {
    num: '02',
    icon: 'fa-microscope',
    title: 'Certified Purity',
    text: 'All gold, silver, and diamonds are strictly verified. Official certification and clear grading reports accompany every single order.',
  },
  {
    num: '03',
    icon: 'fa-clock',
    title: 'Efficient Settlement',
    text: 'Industry-leading transaction speeds. Direct secure bank transfers processed swiftly to ensure timely allocation and dispatch.',
  },
]

const EASE = ease.smooth

function WhyUs() {
  return (
    <section
      id="why"
      className="responsive-section"
      style={{
        backgroundColor: colors.bg,
        color: '#fff',
        padding: '7rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ textAlign: 'center', margin: '0 auto clamp(2.25rem, 4vw, 3rem)', maxWidth: '760px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <span style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            <span style={{
              fontFamily: fonts.sans, color: colors.gold,
              fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            }}>
              Why Us
            </span>
            <span style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: fonts.serif,
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 400, lineHeight: 1.15,
          }}>
            Built on{' '}
            <span style={{ fontStyle: 'italic', color: colors.gold }}>Trust & Quality</span>
          </h2>
          <p style={{
            margin: '1rem auto 0', maxWidth: '620px',
            color: 'rgba(255,255,255,0.55)',
            fontFamily: fonts.sans,
            fontSize: '0.9rem', lineHeight: 1.8,
          }}>
            Every feature of our service is engineered around one principle — your physical
            asset trade should be as secure and seamless as possible.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="why-us-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.25rem)',
        }}>
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: EASE, delay: index * 0.06 }}
              whileHover={{ y: -8, boxShadow: '0 30px 60px -20px rgba(209,165,80,0.22)' }}
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(209,165,80,0.15)',
                borderRadius: '2px',
                padding: '1.6rem 1.3rem',
                willChange: 'transform, opacity',
                cursor: 'default',
              }}
            >
              {/* Ghost number watermark */}
              <div style={{
                position: 'absolute', top: '-0.5rem', right: '1rem',
                fontFamily: fonts.serif,
                fontSize: '5.5rem', fontWeight: 700,
                color: 'rgba(209,165,80,0.06)',
                lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              }}>
                {item.num}
              </div>

              {/* Animated top shimmer line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: index * 0.06 + 0.25 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '1.5px',
                  background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
                  transformOrigin: 'left',
                }}
              />

              {/* Icon box */}
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(209,165,80,0.18), rgba(209,165,80,0.05))',
                border: '1px solid rgba(209,165,80,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', color: colors.gold,
                marginBottom: '1.1rem',
                boxShadow: '0 4px 20px rgba(209,165,80,0.1)',
              }}>
                <i className={`fas ${item.icon}`} />
              </div>

              {/* Number label */}
              <div style={{
                fontFamily: fonts.sans,
                fontSize: '0.65rem', letterSpacing: '0.2em',
                color: 'rgba(209,165,80,0.6)', marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>
                {item.num}
              </div>

              <h3 style={{
                margin: '0 0 0.6rem',
                fontFamily: fonts.serif,
                fontSize: '1.5rem', fontWeight: 600,
                color: '#fff', lineHeight: 1.2,
              }}>
                {item.title}
              </h3>

              <p style={{
                margin: 0,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: fonts.sans,
                fontSize: '0.82rem', lineHeight: 1.75,
              }}>
                {item.text}
              </p>

              {/* Arrow indicator */}
              <div style={{
                position: 'absolute', bottom: '1.2rem', right: '1.2rem',
                width: '28px', height: '28px',
                border: '1px solid rgba(209,165,80,0.2)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(209,165,80,0.4)', fontSize: '0.65rem',
              }}>
                <i className="fas fa-arrow-up-right" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

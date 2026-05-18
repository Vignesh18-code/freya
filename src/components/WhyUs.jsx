import { motion } from 'framer-motion'

const reasons = [
  { title: 'Wholesale Pricing', icon: 'fa-tags', text: 'Direct manufacturer rates without hidden margins or middlemen.', num: '01' },
  { title: 'Insured Shipping', icon: 'fa-shield-halved', text: 'Global shipments fully protected from dispatch to delivery.', num: '02' },
  { title: 'Independent Assay', icon: 'fa-microscope', text: 'Purity verified through independent certified assay protocols.', num: '03' },
  { title: '48-Hour Delivery', icon: 'fa-clock', text: 'Fast dispatch for ready inventory and repeat client orders.', num: '04' },
  { title: 'Full Provenance', icon: 'fa-file-contract', text: 'Transparent traceability documentation included with every order.', num: '05' },
  { title: 'Dedicated Advisor', icon: 'fa-headset', text: 'One personal relationship manager assigned to every client.', num: '06' },
  { title: 'Regulatory Compliance', icon: 'fa-building-columns', text: 'Fully aligned with UAE compliance and global export regulations.', num: '07' },
  { title: 'Buy-Back Guarantee', icon: 'fa-arrow-rotate-left', text: 'Structured buy-back options available for all eligible products.', num: '08' },
]

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

function WhyUs() {
  return (
    <section
      id="why"
      style={{
        backgroundColor: '#070C1A',
        color: '#fff',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <span style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C' }} />
            <span style={{
              fontFamily: "'Montserrat', sans-serif", color: '#C9A84C',
              fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            }}>
              Our Advantages
            </span>
            <span style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C' }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 400, lineHeight: 1.15,
          }}>
            Why Choose{' '}
            <span style={{
              fontStyle: 'italic', color: '#C9A84C',
            }}>
              Freya
            </span>
          </h2>
          <p style={{
            margin: '1rem auto 0', maxWidth: '520px',
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.9rem', lineHeight: 1.8,
          }}>
            Eight reasons why the world's leading jewellery buyers trust Freya for every transaction.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: index * 0.07 }}
              whileHover={{
                y: -10,
                boxShadow: '0 30px 60px -20px rgba(201,168,76,0.25)',
              }}
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(201,168,76,0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '2px',
                padding: '2rem 1.5rem',
                overflow: 'hidden',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                cursor: 'default',
              }}
            >
              {/* Large background number */}
              <div style={{
                position: 'absolute', top: '-0.5rem', right: '1rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '5.5rem', fontWeight: 700,
                color: 'rgba(201,168,76,0.06)',
                lineHeight: 1, pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {item.num}
              </div>

              {/* Top gold line on hover via pseudo — use motion border instead */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.07 + 0.3 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '1.5px',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                  transformOrigin: 'left',
                }}
              />

              {/* Icon */}
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.05))',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', color: '#C9A84C',
                marginBottom: '1.4rem',
                boxShadow: '0 4px 20px rgba(201,168,76,0.1)',
              }}>
                <i className={`fas ${item.icon}`} />
              </div>

              {/* Small number label */}
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.65rem', letterSpacing: '0.2em',
                color: 'rgba(201,168,76,0.6)', marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>
                {item.num}
              </div>

              <h3 style={{
                margin: '0 0 0.6rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem', fontWeight: 600,
                color: '#fff', lineHeight: 1.2,
              }}>
                {item.title}
              </h3>

              <p style={{
                margin: 0,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.82rem', lineHeight: 1.75,
              }}>
                {item.text}
              </p>

              {/* Bottom right arrow indicator */}
              <div style={{
                position: 'absolute', bottom: '1.2rem', right: '1.2rem',
                width: '28px', height: '28px',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(201,168,76,0.4)', fontSize: '0.65rem',
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

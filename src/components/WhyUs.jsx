import { motion } from 'framer-motion'

const reasons = [
  { title: 'Wholesale Pricing', icon: 'fa-tags', text: 'Direct manufacturer rates without hidden margins.' },
  { title: 'Insured Shipping', icon: 'fa-shield-halved', text: 'Global shipments protected from dispatch to delivery.' },
  { title: 'Independent Assay', icon: 'fa-microscope', text: 'Purity verified through independent assay protocols.' },
  { title: '48-Hour Delivery', icon: 'fa-clock', text: 'Fast dispatch for ready inventory and repeat orders.' },
  { title: 'Full Provenance', icon: 'fa-file-contract', text: 'Transparent traceability documentation with each order.' },
  { title: 'Dedicated Advisor', icon: 'fa-headset', text: 'One relationship manager for every client account.' },
  { title: 'Regulatory Compliance', icon: 'fa-building-columns', text: 'Aligned with UAE compliance and export regulations.' },
  { title: 'Buy-Back Guarantee', icon: 'fa-arrow-rotate-left', text: 'Structured buy-back options for eligible products.' },
]

function WhyUs() {
  return (
    <section id="why" style={{ backgroundColor: '#070C1A', color: '#fff', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 500 }}>
            Why Choose Freya
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -7, boxShadow: '0 18px 36px -24px rgba(201,168,76,0.5)' }}
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                borderTop: '2px solid transparent',
                backgroundColor: 'rgba(16,31,72,0.45)',
                padding: '1rem',
              }}
            >
              <div style={{ width: '42px', height: '42px', border: '1px solid rgba(201,168,76,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C' }}>
                <i className={`fas ${item.icon}`} />
              </div>
              <h3 style={{ margin: '0.75rem 0 0.4rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600 }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.84rem', lineHeight: 1.7 }}>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

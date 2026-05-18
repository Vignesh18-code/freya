import { motion } from 'framer-motion'

const steps = [
  { title: 'Enquire & Verify', text: 'Share your requirement and complete KYC online.' },
  { title: 'Agree Pricing', text: 'Receive a live quote linked to market spot rates.' },
  { title: 'Secure Payment', text: 'Settle through bank wire or approved crypto rails.' },
  { title: 'Delivery or Vault', text: 'Choose armored delivery or secure vault allocation.' },
]

function Process() {
  return (
    <section id="process" style={{ backgroundColor: '#101F48', color: '#fff', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500 }}>
            Simple 4-Step Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5" style={{ position: 'relative' }}>
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: '34px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              backgroundColor: 'rgba(201,168,76,0.3)',
            }}
          />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(201,168,76,0.4)' }}
                style={{
                  width: '68px',
                  height: '68px',
                  margin: '0 auto 0.9rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(201,168,76,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8D5A3',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  backgroundColor: 'rgba(7,12,26,0.8)',
                }}
              >
                {(index + 1).toString().padStart(2, '0')}
              </motion.div>
              <h3 style={{ margin: '0 0 0.45rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600 }}>{step.title}</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.84rem', lineHeight: 1.7 }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

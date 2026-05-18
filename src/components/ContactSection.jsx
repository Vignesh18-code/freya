import { motion } from 'framer-motion'

const contactItems = [
  { icon: 'fa-phone', label: 'Phone', value: '+971 4 555 0123' },
  { icon: 'fa-envelope', label: 'Email', value: 'advisory@freyajewels.com' },
  { icon: 'fa-location-dot', label: 'Address', value: 'DMCC, Jumeirah Lakes Towers, Dubai, UAE' },
  { icon: 'fa-clock', label: 'Hours', value: 'Mon – Sat · 09:00 to 19:00 GST' },
]

const inputStyle = {
  width: '100%',
  backgroundColor: 'rgba(7,12,26,0.8)',
  border: '1px solid rgba(201,168,76,0.25)',
  color: '#fff',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.84rem',
  padding: '0.72rem 0.8rem',
  outlineColor: '#C9A84C',
}

function ContactSection() {
  return (
    <section id="contact" style={{ backgroundColor: '#101F48', color: '#fff', padding: '6rem 1.5rem' }}>
      <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500 }}>
            Let&apos;s Talk Jewellery
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.8, fontSize: '0.92rem' }}>
            Whether you are sourcing for wholesale, bespoke manufacturing, or secure storage, our advisors will prepare a tailored recommendation.
          </p>

          <div style={{ marginTop: '1.2rem', display: 'grid', gap: '0.85rem' }}>
            {contactItems.map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', border: '1px solid rgba(201,168,76,0.2)', backgroundColor: 'rgba(7,12,26,0.55)', padding: '0.8rem' }}>
                <div style={{ width: '38px', height: '38px', border: '1px solid rgba(201,168,76,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', flexShrink: 0 }}>
                  <i className={`fas ${item.icon}`} />
                </div>
                <div>
                  <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.68rem', color: '#C9A84C' }}>{item.label}</p>
                  <p style={{ margin: '0.2rem 0 0', color: 'rgba(255,255,255,0.8)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.84rem', lineHeight: 1.6 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            border: '1px solid rgba(201,168,76,0.25)',
            background: 'linear-gradient(155deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
            backdropFilter: 'blur(12px)',
            padding: '1.25rem',
            display: 'grid',
            gap: '0.75rem',
          }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
          </div>
          <input type="tel" placeholder="Phone" style={inputStyle} />
          <select defaultValue="" style={inputStyle}>
            <option value="" disabled>Subject</option>
            <option>General</option>
            <option>Wholesale</option>
            <option>Custom Design</option>
            <option>Storage</option>
          </select>
          <textarea placeholder="Message" rows={5} style={inputStyle} />
          <button type="submit" style={{ background: 'linear-gradient(90deg, #C9A84C 0%, #E8D5A3 100%)', color: '#101F48', border: 'none', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.74rem', padding: '0.9rem 1rem', cursor: 'pointer' }}>
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection

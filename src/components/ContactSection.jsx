import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

// ── Paste your Web3Forms key here (web3forms.com → enter email → get key) ──
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY'
// ────────────────────────────────────────────────────────────────────────────

const contactItems = [
  { icon: 'fa-building',     label: 'Office :',     value: '+852 3580 0930' },
  { icon: 'fa-phone',        label: 'Sales:',       value: '+852 6375 1595' },
  { icon: 'fa-shield-halved', label: 'Compliance:', value: '+852 6427 8999' },
  { icon: 'fa-envelope',     label: 'Email:',       value: 'email@freyatrading.com' },
  { icon: 'fa-location-dot', label: 'Address:',     value: 'Unit F, 26/F, 8 Hart Avenue, TST, Kowloon, Hong Kong' },
]

const EASE = ease.smooth
const T    = ease.transition

const inputBase = {
  width: '100%',
  backgroundColor: 'rgba(7,12,26,0.9)',
  border: '1px solid rgba(209,165,80,0.2)',
  color: '#fff',
  fontFamily: fonts.sans,
  fontSize: '0.83rem',
  padding: '0.85rem 1rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease',
  borderRadius: 0,
}

export default function ContactSection() {
  const [fields, setFields] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error
  const [focused, setFocused] = useState(null)

  /* ── validation ── */
  const validate = () => {
    const e = {}
    if (!fields.name.trim())                      e.name    = 'Name is required'
    if (!fields.email.trim())                     e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email   = 'Invalid email address'
    if (!fields.subject)                          e.subject = 'Please select a subject'
    if (!fields.message.trim())                   e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  /* ── submit → Web3Forms (no account needed) ── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key:  WEB3FORMS_KEY,
          subject:     `New Enquiry — Freya Trading (HK) Ltd: ${fields.subject}`,
          from_name:   fields.name,
          name:        fields.name,
          email:       fields.email,
          phone:       fields.phone || 'Not provided',
          inquiry:     fields.subject,
          message:     fields.message,
          // bot check
          botcheck:    '',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFields({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const borderColor = (name) => {
    if (errors[name])   return 'rgba(220,80,80,0.7)'
    if (focused===name) return 'rgba(209,165,80,0.7)'
    return 'rgba(209,165,80,0.2)'
  }

  return (
    <section
      id="contact"
      className="responsive-section"
      style={{
        backgroundColor: colors.bg,
        color: '#fff',
        padding: '8rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow blobs */}
      <div style={{ position:'absolute', top:'10%', left:'-10%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)', filter:'blur(80px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'5%', right:'-10%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(209,165,80,0.04) 0%, transparent 70%)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1520px', margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-60px' }}
          transition={T}
          style={{ textAlign:'center', marginBottom:'clamp(2.25rem, 4vw, 3rem)' }}
        >
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.2rem' }}>
            <span style={{ width:'40px', height:'1px', backgroundColor:colors.gold }} />
            <span style={{ fontFamily:fonts.sans, color:colors.gold, fontSize:'0.7rem', letterSpacing:'0.28em', textTransform:'uppercase' }}>
              Contact Us
            </span>
            <span style={{ width:'40px', height:'1px', backgroundColor:colors.gold }} />
          </div>
          <h2 style={{ margin:0, fontFamily:fonts.serif, fontSize:'clamp(2.2rem, 4vw, 3.6rem)', fontWeight:400, lineHeight:1.15 }}>
            Let&apos;s Talk{' '}
            <span style={{ fontStyle:'italic', color:colors.gold }}>Business</span>
          </h2>
          <p style={{ margin:'1rem auto 0', maxWidth:'500px', color:'rgba(255,255,255,0.5)', fontFamily:fonts.sans, fontSize:'0.88rem', lineHeight:1.8 }}>
            Whether you are sourcing wholesale bullion, certified jewellery, or require a custom volume allocation — our B2B desk is ready.
          </p>
        </motion.div>

        {/* ── Two-column ── */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap:'clamp(1.5rem, 3vw, 2rem)',
          alignItems:'start',
        }}>

          {/* ── LEFT: Info ── */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={T}
          >
            <h3 style={{ margin:'0 0 0.6rem', fontFamily:fonts.serif, fontSize:'2rem', fontWeight:400 }}>
              Get In Touch
            </h3>
            <div style={{ display:'grid', gap:'0.85rem' }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ ...T, delay: i * 0.08 }}
                  className="contact-info-item"
                  style={{
                    display:'flex', gap:'1rem', alignItems:'flex-start',
                    border:'1px solid rgba(209,165,80,0.15)',
                    background:'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(7,12,26,0.8))',
                    padding:'1rem 1.1rem',
                    position:'relative', overflow:'hidden',
                  }}
                >
                  <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'2px', background:'linear-gradient(180deg, transparent, #D1A550, transparent)' }} />
                  <div style={{
                    width:'42px', height:'42px', flexShrink:0,
                    border:'1px solid rgba(209,165,80,0.3)',
                    background:'linear-gradient(135deg, rgba(209,165,80,0.15), rgba(209,165,80,0.03))',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:colors.gold, fontSize:'0.9rem',
                  }}>
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <div>
                    <p style={{ margin:0, fontFamily:fonts.sans, letterSpacing:'0.16em', textTransform:'uppercase', fontSize:'0.6rem', color:'rgba(209,165,80,0.7)', marginBottom:'0.25rem' }}>
                      {item.label}
                    </p>
                    <p style={{ margin:0, color:'rgba(255,255,255,0.8)', fontFamily:fonts.sans, fontSize:'0.82rem', lineHeight:1.6 }}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ ...T, delay:0.15 }}
            className="contact-form-panel"
            style={{
              position:'relative',
              border:'1px solid rgba(209,165,80,0.18)',
              background:'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(7,12,26,0.7) 100%)',
              padding:'clamp(1.35rem, 3vw, 1.9rem)',
              overflow:'hidden',
            }}
          >
            {/* shimmer top */}
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, transparent, #D1A550, transparent)' }} />

            <AnimatePresence mode="wait">

              {/* ── Success ── */}
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity:0, scale:0.95 }}
                  animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0 }}
                  transition={{ duration:0.5, ease:EASE }}
                  style={{ textAlign:'center', padding:'3rem 1rem' }}
                >
                  <div style={{
                    width:'64px', height:'64px', borderRadius:'50%',
                    border:'1px solid rgba(209,165,80,0.5)',
                    background:'rgba(209,165,80,0.1)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    margin:'0 auto 1.5rem', fontSize:'1.4rem', color:colors.gold,
                  }}>
                    <i className="fas fa-check" />
                  </div>
                  <h3 style={{ margin:'0 0 0.6rem', fontFamily:fonts.serif, fontSize:'1.9rem', fontWeight:400 }}>
                    Enquiry Sent
                  </h3>
                  <p style={{ margin:'0 0 2rem', color:'rgba(255,255,255,0.5)', fontFamily:fonts.sans, fontSize:'0.82rem', lineHeight:1.8 }}>
                    Thank you for reaching out. Our team will review your enquiry and respond soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{
                      border:'1px solid rgba(209,165,80,0.4)', background:'transparent',
                      color:colors.gold, fontFamily:fonts.sans,
                      fontSize:'0.68rem', letterSpacing:'0.16em', textTransform:'uppercase',
                      padding:'0.7rem 1.8rem', cursor:'pointer',
                    }}
                  >
                    Send Another
                  </button>
                </motion.div>
              )}

              {/* ── Form ── */}
              {status !== 'success' && (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  exit={{ opacity:0 }}
                  style={{ display:'grid', gap:'1rem' }}
                  noValidate
                >
                  {/* honeypot — keeps spam out */}
                  <input type="checkbox" name="botcheck" style={{ display:'none' }} />

                  {/* Name + Email */}
                  <div className="responsive-form-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                    <Field label="Full Name *"      name="name"    type="text"  placeholder="John Smith"          value={fields.name}    error={errors.name}    onChange={handleChange} onFocus={()=>setFocused('name')}    onBlur={()=>setFocused(null)} borderColor={borderColor('name')} />
                    <Field label="Email Address *"  name="email"   type="email" placeholder="you@company.com"     value={fields.email}   error={errors.email}   onChange={handleChange} onFocus={()=>setFocused('email')}   onBlur={()=>setFocused(null)} borderColor={borderColor('email')} />
                  </div>

                  {/* Phone */}
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+971 50 000 0000" value={fields.phone} error={errors.phone} onChange={handleChange} onFocus={()=>setFocused('phone')} onBlur={()=>setFocused(null)} borderColor={borderColor('phone')} />

                  {/* Subject */}
                  <div>
                    <label style={{ display:'block', fontFamily:fonts.sans, fontSize:'0.65rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(209,165,80,0.8)', marginBottom:'0.4rem' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={fields.subject}
                      onChange={handleChange}
                      onFocus={()=>setFocused('subject')}
                      onBlur={()=>setFocused(null)}
                      style={{
                        ...inputBase,
                        borderColor: borderColor('subject'),
                        appearance:'none',
                        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'right 1rem center',
                        paddingRight:'2.5rem',
                        cursor:'pointer',
                      }}
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Gold Bullion Inquiry">Gold Bullion Inquiry</option>
                      <option value="Silver Bullion Inquiry">Silver Bullion Inquiry</option>
                      <option value="Diamond Jewellery Wholesale">Diamond Jewellery Wholesale</option>
                      <option value="Custom Volume Order">Custom Volume Order</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    {errors.subject && <ErrorMsg msg={errors.subject} />}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display:'block', fontFamily:fonts.sans, fontSize:'0.65rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(209,165,80,0.8)', marginBottom:'0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Please describe your requirements, volume, and any specific product needs…"
                      value={fields.message}
                      onChange={handleChange}
                      onFocus={()=>setFocused('message')}
                      onBlur={()=>setFocused(null)}
                      style={{ ...inputBase, borderColor:borderColor('message'), resize:'vertical', minHeight:'120px' }}
                    />
                    {errors.message && <ErrorMsg msg={errors.message} />}
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div style={{ border:'1px solid rgba(220,80,80,0.4)', background:'rgba(220,80,80,0.08)', padding:'0.75rem 1rem', fontFamily:fonts.sans, fontSize:'0.75rem', color:'rgba(255,120,120,0.9)', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                      <i className="fas fa-circle-exclamation" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    className="responsive-action"
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={status !== 'sending' ? { backgroundColor:colors.goldLight, boxShadow:'0 12px 32px -10px rgba(209,165,80,0.5)' } : {}}
                    whileTap={status !== 'sending' ? { scale:0.98 } : {}}
                    style={{
                      backgroundColor: status === 'sending' ? 'rgba(209,165,80,0.5)' : colors.gold,
                      color:colors.bg, border:'none',
                      fontFamily:fonts.sans,
                      fontWeight:700, letterSpacing:'0.16em',
                      textTransform:'uppercase', fontSize:'0.72rem',
                      padding:'1rem', cursor: status==='sending' ? 'not-allowed' : 'pointer',
                      display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem',
                      transition:'background-color 0.3s ease',
                    }}
                  >
                    {status === 'sending' ? (
                      <><i className="fas fa-circle-notch fa-spin" style={{ fontSize:'0.75rem' }} /> Sending...</>
                    ) : (
                      <><i className="fas fa-paper-plane" style={{ fontSize:'0.7rem' }} /> Submit Enquiry</>
                    )}
                  </motion.button>

                  <p style={{ margin:0, textAlign:'center', fontFamily:fonts.sans, fontSize:'0.62rem', color:'rgba(255,255,255,0.28)', letterSpacing:'0.08em' }}>
                    Your information is encrypted and never shared with third parties.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, value, error, onChange, onFocus, onBlur, borderColor }) {
  return (
    <div>
      <label style={{ display:'block', fontFamily:fonts.sans, fontSize:'0.65rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(209,165,80,0.8)', marginBottom:'0.4rem' }}>
        {label}
      </label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} style={{ ...inputBase, borderColor }} autoComplete="off" />
      {error && <ErrorMsg msg={error} />}
    </div>
  )
}

function ErrorMsg({ msg }) {
  return (
    <p style={{ margin:'0.3rem 0 0', fontFamily:fonts.sans, fontSize:'0.65rem', color:'rgba(220,100,100,0.9)', letterSpacing:'0.04em' }}>
      <i className="fas fa-triangle-exclamation" style={{ marginRight:'0.3rem' }} />
      {msg}
    </p>
  )
}

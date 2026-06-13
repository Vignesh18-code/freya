import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'
import goldBarsImage from '../assets/GoldBars.png'

const barCategories = [
  {
    num: '01',
    icon: 'fa-scale-balanced',
    title: 'Small Gold Bars',
    intro: 'Common for retail investors and gifting:',
    items: [
      '1 gram',
      '2 grams',
      '5 grams',
      '10 grams',
      '20 grams',
      '1 troy ounce (31.1035 g)',
    ],
  },
  {
    num: '02',
    icon: 'fa-vault',
    title: 'Medium Gold Bars',
    intro: 'Popular with serious investors:',
    items: ['50 grams', '100 grams', '250 grams', '500 grams'],
  },
  {
    num: '03',
    icon: 'fa-building-columns',
    title: 'Large Gold Bars',
    intro: 'Typically used by high-net-worth investors, banks, and bullion dealers:',
    items: ['1 kilogram (1,000 g)', '100 troy ounces (3.11 kg)'],
  },
]

const brands = [
  'PAMP Suisse',
  'Valcambi',
  'Metalor',
  'Argor-Heraeus',
  'Perth Mint',
  'SAM Precious Metals',
  'Al Etihad Gold',
  'Emirates Gold',
]

const transition = ease.transition
const EASE = ease.smooth

function GoldBars() {
  return (
    <main style={{ backgroundColor: colors.bg, color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: colors.bg,
          padding: 'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) 0',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="page-container" style={{ maxWidth: '1520px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: fonts.sans, color: colors.gold, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
            Home · Product Range · Gold Bars
          </p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: fonts.serif, fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500, lineHeight: 1 }}>
            Gold Bars
          </h1>
        </div>
      </section>

      <section
        className="responsive-section"
        style={{
          backgroundColor: colors.bg,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '8%',
            right: '-10%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(209,165,80,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'center',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
              style={{
                border: `1px solid ${colors.border}`,
                background: 'linear-gradient(145deg, rgba(16,31,72,0.72), rgba(7,12,26,0.92))',
                overflow: 'hidden',
                boxShadow: '0 28px 80px -45px rgba(209,165,80,0.35)',
              }}
            >
              <img
                src={goldBarsImage}
                alt="Certified gold bars"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ width: '42px', height: '1px', backgroundColor: colors.gold }} />
                <span style={{ fontFamily: fonts.sans, color: colors.gold, fontSize: '0.7rem', letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                  Product Detail
                </span>
              </div>

              <h2 style={{ margin: 0, fontFamily: fonts.serif, fontSize: 'clamp(2.2rem, 4vw, 3.65rem)', fontWeight: 400, color: '#fff', lineHeight: 1.1 }}>
                Premium{' '}
                <span style={{ color: colors.gold, fontStyle: 'italic' }}>Gold Bars</span>
              </h2>

              <p style={{ margin: '1rem 0 0', maxWidth: '720px', color: 'rgba(255,255,255,0.66)', fontFamily: fonts.sans, fontSize: '0.95rem', lineHeight: 1.9 }}>
                Gold bars are manufactured in a wide range of denominations, from tiny investment bars to large institutional bars.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                {['24K Gold', 'Investment Grade', 'Certified Purity'].map((label) => (
                  <span
                    key={label}
                    style={{
                      border: '1px solid rgba(209,165,80,0.22)',
                      color: colors.goldLight,
                      fontFamily: fonts.sans,
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '0.45rem 0.8rem',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1rem, 2vw, 1.25rem)',
            }}
          >
            {barCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: EASE, delay: index * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 24px 55px -28px rgba(209,165,80,0.38)' }}
                style={{
                  position: 'relative',
                  border: `1px solid ${colors.border}`,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))',
                  padding: '1.55rem 1.3rem',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: '-0.4rem', right: '1rem', fontFamily: fonts.serif, fontSize: '5rem', fontWeight: 700, color: 'rgba(209,165,80,0.06)', lineHeight: 1 }}>
                  {category.num}
                </div>

                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(209,165,80,0.18), rgba(209,165,80,0.05))', border: '1px solid rgba(209,165,80,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.gold, marginBottom: '1rem' }}>
                  <i className={`fas ${category.icon}`} />
                </div>

                <p style={{ margin: '0 0 0.45rem', fontFamily: fonts.sans, color: 'rgba(209,165,80,0.65)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  {category.num}
                </p>

                <h3 style={{ margin: '0 0 0.65rem', fontFamily: fonts.serif, fontSize: '1.55rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                  {category.title}
                </h3>

                <p style={{ margin: '0 0 1rem', color: 'rgba(255,255,255,0.58)', fontFamily: fonts.sans, fontSize: '0.84rem', lineHeight: 1.75 }}>
                  {category.intro}
                </p>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.55rem' }}>
                  {category.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'rgba(255,255,255,0.76)', fontFamily: fonts.sans, fontSize: '0.84rem' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: colors.gold, boxShadow: '0 0 10px rgba(209,165,80,0.7)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transition}
            style={{
              marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
              border: `1px solid ${colors.border}`,
              background: 'linear-gradient(135deg, rgba(209,165,80,0.08), rgba(255,255,255,0.015))',
              padding: 'clamp(1.35rem, 3vw, 2rem)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ width: '42px', height: '1px', backgroundColor: colors.gold }} />
              <span style={{ fontFamily: fonts.sans, color: colors.gold, fontSize: '0.7rem', letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                Brands
              </span>
            </div>

            <h2 style={{ margin: 0, fontFamily: fonts.serif, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#fff', lineHeight: 1.1 }}>
              Recognised{' '}
              <span style={{ color: colors.gold, fontStyle: 'italic' }}>Bullion Brands</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: '0.8rem', marginTop: '1.35rem' }}>
              {brands.map((brand) => (
                <div
                  key={brand}
                  style={{
                    border: '1px solid rgba(209,165,80,0.14)',
                    background: 'rgba(7,12,26,0.4)',
                    padding: '0.9rem 1rem',
                    color: 'rgba(255,255,255,0.78)',
                    fontFamily: fonts.sans,
                    fontSize: '0.84rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            style={{
              marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(209,165,80,0.14)',
              paddingTop: '1.4rem',
            }}
          >
            <p style={{ margin: 0, fontFamily: fonts.serif, fontSize: '1.45rem', color: colors.goldLight }}>
              Need a gold bar allocation?
            </p>
            <Link
              to="/contact"
              className="responsive-action mobile-full-width"
              style={{
                backgroundColor: colors.gold,
                color: colors.bg,
                fontFamily: fonts.sans,
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '0.9rem 2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default GoldBars

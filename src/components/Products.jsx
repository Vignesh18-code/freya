import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const tabs = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings']

const products = [
  { id: 1, category: 'Rings', icon: 'fa-ring', tag: 'BESTSELLER', purity: '22K Gold', name: 'Regal Solstice Ring', description: 'Handset detailing with signature Freya polish.', price: '$2,450' },
  { id: 2, category: 'Necklaces', icon: 'fa-gem', tag: 'NEW', purity: '18K Gold', name: 'Aurelia Halo Necklace', description: 'Elegant chainwork crafted for statement wear.', price: '$3,180' },
  { id: 3, category: 'Bracelets', icon: 'fa-link', tag: 'BESTSELLER', purity: '22K Gold', name: 'Empire Link Bracelet', description: 'Classic form balanced with contemporary finish.', price: '$2,920' },
  { id: 4, category: 'Earrings', icon: 'fa-circle-notch', tag: 'NEW', purity: '18K Gold', name: 'Luna Crest Earrings', description: 'Lightweight brilliance for day-to-night styling.', price: '$1,680' },
  { id: 5, category: 'Rings', icon: 'fa-ring', tag: 'NEW', purity: '24K Gold', name: 'Imperial Crest Band', description: 'Bold silhouette with heritage-inspired accents.', price: '$2,760' },
  { id: 6, category: 'Necklaces', icon: 'fa-gem', tag: 'BESTSELLER', purity: '22K Gold', name: 'Noor Cascade Pendant', description: 'Layered texture reflecting artisan handwork.', price: '$3,640' },
]

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
const fromLeft = { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition }
const fromRight = { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition }
const fromBottom = { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition }

function Products({ showFilters = true, defaultFilter = 'All' }) {
  const [active, setActive] = useState(defaultFilter)

  const filtered = useMemo(() => {
    if (active === 'All') return products
    return products.filter((item) => item.category === active)
  }, [active])

  return (
    <section id="collections" style={{ backgroundColor: '#101F48', padding: '6rem 1.5rem', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          {...fromBottom}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 4vw, 3.7rem)', fontWeight: 500 }}>
            Our <span style={{ color: '#C9A84C' }}>Collections</span>
          </h2>
        </motion.div>

        {showFilters && (
          <motion.div {...fromLeft} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.7rem', marginBottom: '2rem' }}>
            {tabs.map((tab) => {
              const activeTab = tab === active
              return (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  style={{
                    border: activeTab ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.25)',
                    background: activeTab ? 'linear-gradient(120deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))' : 'transparent',
                    color: activeTab ? '#E8D5A3' : 'rgba(255,255,255,0.8)',
                    padding: '0.55rem 1.2rem',
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                  }}
                >
                  {tab}
                </button>
                )
              })}
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, index) => (
            <motion.article
              key={item.id}
              {...(index % 2 === 0 ? fromLeft : fromRight)}
              whileHover={{ y: -8, boxShadow: '0 22px 40px -24px rgba(201,168,76,0.45)', borderColor: 'rgba(201,168,76,0.55)' }}
              style={{
                border: '1px solid rgba(201,168,76,0.24)',
                background: 'linear-gradient(160deg, rgba(16,31,72,0.95) 0%, rgba(7,12,26,0.95) 100%)',
                padding: '1.2rem',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              <div style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'linear-gradient(145deg, rgba(201,168,76,0.15), rgba(201,168,76,0.03))', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '0.65rem', left: '0.65rem', fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', color: '#E8D5A3', border: '1px solid rgba(201,168,76,0.4)', padding: '0.24rem 0.45rem' }}>
                  {item.tag}
                </span>
                <i className={`fas ${item.icon}`} style={{ fontSize: '2.3rem', color: '#C9A84C' }} />
              </div>
              <p style={{ margin: '0.9rem 0 0', color: '#C9A84C', fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                {item.purity}
              </p>
              <h3 style={{ margin: '0.5rem 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.65rem', fontWeight: 600 }}>{item.name}</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.86rem', lineHeight: 1.75 }}>{item.description}</p>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.8rem' }}>
                <p style={{ margin: 0, color: '#E8D5A3', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.55rem' }}>{item.price}</p>
                <button style={{ backgroundColor: '#C9A84C', border: 'none', color: '#101F48', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', fontSize: '0.68rem', padding: '0.55rem 0.85rem', cursor: 'pointer' }}>
                  Enquire
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

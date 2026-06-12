import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const productRangeImages = import.meta.glob(
  '../assets/Product Range/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  },
)

const jewelleryImages = Object.entries(productRangeImages)
  .map(([path, image]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '')

    return {
      name,
      image,
      alt: `${name} product image`,
    }
  })
  .filter((item) => item.name.toLowerCase().includes('gold jewellery'))
  .sort((a, b) => a.name.localeCompare(b.name))

const transition = ease.transition
const smooth = ease.smooth

function GoldJewellery() {
  return (
    <main style={{ backgroundColor: colors.bg, color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: colors.bg,
          padding:
            'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) 0',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
          textAlign: 'center',
        }}
      >
        <motion.div
          className="page-container"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          style={{ maxWidth: '1520px', margin: '0 auto' }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: fonts.sans,
              color: colors.gold,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
            }}
          >
            Home · Collections · Gold Jewellery
          </p>
          <h1
            style={{
              margin: '0.8rem 0 0',
              fontFamily: fonts.serif,
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            Gold Jewellery
          </h1>
        </motion.div>
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
            top: '6%',
            right: '-10%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(209,165,80,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '4%',
            left: '-12%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(209,165,80,0.045) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={transition}
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(1rem, 2.6vw, 1.75rem)',
            alignItems: 'stretch',
          }}
        >
          {jewelleryImages.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: '0 32px 80px -42px rgba(209,165,80,0.55)',
              }}
              transition={{
                duration: 0.75,
                ease: smooth,
                delay: index * 0.08,
              }}
              style={{
                margin: 0,
                border: `1px solid ${colors.border}`,
                background:
                  'linear-gradient(145deg, rgba(16,31,72,0.72), rgba(7,12,26,0.95))',
                overflow: 'hidden',
                minWidth: 0,
              }}
            >
              <motion.img
                src={item.image}
                alt={item.alt}
                initial={{ scale: 1.03 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.045 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: smooth }}
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                }}
              />
            </motion.figure>
          ))}
        </motion.div>
      </section>
    </main>
  )
}

export default GoldJewellery

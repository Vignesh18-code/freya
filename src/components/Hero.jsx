import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { colors, fonts, ease } from '../theme'
import goldBarImage from '../assets/models/goldbar.png'
import silverBarImage from '../assets/models/silver.png'

// ─── Content — edit here only ───────────────────────────────────────────────
const HERO_TAG = 'Direct Refinery Supply | Hong Kong - China - UAE'
const HERO_SUBTEXT = [
  'Your trusted wholesale source for premium gold and silver, investment bars and coins, certified diamonds, and exquisite gold jewellery.',
  'Backed by comprehensive insurance, global compliance standards, and the confidence of leading retailers and industry partners since 2019.',
]
const HERO_BTN_PRIMARY = 'Explore Category'
const HERO_BTN_SECONDARY = 'Our Story'

const EASE = ease.smooth

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: EASE },
  },
}

const canvasVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.8, ease: EASE, delay: 0.2 },
  },
}

const MotionLink = motion.create(Link)

// ─── Heading sparkles — positions are % of each word's box, sizes in em ─────
const HEADING_SPARKLES = {
  gold: [
    { top: '-12%', left: '6%', size: '0.12em', delay: '0s', duration: '2.4s', star: true },
    { top: '14%', left: '97%', size: '0.07em', delay: '0.9s', duration: '2.8s', star: false },
    { top: '-8%', left: '58%', size: '0.06em', delay: '1.5s', duration: '2.2s', star: false },
    { top: '88%', left: '74%', size: '0.1em', delay: '2.1s', duration: '2.6s', star: true },
    { top: '72%', left: '-3%', size: '0.06em', delay: '1.1s', duration: '3s', star: false },
    { top: '-16%', left: '34%', size: '0.08em', delay: '0.5s', duration: '2.7s', star: true },
    { top: '52%', left: '102%', size: '0.09em', delay: '1.8s', duration: '2.5s', star: true },
    { top: '102%', left: '28%', size: '0.06em', delay: '0.3s', duration: '3.1s', star: false },
    { top: '30%', left: '-6%', size: '0.05em', delay: '2.5s', duration: '2.3s', star: false },
  ],
  silver: [
    { top: '-10%', left: '88%', size: '0.11em', delay: '0.5s', duration: '2.5s', star: true },
    { top: '6%', left: '24%', size: '0.06em', delay: '1.7s', duration: '2.2s', star: false },
    { top: '90%', left: '10%', size: '0.09em', delay: '2.4s', duration: '2.8s', star: true },
    { top: '50%', left: '101%', size: '0.06em', delay: '0.2s', duration: '2.7s', star: false },
    { top: '82%', left: '56%', size: '0.06em', delay: '1.3s', duration: '2.4s', star: false },
    { top: '-14%', left: '48%', size: '0.07em', delay: '0.8s', duration: '2.6s', star: false },
    { top: '-6%', left: '4%', size: '0.09em', delay: '2.8s', duration: '2.9s', star: true },
    { top: '34%', left: '-5%', size: '0.08em', delay: '1.1s', duration: '2.3s', star: true },
    { top: '102%', left: '82%', size: '0.05em', delay: '2s', duration: '3s', star: false },
  ],
  diamond: [
    { top: '-14%', left: '14%', size: '0.12em', delay: '0.3s', duration: '2.4s', star: true },
    { top: '-6%', left: '70%', size: '0.08em', delay: '1.4s', duration: '2.7s', star: false },
    { top: '34%', left: '99%', size: '0.11em', delay: '2s', duration: '2.5s', star: true },
    { top: '92%', left: '38%', size: '0.07em', delay: '0.8s', duration: '3s', star: false },
    { top: '76%', left: '90%', size: '0.07em', delay: '2.7s', duration: '2.2s', star: false },
    { top: '64%', left: '-2%', size: '0.09em', delay: '1.8s', duration: '2.6s', star: true },
    { top: '-12%', left: '44%', size: '0.1em', delay: '1s', duration: '2.8s', star: true },
    { top: '-18%', left: '90%', size: '0.07em', delay: '0.1s', duration: '2.3s', star: false },
    { top: '22%', left: '-7%', size: '0.07em', delay: '2.3s', duration: '2.9s', star: false },
    { top: '104%', left: '66%', size: '0.09em', delay: '1.6s', duration: '2.5s', star: true },
    { top: '48%', left: '104%', size: '0.06em', delay: '0.6s', duration: '2.7s', star: false },
    { top: '-16%', left: '60%', size: '0.09em', delay: '2.1s', duration: '2.4s', star: true },
    { top: '8%', left: '30%', size: '0.06em', delay: '1.2s', duration: '2.6s', star: false },
    { top: '100%', left: '12%', size: '0.1em', delay: '0.5s', duration: '2.8s', star: true },
    { top: '88%', left: '102%', size: '0.07em', delay: '2.9s', duration: '2.3s', star: false },
  ],
}

// Metallic shimmer word with tiny twinkling accents (CSS-only, see index.css)
function SparkleWord({ variant, children }) {
  return (
    <span className={`sparkleText ${variant}Text`}>
      {children}
      {HEADING_SPARKLES[variant].map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`sparkle ${s.star ? 'sparkle--star' : 'sparkle--dot'}`}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </span>
  )
}

function createParticles() {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    driftX: Math.random() * 30 - 15,
  }))
}

function Particles() {
  const [particles] = useState(createParticles)

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: colors.goldLight,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px rgba(232, 213, 163, 0.8)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, p.driftX, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

// ─── Animated Bar Image (gold ↔ silver every 10s) ────────────────────────────
const BAR_SWAP_INTERVAL = 3000 // ms each metal stays on screen

const BAR_VARIANTS = [
  {
    src: goldBarImage,
    alt: 'Premium gold bar',
    glow: 'drop-shadow(0 30px 60px rgba(209,165,80,0.35))',
  },
  {
    src: silverBarImage,
    alt: 'Premium silver bar',
    glow: 'drop-shadow(0 30px 60px rgba(190,200,215,0.35))',
  },
]

function GoldBarImage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % BAR_VARIANTS.length)
    }, BAR_SWAP_INTERVAL)
    return () => clearInterval(id)
  }, [])

  const bar = BAR_VARIANTS[index]

  return (
    <AnimatePresence mode="sync">
      <motion.img
        key={index}
        src={bar.src}
        alt={bar.alt}
        loading="eager"
        draggable={false}
        // Fade between metals while a continuous floating drift in all four
        // directions (left, right, up, down) plays on a loop.
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 22, 0, -22, 0],
          y: [0, -16, 0, 16, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 1.2, ease: 'easeInOut' },
          x: { duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
          y: { duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
          rotate: { duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
        }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: bar.glow,
          willChange: 'transform, opacity',
        }}
      />
    </AnimatePresence>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const headingSize = isMobile ? '2.35rem' : 'clamp(3.5rem, 5.5vw, 6.5rem)'

  return (
    <section
      className="responsive-section hero-section"
      style={{
        position: 'relative',
        minHeight: isMobile ? 'auto' : 'min(100vh, 820px)',
        backgroundColor: colors.bg,
        display: 'flex',
        alignItems: 'center',
        paddingTop: isMobile ? '100px' : '24px',
        paddingBottom: isMobile ? '36px' : '0',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      <Particles />

      {/* Background Editorial Watermark */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: yParallax,
          marginTop: '-5vh',
          fontSize: 'clamp(8rem, 22vw, 26rem)',
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          color: '#ffffff',
          opacity: 0.02,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        FREYA
      </motion.div>

      {/* Vertical Navigation Line (Left) */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            left: '3rem',
            top: '0',
            bottom: '0',
            width: '1px',
            backgroundColor: 'rgba(209,165,80,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
              fontFamily: fonts.sans,
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: colors.gold,
              textTransform: 'uppercase',
            }}
          >
            Scroll to Explore
          </motion.span>
        </div>
      )}

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1520px',
          margin: '0 auto',
          padding: isMobile ? '0 clamp(1rem, 5vw, 1.5rem)' : '0 clamp(1.5rem, 2vw, 2.5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '0',
        }}
      >
        {/* LEFT: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: isMobile ? '100%' : '55%',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            zIndex: 3,
          }}
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.2rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: colors.gold, flexShrink: 0 }} />
            <span
              className="hero-tag"
              style={{
                color: colors.gold,
                fontFamily: fonts.sans,
                fontSize: isMobile ? '0.58rem' : '0.7rem',
                letterSpacing: '0.2em',
                fontWeight: 500,
                textTransform: 'uppercase',
                lineHeight: 1.5,
              }}
            >
              {HERO_TAG}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.2rem' }}>
            <h1
              className="hero-title"
              style={{
                fontFamily: fonts.serif,
                color: colors.white,
                fontSize: headingSize,
                lineHeight: 1.05,
                margin: 0,
                fontWeight: 400,
              }}
            >
              The{' '}
              <span style={{ color: colors.white }}>Trusted</span>{' '}
              <SparkleWord variant="gold">Gold</SparkleWord>,{' '}
              <SparkleWord variant="silver">Silver</SparkleWord> &{' '}
              <SparkleWord variant="diamond">Diamond</SparkleWord>{' '}
              Source
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: fonts.sans,
              fontWeight: 300,
              lineHeight: 1.8,
              fontSize: isMobile ? '0.88rem' : '1rem',
              maxWidth: '500px',
              marginBottom: '1.5rem',
            }}
          >
            {HERO_SUBTEXT[0]}
            <br />
            {HERO_SUBTEXT[1]}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            <MotionLink
              className="responsive-action mobile-full-width"
              to="/collections"
              whileHover={{ scale: 1.02, backgroundColor: colors.goldLight, boxShadow: '0 10px 30px -10px rgba(209,165,80,0.5)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: colors.gold,
                color: colors.bg,
                fontFamily: fonts.sans,
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: isMobile ? '0.85rem 2rem' : '1rem 2.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {HERO_BTN_PRIMARY}
            </MotionLink>

            <MotionLink
              className="responsive-action mobile-full-width"
              to="/about"
              whileHover={{ backgroundColor: 'rgba(209,165,80,0.1)', color: colors.goldLight }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: 'transparent',
                color: colors.gold,
                fontFamily: fonts.sans,
                fontWeight: 500,
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: isMobile ? '0.85rem 2rem' : '1rem 2.5rem',
                border: '1px solid rgba(209,165,80,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {HERO_BTN_SECONDARY}
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* RIGHT: Gold Bar Image */}
        <motion.div
          variants={canvasVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: isMobile ? '100%' : '45%',
            flexShrink: 0,
            zIndex: 2,
            height: isMobile ? 'clamp(220px, 54vw, 320px)' : '600px',
            marginTop: isMobile ? '1.25rem' : '0',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <GoldBarImage />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

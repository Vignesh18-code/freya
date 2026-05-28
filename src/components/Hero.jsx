import { useRef, Suspense, useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { colors, fonts, ease } from '../theme'

// ─── Content — edit here only ───────────────────────────────────────────────
const HERO_TAG = 'DIRECT REFINERY SUPPLY | UAE • INDIA • SINGAPORE • HK • BAHRAIN'
const HERO_HEADING_LINE1 = "The World's Most"
const HERO_HEADING_LINE1_ITALIC = 'Trusted Gold, Silver &'
const HERO_HEADING_LINE2 = 'Diamond Source'
const HERO_SUBTEXT =
  'Direct wholesale access to physical gold, silver, and certified diamond Jewellery. Fully insured, globally compliant, and trusted by top retail brands since 1992'
const HERO_BTN_PRIMARY = 'Explore Collections'
const HERO_BTN_SECONDARY = 'Our Story'

// ─── Gold Bar Rotation Controls ─────────────────────────────────────────────
const BASE_X = 2.2
const BASE_Y = 1.1
const BASE_Z = -1.05

const GOLD_BAR_POSITION_X = 0
const GOLD_BAR_POSITION_Y = 0
const GOLD_BAR_POSITION_Z = 0
const GOLD_BAR_SCALE = 1.5

function lerp(a, b, t) {
  return a + (b - a) * t
}

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


function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      })),
    []
  )

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
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

// ─── 3D Gold Bar ─────────────────────────────────────────────────────────────
function GoldBar({ mouse }) {
  const { scene } = useGLTF('/models/goldbar.glb')
  const ref = useRef()

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone()
        child.material.metalness = 1.0
        child.material.roughness = 0.05
        child.material.color.set('#FFD700')
        child.material.emissive.set('#3D2B00')
        child.material.emissiveIntensity = 0.3
        child.material.envMapIntensity = 3.0
        if (child.material.map) child.material.map = null
        child.material.needsUpdate = true
      }
    })
  }, [scene])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const targetX = BASE_X + (mouse ? mouse.current.y * 0.12 : 0)
    const targetY = BASE_Y + Math.sin(t * 0.5) * 0.25 + (mouse ? mouse.current.x * 0.15 : 0)

    const clampedX = Math.max(BASE_X - 0.2, Math.min(BASE_X + 0.2, targetX))
    const clampedY = Math.max(0.7, Math.min(1.5, targetY))

    ref.current.rotation.x = lerp(ref.current.rotation.x, clampedX, 0.04)
    ref.current.rotation.y = lerp(ref.current.rotation.y, clampedY, 0.04)
    ref.current.rotation.z = BASE_Z

    ref.current.position.x = GOLD_BAR_POSITION_X
    ref.current.position.y = GOLD_BAR_POSITION_Y + Math.sin(t * 0.7) * 0.08
    ref.current.position.z = GOLD_BAR_POSITION_Z
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={GOLD_BAR_SCALE}
      position={[GOLD_BAR_POSITION_X, GOLD_BAR_POSITION_Y, GOLD_BAR_POSITION_Z]}
      rotation={[BASE_X, BASE_Y, BASE_Z]}
    />
  )
}

// ─── 3D Scene ────────────────────────────────────────────────────────────────
function Model3DScene({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 4.5], fov: 38 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent', touchAction: 'none' }}
      resize={{ scroll: false, debounce: { scroll: 0, resize: 200 } }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 2]} intensity={6} color="#FFD700" />
        <directionalLight position={[-3, 2, -2]} intensity={2} color="#FFC200" />
        <spotLight position={[0, 6, 5]} intensity={5} color="#FFF2B2" angle={0.5} penumbra={1} />
        <Environment preset="warehouse" />
        <GoldBar mouse={mouse} />
      </Suspense>
    </Canvas>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isMobile])

  const headingSize = isMobile ? '2.6rem' : 'clamp(3.5rem, 5.5vw, 6.5rem)'

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: colors.bg,
        display: 'flex',
        alignItems: 'center',
        paddingTop: isMobile ? '90px' : '0',
        paddingBottom: isMobile ? '60px' : '0',
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
          maxWidth: '1440px',
          margin: '0 auto',
          padding: isMobile ? '0 1.5rem' : '0 6rem',
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
              style={{
                fontFamily: fonts.serif,
                color: colors.white,
                fontSize: headingSize,
                lineHeight: 1.05,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {HERO_HEADING_LINE1}{' '}
              <span style={{ fontStyle: 'italic', color: colors.gold, fontWeight: 300 }}>
                {HERO_HEADING_LINE1_ITALIC}
              </span>
              <br />
              {HERO_HEADING_LINE2}
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
              marginBottom: '2rem',
            }}
          >
            {HERO_SUBTEXT}
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
            <motion.button
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
              }}
            >
              {HERO_BTN_PRIMARY}
            </motion.button>

            <motion.button
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
              }}
            >
              {HERO_BTN_SECONDARY}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT: 3D Canvas */}
        <motion.div
          variants={canvasVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: isMobile ? '100%' : '45%',
            flexShrink: 0,
            zIndex: 2,
            height: isMobile ? '320px' : '650px',
            marginTop: isMobile ? '2rem' : '0',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <Model3DScene mouse={isMobile ? null : mouse} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import AboutSection from '../components/AboutSection'
import Products from '../components/Products'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CTABand from '../components/CTABand'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <AboutSection />
      <Products />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTABand />
      <ContactSection />
    </main>
  )
}

export default Home

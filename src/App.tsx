import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Credentials from './sections/Credentials'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

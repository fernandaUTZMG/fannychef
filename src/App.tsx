import { About } from './components/About'
import { ChefPackage } from './components/ChefPackage'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Membership } from './components/Membership'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { WhatsAppButton } from './components/WhatsAppButton'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <ChefPackage />
        <Membership />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

export default App

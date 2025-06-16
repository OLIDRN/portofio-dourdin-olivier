import LenisProvider from './components/LenisProvider'
import Hero from './components/Hero'
import AnimatedBackground from './components/AnimatedBackground'
import ParticlesBackground from './components/ParticlesBackground'
import ProjectsSection from './components/ProjectsSection'
import ProjectsGallery from './pages/ProjectsGallery'
import AboutSection from './components/AboutSection'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <LenisProvider>
      <AnimatedBackground />
      <ParticlesBackground />
      <div className="App" style={{ position: 'relative', zIndex: 2 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProjectsSection />
                <AboutSection />
              </>
            } />
            <Route path="/projets" element={<ProjectsGallery />} />
            <Route path="/projets/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </LenisProvider>
  )
}

export default App

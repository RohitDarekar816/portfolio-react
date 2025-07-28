import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Quote from './components/Quote.tsx'
import TextType from './components/Type.tsx'
import Projects from './components/Projects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
    <Quote />
    <div className="flex items-center justify-center">
    <TextType 
      text={["Text typing effect", "for your websites", "Happy coding!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
    </div>
    <Projects />
  </StrictMode>,
)

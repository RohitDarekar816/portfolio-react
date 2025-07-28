import { useState } from 'react'
import '../index.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');`}
      </style>
      <header className="fira-code w-full flex justify-between items-center px-4 py-3 md:px-12 md:py-5 bg-transparent">
        <div className="text-xl font-bold text-white flex items-center">
          <span>Rohit Darekar</span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#C778DD] mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#C778DD] mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#C778DD] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Nav links */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <span className="text-[#C778DD]">#</span>
          <span className="font-medium text-white">home</span>
          <span className="text-[#C778DD] font-normal">#</span>
          <span className="font-normal text-[#ABB2BF]">works</span>
          <span className="text-[#C778DD] font-normal">#</span>
          <span className="font-normal text-[#ABB2BF]">about-me</span>
          <span className="text-[#C778DD] font-normal">#</span>
          <span className="font-normal text-[#ABB2BF]">contacts</span>
        </nav>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-[#282C33] border border-[#C778DD] rounded-lg shadow-lg flex flex-col items-start p-4 z-50 md:hidden">
            <span className="text-[#C778DD] mb-2">#</span>
            <span className="font-medium text-white mb-2">home</span>
            <span className="text-[#C778DD] font-normal mb-2">#</span>
            <span className="font-normal text-[#ABB2BF] mb-2">works</span>
            <span className="text-[#C778DD] font-normal mb-2">#</span>
            <span className="font-normal text-[#ABB2BF] mb-2">about-me</span>
            <span className="text-[#C778DD] font-normal mb-2">#</span>
            <span className="font-normal text-[#ABB2BF]">contacts</span>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-brand-200 ${isScrolled ? 'bg-brand-50/90 backdrop-blur-md py-4' : 'bg-brand-50 py-6'}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px] flex items-center justify-between">
        <Link to="/" className="flex items-center group font-black text-xl tracking-[0.1em] uppercase">
          <span className="text-brand-950">IFOX</span>
          <span className="text-accent">SOLUTIONS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-xs font-semibold tracking-[0.2em] text-brand-800 uppercase hover:text-brand-950 transition-colors">Services</a>
          <a href="#portfolio" className="text-xs font-semibold tracking-[0.2em] text-brand-800 uppercase hover:text-brand-950 transition-colors">Projects</a>
          <a href="#" className="text-xs font-semibold tracking-[0.2em] text-brand-800 uppercase hover:text-brand-950 transition-colors">About</a>
          <a href="#consultation" className="inline-flex items-center justify-center px-4 py-2 border border-brand-200 text-xs font-semibold tracking-[0.2em] uppercase text-brand-950 hover:bg-brand-950 hover:text-white transition-colors">
            Get Started <ArrowRight className="w-3 h-3 ml-2" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-800 hover:text-brand-950 transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-50 border-b border-brand-200 flex flex-col overflow-hidden"
          >
            <a href="#services" className="text-xs font-semibold tracking-[0.2em] text-brand-800 uppercase p-6 border-b border-brand-200 hover:text-brand-950 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="text-xs font-semibold tracking-[0.2em] text-brand-800 uppercase p-6 border-b border-brand-200 hover:text-brand-950 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#consultation" className="text-xs font-semibold tracking-[0.2em] text-accent uppercase p-6" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

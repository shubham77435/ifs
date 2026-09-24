import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-50 text-brand-950 flex flex-col justify-center min-h-[90vh]">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-300/30 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto relative z-10 max-w-[1920px]">
        <div className="max-w-5xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 text-xs font-semibold uppercase tracking-[0.2em] mb-12 text-brand-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Odoo Certified Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[140px] font-black leading-[0.8] tracking-[-0.03em] mb-12 uppercase"
          >
            Odoo<br/>ERP<br/><span className="text-accent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-brand-800 mb-12 max-w-sm leading-[1.6] uppercase tracking-[0.05em]"
          >
            Expert Odoo ERP implementation, customization, and integration — for businesses that want a unified, scalable system built around how they actually operate.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#consultation" 
            className="absolute hidden md:flex right-8 lg:right-24 top-1/2 -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 rounded-full border border-brand-200 items-center justify-center text-xs lg:text-xs font-semibold tracking-[0.1em] uppercase text-brand-950 hover:bg-brand-950 hover:text-white hover:border-brand-950 transition-all duration-300 z-20 group"
          >
            <div className="text-center">
              <div>Get Free</div>
              <div>Consultation</div>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Stats Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-brand-200 bg-brand-50 py-4 overflow-hidden flex"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Group 1 */}
          <div className="flex items-center gap-12 px-6 text-xs font-semibold text-brand-400 uppercase tracking-[0.3em] shrink-0">
            <span className="flex items-center gap-2">50+ Odoo Implementations</span>
            <span className="flex items-center gap-2">25+ In-House Developers</span>
            <span className="flex items-center gap-2">Community & Enterprise</span>
            <span className="flex items-center gap-2">US · UK · AU · India</span>
            <span className="flex items-center gap-2">99.9% Job Success Score</span>
          </div>
          {/* Group 2 (Duplicate for loop) */}
          <div className="flex items-center gap-12 px-6 text-xs font-semibold text-brand-400 uppercase tracking-[0.3em] shrink-0">
            <span className="flex items-center gap-2">50+ Odoo Implementations</span>
            <span className="flex items-center gap-2">25+ In-House Developers</span>
            <span className="flex items-center gap-2">Community & Enterprise</span>
            <span className="flex items-center gap-2">US · UK · AU · India</span>
            <span className="flex items-center gap-2">99.9% Job Success Score</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

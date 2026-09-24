import { motion } from "motion/react";
import { Award, Star } from "lucide-react";

export function DifferenceSection() {
  return (
    <section className="py-24 bg-brand-50 text-brand-950 overflow-hidden relative border-t border-brand-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-200/50 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Why iFox</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">The iFox Difference</h2>
          <p className="mt-6 text-base text-brand-800 uppercase tracking-[0.05em] max-w-xl mx-auto leading-[1.6]">
            Credentials earned in the market — not on a brochure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-brand-200 mb-16">
          {[
            { stat: "11+", label: "Years of Experience" },
            { stat: "50+", label: "Odoo Implementations" },
            { stat: "25+", label: "In-House Developers" },
            { stat: "99.9%", label: "Job Success Score" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-50 border-b border-r border-brand-200 p-10 text-center hover:bg-white transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-950 mb-4">{item.stat}</div>
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div 
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16"
        >
          <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-800 bg-white px-4 py-2 border border-brand-200"><Award className="w-4 h-4 text-accent" /> Odoo Certified</motion.span>
          <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }} className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-800 bg-white px-4 py-2 border border-brand-200"><Star className="w-4 h-4 text-accent" /> Upwork Top Rated</motion.span>
          <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-800 bg-white px-4 py-2 border border-brand-200"><CheckBadge /> Contra Verified</motion.span>
          <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.7 }} className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-800 bg-white px-4 py-2 border border-brand-200"><Award className="w-4 h-4 text-accent" /> Community & Enterprise</motion.span>
        </div>

        <div className="text-center max-w-screen-xl mx-auto">
          <p className="text-base md:text-base font-normal text-brand-900 leading-[1.6] italic uppercase tracking-[0.05em]">
            "We implement Odoo Community and Enterprise — and we'll tell you honestly which one your business actually needs before you spend a rupee or dollar on licensing."
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckBadge() {
  return (
    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );
}

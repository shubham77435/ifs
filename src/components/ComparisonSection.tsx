import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 bg-brand-50 border-t border-brand-200 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Community vs Enterprise</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Odoo Community or Enterprise — Which Is Right for You?</h2>
          <p className="mt-6 text-base text-brand-800 uppercase tracking-[0.05em] max-w-xl mx-auto leading-[1.6]">
            We implement both. Here's how to decide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-brand-200">
          {/* Community Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 lg:p-14 border-b md:border-b-0 md:border-r border-brand-200 relative bg-brand-50 hover:bg-white transition-colors"
          >
            <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Option / 01</div>
            <h3 className="text-2xl font-bold text-brand-950 mb-2 uppercase tracking-tight">Odoo Community</h3>
            <p className="text-brand-800 text-base mb-10 font-normal pb-8 border-b border-brand-200">Best for SMEs, startups, and cost-conscious businesses.</p>
            
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Software Cost</span>
                  <span className="text-brand-800 text-base font-normal">₹0 / $0 per user — forever</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Core Functionality</span>
                  <span className="text-brand-800 text-base font-normal">~80% of Enterprise features</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Customizability</span>
                  <span className="text-brand-800 text-base font-normal">Fully open-source — deeply customizable</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Hosting</span>
                  <span className="text-brand-800 text-base font-normal">Self-hosted on your own infrastructure</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Support</span>
                  <span className="text-brand-800 text-base font-normal">Community + iFox support</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Enterprise Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 lg:p-14 relative bg-brand-50 hover:bg-white transition-colors"
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-accent text-white text-xs tracking-[0.2em] font-bold uppercase">Recommended</div>
            <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Option / 02</div>
            <h3 className="text-2xl font-bold text-brand-950 mb-2 uppercase tracking-tight">Odoo Enterprise</h3>
            <p className="text-brand-800 text-base mb-10 font-normal pb-8 border-b border-brand-200">Enterprises needing advanced modules & official support.</p>
            
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Software Cost</span>
                  <span className="text-brand-800 text-base font-normal">Per-user monthly licensing fee</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Core Functionality</span>
                  <span className="text-brand-800 text-base font-normal">Full feature set out-of-the-box</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Customizability</span>
                  <span className="text-brand-800 text-base font-normal">Customizable within licensing terms</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Hosting</span>
                  <span className="text-brand-800 text-base font-normal">Odoo.sh, cloud, or self-hosted</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-950 block uppercase text-xs tracking-[0.1em] mb-1">Support</span>
                  <span className="text-brand-800 text-base font-normal">Official Odoo support + iFox</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#consultation" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-brand-500 hover:text-accent transition-colors">
            Book a free consultation <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

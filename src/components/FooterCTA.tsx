import { motion } from "motion/react";
import { Send } from "lucide-react";

export function FooterCTA() {
  return (
    <section id="consultation" className="py-24 bg-brand-50 border-t border-brand-200 text-brand-950 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 border border-brand-200">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-brand-200 flex flex-col justify-center bg-brand-50 hover:bg-white transition-colors"
          >
            <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-8 block">LET'S BUILD YOUR ERP</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Your Odoo Project Starts Here.</h2>
            <p className="text-base text-brand-800 mb-12 leading-[1.6] font-normal">
              Whether you're replacing a legacy system, implementing Odoo for the first time, or scaling an existing instance — let's map the right approach for your business.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="text-accent font-bold text-xs tracking-[0.2em]">01</div>
                <div>
                  <h4 className="font-bold text-base tracking-[0.1em] uppercase mb-1">Book a Consultation</h4>
                  <p className="text-xs text-brand-500 uppercase tracking-[0.1em]">Free 30-min discovery call.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="text-accent font-bold text-xs tracking-[0.2em]">02</div>
                <div>
                  <h4 className="font-bold text-base tracking-[0.1em] uppercase mb-1">Get a Fixed Proposal</h4>
                  <p className="text-xs text-brand-500 uppercase tracking-[0.1em]">Transparent pricing & timeline.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="text-accent font-bold text-xs tracking-[0.2em]">03</div>
                <div>
                  <h4 className="font-bold text-base tracking-[0.1em] uppercase mb-1">Kickoff & Build</h4>
                  <p className="text-xs text-brand-500 uppercase tracking-[0.1em]">We start mapping and configuring.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 lg:p-20 bg-brand-50 text-brand-950 relative hover:bg-white transition-colors"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-semibold text-brand-800 uppercase tracking-[0.2em] mb-2">Name *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-brand-200 focus:outline-none focus:border-accent transition-colors text-base font-normal text-brand-950 rounded-none" placeholder="John Doe" required />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-semibold text-brand-800 uppercase tracking-[0.2em] mb-2">Work Email *</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-brand-200 focus:outline-none focus:border-accent transition-colors text-base font-normal text-brand-950 rounded-none" placeholder="john@company.com" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-800 uppercase tracking-[0.2em] mb-2">Company Size</label>
                <select className="w-full px-4 py-3 bg-white border border-brand-200 focus:outline-none focus:border-accent transition-colors text-base font-normal text-brand-950 appearance-none rounded-none">
                  <option className="bg-white">1–10 employees</option>
                  <option className="bg-white">11–50 employees</option>
                  <option className="bg-white">51–200 employees</option>
                  <option className="bg-white">200+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-800 uppercase tracking-[0.2em] mb-2">Current System</label>
                <select className="w-full px-4 py-3 bg-white border border-brand-200 focus:outline-none focus:border-accent transition-colors text-base font-normal text-brand-950 appearance-none rounded-none">
                  <option className="bg-white">Excel / Manual</option>
                  <option className="bg-white">QuickBooks</option>
                  <option className="bg-white">Tally</option>
                  <option className="bg-white">SAP</option>
                  <option className="bg-white">Other ERP</option>
                  <option className="bg-white">None</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-800 uppercase tracking-[0.2em] mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white border border-brand-200 focus:outline-none focus:border-accent transition-colors resize-none text-base font-normal text-brand-950 rounded-none" placeholder="Tell us a bit about your workflows..."></textarea>
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white bg-accent hover:bg-brand-950 transition-colors tracking-[0.2em] uppercase mt-8 rounded-none">
                Submit Request
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-brand-50 border-t border-brand-200 pt-16 pb-8">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <Link to="/" className="flex items-center mb-8 group font-black text-xl tracking-[0.1em] uppercase">
              <span className="text-brand-950">IFOX</span>
              <span className="text-accent">SOLUTIONS</span>
            </Link>
            <p className="text-brand-800 max-w-sm leading-[1.6] mb-8 text-base font-normal">
              Odoo Community & Enterprise implementation for businesses that want to scale without the chaos.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-brand-800 uppercase tracking-[0.2em]">
              <span>Odoo Certified</span>
              <span>·</span>
              <span>11+ Years</span>
              <span>·</span>
              <span>25+ Devs</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-brand-950 text-xs tracking-[0.2em] font-bold uppercase mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">Odoo Implementation</a></li>
              <li><a href="#" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">Odoo Customization</a></li>
              <li><a href="#" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">ERP Integration</a></li>
              <li><a href="#" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">Data Migration</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-brand-950 text-xs tracking-[0.2em] font-bold uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#consultation" className="text-xs uppercase tracking-[0.1em] text-brand-800 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-brand-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-brand-800 text-xs uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} iFox Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-800 hover:text-accent text-xs uppercase tracking-[0.1em] transition-colors">Privacy</a>
            <a href="#" className="text-brand-800 hover:text-accent text-xs uppercase tracking-[0.1em] transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

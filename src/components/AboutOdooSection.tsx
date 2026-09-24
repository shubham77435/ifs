import { motion } from "motion/react";
import { Package, Calculator, Users, ShoppingCart, BarChart3, Database } from "lucide-react";

export function AboutOdooSection() {
  const features = [
    { icon: <Calculator className="w-5 h-5" />, name: "Accounting" },
    { icon: <Package className="w-5 h-5" />, name: "Inventory" },
    { icon: <Users className="w-5 h-5" />, name: "HR & Payroll" },
    { icon: <ShoppingCart className="w-5 h-5" />, name: "Sales & CRM" },
    { icon: <BarChart3 className="w-5 h-5" />, name: "Marketing" },
    { icon: <Database className="w-5 h-5" />, name: "Manufacturing" },
  ];

  return (
    <section className="py-24 bg-brand-50 border-t border-brand-200 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">The Context</span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase mb-6">What is Odoo?</h2>
            <p className="text-lg text-brand-900 font-normal leading-[1.6] mb-6">
              Odoo is a fully integrated, open-source suite of business applications designed to run your entire company. 
            </p>
            <p className="text-base text-brand-800 leading-[1.6] mb-8">
              Instead of juggling a dozen different, expensive software subscriptions that don't talk to each other, Odoo unifies your CRM, eCommerce, accounting, inventory, point of sale, and project management into a single, seamless platform.
            </p>
            <div className="grid grid-cols-3 gap-0 border-t border-l border-brand-200">
               <div className="p-4 bg-white border-b border-r border-brand-200 text-center">
                  <div className="text-2xl font-black text-brand-950 mb-1">80+</div>
                  <div className="text-xs uppercase tracking-[0.1em] text-brand-800 font-semibold">Official Apps</div>
               </div>
               <div className="p-4 bg-white border-b border-r border-brand-200 text-center">
                  <div className="text-2xl font-black text-brand-950 mb-1">40k+</div>
                  <div className="text-xs uppercase tracking-[0.1em] text-brand-800 font-semibold">Community Apps</div>
               </div>
               <div className="p-4 bg-white border-b border-r border-brand-200 text-center">
                  <div className="text-2xl font-black text-brand-950 mb-1">12M+</div>
                  <div className="text-xs uppercase tracking-[0.1em] text-brand-800 font-semibold">Users Globally</div>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-0 border-t border-l border-brand-200 bg-brand-50"
          >
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                className="aspect-square border-b border-r border-brand-200 flex flex-col items-center justify-center p-6 hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-950 mb-4">
                  {feat.icon}
                </div>
                <span className="text-xs uppercase tracking-[0.1em] font-semibold text-brand-900 text-center">{feat.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

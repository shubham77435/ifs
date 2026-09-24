import { motion } from "motion/react";

const industries = [
  "Manufacturing & MRP",
  "Wholesale & Distribution",
  "Retail & eCommerce",
  "Logistics & Supply Chain",
  "Professional Services",
  "Healthcare & Clinics",
  "Education & Training",
  "Construction & Real Estate",
  "Food & Beverage",
  "Non-Profit & NGO",
  "Trading & Import/Export",
  "Finance & Accounting Firms"
];

export function IndustryExpertiseSection() {
  return (
    <section className="py-24 bg-brand-50 text-brand-950 border-y border-brand-200">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Expert</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Specialized Expertise Across Industries</h2>
          <p className="mt-6 text-base text-brand-800 uppercase tracking-[0.05em] leading-[1.6]">
            Odoo works differently across industries. We've implemented it across enough of them to know exactly what each one needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-brand-200">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-brand-50 border-b border-r border-brand-200 p-6 text-center hover:bg-white transition-colors cursor-default flex items-center justify-center"
            >
              <span className="font-semibold text-xs text-brand-900 tracking-[0.1em] uppercase">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

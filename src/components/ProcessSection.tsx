import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Business Audit",
    description: "We begin with a deep-dive into your business — current processes, pain points, data structures, and growth goals. We map every operational workflow against Odoo's module capabilities to define exactly what needs to be built, configured, or customized."
  },
  {
    number: "02",
    title: "Solution Architecture & SOW",
    description: "Based on discovery, we draft a precise Statement of Work covering module scope, customization requirements, integration points, data migration plan, and timeline. Nothing starts without your sign-off on a fixed, transparent scope."
  },
  {
    number: "03",
    title: "Configuration & Customization",
    description: "Our Odoo developers configure the system to your specifications — setting up modules, building custom fields and workflows, writing bespoke Python code where needed, and white-labeling the interface to your brand."
  },
  {
    number: "04",
    title: "Data Migration & Integration",
    description: "We extract, cleanse, and migrate your historical data from legacy systems — QuickBooks, Excel, SAP, or custom databases — with zero data loss. Third-party integrations are built and tested before go-live."
  },
  {
    number: "05",
    title: "Testing & User Acceptance",
    description: "Comprehensive QA across all modules and user scenarios. We run a structured UAT phase with your team — parallel running with your current system where needed — before signing off on go-live readiness."
  },
  {
    number: "06",
    title: "Go-Live & Support",
    description: "We manage the go-live transition and provide hands-on post-launch support — including role-specific training sessions, quick-start guides, and a structured hypercare period to resolve any issues fast."
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-brand-50 border-t border-brand-200 relative">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Process</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Our Strategic Framework</h2>
        </div>

        <ol className="relative border-l border-brand-200 ml-3 md:ml-6 space-y-0">
          {steps.map((step, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pl-8 md:pl-16 relative py-8 border-b border-brand-200 last:border-0 hover:bg-white transition-colors group"
            >
              <div className="absolute w-3 h-3 bg-brand-50 border-2 border-accent rounded-full -left-[6px] top-12 md:top-14 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(255,62,0,0.2)] z-10" />
              <div className="pt-2">
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-2 block">Phase {step.number}</span>
                <h3 className="text-lg font-bold text-brand-950 mb-3 uppercase tracking-[0.1em]">{step.title}</h3>
                <p className="text-brand-800 leading-[1.6] text-base font-normal">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

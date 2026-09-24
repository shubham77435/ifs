import { motion } from "motion/react";

const faqs = [
  {
    question: "What is Odoo and why should I consider it for my business?",
    answer: "Odoo is an open-source, modular ERP platform that unifies your entire business — sales, purchasing, inventory, accounting, HR, manufacturing, and more — into a single system. Unlike traditional ERP software, Odoo is highly customizable, available in a free Community edition, and scales from 5-person SMEs to 5,000-person enterprises. Businesses choose Odoo because it eliminates the data silos and manual re-entry that slow growing operations down, without the six-figure licensing costs of SAP or Oracle."
  },
  {
    question: "What is the difference between Odoo Community and Odoo Enterprise?",
    answer: "Odoo Community is the free, open-source version that covers approximately 80% of the functionality most businesses need — with zero per-user licensing cost, ever. Odoo Enterprise adds advanced modules (full accounting, payroll, field service, sign, marketing automation), official Odoo support, and mobile apps, but requires a monthly per-user subscription. We implement both and will recommend the right one based on your specific module requirements and budget — without any bias toward the higher-cost option."
  },
  {
    question: "How long does an Odoo implementation take?",
    answer: "A standard Odoo implementation for an SME with 3–5 core modules typically takes 6–12 weeks from kickoff to go-live. Complex implementations with heavy customization, multiple integrations, or large data migrations can take 16–24 weeks. We define scope and timelines clearly in the Statement of Work before any development begins — so there are no surprises mid-project."
  },
  {
    question: "How much does Odoo implementation cost?",
    answer: "Implementation cost depends on scope, number of modules, level of customization, and data migration complexity. A standard Odoo Community implementation for a small business typically starts from $3,000–$8,000 USD. Mid-market implementations with custom modules and integrations range from $10,000–$30,000. Enterprise implementations vary further. We provide a fixed-price proposal after discovery — no open-ended billing. Our rates are 40–60% below equivalent US or UK Odoo partners with no compromise on quality."
  },
  {
    question: "Can you migrate our data from our existing system to Odoo?",
    answer: "Yes — data migration is a core part of every implementation we deliver. We extract data from your current system (QuickBooks, Tally, SAP, Excel, or custom databases), cleanse and standardize it, map it to Odoo's data structures, and import it with full validation before go-live. We never go live until your historical data — customers, vendors, products, open balances, and inventory — is fully verified in the new system."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-brand-50 border-t border-brand-200 relative">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-screen-xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Common questions before every Odoo project</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Questions We Get Before Every Odoo Project</h2>
        </div>

        {/* FAQ Schema Markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}} />

        <div className="space-y-0 border-t border-brand-200">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-brand-50 p-8 md:p-10 border-b border-l border-r border-brand-200 hover:bg-white transition-colors"
            >
              <h3 className="text-lg font-bold text-brand-950 mb-4 uppercase tracking-[0.1em]">{faq.question}</h3>
              <p className="text-brand-800 leading-[1.6] text-base font-normal">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

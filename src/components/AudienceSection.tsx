import { motion } from "motion/react";
import { Building2, Users2, CheckCircle2, ArrowRight } from "lucide-react";

export function AudienceSection() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden border-t border-brand-200">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px] relative z-10">
        <div className="text-center max-w-screen-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Built for Growing Businesses.<br/>Trusted by Agencies.</h2>
          <p className="mt-6 text-base text-brand-800 uppercase tracking-[0.05em] max-w-2xl mx-auto leading-[1.6]">
            Whether you're replacing a broken system, scaling your operations, or delivering ERP projects for clients — iFox has the expertise to deliver.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-brand-200">
          {/* For Businesses */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-50 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-brand-200 hover:bg-white transition-colors"
          >
            <div className="inline-flex items-center justify-center text-accent mb-8">
              <Building2 className="w-8 h-8" />
            </div>
            <span className="block text-xs text-accent font-semibold tracking-[0.2em] uppercase mb-4">Option / 01 — For Businesses</span>
            <h3 className="text-2xl font-bold text-brand-950 mb-4 uppercase tracking-tight">One System. Every Department. Zero Chaos.</h3>
            <p className="text-brand-800 text-base mb-10 pb-8 border-b border-brand-200 font-normal leading-[1.6]">
              You need an ERP partner who understands your industry, maps your workflows accurately, and builds a system your team will actually use — not abandon six months after go-live.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Community or Enterprise — we implement both",
                "Fixed-scope, transparent pricing — no surprise bills",
                "Industry-specific module configuration",
                "Training and ongoing support included"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-brand-800 text-base font-normal">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#consultation" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-brand-950 hover:text-accent transition-colors">
              Book a Free ERP Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* For Agencies */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-50 p-10 lg:p-14 hover:bg-white transition-colors"
          >
            <div className="inline-flex items-center justify-center text-brand-400 mb-8">
              <Users2 className="w-8 h-8" />
            </div>
            <span className="block text-xs text-brand-500 font-semibold tracking-[0.2em] uppercase mb-4">Option / 02 — For Agencies</span>
            <h3 className="text-2xl font-bold text-brand-950 mb-4 uppercase tracking-tight">White-Label Odoo Delivery You Can Rely On.</h3>
            <p className="text-brand-800 text-base mb-10 pb-8 border-b border-brand-200 font-normal leading-[1.6]">
              Need a specialist Odoo team behind your client relationships? We deliver white-label, on-brief, and on-time — with full NDA and direct Slack communication.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "White-label Odoo implementation and customization",
                "Direct comms via Slack or your PM tool",
                "NDA-ready and white-glove delivery",
                "Flexible retainer and project pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span className="text-brand-800 text-base font-normal">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#partner" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-brand-500 hover:text-brand-950 transition-colors">
              Partner With Us <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

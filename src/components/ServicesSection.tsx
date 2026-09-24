import { motion } from "motion/react";
import { Settings, Code2, LineChart, Database, Network, HeadphonesIcon } from "lucide-react";

const services = [
  {
    title: "Odoo ERP Implementation",
    description: "Full-cycle Odoo implementation — from business process mapping and module configuration to data migration, staff training, and go-live support. Community and Enterprise editions covered.",
    icon: <Settings className="w-6 h-6 text-accent" />
  },
  {
    title: "Odoo Customization",
    description: "Tailoring Odoo to fit your exact workflows — custom modules, bespoke reports, modified views, and workflow automation built in Python to extend Odoo beyond its out-of-the-box capabilities.",
    icon: <Code2 className="w-6 h-6 text-accent" />
  },
  {
    title: "Odoo Consulting",
    description: "Strategic ERP consulting to help you choose the right edition, right modules, and right implementation approach for your business size, industry, and budget — before you commit to anything.",
    icon: <LineChart className="w-6 h-6 text-accent" />
  },
  {
    title: "Odoo Migration",
    description: "Migrating from an older Odoo version or a legacy ERP system? We handle complete data migration, module upgrades, and configuration transfers with zero data loss and minimal downtime.",
    icon: <Database className="w-6 h-6 text-accent" />
  },
  {
    title: "Odoo Integration",
    description: "Connecting Odoo to your existing tech stack — ecommerce platforms, payment gateways, shipping providers, CRMs, accounting tools, and custom APIs — for a single unified business system.",
    icon: <Network className="w-6 h-6 text-accent" />
  },
  {
    title: "Odoo Support & Maintenance",
    description: "Post-go-live technical support, performance monitoring, bug fixes, module updates, and user training — so your Odoo instance stays stable, secure, and aligned with your growing business.",
    icon: <HeadphonesIcon className="w-6 h-6 text-accent" />
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-50 border-t border-brand-200">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="text-left mb-16 px-4 md:px-10">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">End-to-End Odoo ERP Services</h2>
          <p className="mt-6 text-base text-brand-800 uppercase tracking-[0.05em] max-w-2xl leading-[1.6]">
            From initial consultation to go-live and beyond — complete Odoo development and implementation services for growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-50 p-10 border-b border-r border-brand-200 hover:bg-white transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="mb-8 text-brand-400 group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-950 mb-4 uppercase tracking-[0.1em]">{service.title}</h3>
                <p className="text-brand-800 text-base leading-[1.6] mb-8 font-normal">
                  {service.description}
                </p>
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] text-accent uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1} / Service
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

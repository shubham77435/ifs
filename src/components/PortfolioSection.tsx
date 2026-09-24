import { motion } from "motion/react";
import { ArrowRight, Box, ShieldCheck, Factory } from "lucide-react";

const projects = [
  {
    title: "SkyDash ERP",
    category: "Custom ERP — Operations & Project Management",
    description: "iFox's own internal ERP system built on a custom stack — covering project tracking, team management, billing, resource allocation, and performance reporting across 25+ developers.",
    tags: ["Custom ERP", "Dashboard", "Internal Tool"],
    icon: <Box className="w-8 h-8 text-brand-950" />,
    color: "bg-brand-50"
  },
  {
    title: "Canadian NGO ERP",
    category: "Non-Profit Operations Platform",
    description: "A bespoke ERP system for a Canadian NGO managing donor records, program tracking, volunteer coordination, and multi-department financial reporting — deployed on private cloud infrastructure.",
    tags: ["Odoo Implementation", "Custom Modules", "Canada"],
    icon: <ShieldCheck className="w-8 h-8 text-brand-950" />,
    color: "bg-brand-50"
  },
  {
    title: "Manufacturing & Inventory ERP",
    category: "Manufacturing — Inventory & MRP",
    description: "Full Odoo Community implementation for a mid-sized manufacturer — covering purchase orders, inventory routing, production planning, quality control, and financial reporting in a single system.",
    tags: ["Odoo Community", "MRP", "Inventory"],
    icon: <Factory className="w-8 h-8 text-brand-950" />,
    color: "bg-brand-50"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-brand-50 border-t border-brand-200 text-brand-950 relative">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4 md:px-10">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Live Projects</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Recent Odoo Implementations.</h2>
            <p className="mt-6 text-base text-brand-800 uppercase tracking-[0.05em] max-w-xl leading-[1.6]">
              A sample of ERP systems we've built and deployed — across industries and geographies.
            </p>
          </div>
          <button className="shrink-0 inline-flex items-center text-xs tracking-[0.2em] uppercase font-semibold text-brand-500 hover:text-accent transition-colors">
            View all case studies <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-brand-200">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-brand-50 border-b border-r border-brand-200 flex flex-col hover:bg-white transition-colors"
            >
              <div className={`h-48 border-b border-brand-200 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-brand-100/50 group-hover:bg-transparent transition-colors duration-500" />
                <motion.div whileHover={{ scale: 1.1 }} className="z-10 relative opacity-40 group-hover:opacity-100 transition-opacity">
                  {project.icon}
                </motion.div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">0{index + 1} / {project.category.split('—')[0]}</span>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-[0.1em]">{project.title}</h3>
                <p className="text-brand-800 mb-8 flex-1 text-base leading-[1.6] font-normal">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs uppercase tracking-[0.1em] font-medium px-2 py-1 bg-brand-100 text-brand-900 border border-brand-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] text-brand-500 uppercase group-hover:text-accent transition-colors">
                  View Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "After 20+ projects, still the only dev team I trust fully.",
    author: "Repeat Agency Client",
    role: "4+ year partnership"
  },
  {
    quote: "Finally, a developer who gets the brief the first time.",
    author: "Marketing Agency Owner",
    role: "United States"
  },
  {
    quote: "Rescued two projects I was about to lose.",
    author: "Lukas Russell",
    role: "Project Manager"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-50 border-t border-brand-200 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-[1920px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">Proof</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-950 tracking-tighter uppercase">Don't Take Our Word For It</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-brand-200">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-50 p-10 border-b border-r border-brand-200 relative hover:bg-white transition-colors flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-brand-300 mb-8" />
              <p className="text-lg text-brand-800 font-medium mb-12 leading-[1.6]">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold text-brand-950 text-base uppercase tracking-[0.1em]">{t.author}</div>
                <div className="text-xs text-brand-500 uppercase tracking-[0.2em] mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

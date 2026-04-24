import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  content: string;
}

export const Section = ({ title, content }: SectionProps) => {
  return (
    <section className="h-screen flex items-center px-10 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl pointer-events-none"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase italic">
          {title}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">{content}</p>
      </motion.div>
    </section>
  );
};

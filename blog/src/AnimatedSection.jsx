import { motion } from 'framer-motion';

export function AnimatedSection({ children, delay = 0, className = '', id, onClick }) {
  const shouldHover = className?.includes('projectbox');
  return (
    <motion.div
      id={id}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={shouldHover ? { duration: 0.1 } : { duration: 0.6, delay }}
      viewport={{ once: false}}
      whileHover={shouldHover ? { y: -10 } : {}}

    >
      {children}
    </motion.div>
  );
}
import { motion } from 'framer-motion';

export function AnimatedSection({ children, delay = 0, className = '', id, onClick }) {
  return (
    <motion.div
      id={id}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false}}
    >
      {children}
    </motion.div>
  );
}
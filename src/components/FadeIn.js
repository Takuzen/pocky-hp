import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

import { motion } from "framer-motion";
export default function product({ product }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      Layout
    >
      <h6>{product.title}</h6>
      <img src={product.image} alt="" />
    </motion.div>
  );
}

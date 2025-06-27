import React from 'react';
import { motion } from 'framer-motion';

function Solutions() {
  return (
    <motion.div
  className="page"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  >
      <h1>Home</h1>
      <p>This is the Solutions page.</p>
    </motion.div>
  );
}
export default Solutions;
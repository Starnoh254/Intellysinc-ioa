import React from 'react';
import { motion } from 'framer-motion';

function Clients() {
  return (
    <motion.div
  className="page"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  >
      <h1>Home</h1>
      <p>This is the Clients page.</p>
    </motion.div>
  );
}
export default Clients;
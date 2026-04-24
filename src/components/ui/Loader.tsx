import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div>
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center text-white"
          >
            <h1 className="text-8xl font-thin">{count}%</h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

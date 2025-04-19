// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-yellow-200 to-pink-300 flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome to Fruit Bliss 🍇🍍
      </motion.h1>
      <p className="text-lg mt-4 text-white">Fresh. Colorful. Delicious.</p>
      <button className="mt-6 px-6 py-3 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-100 transition">
        Order Now
      </button>
    </section>
  );
}

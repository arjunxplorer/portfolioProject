import {motion } from 'framer-motion';

export function Home() {
  return (
    <>

    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1552933529-e359b2477252?auto=format&fit=crop&q=80"
          alt="Photographer Silhouette"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-7xl md:text-9xl tracking-wide"style={{ marginBottom: '0.5rem' }}
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-3xl md:text-3xl font-serif"
          >
              VIDEOGRAPHY | PHOTOGRAPHY | DESIGN

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            By Joey Desir
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12"
          >
            <div className="inline-block border border-white/20 rounded-full px-6 py-2 text-sm tracking-wider">
              About me
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* Animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"
      />
    </div>
    </>
  );
}

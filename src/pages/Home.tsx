import {motion } from 'framer-motion';

export function Home() {
  return (
    <>

    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 20 }}
        animate={{ scale: 1, opacity: 20 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="./bg_image.png"
          alt="Photographer Silhouette"
          className="w-full h-full object-fit opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center md:px-24 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center md:text-left px-4 md:px-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl tracking-wide"
            style={{ marginBottom: '0.5rem' }}
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-3xl font-serif"
          >
            VIDEOGRAPHY | PHOTOGRAPHY | DESIGN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mt-2"
          >
            By Joey Desir
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 flex flex-col items-center md:items-start space-y-6"
          >
            <div className="inline-block border border-white/20 rounded-full px-6 py-2 text-sm tracking-wider hover:bg-white/10 transition-colors">
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


import { motion } from 'framer-motion';
import { SocialLinks } from '../components/SocialLinks';

export function About() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
              alt="Photographer at work"
              className="object-cover w-full h-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none"
            />
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif text-white"
            >
              About Me
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-gray-300"
            >
              <p className="leading-relaxed">
                With over a decade of experience capturing life's most precious moments,
                I've developed a distinctive style that blends classic photography
                techniques with modern storytelling.
              </p>

              <p className="leading-relaxed">
                My journey began in the darkroom, where I learned to appreciate the
                subtle interplay of light and shadow. Today, I bring that same attention
                to detail to every project, whether I'm shooting a intimate portrait
                or directing a short film.
              </p>

              <p className="leading-relaxed">
                When I'm not behind the camera, you'll find me exploring remote
                landscapes or teaching photography workshops to aspiring artists.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <h2 className="text-white text-lg mb-4 font-serif">Connect with me</h2>
              <SocialLinks />

            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

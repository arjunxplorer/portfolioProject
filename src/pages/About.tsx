
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
            className="relative aspect-[4/4] overflow-hidden rounded-lg"
          >
            <img
              src="/aboutme.png"
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
              When my mom gave me a little digital camera in 5th grade, I almost immediately started creating fun YouTube videos. Those first reels weren’t anything special, but I was persistent! Now, nearly 10 years later, I still love holding a camera. The camera certainly wasn’t the only thing that my mom has given me in my life. She is the most creative person I know, and I have followed her footsteps by using my imagination as much as I can. Classmates have often looked to me when they need fresh ideas because I’ve been blessed to have the ability to think outside the box. Creativity has been something I have enjoyed my whole life and looking forward, I want to use creativity every day.

Most people know me for being an athlete; the strong work ethic, competitiveness,  leadership, and the pursuit of excellence on and off the field. Although I have loved playing sports my whole life, I think a better way to describe me is completely, 100% sold out for Jesus. My main passion in this short life is to live for the Lord, get to know Him, serve Him, and lead others to saving knowledge of the Gospel.




              </p>

              <p className="leading-relaxed">
              joey
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

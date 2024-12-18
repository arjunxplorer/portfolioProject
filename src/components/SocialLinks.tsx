import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Instagram size={24} />,
      href: 'https://www.instagram.com/desir.joey/',
      label: 'Instagram'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/joey-desir-380b36262/',
      label: 'LinkedIn'
    }
  ];

  return (
    <div className="flex space-x-6">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}

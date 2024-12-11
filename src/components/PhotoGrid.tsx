import React from 'react';
import { motion } from 'framer-motion';

interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group aspect-square overflow-hidden bg-gray-100"
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-white text-lg font-serif">{photo.title}</h3>
              <p className="text-gray-300 text-sm">{photo.category}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
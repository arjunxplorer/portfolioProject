import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  youtubeUrl: string;
}

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {videos.map((video) => (
        <motion.a
          key={video.id}
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group aspect-video overflow-hidden bg-gray-100"
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Play className="text-white w-16 h-16" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-lg font-serif">{video.title}</h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
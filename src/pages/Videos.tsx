import React from 'react';
import { VideoGrid } from '../components/VideoGrid';

const videos = [
  {
    id: '1',
    title: 'City Lights',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://www.youtube.com/watch?v=example1'
  },
  {
    id: '2',
    title: 'Nature\'s Dance',
    thumbnailUrl: 'https://images.unsplash.com/photo-1682686580003-82051c652248?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://www.youtube.com/watch?v=example2'
  },
  // Add more sample videos as needed
];

export function Videos() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-white px-4 mb-8">Films</h1>
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
}
import React from 'react';
import { PhotoGrid } from '../components/PhotoGrid';

const photos = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80',
    title: 'Urban Shadows',
    category: 'Street Photography'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80',
    title: 'Natural Portraits',
    category: 'Portrait'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
    title: 'Mountain Majesty',
    category: 'Landscape'
  },
  // Add more sample photos as needed
];

export function Photos() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-white px-4 mb-8">Photographs</h1>
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}
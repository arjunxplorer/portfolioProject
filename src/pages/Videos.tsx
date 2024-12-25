
import { VideoGrid } from '../components/VideoGrid';

const videos = [
  {
    id: '1',
    title: 'Personal Short Film | Shot and Edited',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://www.youtube.com/watch?v=RW5ac3nyhbw'
  },
  {
    id: '2',
    title: '3-Day Retreat | 3 Same-Day Videos Produced | 1 of 2 Filmers and Editor',
    thumbnailUrl: 'https://images.unsplash.com/photo-1682686580003-82051c652248?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://youtube.com/playlist?list=PLNRBxvcpvjCASUWU1FcrvFOXpvancU0kZ&si=SPHJj8tEm492Q7wR'
  },
  {
    id: '3',
    title: 'College Athletics Banquet Recap | Shot and Edited',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://www.youtube.com/watch?v=wxJbB13mtW4&t=36s'
  },
  {
    id: '4',
    title: 'Service Project Recap | Shot and Edited',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://youtu.be/n3ccH8DzA7Y'
  },
  {
    id: '5',
    title: 'Cheer Team Hype Video | Shot and Edited',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://www.youtube.com/watch?v=MpFGTYwP_7o'
  },
  {
    id: '6',
    title: 'Personal Short Film | Editor',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    youtubeUrl: 'https://www.youtube.com/watch?v=_yLHTkKAawo'
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

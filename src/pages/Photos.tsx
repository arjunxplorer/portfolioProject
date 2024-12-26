
import { PhotoGrid } from '../components/PhotoGrid';


const photos = [
    {
      id: '1',
      url: './photo portfolio/gallery_image (24).JPG',
      title: 'Gallery Image 24',
      category: 'Photo'
    },
    {
      id: '2',
      url: './photo portfolio/gallery_image (51).JPG',
      title: 'Gallery Image 51',
      category: 'Photo'
    },
    {
      id: '3',
      url: './photo portfolio/gallery_image (58).JPG',
      title: 'Gallery Image 58',
      category: 'Photo'
    },
    {
      id: '4',
      url: './photo portfolio/gallery_image (64).JPG',
      title: 'Gallery Image 64',
      category: 'Photo'
    },
    {
      id: '5',
      url: './photo portfolio/gallery_image (70).JPG',
      title: 'Gallery Image 70',
      category: 'Photo'
    },
    {
      id: '6',
      url: './photo portfolio/gallery_image (83).JPG',
      title: 'Gallery Image 83',
      category: 'Photo'
    },
    {
      id: '7',
      url: './photo portfolio/gallery_image (92).JPG',
      title: 'Gallery Image 92',
      category: 'Photo'
    },
    {
      id: '8',
      url: './photo portfolio/gallery_image (97).JPG',
      title: 'Gallery Image 97',
      category: 'Photo'
    },
    {
      id: '9',
      url: './photo portfolio/Design Using Only the Word Fox Multiple Times.png',
      title: 'Fox Design',
      category: 'Design'
    },
    {
      id: '10',
      url: './photo portfolio/FLASH.png',
      title: 'Flash',
      category: 'Design'
    },
    {
      id: '11',
      url: './photo portfolio/IMG_5086.png',
      title: 'Image 5086',
      category: 'Photo'
    },
    {
      id: '12',
      url: './photo portfolio/Justin final.png',
      title: 'Justin Final',
      category: 'Photo'
    },
    {
      id: '13',
      url: './photo portfolio/Middle School Retreat.png',
      title: 'Middle School Retreat',
      category: 'Photo'
    },
    {
        id: '14',
        url: './art/CharcoalDrawingpng.png',
        title: 'Joey Desir',
        category: 'Painting'
      },
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

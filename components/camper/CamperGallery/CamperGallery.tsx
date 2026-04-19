import Image from 'next/image';
import { GalleryItem } from '@/types/camper';

interface CamperGalleryProps {
  gallery: GalleryItem[];
  name: string;
}

export default function CamperGallery({ gallery, name }: CamperGalleryProps) {
  if (!gallery?.length) return null;

  return (
    <div>
      {gallery.map((image, index) => (
        <Image
          key={image.id ?? `${image.thumb}-${index}`}
          src={image.thumb}
          alt={`${name} ${index + 1}`}
          width={200}
          height={150}
          style={{ height: 'auto' }}
        />
      ))}
    </div>
  );
}

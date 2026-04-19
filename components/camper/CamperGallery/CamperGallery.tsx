'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { GalleryItem } from '@/types/camper';
import styles from './CamperGallery.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface CamperGalleryProps {
  gallery: GalleryItem[];
  name: string;
}

export default function CamperGallery({ gallery, name }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!gallery?.length) return null;

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={styles.mainSwiper}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={image.id ?? `${image.thumb}-${index}`}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={image.thumb}
                alt={`${name} ${index + 1}`}
                fill
                className={styles.mainImage}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={32}
        watchSlidesProgress
        className={styles.thumbsSwiper}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={image.id ?? `thumb-${image.thumb}-${index}`}>
            <div className={styles.thumbImageWrapper}>
              <Image
                src={image.thumb}
                alt={`${name} preview ${index + 1}`}
                fill
                className={styles.thumbImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

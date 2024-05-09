// @/components/interface/GalleryComponent.tsx

import React, { useEffect, useState } from 'react';
import lightGallery from 'lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css'; // Import CSS for lightGallery
import styles from '@styles/galleryComponent.module.css';

interface Image {
  src: string;
  thumbnail: string;
  alt: string;
  caption?: string;
  title?: string;
  date?: string;
  description?: string;
  tags: string[];
  author: string;
}

interface GalleryProps {
  images: Image[];
}

const GalleryComponent: React.FC<GalleryProps> = ({ images }) => {
  const [blurNSFW, setBlurNSFW] = useState<boolean>(false);

  useEffect(() => {
    const savedSetting = localStorage.getItem('blurNSFW');
    if (savedSetting !== null) {
      setBlurNSFW(JSON.parse(savedSetting));
    }
  }, []);

  const isNSFW = (tags: string[] | undefined) => {
    return tags && tags.includes('NSFW');
  };

  const getImageStyle = (tags: string[] | undefined) => {
    return blurNSFW && isNSFW(tags)
      ? { filter: 'blur(15px)' }
      : {};
  };

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.gallery_item}>
          <img
            src={image.src}
            alt={image.title}
            className={styles.img}
            style={getImageStyle(image.tags)}
          />
          <div className={styles.gallery_item_info}>
            <h3>{image.title}</h3>
            <p>{image.date}</p>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryComponent;

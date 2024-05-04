import React, { useEffect, useRef } from 'react';
import lightGallery from 'lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css'; // Import CSS for lightGallery
import styles from '@styles/galleryComponent.module.css'

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
    return (
        <div className={styles.gallery}>
        {images.map((images, index) => (
          <div key={index} className={styles.gallery_item}>
            <img src={images.src} alt={images.title} />
            <div className={styles.gallery_item_info}>
              <h3>{images.title}</h3>
              <p>{images.date}</p>
              <p>{images.description}</p>
              
            </div>
          </div>
        ))}
      </div>
        );
};
  
export default GalleryComponent;

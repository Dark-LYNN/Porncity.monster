// components/RecentUploads.tsx
import React from 'react';
import GalleryComponent from '../interface/GalleryComponent';
import galleryItems from '@/components/data/galleryItems';

const RecentUploads: React.FC = () => {
  return (
    <div>
      <h1 className='color-white text-center font-semibold'>Recent Uploads</h1>
      <GalleryComponent images={galleryItems} />
    </div>
  );
};

export default RecentUploads;

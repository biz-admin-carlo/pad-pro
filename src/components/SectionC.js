import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { siteConfig } from '../config';

export default function SectionC() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { about } = siteConfig;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div data-aos="fade-down">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-16 sm:py-12 lg:py-32 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-6 pt-24 border-b border-gray-200">
              {about.sectionTitle}
            </h1>
            <hr />

            {/* Image on the left, Text on the right */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Image Section */}
              <div>
                <img
                  src={about.image.src}
                  alt={about.image.alt}
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width={about.image.width}
                  height={about.image.height}
                  onClick={() => openModal(about.image.src)}
                />
              </div>

              {/* Text Section */}
              <div>
                <p className="text-base text-gray-500">
                  {about.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <ImageModal 
            isOpen={isModalOpen}
            onClose={closeModal}
            imgSrc={selectedImage}
            width={about.image.width}
            height={about.image.height}
            alt={about.image.alt}
          />
        )}
      </div>
    </div>
  );
}

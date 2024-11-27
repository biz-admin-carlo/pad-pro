import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { siteConfig } from '../config';
import '../assets/styles.css';
import { Button } from "@material-tailwind/react";

export default function HomeSectionB() {
  const { features, images, theme } = siteConfig;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div data-aos="fade-up">
      <div className={`overflow-hidden bg-white py-12 sm:py-36`}>
        <div className="mx-auto max-w-7xl px-12 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className={`text-base font-semibold leading-7 text-${theme.primaryColor}`}>
                  Piedmont Adult Day Program (PADPro) 
                </h2>
                <h2 className="mt-6 text-lg leading-1 newsreader-font">
                  Can we make a safer learning evironment to adult in today's time?               
                </h2>
                <hr/>
                <p className="mt-6 text-sm leading-8 text-gray-600">
                  Read about the latest Piedmont Adult Day Program initiatives, achievements, and developments.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => {
                    return (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
  
                        </dt>{' '}
                        <dd className="inline text-sm">{feature.description}</dd>
                      </div>
                    );
                  })}
                </dl>
                <div className='pt-5 flex justify-end'>
                  <Button variant="outlined" color='green' className='newsreader-font-medium'>See More</Button>
                </div>
              </div>
            </div>
            <img
              src={images.business.src}
              alt={images.business.alt}
              className="w-[48rem] max-w-none rounded-xl shadow-xl"
              width={images.business.width}
              height={images.business.height}
              onClick={() => setModalOpen(true)}
            />
            <ImageModal 
              isOpen={isModalOpen} 
              onClose={() => setModalOpen(false)} 
              imgSrc={images.business.src}
              width={images.business.width}
              height={images.business.height}
              alt={images.business.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

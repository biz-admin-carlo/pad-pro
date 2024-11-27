import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../assets/styles.css';
import { Typography } from "@material-tailwind/react";

export default function ServicesSectionA() {
  const imageURL = "../assets/pad-pro-image-1.jpg";
  const [isModalOpen, setModalOpen] = useState(false);

  const activities = [
    "Recycling – aluminum, glass, plastic, paper, corrugate",
    "Stacking/bundling",
    "Labeling, re-labeling",
    "Packaging, re-packing, bagging",
    "Materials assembly",
    "Sorting and delivering of hot meals to the elderly",
    "Parts Sorting",
    "Folding and delivery of flyers",
    "Sorting and delivery of pet foods to seniors",
    "Car wash and dry",
    "Yard and ground keeping, backyard poultry maintenance and gardening",
    "Arts and crafts",
    "Newspaper flattening and bundling",
    "Functional Academics - reading, writing, mathematics - money management, purchasing",
    "Communication skills training including group discussion forums",
    "Computer games and puzzles",
    "Zumba, Aerobics, dancing and exercises",
    "Movie appreciation",
    "Mall tours",
    "Library, museum and park tours and visits",
    "Sports/games competitions, tournaments including basketball, bowling, golf and badminton"
  ];

  return (
    <div data-aos="fade-up">
      <div className="overflow-hidden bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Text Section */}
          <div className="lg:max-w-2xl mx-auto">
            <h2 className="text-base font-semibold leading-7 text-green-500">
              Services
            </h2>
            <hr />
            <p className="mt-6 text-sm leading-8 text-gray-600">
              ​Piedmont Adult Day Program offers the following services in pre-vocational development and community integration:
            </p>
            <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600">
              {activities.map((activity, index) => (
                <li key={index} className="list-disc ml-6">
                  {activity}
                </li>
              ))}
            </dl>
          </div>

          {/* Image Section */}
          <div className="mt-12 flex justify-center">
            <figure>
                <img
                    className="h-96 w-full rounded-lg object-cover object-center"
                    src={imageURL}
                    alt="Services Available for Piedmont Adult Day Program"
                    onClick={() => setModalOpen(true)}
                />
                <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
                    Services with Piedmont Adult Day Program
                </Typography>
            </figure>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        imgSrc={imageURL}
        alt="Services in Piedmont Adult Day Program"
      />
    </div>
  );
}

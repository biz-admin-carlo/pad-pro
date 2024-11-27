import React, { useState } from "react";
import ImageModal from "./ImageModal";
import FacilitiesImageOne from '../assets/pad-pro-image-facilities-1.jpg';
import FacilitiesImageTwo from '../assets/pad-pro-image-facilities-2.jpg';
import FacilitiesImageThree from '../assets/pad-pro-image-facilities-3.jpg';
import FacilitiesImageFour from '../assets/pad-pro-image-facilities-4.jpg';
import FacilitiesImageFive from '../assets/pad-pro-image-facilities-5.jpg';
import FacilitiesImageSix from '../assets/pad-pro-image-facilities-6.jpg';
import FacilitiesImageSeven from '../assets/pad-pro-image-facilities-7.jpg';
import FacilitiesImageEight from '../assets/pad-pro-image-facilities-8.jpg';
import FacilitiesImageNine from '../assets/pad-pro-image-facilities-9.jpg';
import FacilitiesImageTen from '../assets/pad-pro-image-facilities-10.jpg';
import FacilitiesImageEleven from '../assets/pad-pro-image-facilities-11.jpg';
import FacilitiesImageTwelve from '../assets/pad-pro-image-facilities-12.jpg';
import FacilitiesImageThirteen from '../assets/pad-pro-image-facilities-13.jpg';
import FacilitiesImageFourteen from '../assets/pad-pro-image-facilities-14.jpg';
import FacilitiesImageOneFive from '../assets/pad-pro-image-facilities-15.jpg';
import FacilitiesImageOneSix from '../assets/pad-pro-image-facilities-16.jpg';
export default function FacilitiesSectionA() {
  const data = [
    {
      imgelink: FacilitiesImageOne,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageTwo,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageThree,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageFour,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageFive,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageSix,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageSeven,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageEight,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageNine,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageTen,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageEleven,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageTwelve,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageThirteen,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageFourteen,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageOneFive,
      alt: "PadPro's Facility",
    },
    {
      imgelink: FacilitiesImageOneSix,
      alt: "PadPro's Facility",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  return (
    <div className="px-12 md:px-12">
        <div className="pt-10">
            <h2 className="text-base font-semibold leading-7 text-green-500">
              Facilities
            </h2>
        </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ imgelink, alt }, index) => (
          <div key={index}>
            <img
              className="h-full w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={imgelink}
              alt={alt || `Facility ${index + 1}`}
              onClick={() => openModal(imgelink)}
            />
          </div>
        ))}
      </div>

      {/* Facility Description */}
      <div className="py-6">
        <hr className="my-4" />
        <p className="py-6">
          ​It has centralized air-conditioning/heater, sprinkler system, 5
          bathrooms and a personal grooming room; computer workstations with
          a mini-library; arts and crafts studio; a conference room; and easy
          access to and from the front and back with wheelchair ramps; and
          adequate parking.
        </p>
        <p>
          ​There is also a social-recreational hall with designated areas for
          exercises and aerobics as well as a television/video room; a room
          for sensory-impaired individuals, a pantry, and group/assembly work
          rooms.​
        </p>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          imgSrc={modalImage}
          alt="Expanded Facility Image"
        />
      )}
    </div>
  );
}

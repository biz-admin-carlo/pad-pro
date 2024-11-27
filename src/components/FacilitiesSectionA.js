import React, { useState } from "react";
import ImageModal from "./ImageModal";

export default function FacilitiesSectionA() {
  const data = [
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility11_orig.jpg",
      alt: "Image of PadPro's Facility 1",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility8_orig.jpg",
      alt: "Image of PadPro's Facility 2",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility2_orig.jpg",
      alt: "Image of PadPro's Facility 3",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility3_orig.jpg",
      alt: "Image of PadPro's Facility 4",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility4_orig.jpg",
      alt: "Image of PadPro's Facility 5",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility5_orig.jpg",
      alt: "Image of PadPro's Facility 6",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility6_orig.jpg",
      alt: "Image of PadPro's Facility 7",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility7_orig.jpg",
      alt: "Image of PadPro's Facility 8",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility8_orig.jpg",
      alt: "Image of PadPro's Facility 9",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility9_orig.jpg",
      alt: "Image of PadPro's Facility 10",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility10_orig.jpg",
      alt: "Image of PadPro's Facility 11",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility12_orig.jpg",
      alt: "Image of PadPro's Facility 12",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility13_orig.jpg",
      alt: "Image of PadPro's Facility 13",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility14_orig.jpg",
      alt: "Image of PadPro's Facility 14",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility15_orig.jpg",
      alt: "Image of PadPro's Facility 15",
    },
    {
      imgelink: "http://www.padpro.net/uploads/4/4/7/2/4472992/padprofacility16_orig.jpg",
      alt: "Image of PadPro's Facility 16",
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

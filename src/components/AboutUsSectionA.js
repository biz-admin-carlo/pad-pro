import React, { useState } from "react";
import ImageModal from "./ImageModal";
import "../assets/styles.css";
import AboutUsImageOne from '../assets/pad-pro-image-3.jpg'
import AboutUsImageTwo from '../assets/pad-pro-image-4.jpg'

export default function AboutUsSectionB() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState(""); // State to handle the modal image source

  const sharp = [
    "Eliminating occurrences of inappropriate behavior before antecedents occur.",
    "Reducing occurrence by implementation of intervention plans and reinforcement.",
    "Replacing behaviors with skills and transforming them into productive activities.",
    "Self-help programs focus on the need and interest of the individual to acquire responsibility to one’s self and develop skills to prepare towards independence.",
  ];

  const openModalWithImage = (src) => {
    setModalImgSrc(src); // Set the clicked image source to modal
    setModalOpen(true); // Open the modal
  };

  return (
    <div>
      <div className="overflow-hidden bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Text Section */}
          <div className="lg:max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-base font-semibold leading-7 text-green-500">
              About Us
            </h2>
            <hr />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
              {/* Self-Help Advocacy Section */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-24">
                <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-duration="2000">
                  <h1 className="lg:text-9xl md:text-7xl text-7xl tracking-tight newsreader text-black">
                    Self-Help Advocacy
                  </h1>
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-duration="2000">
                  <p className="text-gray-900">
                    PADPro’s Self-Help Advocacy through Responsive Programming
                    (S.H.A.R.P.) involves a combination of proactive, reactive,
                    and interactive approaches by:
                  </p>
                </div>
              </div>
              <hr />

              {/* List Section */}
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-8 text-gray-600">
                {sharp.map((activity, index) => (
                  <li
                    key={index}
                    className="list-disc text-start italic newsreader"
                  >
                    {activity}
                  </li>
                ))}
              </dl>

              {/* First Image and Description */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-24" data-aos="fade-up" data-aos-duration="2000">
                <div className="w-full md:w-1/2">
                  <img
                    className="h-96 w-full object-cover object-center"
                    src={AboutUsImageOne}
                    alt="Self-Help Advocacy Image 1"
                    onClick={() =>
                      openModalWithImage(
                        {AboutUsImageOne}
                      )
                    }
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-gray-900 text-end">
                    Functional assessment is the key to providing behavior
                    management’s effectiveness using the Antecedent Behavior
                    Consequence approach to managing behavior. The curriculum
                    approach is designed to teach an acceptable replacement
                    behavior in the least restrictive environment and provides
                    for positive reinforcement preferences.
                  </p>
                </div>
              </div>
              <hr />

              {/* Second Image and Description */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-24" data-aos="fade-up" data-aos-duration="2000">
                <div className="w-full md:w-1/2">
                  <p className="text-gray-900">
                    On site activities are structured, and simulation of daily
                    living, work related tasks in age and skills appropriate
                    setting. It provides exercises in self-care (health and
                    hygiene,) daily living, food planning and preparation,
                    shopping and money management, decision making, recreation
                    and community integration skills, functional academics,
                    communication and pre-vocational training. Communication
                    tools and materials may complement an individual’s program
                    methodology based on his/her interest and capability.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    className="h-96 w-full object-cover object-center"
                    src={AboutUsImageTwo}
                    alt="Self-Help Advocacy Image 2"
                    onClick={() =>
                      openModalWithImage(
                        {AboutUsImageTwo}
                      )
                    }
                  />
                </div>
              </div>
              <hr />
            </main>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={modalImgSrc} // Dynamically updated modal image source
        alt="Modal Image"
      />
    </div>
  );
}

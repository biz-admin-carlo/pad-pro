import React, { useState } from "react";
import ImageModal from "./ImageModal";
import "../assets/styles.css";
import OurTeamImageOne from '../assets/pad-pro-image-2.jpg';
import OurTeamImageTwo from '../assets/pad-pro-image-3.jpg';
import OurTeamImageThree from '../assets/pad-pro-image-4.jpg';

export default function OurTeamSectionA() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState(""); // State for modal image source

  const openModalWithImage = (src) => {
    setModalImgSrc(src); // Set the modal image source
    setModalOpen(true); // Open the modal
  };

  return (
    <div>
      <div className="overflow-hidden bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:max-w-2xl mx-auto">
            <h2
              className="text-base font-semibold leading-7 text-green-500"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Our Team
            </h2>
            <hr />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
              <figure
                className="relative w-full my-8"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  className="w-full rounded-xl sm:h-96 sm:object-cover sm:object-center"
                  src={OurTeamImageOne}
                  alt="Piedmont Adult Day Program Staff"
                  onClick={() => openModalWithImage(OurTeamImageOne)}
                />
              </figure>
              <hr />

              <div
                className="w-full pt-10"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <p className="text-gray-900 text-center">
                  <span className="newsreader font-large leading-7">In</span>{" "}
                  line with our Mission Statement of "enhancing the quality of
                  life of individuals with intellectual disabilities by
                  providing services that address non-purposeful behaviors and
                  skill acquisition needs in the most professional manner",{" "}
                  <span className="text-highlight">
                    PADPro employs highly qualified staff
                  </span>{" "}
                  who has extensive experience in providing basic human services
                  in daily living activities.
                </p>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-24">
                <div
                  className="w-full md:w-1/2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-full rounded-xl sm:h-96 sm:object-cover sm:object-center"
                    src={OurTeamImageTwo}
                    alt="Nature Image"
                    onClick={() => openModalWithImage(OurTeamImageTwo)}
                  />
                </div>
                <div
                  className="w-full md:w-1/2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p className="text-gray-900 text-end">
                    The program provides orientation training within the first
                    40 hours of employment on facility program design,
                    individual program and service plans, client rights,
                    medication assistance, health and emergency procedures,
                    special incident, and abuse reporting. Thereafter, all
                    staff undergo 12 training hours on related and applicable
                    areas and topics every year. Six of these are Continuing
                    Education Units as prescribed by the Department of
                    Developmental Services. PADPro also provides continuous
                    training on Infection Prevention and Control for the latest
                    guidelines on contagious and infectious diseases.
                  </p>
                </div>
              </div>
              <hr />

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-24">
                <div
                  className="w-full md:w-1/2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p className="text-gray-900">
                    <span className="text-highlight">
                      Staffing ratio to individuals is 1:3
                    </span>
                    , and are required to have completed/updated FIRST AID
                    AND CPR certificates and health screening. PADPro takes
                    pride and values its workforce and hands out awards for
                    outstanding performances, innovation, creativity, and 10 or
                    15 years loyalty.
                  </p>
                </div>
                <div
                  className="w-full md:w-1/2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-full rounded-xl sm:h-96 sm:object-cover sm:object-center"
                    src={OurTeamImageThree}
                    alt="Nature Image"
                    onClick={() => openModalWithImage(OurTeamImageThree)}
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
        imgSrc={modalImgSrc}
        alt="PadPro Our Team Image"
      />
    </div>
  );
}

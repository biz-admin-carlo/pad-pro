// import React, { useState } from "react";
// import ImageModal from "./ImageModal";
// import "../assets/styles.css";
// import ServiceSectionImage from "../assets/pad-pro-image-1.jpg";
// import ServicesImage from "../assets/pad-pro-services-img.jpg";

// export default function ServicesSectionA() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const services = [
//     { activity: "Recycling – aluminum, glass, plastic, paper, corrugate", category: "Recycling" },
//     { activity: "Stacking/bundling", category: "Packaging" },
//     { activity: "Labeling, re-labeling", category: "Packaging" },
//     { activity: "Sorting and delivering of hot meals to the elderly", category: "Community Service" },
//     { activity: "Parts Sorting", category: "Sorting" },
//     { activity: "Yard and ground keeping, backyard poultry maintenance and gardening", category: "Maintenance" },
//     { activity: "Zumba, Aerobics, dancing and exercises", category: "Recreation" },
//     { activity: "Library, museum and park tours and visits", category: "Tours" },
//   ];

//   return (
//     <div>
//       <img
//         className="h-96 w-full object-cover object-center"
//         src={ServicesImage}
//         alt="Pad Pro's Learning Environment"
//       />
//       <div className="overflow-hidden bg-white py-12 sm:py-20">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">

//           {/* Table Header */}
//           <div className="newsreader flex justify-between items-end py-3">
//             <h5 className="font-semibold text-8xl">Services</h5>
//             <h5 className="font-semibold text-3xl">Category</h5>
//           </div>

//           <p className="my-6 newsreader italic text-sm leading-8 text-gray-600">
//             ​Piedmont Adult Day Program offers the following services in pre-vocational development and community integration:
//           </p>

//           <hr />

//           {/* Dynamically Render Services */}
//           {services.map(({ activity, category }, index) => (
//             <div key={index}>
//               <div
//                 className="newsreader text-xl flex justify-between py-4 hover:bg-gray-100 transition duration-300 ease-in-out"
//                 data-aos="fade-right"
//                 data-aos-duration="1000"
//                 data-aos-once="true"
//               >
//                 <h5 className="text-left hover:underline">{activity}</h5>
//                 <h5 className="text-right hover:underline">{category}</h5>
//               </div>
//               {index !== services.length - 1 && <hr />}
//             </div>
//           ))}
//         </div>

//         <div>
//       <div className="overflow-hidden bg-white pt-6 sm:py-36">
//         <div className="mx-auto max-w-7xl lg:px-8">
//           <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//             <div className="lg:pr-8 lg:pt-4" data-aos="fade-up" data-aos-duration="2000">
//               <div className="lg:max-w-lg">
//                 <h2 className="text-base font-semibold leading-7 text-green-500">
//                   Piedmont Adult Day Program (PADPro)
//                 </h2>
//                 <h2 className="mt-6 text-lg leading-1 newsreader-font">
//                   Creating a Safe and Supportive Environment for Adults to Thrive
//                 </h2>
//                 <hr />
//                 <p className="mt-6 text-sm leading-8 text-gray-600">
//                   Discover the latest initiatives, accomplishments, and developments at Piedmont Adult Day Program. Our mission is to provide a structured, inclusive, and engaging environment tailored to the unique needs of adults in today’s world.
//                 </p>
//                 <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
//                   <div className="relative pl-9">
//                     <dd className="inline text-sm">
//                       Our ultimate goal is to empower individuals through skill-building, effective communication, and informed decision-making, fostering independence and personal growth.
//                     </dd>
//                   </div>
//                 </dl>
//               </div>
//             </div>
//             <div className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="2000">
//               <img
//                 className="w-full h-auto sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-contain mx-auto"
//                 src={ServiceSectionImage}
//                 alt="Piedmont Adult Day Program icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>

//       {/* Image Modal */}
//       <ImageModal
//         isOpen={isModalOpen}
//         onClose={() => setModalOpen(false)}
//         imgSrc={ServiceSectionImage}
//         alt="Services in Piedmont Adult Day Program"
//       />
//     </div>
//   );
// }



import React, { useState } from "react";
import ImageModal from "./ImageModal";
import "../assets/styles.css";
import ServiceSectionImage from "../assets/pad-pro-image-1.jpg";
import ServicesImage from "../assets/pad-pro-services-img.jpg";

export default function ServicesSectionA() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const services = [
    { activity: "Recycling – aluminum, glass, plastic, paper, corrugate", category: "Recycling" },
    { activity: "Stacking/bundling", category: "Packaging" },
    { activity: "Labeling, re-labeling", category: "Packaging" },
    { activity: "Sorting and delivering of hot meals to the elderly", category: "Community Service" },
    { activity: "Parts Sorting", category: "Sorting" },
    { activity: "Yard and ground keeping, backyard poultry maintenance and gardening", category: "Maintenance" },
    { activity: "Zumba, Aerobics, dancing and exercises", category: "Recreation" },
    { activity: "Library, museum and park tours and visits", category: "Tours" },
  ];

  return (
    <div>
      {/* Services Page Main Image */}
      <img
        className="h-96 w-full object-cover object-center cursor-pointer"
        src={ServicesImage}
        alt="Pad Pro's Learning Environment"
        onClick={() => openModal(ServicesImage)}
      />
      <div className="overflow-hidden bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Table Header */}
          <div className="newsreader flex justify-between items-end py-3 text-color">
            <h5 className="font-semibold text-8xl">Services</h5>
            <h5 className="font-semibold text-2xl">Category</h5>
          </div>
          <hr/>

          <p className="my-6 newsreader italic text-sm leading-8 text-gray-600">
            ​Piedmont Adult Day Program offers the following services in pre-vocational development and community integration:
          </p>

          <hr />

          {/* Dynamically Render Services */}
          {services.map(({ activity, category }, index) => (
            <div key={index}>
              <div
                className="newsreader text-xl flex justify-between py-4 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h5 className="text-left hover:underline">{activity}</h5>
                <h5 className="text-right hover:underline">{category}</h5>
              </div>
              {index !== services.length - 1 && <hr />}
            </div>
          ))}
        </div>

        {/* Information Section with Image */}
        <div>
          <div className="overflow-hidden bg-white pt-4 sm:py-12">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4" data-aos="fade-up" data-aos-duration="2000">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-green-500">
                      Piedmont Adult Day Program (PADPro)
                    </h2>
                    <h2 className="mt-6 text-lg leading-1 newsreader-font">
                      Creating a Safe and Supportive Environment for Adults to Thrive
                    </h2>
                    <hr />
                    <p className="mt-6 text-sm leading-8 text-gray-600">
                      Discover the latest initiatives, accomplishments, and developments at Piedmont Adult Day Program. Our mission is to provide a structured, inclusive, and engaging environment tailored to the unique needs of adults in today’s world.
                    </p>
                    <dl className="mt-8 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
                      <div className="relative pl-9">
                        <dd className="inline text-sm">
                          Our ultimate goal is to empower individuals through skill-building, effective communication, and informed decision-making, fostering independence and personal growth.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center cursor-pointer"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  onClick={() => openModal(ServiceSectionImage)}
                >
                  <img
                    className="w-full h-auto sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-contain mx-auto"
                    src={ServiceSectionImage}
                    alt="Piedmont Adult Day Program icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={modalImage}
        alt="Services in Piedmont Adult Day Program"
      />
    </div>
  );
}

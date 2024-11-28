// import React from 'react';
// import '../assets/styles.css';
// import stockFootage from '../assets/stock-video.mp4';

// export default function HomeSectionA() {

//   return (

//     <div>
//       <div className={`overflow-hidden bg-white py-3 sm:py-12`}>
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover filter blur-video"
//           data-aos="fade-up" data-aos-duration="1000"
//         >
//           <source src={stockFootage} type="video/mp4" />
//         </video>
//         <div className=" max-w-6xl ps-6 lg:px-8" data-aos="fade-up" data-aos-duration="2000">
//           <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-20">
//             <div className="lg:pr-8">
//               <div className="lg:max-w-lg">
//                 <div className="relative h-screen w-full">
//                   <div className="relative z-10 flex items-center justify-center">
//                     {/* <h1 className={`leading-1 font-sectionA`}>
//                       "Empowering adults with <span className='italics-sectionA'>behavior management</span> and <span className='italics-sectionA'>skill-building</span> for a <span className='italics-sectionA'>better quality of life</span>."
//                     </h1> */}
//                       <h1
//                         className={`leading-tight font-sectionA text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
//                       >
//                         "Empowering adults with <span className='italics-sectionA'>behavior management</span> and <span className='italics-sectionA'>skill-building</span> for a <span className='italics-sectionA'>better quality of life</span>."
//                       </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import '../assets/styles.css';
import stockFootage from '../assets/stock-video.mp4';

export default function HomeSectionA() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white py-3 sm:py-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter blur-video"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <source src={stockFootage} type="video/mp4" />
        </video>
        <div
          className="relative z-10 max-w-6xl px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="mx-auto max-w-2xl">
            <div
              className="
                h-screen w-full
                flex items-center justify-center
                lg:items-center lg:justify-center
              "
            >
              <h1
                className="
                  font-sectionA
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                  leading-tight text-center lg:text-left
                "
              >
                "Empowering adults with{' '}
                <span className="italics-sectionA">behavior management</span>{' '}
                and{' '}
                <span className="italics-sectionA">skill-building</span> for a{' '}
                <span className="italics-sectionA">better quality of life</span>
                ."
              </h1>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

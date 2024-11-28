import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Typography } from "@material-tailwind/react";

export default function ContactSectionB() {
  const location = {
    destinationAddress: "1333 Piedmont Rd #109, San Jose, CA 95132, Estados Unidos",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.948430067216!2d-81.51765538469262!3d28.67693758240063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7759f1234567%3A0xabcdef123456789!2s1333%20Piedmont%20Rd%20%23109,%20San%20Jose,%20CA%2095132,%20USA!5e0!3m2!1sen!2sus!4v1710407450828!5m2!1sen!2sus",
    subCategories: [
      {
        name: "Apple Maps",
        url: "https://maps.apple.com/?address=1333%20Piedmont%20Rd,%20San%20Jose,%20CA%2095132&ll=37.3895,-121.8963&q=1333%20Piedmont%20Rd",
      },
      {
        name: "Bing Maps",
        url: "https://www.bing.com/maps?q=1333+Piedmont+Rd,+San+Jose,+CA+95132&form=HDRSC6&sp=1&pq=1333+piedmont+rd&sc=0-0&qs=n&sk=&cvid=ABCDEF1234567890",
      },
      {
        name: "Google Earth",
        url: "https://earth.google.com/web/search/1333+Piedmont+Rd,+San+Jose,+CA+95132,+USA/@37.3895,-121.8963,15.26523397a,814.57589625d,35y,0h,0t,0r",
      },
      {
        name: "Google Maps",
        url: "https://www.google.com/maps/place/1333+Piedmont+Rd,+San+Jose,+CA+95132,+USA/@37.3895,-121.8963,17z",
      },
    ],
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const openGoogleDirections = () => {
    const destination = encodeURIComponent(location.destinationAddress);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="overflow-hidden bg-white py-6 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mobile Filters */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <form className="mt-4 border-t border-gray-200">
                      <ul className="px-2 py-3 font-medium text-gray-900">
                        {location.subCategories.map((category) => (
                          <li key={category.name}>
                            <a
                              href={category.url}
                              className="block px-2 py-3 text-left w-full"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {category.name}
                            </a>
                          </li>
                        ))}
                        <li>
                          <button
                            type="button"
                            onClick={openGoogleDirections}
                            className="block px-2 py-3 text-left w-full"
                          >
                            Google Directions
                          </button>
                        </li>
                      </ul>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Main Content */}
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-base font-semibold leading-7 text-green-500">Location</h2>
            <Typography color="gray" className="mb-4">
              ​1333 Piedmont Road #109 San Jose CA 95132
            </Typography>
            <hr />
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Desktop Filters */}
                <form className="hidden lg:block">
                  <ul className="px-2 py-3 font-medium text-gray-900">
                    {location.subCategories.map((category) => (
                      <li key={category.name}>
                        <a
                          href={category.url}
                          className="block px-2 py-3 text-left w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                    <li>
                      <button
                        type="button"
                        onClick={openGoogleDirections}
                        className="block px-2 py-3 text-left w-full"
                      >
                        Google Directions
                      </button>
                    </li>
                  </ul>
                </form>

                {/* Google Maps Embed */}
                <div className="lg:col-span-3">
                  <iframe
                    src={location.googleMapsEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="1333 Piedmont Rd #109, San Jose, CA 95132"
                  ></iframe>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

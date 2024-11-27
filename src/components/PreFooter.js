import { Typography } from "@material-tailwind/react";
import "../assets/styles.css";

const LINKS = [
  {
    title: "About",
    items: [
      { name: "Our Team", path: "/our-team" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "FAQ's", path: "/faqs" },
      { 
        name: "Virtual Programming", 
        path: "https://www.youtube.com/channel/UCwlvTf4r-Qx4GB3caNw0AEg", 
        external: true 
      },
    ],
  },
  {
    title: "Get In Touch",
    items: [
      { name: "Contact", path: "/contact" },
      { 
        name: "Maps & Directions", 
        path: "https://www.google.com/maps/dir/?api=1&destination=1333%20Piedmont%20Rd%20%23109%2C%20San%20Jose%2C%20CA%2095132%2C%20Estados%20Unidos", 
        external: true 
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function PreFooter() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 newsreader-font">
            Piedmont Adult Day Program
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map(({ name, path, external }) => (
                  <li key={name}>
                    <Typography
                      as="a"
                      href={path}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : undefined}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">BizSolutions LLC</a>. All
            Rights Reserved.
          </Typography>
          {/* Social Media Icons Section (Unchanged) */}
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import { Button } from "@material-tailwind/react";
import imageIcon from "../assets/pad-pro-icon.png";

export default function HomeSectionB() {

  return (
    <div>
      <div className="overflow-hidden bg-white py-12 sm:py-36">
        <div className="mx-auto max-w-7xl px-12 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4" data-aos="fade-up" data-aos-duration="2000">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-500">
                  Piedmont Adult Day Program (PADPro)
                </h2>
                <h2 className="mt-6 text-lg leading-1 newsreader-font">
                  Can we make a safer learning environment to adult in today's
                  time?
                </h2>
                <hr />
                <p className="mt-6 text-sm leading-8 text-gray-600">
                  Read about the latest Piedmont Adult Day Program initiatives,
                  achievements, and developments.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dd className="inline text-sm">
                      Overall goal of the program is to provide structure and
                      training to assist individuals toward effective
                      communication and empowerment through skill choice making.
                    </dd>
                  </div>
                </dl>
                <div className="pt-5 flex justify-end">
                  <Link to="/services">
                      <Button
                        variant="outlined"
                        color="green"
                        className="newsreader-font-medium"
                      >
                        See More
                      </Button>
                    </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="2000">
              <img
                className="w-full h-auto sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-contain mx-auto"
                src={imageIcon}
                alt="Piedmont Adult Day Program icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

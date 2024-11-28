import React from 'react';
import '../assets/styles.css';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function VirtualProgramming() {
  return (
    <div>
      <div className={`overflow-hidden bg-white py-12 sm:py-36`}>
        <div className='text-start py-6 mx-10' data-aos="fade-up" data-aos-duration="2000">
            <h1 className='newsreader font-large pb-2' data-aos="fade-up" data-aos-duration="2000">Virtual Programming</h1>
            <hr/>
            <p className='py-6' data-aos="fade-up" data-aos-duration="2000">Piedmont Adult Day Program's Virtual Programming started last 15 April 2022. This program aims to bridge the other online learning modality so that it can reach broader students and better the learning experience of everyone.</p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* First Card */}
            <Card className="w-full max-w-sm" data-aos="fade-up" data-aos-duration="2000">
              <CardHeader shadow={false} floated={false} className="h-56">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Bx57ukbvfW4?si=er8UyQ7BR_3fklub"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardHeader>
              <CardBody>
                <Typography color="blue-gray" className="font-medium">
                  Arts & Crafts (Decorative Butterflies Using Coffee Filter)
                </Typography>
              </CardBody>
            </Card>

            {/* Second Card */}
            <Card className="w-full max-w-sm" data-aos="fade-up" data-aos-duration="2000">
              <CardHeader shadow={false} floated={false} className="h-56">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/jhyyeuOidl8?si=sQz0vAGENxIu6lT-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardHeader>
              <CardBody>
                <Typography color="blue-gray" className="font-medium">
                  Arts & Crafts (Spring Table Decor)
                </Typography>
              </CardBody>
            </Card>

            {/* Third Card */}
            <Card className="w-full max-w-sm" data-aos="fade-up" data-aos-duration="2000">
              <CardHeader shadow={false} floated={false} className="h-56">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cQ4vOkCmBLk?si=6Wy4QMiyg8nalpzc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardHeader>
              <CardBody>
                <Typography color="blue-gray" className="font-medium">
                  Arts & Crafts (Paper Mache)
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

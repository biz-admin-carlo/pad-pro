import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function ContactSectionA() {
  return (
    <div data-aos="fade-up">
      <div className="overflow-hidden bg-white py-6 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-base font-semibold leading-7 text-green-500">Contact</h2>
            <hr />

            <div className="pt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Drop Us a Line Form */}
              <div>
                <Card color="transparent" shadow={false}>
                  <Typography variant="h4" color="blue-gray">
                    Drop us a line
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    We're here to help! If you have any questions, comments, or feedback, please feel free to reach out to us.
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Fill out the form below or use the contact information provided, and we'll get back to you as soon as possible.
                  </Typography>
                  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="Your Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Message
                      </Typography>
                      <textarea
                        rows="6" // Adjusted to allow more space
                        className="w-full p-3 border border-blue-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                        placeholder="Type your message here"
                      />
                    </div>
                    <Button className="mt-6" fullWidth color="green">
                      Submit
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Hours of Operation & Contact Info */}
              <div>
                <div>
                  <Typography variant="h5" color="green-500" className="mb-4">
                    Hours of Operation
                  </Typography>
                  <Typography color="gray" className="mb-2">
                    Monday - Friday
                  </Typography>
                  <Typography color="gray" className="mb-2">
                    08:00 AM - 04:00 PM
                  </Typography>
                  <Typography color="gray">Closed Saturday and Sunday</Typography>
                </div>

                <div className="mt-8">
                  <Typography variant="h5" color="green-500" className="mb-4">
                    Contact Us
                  </Typography>
                  <Typography color="gray" className="mb-2">
                    Randy D. Garcia
                  </Typography>
                  <Typography color="gray" className="mb-2">
                    Executive Director
                  </Typography>
                  <Typography color="gray" className="mb-4">
                    padproadult@yahoo.com
                  </Typography>

                  <Typography variant="h5" color="green-500" className="mb-4">
                    Email Us
                  </Typography>
                  <Typography color="gray" className="mb-4">
                    padproadult@yahoo.com
                  </Typography>

                  <Typography variant="h5" color="green-500" className="mb-4">
                    Call Us
                  </Typography>
                  <Typography color="gray" className="mb-2">
                    Tel #: (408) 347-0402
                  </Typography>
                  <Typography color="gray">Fax #: (408) 347-0403</Typography>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

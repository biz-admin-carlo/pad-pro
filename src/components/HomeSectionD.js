import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const faqList = [
  {
    question: "My son/daughter needs a day program. How do I know if your program is appropriate for my son/daughter? What are your entrance criteria?",
    answer: `We are a behavior management adult day program which is community based with on-site facilities for indoor programming. Individuals should have qualified eligibility for regional center services, 18 years old and above and diagnosed with intellectual disability (mental retardation, autism, cerebral palsy and epilepsy). Individuals may have visual or hearing disability, communication deficits, or limited functional fine or gross motor skills. They can exhibit behavior including self-stimulation, disability, physical/verbal aggression, AWOL, wandering, inappropriate social/sexual behavior, property destruction, repetitive motor or disruptive and attention-getting behavior; PICA, temper tantrums, etc. We can not accept individuals who require 24 hours continuous medical care needs.`,
  },
  {
    question: "What is the best program for my son/daughter?",
    answer: `Our PADPro behavioral team provides an individual assessment of the individual. The team considers fully the interests, capabilities and limitations (behaviors) of your son/daughter. Programs are tailored fit for the individual. All of our individuals are introduced to a communication skills training program as our facility believes that maladaptive behavior stems from the inability to express wants and needs.`,
  },
  {
    question: "My son/daughter exhibits maladaptive behaviors like physical aggression towards others and injuring himself/herself when agitated, what would you do?",
    answer: `The PADPro behavior team, which includes a facility behavior psychologist, provides a thorough individual functional assessment of your son/daughter and we use the Antecedent - Behavior - Consequence approach to managing behavior. While we work on behavior modification, we simultaneously offer skill replacement that aims to compete with the maladaptive behavior.`,
  },
  {
    question: "What are your programs for individuals?",
    answer: `Vocational and Pre-vocational Training including money management, recycling, table top, car-washing/drying, gardening/horticulture materials assembly, clerical/administrative services, personality development and grooming. Arts and Crafts including card making and design, picture frames, vases, clocks and other decor making, art appreciation and exhibits, flower arrangement, origami painting, drawing, accessories beading. Social and Recreational including sports festivals, basketball, bowling, aerobics, calisthenics, golf, stationary bicycle and treadmills. Functional Academics including reading, counting and mathematics, computer, meal preparation, toileting, health and safety, decision making, mobility and calendar skills and Community Integration.`,
  },
  {
    question: "What are your staff's qualifications?",
    answer: `Our highly qualified staff which is assigned on a 1:3 ratio has extensive specialized training in behavior management and years of experience in the delivery of basic human services including proper care and handling of individuals with intellectual disabilities. On-going training includes program design, rights of individuals, medications, health and emergency procedures, special incident and abuse reporting, positive reinforcements, techniques and methodology on skills training, principles of nutrition and food preparation, housekeeping, sanitation, recognition of signs of illnesses. Staff likewise attends a monthly in-house training program on individual program plan implementation.`,
  },
  {
    question: "How do your individuals move around the community?",
    answer: `Currently, we have a fleet of vans that our individuals use for community integration programs. We also use other transport systems leased by the regional center as well as public transportation like trains and buses (with staff supervision).`,
  },
  {
    question: "Do you accept individuals on wheelchairs? Those who are incontinent? Visually impaired? Do not use words?",
    answer: `Yes. Our team also includes other consultants like physical therapist and speech pathologist who provide individual assessments, therapies and follow ups.`,
  },
  {
    question: "Do you accept individuals with Restricted Health Care Conditions?",
    answer: `Yes. Provided the medical condition is stable and temporary in nature and expected to return to a condition normal for that individual. In, addition we develop a restricted health care plan for the individual in consultation with our medical consultants duly approved by the regional center. We also provide the necessary training as provided for in the plan.`,
  },
  {
    question: "Do you provide snacks and lunch for individuals?",
    answer: `No. Individuals bring their food and drinks for lunch and snacks. We only serve food coming from their respective homes. Individuals have opportunity to purchase meals during money management program.`,
  },
];

export default function HomeSectionD() {
  const [open, setOpen] = React.useState(1); // Default to first accordion being open

  const handleOpen = (value) => setOpen(open === value ? 0 : value); // Toggle logic

  return (
    <div data-aos="fade-up" className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 px-8 py-16">
        <h2 className="text-base font-semibold leading-7 text-green-500">
          Frequently Asked Questions
        </h2>

        {faqList.map((faq, index) => (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            animate={CUSTOM_ANIMATION}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="flex items-center justify-between text-base font-semibold text-black-500"
            >
              <span className="flex-1 text-left">{faq.question}</span>
              <Icon id={index + 1} open={open} />
            </AccordionHeader>
            <AccordionBody className="text-justify lg:p-6 text-black">
              {faq.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </main>
    </div>
  );
}

import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import HomeSectionD from '../components/HomeSectionD.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';
import VirtualProgramming from '../components/VirtualProgramming.js';
import FAQImage from '../assets/pad-pro-faq-img.jpg';

export default function FAQsPage() {
  return (
    <>
      <Helmet>
        <title>FAQ's | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
      <img
        className="h-96 w-full object-cover object-center"
        src={FAQImage}
        alt="Pad Pro's FAQ's Section"
      />
        <HomeSectionD />
        <VirtualProgramming />
      <PreFooter />
    </>
  );
}

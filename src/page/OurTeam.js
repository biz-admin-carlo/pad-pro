import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import SectionA from '../components/OurTeamSectionA.js';
import Header from '../components/Header.js';
import VirtualProgramming from '../components/VirtualProgramming.js';
import { PreFooter } from '../components/PreFooter';

export default function OurTeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <SectionA />  
        <VirtualProgramming />
      <PreFooter />
    </>
  );
}

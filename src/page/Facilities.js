import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import SectionB from '../components/ContactSectionB.js';
import FacilitiesSectionA from '../components/FacilitiesSectionA.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';
import VirtualProgramming from '../components/VirtualProgramming.js';

export default function FacilitiesPage() {
  return (
    <>
      <Helmet>
        <title>FAQ's | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <FacilitiesSectionA />
        <VirtualProgramming />
        <SectionB />  
      <PreFooter />
    </>
  );
}

import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import SectionB from '../components/ServicesSectionB.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';
import VirtualProgramming from '../components/VirtualProgramming.js';

export default function ServicePage() {
  return (
    <>
      <Helmet>
        <title>Services | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <SectionB />  
        <VirtualProgramming />
      <PreFooter />
    </>
  );
}

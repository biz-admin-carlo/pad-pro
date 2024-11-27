import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import SectionA from '../components/ContactSectionA.js';
import SectionB from '../components/ContactSectionB.js';
import HomeSectionD from '../components/HomeSectionD.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <SectionA />  
        <SectionB />  
        <HomeSectionD />
      <PreFooter />
    </>
  );
}

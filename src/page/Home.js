import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import SectionA from '../components/HomeSectionA.js';
import SectionC from '../components/HomeSectionC.js';
import SectionD from '../components/HomeSectionD.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <SectionA />  
        <SectionC />
        <SectionD />
      <PreFooter />
    </>
  );
}

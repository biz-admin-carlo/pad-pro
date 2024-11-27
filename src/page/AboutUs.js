import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import SectionA from '../components/AboutUsSectionA.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <SectionA />  
      <PreFooter />
    </>
  );
}

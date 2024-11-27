import { Helmet } from 'react-helmet';
import { siteConfig } from '../config.js';
import HomeSectionD from '../components/HomeSectionD.js';
import Header from '../components/Header.js';
import { PreFooter } from '../components/PreFooter';
import VirtualProgramming from '../components/VirtualProgramming.js';

export default function FAQsPage() {
  return (
    <>
      <Helmet>
        <title>FAQ's | {siteConfig.title}</title>
        <meta name="description" content={siteConfig.metaDescription} />
      </Helmet>

      <Header config={siteConfig} />
        <HomeSectionD />
        <VirtualProgramming />
      <PreFooter />
    </>
  );
}

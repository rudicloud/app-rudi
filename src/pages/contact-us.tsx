import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import PageContactHeroSection from '@components/ui/page-contact-hero-section';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DownloadApps from '@components/common/download-apps';
import ContactSupport from '@components/contact/contact-support';
import ContactInformation from '@components/contact/contact-information';
import Seo from '@components/seo/seo';

export default function ContactUsPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="School Shopping at your fingertips."
        path="contact-us"
      />
      <PageContactHeroSection />
      <Container>
        <div className="max-w-[1420px] mx-auto mb-12 lg:mb-14 xl:mb-16">
          <div className="flex flex-wrap bg-brand-light w-full p-5 md:p-7 lg:p-10 xl:p-16 3xl:px-[70px] xl:py-12 shadow-contact rounded-md -mt-8 relative z-10">
            <div className="w-full md:w-[53%] xl:w-[60%] md:ltr:pr-8 md:rtl:pl-8 lg:ltr:pr-0 lg:rtl:pl-0 2xl:ltr:pr-24 2xl:rtl:pl-24 lg:mb-0 mb-8">
              <ContactSupport />
            </div>
          </div>
        </div>
        <ContactInformation />
      </Container>
    </>
  );
}

ContactUsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};

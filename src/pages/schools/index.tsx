import Layout from '@components/layout/layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ShoolsPageContent from '@components/schools/schools-page-content';
import DownloadApps from '@components/common/download-apps';
import PageHeroSection from '@components/ui/page-hero-section';
import Seo from '@components/seo/seo';
import { fetchSchools } from '@framework/school/get-schools';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export default function ShopsPage() {
  return (
    <>
      <Seo
        title="RudiShule | Schools"
        description="School Shopping at your fingertips."
        path="schools"
      />
      <PageHeroSection
        heroTitle="Schools"
        backgroundThumbnail="https://hub.fanitehub.com/shop-page-hero-bg.jpg"
        mobileBackgroundThumbnail="https://hub.fanitehub.com/shop-page-hero-mobile-bg.png"
        variant="white"
      />
      <ShoolsPageContent />
      <DownloadApps />
    </>
  );
}

ShopsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SHOPS, { limit: 6 }],
    fetchSchools
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
    revalidate: 60,
  };
};

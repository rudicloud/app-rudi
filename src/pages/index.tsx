import Layout from '@components/layout/layout-five';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Seo from '@components/seo/seo';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchProducts } from '@framework/product/get-all-products';
import { fetchCategories } from '@framework/category/get-all-categories';
import { LIMITS } from '@framework/utils/limits';
import DownloadAppsTwo from '@components/common/download-apps-two';
import HeroBannerWithCategory from '@components/hero/hero-banner-with-category';
import BundleGrid from '@components/bundle/bundle-grid';
import { bundleDataTwo as bundle } from '@framework/static/bundle';
import NurseryMain from '../pages/nurserymain';
import PrimaryMain from '../pages/primarymain';
import SecondaryMain from '../pages/secondarymain';
export default function Home() {
  return (
    <> 
      <Seo
        title="Rudi Shule"
        description="Rudi Shule | School Shopping at your fingertips."
        path="/"
      />

      <Container>
        <HeroBannerWithCategory className="my-3 md:my-4 lg:mt-0 lg:mb-5 xl:mb-6" />
      </Container>
      <Container>
      <BundleGrid data={bundle} />
      </Container>
        <NurseryMain />
        <PrimaryMain />
        <SecondaryMain />
      <DownloadAppsTwo />
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: LIMITS.CATEGORIES_LIMITS }],
    fetchCategories
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.PRODUCTS, { limit: LIMITS.PRODUCTS_LIMITS }],
    fetchProducts
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

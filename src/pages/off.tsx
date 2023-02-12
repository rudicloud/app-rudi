import Layout from '@components/layout/layout-five';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DownloadAppsTwo from '@components/common/download-apps-two';
import BundleGrid from '@components/bundle/bundle-grid-two';
import BestSellerScholasticFeed from '@components/product/feeds/best-scholastics';
import { bundleDataThree as bundle } from '@framework/static/bundle';
import { GetStaticProps } from 'next';
import Seo from '@components/seo/seo';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchCategories } from '@framework/category/get-all-categories';
import { fetchPopularProducts } from '@framework/product/get-all-popular-products';
import { LIMITS } from '@framework/utils/limits';
import BannerHeroGrid from '@components/common/banner-hero-grid';
import { bannersGridHero as bannersHero } from '@framework/static/banner';
import PopularProductWithBestDeals from '@components/product/featured-scholastic';
import CategoryGridListBlock from '@components/common/category-grid-list-block';

export default function Home() {
  return (
    <>
      <Seo
        title="Rudi Shule"
        description="Rudi Sule | School Shopping at your fingertips."
        path="/off"
      />

      <Container>
        <BannerHeroGrid
          data={bannersHero}
          className="my-3 md:my-4 lg:mt-0 lg:mb-5 xl:mb-6"
        />
        <CategoryGridListBlock />
        <PopularProductWithBestDeals />
        <BestSellerScholasticFeed className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20" />
        <BundleGrid
          className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
          data={bundle}
        />
      </Container>
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
    [
      API_ENDPOINTS.POPULAR_PRODUCTS,
      { limit: LIMITS.POPULAR_PRODUCTS_TWO_LIMITS },
    ],
    fetchPopularProducts
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

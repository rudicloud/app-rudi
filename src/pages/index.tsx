import BannerGrid from '@components/common/banner-grid';
import Layout from '@components/layout/layout-three';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { bannerGridThree as banners } from '@framework/static/banner';
import BestAllProductFeed from '@components/product/feeds/best-all-product-feed';
import { GetStaticProps } from 'next';
import Seo from '@components/seo/seo';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchCategories } from '@framework/category/get-all-categories';
import { fetchProducts } from '@framework/product/get-all-products';
import { fetchPopularProducts } from '@framework/product/get-all-popular-products';
import { LIMITS } from '@framework/utils/limits';
import CategoryGridListBlock from '@components/common/category-grid-list-block';
import BannerThree from '@components/common/banner-mobile';
export default function Home() {
  return (
    <>
      <Seo
        title="Rudi Shule"
        description="Rudi Sule | School Shopping at your fingertips."
        path="/"
      />
      <Container>
      <BannerThree />
        <CategoryGridListBlock />
        <BestAllProductFeed />
      </Container>
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
      API_ENDPOINTS.BEST_SELLER_GROCERY_PRODUCTS,
      { limit: LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS },
    ],
    fetchProducts
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.POPULAR_PRODUCTS, { limit: LIMITS.POPULAR_PRODUCTS_LIMITS }],
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

import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import { ShopFilters } from '@components/search/filters';
import { ProductFiltered } from '@components/product/product-secondarymain';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Element } from 'react-scroll';
import Divider from '@components/ui/divider';
import Seo from '@components/seo/seo';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchCategories } from '@framework/category/get-all-categories';
import { fetchProducts } from '@framework/product/get-all-products';
import { LIMITS } from '@framework/utils/limits';

export default function Search() {
  return (
    <>
      <Seo
        title="Secondary"
        description="Rudi Sule | School Shopping at your fingertips."
        path="secondary"
      />
      <Divider />
      <Container>
            <ProductFiltered />
      </Container>
    </>
  );
}

Search.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: LIMITS.CATEGORIES_LIMITS }],
    fetchCategories
  );
  await queryClient.prefetchInfiniteQuery(
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

import Layout from '@components/layout/layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ErrorInformation from '@components/404/error-information';
import Seo from '@components/seo/seo';

export default function ErrorPage() {
  return (
    <>
      <Seo
        title="404"
        description="Rudi Sule | School Shopping at your fingertips."
        path="404"
      />
      <ErrorInformation />
    </>
  );
}

ErrorPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};

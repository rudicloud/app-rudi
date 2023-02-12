import { useSchoolQuery } from '@framework/school/get-school';
import { useRouter } from 'next/router';
import { useUI } from '@contexts/ui.context';
import { getDirection } from '@utils/get-direction';
import { Element } from 'react-scroll';
import Container from '@components/ui/container';
import AllProductFeed from '@components/product/feeds/all-products-feed';
import { useTranslation } from 'next-i18next';
import useWindowSize from '@utils/use-window-size';

export default function SchoolsSingleDetails() {
  const {
    query: { slug },
  } = useRouter();
  const { t } = useTranslation('common');
  const { data, isLoading } = useSchoolQuery(slug as string);
  const { openSchool, displaySchool, closeSchool } = useUI();
  const { width } = useWindowSize();
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div
        className="flex justify-center w-full h-56 bg-center bg-no-repeat bg-cover md:h-64"
        style={{
          backgroundImage: `https://hub.fanitehub.com/page-header-search1.png`,
        }}
      />
      <div className="flex items-center px-4 py-4 border-b lg:hidden md:px-6 border-border-base mb-7">
        <div className="flex shrink-0">
          <img
            src={data?.logo_original}
            alt={data?.name}
            width={66}
            height={66}
            className="rounded-md"
          />
        </div>
        <div className="ltr:pl-4 rtl:pr-4">
          <h2 className="font-semibold text-brand-dark text-15px">
            {data?.name}
          </h2>
          <button
            className="block text-sm font-medium transition-all text-brand hover:text-brand-muted"
            onClick={openSchool}
          >
            {t('text-more-info')}
          </button>
        </div>
      </div>
      <Container>
        <Element
          name="grid"
          className="flex flex-col pb-16 lg:flex-row lg:pt-8 lg:pb-20"
        >
          <div className="w-full lg:ltr:pl-7 lg:rtl:pr-7">
            <AllProductFeed />
          </div>
        </Element>
      </Container>
    </>
  );
}

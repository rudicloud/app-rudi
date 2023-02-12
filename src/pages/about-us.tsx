import Layout from '@components/layout/layout';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import DownloadApps from '@components/common/download-apps';
import { aboutSetting } from '@settings/about-setting';
import Image from '@components/ui/image';
import Seo from '@components/seo/seo';

const backgroundThumbnail = '/assets/images/about-us.png';
const aboutUs1 = 'https://res.cloudinary.com/deiryswyr/image/upload/v1675793298/banner-1_jjwayl.png';
const aboutUs2 = 'https://res.cloudinary.com/deiryswyr/image/upload/v1675793299/banner-4_c42tzo.png';
const aboutUs3 = 'https://res.cloudinary.com/deiryswyr/image/upload/v1675793298/banner-2_dgwcfg.png';
const aboutUs4 = 'https://res.cloudinary.com/deiryswyr/image/upload/v1675793300/banner-5_g4ingk.png';
const aboutUs5 = 'https://res.cloudinary.com/deiryswyr/image/upload/v1675793299/banner-3_tw0t48.png';
const aboutUs6 = '/assets/images/about-us/6.png';

export default function TermsPage() {
  const { t } = useTranslation('about');
  return (
    <>
      <Seo
        title="About Us"
        description="School Shopping at your fingertips."
        path="about-us"
      />
      {/* End of seo */}
      <div className="flex flex-col grid-cols-3 gap-4 my-8 lg:my-14 sm:grid">
              <Image
                src={aboutUs2}
                alt={t('text-map')}
                className="ltr:mr-4 rtl:ml-4"
                width={379}
                height={262}
              />
              <Image
                src={aboutUs4}
                alt={t('text-map')}
                className="ltr:mr-4 rtl:ml-4"
                width={379}
                height={262}
              />
              <Image
                src={aboutUs5}
                alt={t('text-map')}
                className=""
                width={379}
                height={262}
              />
            </div>
      <div className="py-8 lg:py-16 2xl:py-20">
        <Container>
          <div className="flex flex-col w-full mx-auto max-w-[1200px]">
            <h2 className="text-lg md:text-xl lg:text-[24px] text-brand-dark font-semibold mb-4 lg:mb-7">
              {t(aboutSetting.titleOne)}
            </h2>
            <div className="text-sm leading-7 text-brand-dark opacity-70 lg:text-15px lg:leading-loose">Rudi Shule Scholastic Supplies Ltd is a Ugandan company registered in February 2023 to provide a school shopping solution for parents, schools and children.
            </div>
            <div className="text-sm leading-7 text-brand-dark opacity-70 lg:text-15px lg:leading-loose">
            It has 3 directors, Mr Vicent Kirumira a retired Head Teacher, Mr Louis Jadwong a veteran journalist and digital practitioner, and Irene Nakayiza a current Deputy Head teacher. <br />
            Rudi Shule’s main mission is to make online shopping for school scholastic materials fast and easy. Our goal is providing the ease and convenience of School Shopping at your fingertips. We have partnered with leading brands like Nice Plastics, Unilever, Safe Boda and Flutterwave.<br />
            You can access the shopping platform from anywhere in the world either through the website, phone APP. For parents in Uganda, you can also come to our Shop at P.O.Box 114747, NGUVU HOUSE (top floor) in Nateete, Uganda that is 10km (30mins) from the CBD. <br />Telephone contact +256772474631 <br />Website https://www.rudishule.com/  <br />Email: customercare@rudishule.com <br />           </div>

            <div className="grid grid-cols-2 gap-4 my-8 lg:my-14">
              <Image
                src={aboutUs1}
                alt={t('text-map')}
                className="ltr:mr-5 rtl:ml-5"
                width={576}
                height={390}
              />
              <Image
                src={aboutUs2}
                alt={t('text-map')}
                className=""
                width={576}
                height={390}
              />
            </div>
          </div>
        </Container>
      </div>

      <DownloadApps />
    </>
  );
}

TermsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'about',
        'footer',
      ])),
    },
  };
};

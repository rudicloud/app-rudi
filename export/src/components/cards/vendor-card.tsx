import { useTranslation } from 'next-i18next';
import Link from '@components/ui/link';
import { ROUTES } from '@utils/routes';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';

type VendorCardProps = {
  shop?: any;
};

const VendorCard: React.FC<VendorCardProps> = ({ shop }) => {
  const { t } = useTranslation();
  const { name, slug, address, logo_thumbnail } = shop;
  return (
    <Link
      href={`${ROUTES.SCHOOLS}/${slug}`}
      className="relative flex items-center px-5 py-5 transition-all bg-white border rounded-lg cursor-pointer xl:px-7 xl:py-7 border-border-base shadow-vendorCard hover:shadow-vendorCardHover"
    >
      <div className="flex flex-col ltr:ml-4 rtl:mr-4 xl:ltr:ml-5 xl:rtl:mr-5">
        <div>
          <Heading variant="mediumHeading" className="pb-1.5">
            {name}
            <div className="relative flex items-center justify-center w-16 h-16 overflow-hidden bg-fill-thumbnail xl:w-20 xl:h-20">
              <img
                alt={t('common:text-logo')}
                src={logo_thumbnail}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Heading>
        </div>
        <Text className="xl:leading-6">{address}</Text>
      </div>
    </Link>
  );
};

export default VendorCard;

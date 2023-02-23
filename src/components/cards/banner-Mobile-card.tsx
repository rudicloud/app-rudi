import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
import { useTranslation } from 'next-i18next';

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  href: LinkProps['href'];
  collection: {
    image: string;
    name: string;
  };
}

const BannerMobileCard: React.FC<Props> = ({
  collection,
  imgWidth = 1000,
  imgHeight = 500,
  href,
}) => {
  const { image, name } = collection;
  const { t } = useTranslation('common');
  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-md group shadow-card "
    >
      <img
        src={image}
        alt={t(name) || t('text-card-thumbnail')}
        width={imgWidth}
        height={imgHeight}
        className="object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
      />
    </Link>
  );
};

export default BannerMobileCard;

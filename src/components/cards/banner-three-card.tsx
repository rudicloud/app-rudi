import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
import { useTranslation } from 'next-i18next';

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  href: LinkProps['href'];
  collection: {
    image_original: string;
    title: string;
    description?: string;
  };
}

const BannerThreeCard: React.FC<Props> = ({
  collection,
  imgWidth = 440,
  imgHeight = 280,
  href,
}) => {
  const { image_original, title } = collection;
  const { t } = useTranslation('common');
  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-md group shadow-card "
    >
      <img
        src={image_original}
        alt={t(title) || t('text-card-thumbnail')}
        width={imgWidth}
        height={imgHeight}
        className="object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
      />
    </Link>
  );
};

export default BannerThreeCard;

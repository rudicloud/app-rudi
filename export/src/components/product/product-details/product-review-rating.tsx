import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import ReviewCard from '@components/cards/review-card';
import ReviewForm from '@components/common/form/review-form';

const data = [
  {
    id: 1,
    rating: 4,
    title: '',
    description:
      '',
    author: '',
  }
];

const ProductReviewRating: FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className="lg:flex">
      <div className="pt-2">
        {data?.map((item) => (
          <ReviewCard item={item} key={`review-key-${item.id}`} />
        ))}
      </div>
      <ReviewForm className="lg:w-[500px] xl:w-[540px] 2xl:w-[600px] 3xl:w-[730px] lg:ltr:pl-10 lg:rtl:pr-10 xl:ltr:pl-14 xl:rtl:pr-14 3xl:ltr:pl-20 3xl:rtl:pr-20 shrink-0 pt-10" />
    </div>
  );
};

export default ProductReviewRating;

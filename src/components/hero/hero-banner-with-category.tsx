import { useCategoriesQuery } from '@framework/category/get-all-categories';
import CategoryListCard from '@components/cards/category-list-card';
import { ROUTES } from '@utils/routes';
import { LIMITS } from '@framework/utils/limits';
//import BannerThree from '@components/common/banner-main';
import HeroCarouselBlock from '@components/hero/hero-carousel-block';
import { refinedSixHeroBanner as heroBanner } from '@framework/static/banner';

interface Props {
  className?: string;
}

const HeroBannerWithCategory: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20',
}) => {
  const { data } = useCategoriesQuery({
    limit: LIMITS.CATEGORIES_LIMITS,
  });
  return (
    <div className={`xl:flex md:pb-2.5 ${className}`}>
      <div className="hidden xl:block shrink-0 ltr:pr-8 rtl:pl-8 xl:w-[320px] 2xl:w-[370px] pt-px">
        <div className="flex flex-col justify-between h-full border rounded-md border-border-base">
          {data?.categories?.data?.slice(0, 10)?.map((category) => (
            <CategoryListCard
              key={`category--key-${category.id}`}
              category={category}
              href={{
                pathname: ROUTES.SEARCH,
                query: { category: category.slug },
              }}
              className="transition border-b border-border-base last:border-b-0"
              variant="small"
            />
          ))}
        </div>
      </div>
      <div className="w-full border rounded-md border-border-base">
      <HeroCarouselBlock heroBanner={heroBanner} />

      </div>
    </div>
  );
};

export default HeroBannerWithCategory;

import type { FC } from 'react';
import { useBestScholasticProductsQuery } from '@framework/product/get-all-best-scholastic-products';
import ProductsGridBlock from '../products-grid-block';
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
  className?: string;
  variant?: string;
}

const BestSellerScholasticFeed: FC<ProductFeedProps> = ({
  className,
  variant,
}) => {
  const { data, isLoading, error } = useBestScholasticProductsQuery({
    limit: LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS,
  });
  return (
    <ProductsGridBlock
      sectionHeading="text-best-grocery-near-you"
      sectionSubHeading="text-fresh-grocery-items"
      className={className}
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="best-sellers"
      variant={variant}
    />
  );
};
export default BestSellerScholasticFeed;

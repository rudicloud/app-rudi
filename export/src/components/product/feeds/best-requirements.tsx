import type { FC } from 'react';
import { useBestRequirementsQuery } from '@framework/product/get-all-best-requirements';
import ProductsGridBlock from '../products-grid-requirements';
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
  className?: string;
  variant?: string;
}

const BestBestRequirements: FC<ProductFeedProps> = ({ className, variant }) => {
  const { data, isLoading, error } = useBestRequirementsQuery({
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
      limit={LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS}
      uniqueKey="best-sellers"
      variant={variant}
    />
  );
};
export default BestBestRequirements;

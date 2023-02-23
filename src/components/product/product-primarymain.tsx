import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Alert from '@components/ui/alert';
import Button from '@components/ui/button';
//import ProductCardAlpine from '@components/product/product-cards/product-card-alpine';
import ProductCardOak from '@components/product/product-cards/product-card-oak';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import cn from 'classnames';
import { useProductsQuery } from '@framework/product/get-all-primary';
import { LIMITS } from '@framework/utils/limits';
import { Product } from '@framework/types';
import SectionHeader from '@components/common/section-header';

interface ProductGridProps {
  className?: string;
}

export const ProductFiltered: FC<ProductGridProps> = ({ className = '' }) => {
  const { t } = useTranslation('common');
  const { query } = useRouter();
  const {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsQuery({ limit: LIMITS.PRODUCTS_LIMITS, ...query });

  return (
    <>
        <SectionHeader sectionHeading="Primary School Products" className="mb-0" />
      <div
        className={cn(
          'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5',
          className
        )}
      >
        {error ? (
          <div className="col-span-full">
            <Alert message={error?.message} />
          </div>
        ) : isLoading && !data?.pages?.length ? (
          Array.from({ length: 30 }).map((_, idx) => (
            <ProductCardLoader
              key={`product--key-${idx}`}
              uniqueKey={`product--key-${idx}`}
            />
          ))
        ) : (
          data?.pages?.map((page: any) => {
            return page?.data?.slice(0, 8).map((product: Product) => (
              <ProductCardOak
                key={`product--key-${product.id}`}
                product={product}
              />
            ));
          })
        )}
        {/* end of error state */}
      </div>
      {hasNextPage && (
        <div className="text-center pt-8 xl:pt-10">
          <Button
            loading={loadingMore}
            disabled={loadingMore}
            onClick={() => fetchNextPage()}
          >
            {t('button-load-more')}
          </Button>
        </div>
      )}
    </>
  );
};

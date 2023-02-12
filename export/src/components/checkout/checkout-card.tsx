import Link from 'next/link';
import usePrice from '@framework/product/use-price';
import { useCart } from '@contexts/cart/cart.context';
import Text from '@components/ui/text';
import { CheckoutItem } from '@components/checkout/checkout-card-item';
import { CheckoutCardFooterItem } from './checkout-card-footer-item';
import { useTranslation } from 'next-i18next';
import Router from 'next/router';
import { ROUTES } from '@utils/routes';

const CheckoutCard: React.FC = () => {
  const { t } = useTranslation('common');

  const { items, total, isEmpty } = useCart();
  const { price: subtotal } = usePrice({
    amount: total,
    currencyCode: 'Ugx',
  });
   function orderHeader() {
    !isEmpty && Router.push(ROUTES.ORDER);
  }
  const checkoutFooter = [
    {
      id: 1,
      name: t('text-sub-total'),
      price: subtotal,
    },
    {
      id: 2,
      name: t('text-total'),
      price: subtotal,
    },
  ];

  return (
    <>
      <div className="px-4 py-1 border rounded-md border-border-base text-brand-light xl:py-6 xl:px-7">
        <div className="flex pb-2 text-sm font-semibold rounded-md text-heading">
          <span className="font-medium text-15px text-brand-dark">
            {t('text-product')}
          </span>
          <span className="font-medium ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
            {t('text-sub-total')}
          </span>
        </div>
        {!isEmpty ? (
          items.map((item) => <CheckoutItem item={item} key={item.id} />)
        ) : (
          <p className="py-4 text-brand-danger text-opacity-70">
            {t('text-empty-cart')}
          </p>
        )}
        {checkoutFooter.map((item: any) => (
          <CheckoutCardFooterItem item={item} key={item.id} />
        ))}
        
      </div>
      <Text className="mt-8">
        By placing your order, you agree to be bound by the RudiShule{' '}
        <Link href="#">
          <a className="font-medium underline text-brand">Terms </a>
        </Link>
        {t('text-and')}{' '}
        <Link href="#">
          <a className="font-medium underline text-brand">Privacy</a>
        </Link>
        . Your credit/debit card data will not saved.
      </Text>
    </>
  );
};

export default CheckoutCard;

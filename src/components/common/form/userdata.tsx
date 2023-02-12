import { useState, useEffect } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useCart } from '@contexts/cart/cart.context';
import Button from '@components/ui/button';
import { useTranslation } from 'next-i18next';

export default function userdata() {

  const { total, isEmpty } = useCart();
  const { t } = useTranslation('common');

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState('');
  useEffect(() => {

    setCart(JSON.parse(localStorage.getItem('rudi-shule-cart')))

 }, [])
  const config = {
    //public_key: process.env.NEXT_PUBLIC_FLW_PUBKEY,
    public_key: 'FLWPUBK-322e2e927dcdd2d1b97d9ca49f971348-X',
    tx_ref: Date.now(),
    amount: total,
    currency: 'UGX',
    payment_options: 'mobilemoney,card',
    redirect_url: 'https://verify.rudishule.com',
    meta: {
      delivery_address: address,
      phone_number: mobile,
      order: cart,
    },
    customer: {
      email: email,
      phone_number: mobile,
      name: name,
    },
    customizations: {
      title: 'RUDI SHULE SCHOLASTIC SUPPLIES LTD UGANDA',
      description: 'Payment for items in cart',
      logo: 'https://res.cloudinary.com/deiryswyr/image/upload/v1674494203/rudi_avhewz.jpg',
    },
  };


  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Fullname
                  </label>
                  <input
                    type="text"
                    placeholder="Full name goes here...."
                    autoComplete="given-name"
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    onChange={(e) => setMobile(e.target.value)}
                    type="number"
                    placeholder="25670xxxxxxx"
                    className="mt-1 block uppercase  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="delivery"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Delivery Address
                  </label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Entery Delivery Address here"
                    autoComplete="delivery"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <Button
                variant="formButton"
                className={`w-full mt-8 mb-5 bg-brand text-brand-light rounded font-semibold px-4 py-3 transition-all ${isEmpty && 'opacity-40 cursor-not-allowed'
                  }`}
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      closePaymentModal();
                    },
                    onClose: () => { },
                  });
                }}
              >
                {t('button-order-now')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}

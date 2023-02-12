import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cn from 'classnames';
import Layout from '@components/layout/layout';
import { useTranslation } from 'next-i18next';

const shippingFare = [
  'Central Business Area, 5000',
  'Rubaga Division, 6000',
  'Makindye Division, 5500',
  'Nakawa Division, 7000',
  'Kawempe Division ,7000',
];

export default function Schedule() {
  const { t } = useTranslation('common');
  const [dateSchedule, setDateSchedule] = useState(shippingFare[0]);
  function getDay(date: string) {
    const day = date.split(',');
    return day[0];
  }
  function getMonth(date: string) {
    const month = date.split(',');
    return month[1];
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <RadioGroup value={dateSchedule} onChange={setDateSchedule}>
          <RadioGroup.Label className="sr-only">Shipping Fee</RadioGroup.Label>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {shippingFare.map((date) => (
              <RadioGroup.Option
                key={date}
                value={date}
                className={({ active, checked }) =>
                  cn(
                    'relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none',
                    checked ? 'bg-brand text-brand-light' : 'bg-gray-100'
                  )
                }
              >
                {({ checked }) => (
                  <div className="text-center">
                    <RadioGroup.Label
                      as="p"
                      className={`text-base font-semibold  ${
                        checked ? 'text-brand-light' : 'text-gray-900'
                      }`}
                    >
                      {getDay(date)}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={`text-15px ${
                        checked ? 'text-brand-light' : 'text-gray-500'
                      }`}
                    >
                      {getMonth(date)}
                    </RadioGroup.Description>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        {/* End of date schedule */}

        {/* End of time schedule */}
      </div>
    </div>
  );
}

Schedule.Layout = Layout;

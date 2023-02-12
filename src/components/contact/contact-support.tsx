import { FC } from 'react';
import Text from '@components/ui/text';
import Heading from '@components/ui/heading';

const ContactSupport: FC = () => {
  return (
    <div className="mb-0 3xl:ltr:pr-5 3xl:rtl:pl-5">
      <Heading variant="heading" className="mb-3 lg:mb-4 xl:mb-5">
        NEED HELP PLACING AN ORDER? OR INQUIRY ?
      </Heading>
      <Text className="xl:leading-8">
        If you have difficulty placing your order, please call us on the
        following number on the channels below.
      </Text>
    </div>
  );
};

export default ContactSupport;

import Heading from '@components/ui/heading';
import User from './user';

const CheckoutDetails: React.FC = () => {
  return (
    <div className="border rounded-md border-border-base">
      <Heading>Enter Your Details below</Heading>
      <User />
    </div>
  );
};

export default CheckoutDetails;

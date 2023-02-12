import Input from '@components/ui/form/text-area';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import Text from '@components/ui/text';

interface ContactFormValues {
  instructionNote: string;
  default: boolean;
}

const DeliveryInstructions: React.FC<{ data?: any }> = ({ data }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      instructionNote: data || '',
      default: data || false,
    },
  });

  function onSubmit(values: ContactFormValues) {
    //console.log(values, 'Delivery Note');
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <Input
              label="Enter Enter Mobile Contact"
              type="number"
              variant="solid"
              {...register('instructionNote')}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInstructions;

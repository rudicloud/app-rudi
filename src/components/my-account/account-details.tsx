import Input from '@components/ui/form/input';
import PasswordInput from '@components/ui/form/password-input';
import Button from '@components/ui/button';
import Heading from '@components/ui/heading';
import { useForm, Controller } from 'react-hook-form';
import {
  useUpdateUserMutation,
  UpdateUserType,
} from '@framework/customer/use-update-customer';
import { useTranslation } from 'next-i18next';

const defaultValues = {};

const AccountDetails: React.FC = () => {
  const { mutate: updateUser, isLoading } = useUpdateUserMutation();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UpdateUserType>({
    defaultValues,
  });
  function onSubmit(input: UpdateUserType) {
    updateUser(input);
  }
  return (
    <div className="flex flex-col w-full">
      <Heading variant="titleLarge" className="mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
        {t('common:text-account-details-personal')}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-full mx-auto"
        noValidate
      >
        <div className="border-b border-border-base pb-7 md:pb-8 lg:pb-10">
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              <Input
                label={t('forms:label-first-name')}
                {...register('firstName', {
                  required: 'forms:first-name-required',
                })}
                variant="solid"
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                error={errors.firstName?.message}
              />
              <Input
                label={t('forms:label-last-name')}
                {...register('lastName', {
                  required: 'forms:last-name-required',
                })}
                variant="solid"
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                error={errors.lastName?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              <Input
                type="tel"
                label={t('forms:label-phone')}
                {...register('phoneNumber', {
                  required: 'forms:phone-required',
                })}
                variant="solid"
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                error={errors.phoneNumber?.message}
              />
            </div>
          </div>
        </div>
        <div className="relative flex pb-2 mt-5 sm:ltr:ml-auto sm:rtl:mr-auto lg:pb-0">
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            variant="formButton"
            className="w-full sm:w-auto"
          >
            {t('common:button-save-changes')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;

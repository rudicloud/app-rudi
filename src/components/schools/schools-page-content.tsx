import VendorCard from '@components/cards/vendor-card';
import { useSchoolsQuery } from '@framework/school/get-schools';
import Alert from '@components/ui/alert';
import { useTranslation } from 'next-i18next';
import Heading from '@components/ui/heading';

const SchoolsPageContent: React.FC = () => {
  const { t } = useTranslation('common');
  const { data, error } = useSchoolsQuery({
    limit: 9,
  });

  if (error) return <Alert message={error?.message} />;

  return (
    <div className="pt-10 lg:pt-12 xl:pt-14 pb-14 lg:pb-16 xl:pb-20 px-4 md:px-8">
      <div className="w-full xl:max-w-[1490px] mx-auto">
        <Heading variant="titleLarge" className="mb-4 lg:mb-6">
          All Schools
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {data?.shop?.data?.map((item) => (
            <VendorCard key={item.id} shop={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolsPageContent;

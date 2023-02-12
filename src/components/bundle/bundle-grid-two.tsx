import BundleCardGrid from '@components/cards/bundle-card-grid';
import useWindowSize from '@utils/use-window-size';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { bundles } from '@framework/types';
const Carousel = dynamic(() => import('@components/ui/carousel/carousel'), {
  ssr: false,
});

interface Props {
  className?: string;
  data: any;
}

const breakpoints = {
  '1024': {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  '680': {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  '0': {
    slidesPerView: 1,
  },
};

const BundleGrid: React.FC<Props> = ({ className = 'mb-12 pb-0.5', data }) => {
  const { width } = useWindowSize();
  const [bundleresponse, setBundleresponse] = useState<bundles[] | null>();
  useEffect(() => {
    const url = 'https://rsbase.fanitehub.com/api/v1/bundle';
    axios.get(url).then((response) => {
      setBundleresponse(response.data);
      //console.log("bundless", response.data)
    });
  }, []);
  return (
    <div className={cn(className)}>
      {width! < 1536 ? (
        <Carousel
          breakpoints={breakpoints}
          prevActivateId="bundle-carousel-button-prev"
          nextActivateId="bundle-carousel-button-next"
        >
          {bundleresponse?.map((item: any) => (
            <SwiperSlide key={`bundle-key-${item.id}`}>
              <BundleCardGrid
                bundle={item}
                href={`${ROUTES.BUNDLE}/${item.slug}`}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {bundleresponse?.map((item: any) => (
            <BundleCardGrid
              key={`bundle-key-${item.id}`}
              bundle={item}
              href={`${ROUTES.BUNDLE}/${item.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BundleGrid;

import BannerTwoCard from '@components/cards/banner-two-card';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SchoolSlides } from '@framework/types';

interface Props {
  className?: string;
  headingPosition?: 'left' | 'center';
}

const breakpoints = {
  '1024': {
    slidesPerView: 3,
  },
  '768': {
    slidesPerView: 3,
  },
  '540': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const CollectionGrid: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
  headingPosition = 'left',
}) => {
  const { width } = useWindowSize();
  const [slideresponse, setSlideresponse] = useState<SchoolSlides[] | null>();
  useEffect(() => {
    const url = 'https://rudicloud.vercel.app/api/v1/products';

    axios.get(url).then((response) => {
      setSlideresponse(response.data);
    });
  }, []);
  return (
    <div className={className}>
      <Container>
        {width! < 1536 ? (
          <Carousel
            breakpoints={breakpoints}
            autoplay={{ delay: 4000 }}
            prevButtonClassName="ltr:-left-2.5 rtl:-right-2.5 -top-14"
            nextButtonClassName="ltr:-right-2.5 rtl:-left-2.5 -top-14"
            className="-mx-1.5 md:-mx-2 xl:-mx-2.5 -my-4"
            prevActivateId="collection-carousel-button-prev"
            nextActivateId="collection-carousel-button-next"
          >
            {slideresponse?.map((item) => (
              <SwiperSlide
                key={`collection-key-${item._id}`}
                className="px-1.5 md:px-2 xl:px-2.5 py-4"
              >
                <BannerTwoCard
                  key={item._id}
                  collection={item}
                  href={`${ROUTES.PRODUCT}/${item.slug}`}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        ) : (
          <div className="gap-5 2xl:grid 2xl:grid-cols-4 3xl:gap-7">
            {slideresponse?.map((item) => (
              <BannerTwoCard
                key={item._id}
                collection={item}
                href={`${ROUTES.PRODUCT}/${item.slug}`}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CollectionGrid;

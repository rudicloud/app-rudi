import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import { MobileBanner } from '@framework/types';
interface Props {
  heroBanner?: any;
  className?: string;
  contentClassName?: string;
}

const HeroSliderBlock: React.FC<Props> = ({
  heroBanner,
  className = 'mb-7',
  contentClassName = 'py-24',
}) => {
  return (
    <div className={`${className}`}>
      <Carousel
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={true}
      >
        {heroBanner?.map((banner: any) => (
          <SwiperSlide key={`banner--key${banner.id}`}>
            <HeroBannerCard
              banner={banner}
              variant="slider"
              className={contentClassName}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSliderBlock;

'use client';
import Image from 'next/image';
import React from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function AppSlide() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <Image src="/image/tmp1.png" layout="fill" objectFit="cover" alt="aa" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/image/tmp1.png" layout="fill" objectFit="cover" alt="aa" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/image/tmp1.png" layout="fill" objectFit="cover" alt="aa" />
      </SwiperSlide>
    </Swiper>
  );
}

'use client';
import { Btn, Container, Heading, Text } from 'hyun-design-system';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper React components

import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <section className="section-hero section">
      <Container>
        <div className="content-wrap">
          <Heading>
            매출을 높이는
            <br /> 차세대 마케팅 <br className="mobile-line" /> 자동화 솔루션
          </Heading>
          <Text size="xl" color="primary">
            고객 여정에 따라 단계적으로 목표 전환을 유도하는 신개념 CRM <br />
            대·중견기업이 가장 많이 찾는 프리미엄 엔터프라이즈 솔루션
          </Text>
          <Btn text="도입 문의 & 데모 시연" variant="solid-red" />

          <div className="slide-wrap">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide>
                <Image src="/image/tmp1.png" layout="fill" objectFit="cover" alt="aa" />
                11
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/image/tmp1.png" layout="fill" objectFit="cover" alt="aa" />
                12
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/image/tmp1.png" layout="fill" objectFit="cover" alt="aa" />
                13
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;

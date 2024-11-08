import React,{ useEffect } from 'react';

import AOS from 'aos';
import { Heading } from 'hyun-design-system';
import 'aos/dist/aos.css';

export default function AppAos() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Heading>ㅎ2</Heading>
    </div>
  );
}

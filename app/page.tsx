'use client';

import Fnq from '@sections/Fnq';
import Hero from '@sections/Hero';
import Performance from '@sections/Performance';
import Satisfaction from '@sections/Satisfaction';
import Support from '@sections/Support';

const Home = () => {
  return (
    <>
      <Hero />
      <Performance />
      <Satisfaction />
      <Support />
      <Fnq />
    </>
  );
};

export default Home;

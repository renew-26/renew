import React from 'react';

import { Heading, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';

export default function HeroSection() {
  const PREFIX = 'section-hero';
  return (
    <section className={PREFIX}>
      <StepTitle>
        <Heading level="h2" size={2}>
          Hero Section
        </Heading>
        <Text>Slide Image 들어갈 예정</Text>
      </StepTitle>
    </section>
  );
}

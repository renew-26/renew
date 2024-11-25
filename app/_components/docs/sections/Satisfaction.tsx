import React from 'react';

import { Container, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';

export default function Satisfaction() {
  const PREFIX = 'satisfaction';

  return (
    <section id={PREFIX} className={`section section-${PREFIX}`}>
      <Container className={`section-${PREFIX}__wrap`}>
        <StepTitle title="고객 만족도 영역">
          <Text color="secondary" size="lg">
            진척도 공유 및 작업 현황 공유
          </Text>
        </StepTitle>
      </Container>
    </section>
  );
}

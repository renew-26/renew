import React from 'react';

import { Container, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';

export default function Support() {
  const PREFIX = 'support';

  return (
    <section id={PREFIX} className={`section section-${PREFIX}`}>
      <Container className={`section-${PREFIX}__wrap`}>
        <StepTitle title="고객 지원 영역">
          <Text color="secondary" size="lg">
            지원 사업 안내 및 정보 공유
          </Text>
        </StepTitle>
      </Container>
    </section>
  );
}

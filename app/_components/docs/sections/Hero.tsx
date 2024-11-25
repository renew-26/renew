import React from 'react';

import { Container, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';

export default function Hero() {
  const PREFIX = 'hero';

  return (
    <section id={PREFIX} className={`section section-${PREFIX}`}>
      <Container className={`section-${PREFIX}__wrap`}>
        <div className="bg-area"></div>
        <StepTitle title="동영상 또는 Full Bg" color="tertiary">
          <Text color="tertiary">
            관련 사진 또는 영상을 배치할 예정
            <br />딤 띄워서 배경 위 하얀색 텍스트
          </Text>
        </StepTitle>
      </Container>
    </section>
  );
}

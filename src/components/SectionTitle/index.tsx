import React from 'react';

import { Heading, Text } from 'hyun-design-system';

import classNames from '@utils/classNames';

const SectionTitle = () => {
  const PREFIX = 'section-title';
  return (
    <div className={PREFIX}>
      <Heading>
        구매를 기다리지 말고
        <strong>가가가</strong>
      </Heading>
      <Text size="xxl">
        유저가 최종 목표를 달성하도록 시나리오 캠페인을 구성하세요. 여러분이 설계한대로, 유저가 움직입니다.
      </Text>
    </div>
  );
};

export default SectionTitle;

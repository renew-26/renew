import React from 'react';

import { Accordion, Container, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';

export default function Fnq() {
  const PREFIX = 'fnq';

  return (
    <section id={PREFIX} className={`section section-${PREFIX}`}>
      <Container className={`section-${PREFIX}__wrap`}>
        <StepTitle title="자주 묻는 질문" />

        <Accordion>
          <Accordion.Item title="궁금해서 묻는 질문 1?">
            <Text size="lg" color="secondary">
              해당 내용에 대한 답변 1
            </Text>
          </Accordion.Item>
          <Accordion.Item title="궁금해서 묻는 질문 2">
            <Text size="lg" color="secondary">
              해당 내용에 대한 답변 1
            </Text>
          </Accordion.Item>
          <Accordion.Item title="궁금해서 묻는 질문 3">
            <Text size="lg" color="secondary">
              해당 내용에 대한 답변 1
            </Text>
          </Accordion.Item>
          <Accordion.Item title="궁금해서 묻는 질문 4">
            <Text size="lg" color="secondary">
              해당 내용에 대한 답변 1
            </Text>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

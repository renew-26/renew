'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { Container, Stack, Heading, Text } from 'hyun-design-system';

import AppBox from '@components/AppBox';
import StepTitle from '@components/StepTitle';

export default function Performance() {
  const PREFIX = 'performance';
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let animationStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted && entry.intersectionRatio >= 0.5) {
          animationStarted = true;

          const animateCounter = (
            setter: React.Dispatch<React.SetStateAction<number>>,
            target: number,
            speed: number = 10,
          ) => {
            let current = 0;
            const interval = setInterval(() => {
              current += 1;
              if (current <= target) {
                setter(current);
              } else {
                clearInterval(interval);
              }
            }, speed);
          };

          setTimeout(() => {
            animateCounter(setCount1, 95);
            animateCounter(setCount2, 5, 200);
            animateCounter(setCount3, 15, 66);
          }, 300);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id={PREFIX} className={`section section-${PREFIX}`} ref={sectionRef}>
      <Container className={`section-${PREFIX}__wrap`}>
        <StepTitle
          title={
            <>
              <span className="fc--information">신뢰</span>로 다져진
              <br className="next-line" />
              믿을 수 있는 업체
            </>
          }
        >
          <Text color="secondary">고객과의 신뢰를 최우선으로 최상의 결과로 보답하겠습니다</Text>
        </StepTitle>
        <Stack className="box__wrap" gap={5}>
          <AppBox bg="white">
            <Image src={'/image/tmp.png'} width={75} height={75} alt="아이콘" className="mb-2" />
            <Heading size={4} level="h4" color="information">
              <span>{count1}%</span>
            </Heading>
            <Text color="secondary" size="lg">
              고객 만족도
            </Text>
          </AppBox>
          <AppBox bg="white">
            <Image src={'/image/tmp.png'} width={75} height={75} alt="아이콘" className="mb-2" />
            <Heading size={4} level="h4" color="information">
              <span>{count2}천만 원+</span>
            </Heading>
            <Text color="secondary" size="lg">
              누적 지원금
            </Text>
          </AppBox>
          <AppBox bg="white">
            <Image src={'/image/tmp.png'} width={75} height={75} alt="아이콘" className="mb-2" />
            <Heading size={4} level="h4" color="information">
              <span>{count3}년+</span>
            </Heading>
            <Text color="secondary" size="lg">
              축적된 시공 경험
            </Text>
          </AppBox>
        </Stack>
      </Container>
    </section>
  );
}

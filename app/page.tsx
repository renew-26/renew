'use client';

import { Container, Heading, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';
import HeroSection from '@layout/section/HeroSection';
import PerformanceSection from '@layout/section/PerformanceSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <PerformanceSection />
      <section className="section">
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading color='primary' level="h2">Heading Text Heading Text</Heading>
              <Text size="lg" color="primary">
                Normal Text Normal Text Normal Text Normal Text Normal Text
                <br />
                Normal Text Normal Text Normal Text Normal Text Normal Text
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading level="h2">Heading Text Heading Text</Heading>
              <Text size="lg" color="primary">
                Normal Text Normal Text Normal Text Normal Text Normal Text
                <br />
                Normal Text Normal Text Normal Text Normal Text Normal Text
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading level="h2">Heading Text Heading Text</Heading>
              <Text size="lg" color="primary">
                Normal Text Normal Text Normal Text Normal Text Normal Text
                <br />
                Normal Text Normal Text Normal Text Normal Text Normal Text
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading level="h2">Heading Text Heading Text</Heading>
              <Text size="lg" color="primary">
                Normal Text Normal Text Normal Text Normal Text Normal Text
                <br />
                Normal Text Normal Text Normal Text Normal Text Normal Text
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading level="h2">Heading Text Heading Text</Heading>
              <Text size="lg" color="primary">
                Normal Text Normal Text Normal Text Normal Text Normal Text
                <br />
                Normal Text Normal Text Normal Text Normal Text Normal Text
              </Text>
            </StepTitle>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;

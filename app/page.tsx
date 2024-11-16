'use client';

import { Container, Heading, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';
import HeroSection from '@layout/section/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="section-hero section">
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading level="h2">Heading Text Heading Text</Heading>
              <Text size="xl" color="primary">
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
              <Text size="xl" color="primary">
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
              <Text size="xl" color="primary">
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
              <Text size="xl" color="primary">
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
              <Text size="xl" color="primary">
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

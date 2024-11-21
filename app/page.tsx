'use client';

import { Container, Heading, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';

const Home = () => {
  return (
    <>
      <section className="section">
        <Container>
          <div className="content-wrap">
            <StepTitle>
              <Heading size={2} color="primary" level="h2">
                Heading Text Heading Text
              </Heading>
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
              <Heading size={2} level="h2">
                Heading Text Heading Text
              </Heading>
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
              <Heading size={2} level="h2">
                Heading Text Heading Text
              </Heading>
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
              <Heading size={2} level="h2">
                Heading Text Heading Text
              </Heading>
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
              <Heading size={2} level="h2">
                Heading Text Heading Text
              </Heading>
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

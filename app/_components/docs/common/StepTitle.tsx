import React, { useEffect } from 'react';

import AOS from 'aos';
import { Heading } from 'hyun-design-system';

import classNames from '@utils/classNames';

import 'aos/dist/aos.css';

interface StepTitleProps {
  children?: React.ReactNode;
  title: string | React.ReactNode;
  highlight?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'information' | 'positive' | 'caution' | 'negative' | undefined;
  animation?: 'fade-up' | 'fade-in';
  duration?: number;
  delay?: number;
  className?: string | string[];
}

const StepTitle: React.FC<StepTitleProps> = ({
  children,
  title,
  color = 'primary',
  animation = 'fade-up',
  duration = 1200,
  delay = 100,
  className,
}) => {
  const PREFIX = 'step-title';

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}
    >
      <Heading size={2} level="h2" color={color}>
        {title}
      </Heading>
      {children}
    </div>
  );
};

export default StepTitle;

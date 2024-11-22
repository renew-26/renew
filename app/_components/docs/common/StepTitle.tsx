import React, { useEffect } from 'react';

import AOS from 'aos';

import classNames from '@utils/classNames';

import 'aos/dist/aos.css';

interface AppAosProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in';
  duration?: number;
  delay?: number;
  className?: string | string[];
}

const AppAos: React.FC<AppAosProps> = ({ children, animation = 'fade-up', duration = 1200, delay = 100, className }) => {
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
      {children}
    </div>
  );
};

export default AppAos;

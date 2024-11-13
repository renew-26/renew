import React from 'react';

import { Container, Text } from 'hyun-design-system';

export default function Footer() {
  const PREFIX = 'footer';

  return (
    <footer className={PREFIX}>
      <Container>
        <div className="footer-text">
          <Text color="tertiary">© ReNew Company</Text>
        </div>
        <div className="footer-link">
          <div className='link-item link-naver'>N</div>
          <div className='link-item link-email'>E</div>
          <div className='link-item link-phone'>P</div>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = 'Footer';

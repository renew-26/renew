'use client'
import React from 'react';

import { Heading, Container, Stack, Text } from 'hyun-design-system';
import Link from 'next/link';

export default function Header() {
  const PREFIX = 'header';

  return (
    <header className={PREFIX}>
      <Container>
        <Link href="/" className="link-item header-logo">
          <Heading size={3}>Renew</Heading>
        </Link>

        <nav className={`${PREFIX}-nav`} role="navigation">
          <Stack className="nav-inner" gap={3}>
            <Link href="/about" className="link-item link-company">
              <Text color="primary" size="lg">
                회사 소개
              </Text>
            </Link>
            <Link href="/gallery" className="link-item link-blog">
              <Text color="primary" size="lg">
                시공 사진
              </Text>
            </Link>
            <Link
              target="_blank"
              href="https://forms.gle/oQRTYchU5hEPesT3A"
              rel="noopener"
              className="link-item link-form"
            >
              <Text color="primary" size="lg">
                견적 문의
              </Text>
            </Link>
          </Stack>
        </nav>
      </Container>
    </header>
  );
}

Header.displayName = 'Header';

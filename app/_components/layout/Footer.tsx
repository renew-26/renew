import React from 'react';

import { Container, Text, Stack } from 'hyun-design-system';

export default function Footer() {
  const PREFIX = 'footer';

  return (
    <footer className={PREFIX}>
      <Container>
        <Stack direction="col" className="footer-text">
          <Stack className="footer-info" gap={4}>
            <Text size="sm">㈜ReNew 대표: 김동현</Text>
            <Text size="sm">사업자등록번호: *****-******</Text>
            <Text size="sm">주소: 동대문구 답십리로 **길 **</Text>
            <Text size="sm">전화: 010-****-****</Text>
            <Text size="sm">이메일: k010111323@gmail.com</Text>
          </Stack>
          <Text color="tertiary">©COPYRIGHT (주)ReNew. All Rights Reserved.</Text>
        </Stack>

        <div className="footer-link">
          <div className="link-item link-naver">N</div>
          <div className="link-item link-email">E</div>
          <div className="link-item link-phone">P</div>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = 'Footer';

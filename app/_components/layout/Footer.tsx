import React from 'react';

import { Container, Text, Stack, Heading } from 'hyun-design-system';
import Image from 'next/image';

export default function Footer() {
  const PREFIX = 'footer';

  return (
    <footer className={PREFIX}>
      <Container>
        <Heading level="h6" size={6} color="primary" className="pb-1">
          주식회사 ReNew
        </Heading>
        <div className="footer-text">
          <Stack className="footer-info" direction="col" gap={0}>
            <Text>(주) ReNew 대표: 김동현</Text>
            <Text>주소: 서울특별시 동대문구 답십리로 1길 11, 1층 1호</Text>
            <Stack className="footer-info" direction="row" gap={2}>
              <Text size="sm">사업자등록번호: 111-11-23131</Text>
              <Text size="sm">대표번호: 070-2213-2231</Text>
              <Text size="sm">이메일: k0102323232@gmail.com</Text>
            </Stack>
          </Stack>
        </div>

        <div className="footer-copyright">
          <Text color="tertiary">©COPYRIGHT (주) ReNew. All Rights Reserved.</Text>
          <ul className="footer-link">
            <li>
              <a target="_blank" href="네이버블로그 주소" className="link-item link-naver">
                <Image src={'/sns-icon/icon_naver.png'} width={30} height={30} alt="네이버 아이콘" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.kakao.com/o/{오픈채팅방ID}"
                rel="noopener"
                className="link-item link-kakao"
              >
                <Image src={'/sns-icon/icon_kakao.png'} width={30} height={30} alt="카카오톡 아이콘" />
              </a>
            </li>
            <li>
              <a href="mailto:이메일주소" className="link-item link-email">
                <Image src={'/sns-icon/icon_email.png'} width={30} height={30} alt="이메일 아이콘" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = 'Footer';

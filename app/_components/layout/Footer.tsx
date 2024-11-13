import React from 'react';

import { Container, Text, Stack } from 'hyun-design-system';
import Image from 'next/image';

export default function Footer() {
  const PREFIX = 'footer';

  return (
    <footer className={PREFIX}>
      <Container>
        <div className="footer-text">
          <Stack className="footer-info" gap={4}>
            <Text size="sm">㈜ReNew 대표: 김동현</Text>
            <Text size="sm">사업자등록번호: *****-******</Text>
            <Text size="sm">주소: 동대문구 답십리로 **길 **</Text>
            <Text size="sm">전화: 010-****-****</Text>
            <Text size="sm">이메일: k010111323@gmail.com</Text>
          </Stack>
        </div>

        <div className="footer-copyright">
          <Text color="tertiary">©COPYRIGHT (주)ReNew. All Rights Reserved.</Text>
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

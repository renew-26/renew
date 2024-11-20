import { Text as HdsText } from 'hyun-design-system';
import styled from 'styled-components';

const Text = styled(HdsText)`
  &.fc--primary {
    color: #2e3140;
  }

  &.fc--secondary {
    color: #474c55;
  }

  &.text--sm {
    font-size: 16px;
    line-height: 24px;
    font-weidht: 400;
  }

  &.text--md {
    font-size: 18px;
    line-height: 28px;
    font-weidht: 400;
  }

  &.text--lg {
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
  }
`;

export default Text;

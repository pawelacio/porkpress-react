import React from 'react';

import { 
  FooterContainer,
} from './footer.styled';

export interface FooterProps {
  theme?: string
}

export const Footer: React.FC = (props) => {
  return (
    <FooterContainer>
      Simple footer
    </FooterContainer>
  );
}

export default Footer;
import React from 'react';

import { 
  FooterContainer,
  FooterText,
  FooterRights,
} from './footer.styled';

export interface FooterProps {
  theme?: string
}

export const Footer: React.FC = (props) => {
  return (
    <FooterContainer>
      <FooterText>Page powered by Porkpress</FooterText>
      <FooterRights>All rights reserved &reg;</FooterRights>
    </FooterContainer>
  );
}

export default Footer;
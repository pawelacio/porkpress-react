import React from 'react';

import {
  HeaderContainer
} from './header.styled';

export interface HeaderProps {
  theme?: string,
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer>
      Simple header
    </HeaderContainer>
  );
}

export default Header;
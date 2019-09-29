import React from 'react';
import Link from 'next/link';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderUserBox,
  HeaderTop,
  HeaderBottom,
  HeaderNavItem,
} from './header.styled';

export interface HeaderProps {
  theme?: string,
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <Link href="/">
          <HeaderLogo>
            PorkPRESS
          </HeaderLogo>
        </Link>
        <HeaderUserBox>
          <Link href="/login">
          Login
          </Link>
        </HeaderUserBox>
      </HeaderTop>
      <HeaderBottom>
        <HeaderNav>
          <Link href="/components">
            <HeaderNavItem>
              Components
            </HeaderNavItem>
          </Link>
        </HeaderNav>
      </HeaderBottom>
    </HeaderContainer>
  );
}

export default Header;
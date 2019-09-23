import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderContainer = styled.header`
  position: fixed;
  height: 70px;
  padding: 16px 32px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${ colors.Orange };
  color: ${ colors.White };
`;

export const HeaderLogo = styled.div`

`;

export const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderBottom = styled.div`
  width: 100%;
`;

export const HeaderUserBox = styled.div`

`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeaderNavItem = styled.div`

`;
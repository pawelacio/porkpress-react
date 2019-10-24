import styled, { css } from 'styled-components';

interface StyledCardProps {
  maxWidth?: number,
  center?: boolean,
}

export const Card = styled.div<StyledCardProps>`
  position: relative;
  padding: 20px;
  width: 100%;

  ${ props => props.center && css`
    text-align: center;
  `}
`;
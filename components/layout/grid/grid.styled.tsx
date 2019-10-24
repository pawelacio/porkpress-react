import styled, { css } from 'styled-components';
import device from '../../styles/rwd';

interface StyledGridProps {
  center?: boolean,
  fullHeight?: boolean,
  column?: boolean,
};

interface StyledGridElementProps {
  width?: number,
  margin?: boolean,
};

export const GridContainer = styled.div<StyledGridProps>`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  ${ props => props.column && css`
    flex-direction: column;
  `}

  ${ props => props.center && css`
    justify-content: center;
  `}

  ${ props => props.fullHeight && css`
    height: 100%;
    align-items: center;
  `}
`;

export const GridElement = styled.div<StyledGridElementProps>`
  flex-basis: ${ props => props.width ? `${ props.width/12*100 }%` : '100%' };
  ${ props => props.margin && css`
    margin: 8px 0;
  `}
`;

export const GridSampler = styled.div`
  background-color: pink;
  border: LavenderBlush 2px solid;
  border-radius: 8px;
  padding: 24px 16px;
  text-align: center;
`;

export const GridSpacer = styled.div`
  height: 48px;
  width: 100%;
`;

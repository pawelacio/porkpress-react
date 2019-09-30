import styled from 'styled-components';
import device from '../../styles/rwd';

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

`;

export const GridElement = styled.div<{ width }>`
  flex-basis: ${ props => props.width ? `${ props.width/12*100 }%` : '100%' };
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



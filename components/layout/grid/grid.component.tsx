import React, { ReactNode } from 'react';

import {
  GridContainer,
} from './grid.styled';

export interface GridProps {
  children: ReactNode,
}

export const Grid = (props) => {
  return (
    <GridContainer>
      { props.children }
    </GridContainer>
  );
}

export default Grid;
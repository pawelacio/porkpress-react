import React, { ReactNode } from 'react';

import { 
  Button, StyledButtonProps, StyledButtonTypes, StyledButtonSizes
} from './button.styled';


export interface ButtonProps extends StyledButtonProps {
  children: ReactNode
}

export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <Button 
      color={ props.color }
      buttonType={ props.buttonType }
      size={ props.size }
    >
      { props.children }
    </Button>
  );
}

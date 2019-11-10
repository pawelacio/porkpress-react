import React from 'react';

import {
  StyledCheckboxProps,
  CheckboxContainer,
  CheckboxInput,
  CheckboxMark,
} from './checkbox.styled';

export interface CheckboxProps extends StyledCheckboxProps {
  text?: string,
  checked?: boolean,
}

export const Checkbox = (props: CheckboxProps) => {

  return (
    <CheckboxContainer>
      { props.text }
      <CheckboxInput
      {...props} 
      />
      <CheckboxMark/>
    </CheckboxContainer>
  );
}

import React from 'react';

import {
  InputContainer,
  StyledInput,
  ErrorMessage,
  SuccessMessage,
  StyledInputProps,
} from './input.styled';

export interface InputProps extends StyledInputProps {
  value: string | number;
  type: string;
  placeholder?: string;
  name?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  readonly?: boolean;
  success?: string;
  error?: string;
  isTouched?: boolean;
  innerRef?: React.RefObject<HTMLInputElement>;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

}

export const Input = (props : InputProps) => {

  const isError = props.isTouched && !!props.error;
  const isSuccess = !!props.success;

  return (
    <InputContainer  onClick={ props.onClick }>
      <StyledInput
        ref={ props.innerRef }
        isError={ isError }
        isSuccess={ isSuccess }
        { ...props }
      />
      { isSuccess && !props.disabled && (
        <SuccessMessage>
          { props.success }
        </SuccessMessage>
      )}
      { isError && !props.disabled && (
        <ErrorMessage>
          { props.error }
        </ErrorMessage>
      )}
    </InputContainer>
  )
}

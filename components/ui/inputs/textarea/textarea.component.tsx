import React, { ReactNode } from 'react';

import {
  StyledTextareaProps,
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from './textarea.styled';

export interface TextareaProps extends StyledTextareaProps {
  label?: string;
  cols?: number;
  rows?: number;
  maxlength?: number;
  children?: ReactNode;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  success?: string;
  error?: string;
  isTouched?: boolean;
  innerRef?: React.RefObject<HTMLInputElement>;
}

export const Textarea = (props: TextareaProps) => {

  const isError = props.isTouched && !!props.error;
  const isSuccess = !!props.success;

  return (
    <TextareaContainer>
      <TextareaLabel
        isError={ isError }
        isSuccess={ isSuccess }
      >
        { props.label }
      </TextareaLabel>
      <TextareaInput
        isError={ isError }
        isSuccess={ isSuccess }
        { ...props }
      >
        { props.children }
      </TextareaInput>
    </TextareaContainer>
  );
}
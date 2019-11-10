import styled, { css } from 'styled-components';
import { colors } from '../../../styles/colors';

export interface StyledCheckboxProps {
  disabled?: boolean,
}

export const CheckboxMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  transition: all .1s;
  border: 1px solid ${ colors.Dark };
  border-radius: 5px;
  background-color: ${ colors.White };

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  &::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})<StyledCheckboxProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked {
    ~ ${ CheckboxMark } {
      background-color: ${ colors.Orange };
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CheckboxContainer = styled.label`
  height: 25px;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  ${ CheckboxInput }:checked {
    ~ ${ CheckboxMark }::after {
      display: block;
    }
  }

  &:hover {
    ${ CheckboxMark } {
      background-color: ${ colors.Dark };
    }
  }
`;

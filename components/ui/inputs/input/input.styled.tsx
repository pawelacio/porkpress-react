import styled, { css } from 'styled-components';
import { colors } from '../../../styles/colors';

export interface StyledInputProps {
  big?: boolean;
  small?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<StyledInputProps>`
  font-size: 13px;
  font-weight: 500;
  line-height: 26px;
  border-radius: 13px;
  padding: 0 12px;
  border: 1px solid ${ colors.Dark };

  &:focus {
    border-width: 2px;
    outline: none;
  }

  &:disabled {
    opacity: .5;
  }

  &::placeholder {
    opacity: .5;
  }

  ${ props => props.isError && css`
    color: ${ colors.Red };
    border-color: ${ colors.Red };
  `}

  ${ props => props.isSuccess && css`
    color: ${ colors.Green };
    border-color: ${ colors.Green };
  `}
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  padding: 4px 12px;
  color: ${ colors.Red };
`;

export const SuccessMessage = styled.div`
  font-size: 12px;
  padding: 4px 12px;
  color: ${ colors.Green }
`;

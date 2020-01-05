import styled, { css } from 'styled-components';
import { colors } from '../../../styles/colors';

export interface StyledTextareaProps {
  isError?: boolean;
  isSuccess?: boolean;
}

export const TextareaContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  overflow: hidden;
`;

export const TextareaInput = styled.textarea<StyledTextareaProps>`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 16px 8px 16px;
  border: 1px solid ${ colors.Dark };
  border-radius: 8px;
  outline: 0;

  &:focus {
    padding: 31px 15px 7px 15px;
    border-width: 2px;
  }

  ${ props => (props.isError && !props.disabled) && css`
    color: ${ colors.Red };
    border-color: ${ colors.Red };
  `}

  ${ props => (props.isSuccess && !props.disabled) && css`
    color: ${ colors.Green };
    border-color: ${ colors.Green };
  `}
`;

export const TextareaLabel = styled.label<StyledTextareaProps>`
  position: absolute;
  top: 2px;
  left: 16px;
  width: calc(100% - 32px);
  padding: 8px 0 4px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #ffffff;
  z-index: 1;

  ${ props => (props.isError) && css`
    color: ${ colors.Red };
  `}

  ${ props => (props.isSuccess) && css`
    color: ${ colors.Green };
  `}
`;
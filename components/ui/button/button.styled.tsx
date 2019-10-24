import styled, { css } from 'styled-components';
import { White, Dark, Blue, Red, Orange } from '../../styles/colors';

export enum ButtonTypes {
  DEFAULT = "DEFAULT",
  WARNING = "WARNING",
  INFORMATION = "INFORMATION",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export interface StyledButtonProps {
  color?: string,
  buttonType?: ButtonTypes,
  size?: ButtonSizes,
  disabled?: boolean,
  readonly?: boolean,
}

export const BasicButton = styled.button<StyledButtonProps>`
  min-width: 100px;
  line-height: 20px;
  padding: 8px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  outline: none;

  &:focus {
    border: 2px solid ${ Dark }
  }

  ${ props => props.size === ButtonSizes.SMALL && css`
    padding: 4px 16px;
  `}

  ${ props => props.size === ButtonSizes.MEDIUM && css`
    padding: 8px 24px;
  `}

  ${ props => props.size === ButtonSizes.BIG && css`
    padding: 16px 32px;
  `}

  ${ props => props.disabled && css`
    background-color: #BBBBBB;
    cursor: not-allowed;
  `}
`;

export const SolidButton = styled(BasicButton)`
  background-color: ${ Orange };
  color: ${ White };

  ${ props => props.disabled && css`
    background-color: #BBBBBB;
    cursor: not-allowed;
  `}
`;

export const GhostButton = styled(BasicButton)`
  color: ${ Orange };
  background-color: transparent;
  border: 1px solid ${ Orange };

  ${ props => props.disabled && css`
    color: #BBBBBB;
    cursor: not-allowed;
    border: 1px solid #BBBBBB;
  `}
`;

export const RoundButton = styled(BasicButton)`
  background-color: ${ Orange };
  color: ${ White };
  border-radius: 28px;

  ${ props => props.disabled && css`
    background-color: #BBBBBB;
    cursor: not-allowed;
  `}
`;

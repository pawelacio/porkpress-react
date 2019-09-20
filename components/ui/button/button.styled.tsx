import styled from 'styled-components';
import { White } from '../../styles/colors';

export enum StyledButtonTypes {
  DEFAULT = "DEFAULT",
  WARNING = "WARNING",
  INFORMATION = "INFORMATION",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export enum StyledButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export interface StyledButtonProps {
  color?: string,
  buttonType?: StyledButtonTypes,
  size?: StyledButtonSizes,
  disabled?: boolean,
  readonly?: boolean,
  
}

export const Button = styled.button<StyledButtonProps>`
  min-width: 100px;
  padding: 8px 16px;
  background-color: ${ props => props.color ? props.color : White };
  color: ${ props => props.color ? props.color : White };
`;
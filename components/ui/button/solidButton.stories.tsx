import React from 'react';
import { action } from '@storybook/addon-actions';
import { 
  SolidButton, 
  ButtonSizes,
  GhostButton,
} from './button.styled';

export default {
  title: 'Design System|Atoms/Button/SolidButton',
};

export const Big = () => (
  <SolidButton onClick={action('clicked')} size={ ButtonSizes.BIG }>
    Button Big
  </SolidButton>
);

export const Medium = () => (
  <SolidButton onClick={action('clicked')} size={ ButtonSizes.MEDIUM }>
    Button Medium
  </SolidButton>
);

export const Small = () => (
  <SolidButton onClick={action('clicked')} size={ ButtonSizes.SMALL }>
    Button Small
  </SolidButton>
);

export const Disabled = () => (
  <SolidButton onClick={action('clicked')} size={ ButtonSizes.SMALL } disabled>
    Button Disabled
  </SolidButton>
);

import React from 'react';
import { action } from '@storybook/addon-actions';
import { 
  RoundButton, 
  ButtonSizes,
} from './button.styled';

export default {
  title: 'Design System|Atoms/Button/RoundedButton',
};

export const Big = () => (
  <RoundButton onClick={action('clicked')} size={ ButtonSizes.BIG }>
    Button Big
  </RoundButton>
);

export const Medium = () => (
  <RoundButton onClick={action('clicked')} size={ ButtonSizes.MEDIUM }>
    Button Medium
  </RoundButton>
);

export const Small = () => (
  <RoundButton onClick={action('clicked')} size={ ButtonSizes.SMALL }>
    Button Small
  </RoundButton>
);

export const Disabled = () => (
  <RoundButton onClick={action('clicked')} size={ ButtonSizes.SMALL } disabled>
    Button Disabled
  </RoundButton>
);

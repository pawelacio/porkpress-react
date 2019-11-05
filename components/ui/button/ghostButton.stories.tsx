import React from 'react';
import { action } from '@storybook/addon-actions';
import { 
  ButtonSizes,
  GhostButton,
} from './button.styled';

export default {
  title: 'Design System|Atoms/Button/GhostButton',
};

export const Big = () => (
  <GhostButton onClick={action('clicked')} size={ ButtonSizes.BIG }>
    Button Big
  </GhostButton>
);

export const Medium = () => (
  <GhostButton onClick={action('clicked')} size={ ButtonSizes.MEDIUM }>
    Button Big
  </GhostButton>
);

export const Small = () => (
  <GhostButton onClick={action('clicked')} size={ ButtonSizes.SMALL } >
    Button Big
  </GhostButton>
);

export const Disabled = () => (
  <GhostButton onClick={action('clicked')} size={ ButtonSizes.MEDIUM } disabled>
    Button Big
  </GhostButton>
);

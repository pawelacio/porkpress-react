import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './checkbox.component';

export default {
  title: 'Design System|Atoms/Inputs/Checkbox',  
}

export const CheckoxBasic = () => (
  <Checkbox
  />
);

export const CheckoxWithText = () => (
  <Checkbox
    text="Thats an example text for checkbox component"
  />
);

export const CheckoxDisabled = () => (
  <Checkbox
    disabled={ true }
  />
);


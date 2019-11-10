import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input } from './input.component';

export default {
  title: 'Design System|Atoms/Inputs/Input',
}

export const InputBasic = () => (
  <Input
    value=""
    type="text"
    placeholder="Sample input"
  />
);

export const InputSuccess = () => (
  <Input
    value="good value"
    type="text"
    isTouched={ true }
    success="Thats an a amazing success message"
  />
)

export const InputError = () => (
  <Input
    value="wrong value"
    type="text"
    isTouched={ true }
    error="Thats an a amazing error message"
  />
);

export const InputDisabled = () => (
  <Input
    value="wrong value"
    type="text"
    isTouched={ true }
    error="Thats an a amazing error message"
    disabled
  />
);
import React from 'react';
import { Textarea } from './textarea.component';

export default {
  title: 'Design System|Atoms/Inputs/Textarea',
}

export const TextareaBasic = () => (
  <Textarea
    label={ 'Textarea label' }
    rows={ 4 }
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Quisque sagittis, eros vitae lacinia elementum,
    arcu nulla sagittis mi, eget posuere nibh dolor
    varius elit. Etiam vitae lectus dui. Duis id risus
    sed mi ultrices suscipit. Mauris augue sem, cursus
    vitae nulla vitae, pulvinar egestas metus.
    Donec pharetra ex at nulla consequat condimentum.
    Nullam in tincidunt nisl.
  </Textarea>
);

export const TextareaSuccess = () => (
  <Textarea
    label={ 'Textarea label' }
    rows={ 4 }
    isTouched={ true }
    success="Thats an a amazing success message"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Quisque sagittis, eros vitae lacinia elementum,
    arcu nulla sagittis mi, eget posuere nibh dolor
    varius elit. Etiam vitae lectus dui. Duis id risus
    sed mi ultrices suscipit. Mauris augue sem, cursus
    vitae nulla vitae, pulvinar egestas metus.
    Donec pharetra ex at nulla consequat condimentum.
    Nullam in tincidunt nisl.
  </Textarea>
);

export const TextareaError = () => (
  <Textarea
    label={ 'Textarea label' }
    rows={ 4 }
    isTouched={ true }
    error="Thats an a amazing error message"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Quisque sagittis, eros vitae lacinia elementum,
    arcu nulla sagittis mi, eget posuere nibh dolor
    varius elit. Etiam vitae lectus dui. Duis id risus
    sed mi ultrices suscipit. Mauris augue sem, cursus
    vitae nulla vitae, pulvinar egestas metus.
    Donec pharetra ex at nulla consequat condimentum.
    Nullam in tincidunt nisl.
  </Textarea>
);


import styled from 'styled-components';

const size = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${ size.mobileSmall })`,
  mobileM: `(min-width: ${ size.mobileMedium })`,
  mobileL: `(min-width: ${ size.mobileLarge })`,
  tablet: `(min-width: ${ size.tablet })`,
  laptop: `(min-width: ${ size.laptop })`,
  laptopL: `(min-width: ${ size.laptopLarge })`,
  desktop: `(min-width: ${ size.desktop })`,
  desktopL: `(min-width: ${ size.desktop })`
};

export default device;
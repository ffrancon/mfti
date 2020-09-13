import styled from 'styled-components';

export const colors = {
  primary: '#f7f1c3',
  secondary: '#000',
  third: '#ff3030'
};

export const fonts = {
  serif: '"Libre Baskerville", serif',
  sansSerif: '"Jost", sans-serif'
};

export const TxtButton = styled.p({
  margin: 0,
  fontFamily: fonts.sansSerif,
  fontSize: '1.8em',
  color: colors.primary,
  cursor: 'pointer',
  transitionProperty: 'color',
  transitionDuration: '.3s',

  '&:hover': {
    color: colors.third,
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '2em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '2.4em'
  }
});

export const ArrowButton = styled.p({
  margin: 0,
  display: 'inline-block',
  fontFamily: fonts.sansSerif,
  fontSize: '2.4em',
  color: colors.primary,
  cursor: 'pointer',
  transitionProperty: 'color',
  transitionDuration: '.3s',

  '&:hover': {
    color: colors.third,
  }
});
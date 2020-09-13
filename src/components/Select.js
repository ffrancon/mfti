import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../styles/styles'

//-- STYLES --//
export const SelectTitle = styled.h2({
  marginTop: 0,
  marginBottom: 30,
  textAlign: 'left',
  fontSize: '3.2em',
  fontFamily: fonts.serif,
  color: colors.primary,

  '@media screen and (min-width: 992px)': {
    fontSize: '3.6em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '4em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '4.4em'
  }
});

const Li = styled.li({
  margin: '10px 0',
  minWidth: '20px',
  fontFamily: fonts.sansSerif,
  fontSize: '1.4em',
  color: colors.primary,
  cursor: 'pointer',
  borderBottom: `3px ${colors.secondary} solid`,
  transitionProperty: 'border',
  transitionDuration: '.3s',
  transform: 'translateX(100vw)',
  animationFillMode: 'forwards',

  '&:before': {
    display: 'inline-block',
    marginRight: 20,
    content: '"V"',
    color: colors.third,
    opacity: 0,
    transform: 'rotate(-90deg) translateY(-15px)',
    transitionProperty: 'transform, opacity',
    transitionDuration: '.3s'
  },

  '&:hover:before': {
    opacity: 1,
    transform: 'rotate(-90deg) translateY(0)'
  },

  '@media screen and (min-width: 992px)': {
    fontSize: '1.6em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '1.8em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '2em'
  }
});

//-- COMPONENT --//
const Select = props => {
  return(
    <div>
      <SelectTitle className='selectappear' id='selecttitle'><span css={`font-size: 1.7em`}><span css={`color: ${colors.third}`}>W</span>hat</span><br />are we listening to <span css={`color: ${colors.third}`}>?</span></SelectTitle>
      <ul css={`list-style: none; display: flex; flex-direction: column; align-items: flex-start; padding: 0`}>
        <Li className='selectappear' onClick={() => props.action('vocals')} css={`animation-delay: .3s`}>Singers<br /></Li>
        <Li className='selectappear' onClick={() => props.action('instru')} css={`animation-delay: .6s`}>Instrumental Music<br /></Li>
        <Li className='selectappear' onClick={() => props.action('electro')} css={`animation-delay: .9s`}>Electronic Music</Li>
      </ul>
    </div>
  )
};

export default Select;
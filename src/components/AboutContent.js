import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../styles/styles';

//-- STYLES --//
const Title = styled.h2({
  marginTop: 0,
  marginBottom: 20,
  fontFamily: fonts.serif,
  color: colors.primary,
  fontSize: '2em',

  '@media screen and (min-width: 992px)': {
    fontSize: '2.2em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '2.4em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '2.8em'
  }
})

const Txt = styled.p({
  margin: 0,
  fontFamily: fonts.sansSerif,
  color: colors.primary,
  fontWeight: 200,
  lineHeight: '1.5em',
  fontSize: '1em',

  '@media screen and (min-width: 992px)': {
    fontSize: '1.1em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '1.2em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1.3em'
  }
})

//-- COMPONENT --//
const AboutContent = () => {
  return(
    <div>
      <Title>Hello</Title>
      <Txt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate fugit non quibusdam,
      rerum possimus in voluptatibus ab dicta consectetur quos nesciunt labore
      quisquam beatae sed quia suscipit optio recusandae.</Txt>
    </div>
  )
}

export default AboutContent;
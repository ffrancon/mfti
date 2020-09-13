import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../styles/styles';


//-- STYLES --//
const Left = styled.div({
  boxSizing: 'border-box',
  padding: '0 50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const Right = styled.div({
  background: '#000',
  backgroundImage: 'url("../public/img/home.jpg")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const HomeTitle = styled.h1({
  margin: 0,
  fontSize: '2.2em',
  fontFamily: fonts.serif,
  color: colors.primary,
  lineHeight: '1.2em',

  '@media screen and (min-width: 992px)': {
    fontSize: '2.8em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '3.2em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '5em'
  }
});

const Desc = styled.h3({
  margin: '30px 0',
  color: colors.primary,
  fontFamily: fonts.sansSerif,
  fontSize: '1em',
  fontStyle: 'italic',
  fontWeight: 200,
  animationDelay : '.6s',
  opacity: 0,

  '@media screen and (min-width: 992px)': {
    fontSize: '1.2em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '1.4em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1.6em'
  }
});

const GetStarted = styled.p({
  margin: 0,
  color: colors.primary,
  fontFamily: fonts.sansSerif,
  fontSize: '.8em',
  cursor: 'pointer',
  textDecoration: 'underline',
  animationDelay : '1.2s',
  opacity: 0,

  '&:after': {
    display: 'inline-block',
    position: 'relative',
    top: 3,
    marginLeft: 5,
    content: '"v"',
    fontSize: '1.3em',
    color: '#ff3030',
    textDecoration: 'unset',
    transition: 'transform 0.3s'
  },

  '&:hover:after': {
    animationName: 'updown',
    animationDuration: '0.5s',
  },

  '@keyframes updown': {
    '33%': {
      transform: 'translateY(-5px)'
    },
    '66%': {
      transform: 'translateY(4px)'
    },
  },

  '@media screen and (min-width: 992px)': {
    fontSize: '1em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '1.2em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1.4em'
  }
})

//-- COMPONENT --//
const Home = props => {
  return(
    <div css={`
      display: grid;
      width: 100vw;
      height: 100vh;
      grid-template-columns: 40% auto;
      overflow: hidden;`
    }>
      <Left id='homeleft'>
        <HomeTitle className='hometitleappear'><span css={`font-size: 2em;`}><span css={`color: ${colors.third}`}>M</span>usic</span><br />for the inspired</HomeTitle>
        <Desc className='hometitleappear'>A personnal selection of great albums for work and concentration.</Desc>
        <GetStarted className='hometitleappear' id="homebutton" onClick={() => props.action('app')}>Get Started</GetStarted>
      </Left>
      <Right id='homeright' />
    </div>
  )
};

export default Home;
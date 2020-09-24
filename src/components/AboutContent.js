import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../styles/styles';

//-- STYLES --//
const Content = styled.div({
  width: '70%',

  // '@media screen and (min-width: 992px)': {
  //   fontSize: '2.2em'
  // },

  // '@media screen and (min-width: 1200px)': {
  //   fontSize: '2.4em'
  // },

  // '@media screen and (min-width: 1920px)': {
  //   fontSize: '2.8em'
  // }
});

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
  marginTop: 0,
  marginBottom: 60,
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
});

const Subtitle = styled.h3({
  margin: '20px 0',
  fontFamily: fonts.serif,
  color: colors.primary,
  fontSize: '1em',

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

const Ul = styled.ul({
  fontFamily: fonts.sansSerif,
  color: colors.primary,
  fontWeight: 200,
  fontSize: '1em',

  '@media screen and (min-width: 992px)': {
    fontSize: '1.1em'
  },

  '@media screen and (min-width: 1200px)': {
    fontSize: '1.2em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1.3em'
  },

  '& li': {
    marginBottom: 5
  }
});

//-- COMPONENT --//
const AboutContent = () => {
  return(
    <Content>
      <Title>Bienvenue !</Title>
      <Txt>Ce site a pour vocation de proposer à ses visiteurs une sélection personnelle d’albums destinés à une ambiance de travail et de concentration. Il s’agit d’un projet développé avec React dans le cadre de mon apprentissage du métier de développeur Web.</Txt>
      <Subtitle>Fonctionnalités à venir : </Subtitle>
      <Ul>
        <li>Version mobile</li>
        <li>Sélection aléatoire d'albums</li>
        <li>Ajout de contenu</li>
        <li>Mise en ligne sur un domaine dédié</li>
      </Ul>
    </Content>
  )
}

export default AboutContent;
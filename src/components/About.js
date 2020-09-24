import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../styles/styles';
import AboutContent from './AboutContent';

//-- STYLES --//
const Txt = styled.p({
  margin: 0,
  position: 'absolute',
  top: 20,
  left: 20,
  cursor: 'pointer',
  zIndex: 1000,
  color: colors.primary,
  fontFamily: fonts.serif,
  fontSize: '1em'
});

const AboutCt = styled.div({
  boxSizing: 'border-box',
  position: 'absolute',
  zIndex: 999,
  top: 0,
  left: 0,
  width: '40vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#212121',
  transform: 'translateX(-40vw)',
  transitionProperty: 'transform',
  transitionDuration: '.7s',
})

//-- COMPONENT --//
const About = () => {
  const [about, setAbout] = useState({
    visible: false,
    btn: 'about'
  });

  const toggleAbout = () => {
    // Affiche le panneau latéral About
    if (!about.visible) { 
      document.getElementById('aboutct').classList.add('toggleabout');
      document.getElementById('aboutbtn').classList.remove('aboutclosed');
      document.getElementById('aboutbtn').classList.add('aboutopen');
      setAbout({
        visible: true,
        btn: 'close'
      });
    
    }
    // Masque le panneau latéral About
    else { 
      document.getElementById('aboutct').classList.remove('toggleabout');
      document.getElementById('aboutbtn').classList.remove('aboutopen');
      document.getElementById('aboutbtn').classList.add('aboutclosed');
      setAbout({
        visible: false,
        btn: 'about'
      });
    }
  }

  return (
    <div>
      <Txt id='aboutbtn' className='aboutclosed' onClick={toggleAbout}>{about.btn}</Txt>
      <AboutCt id='aboutct'>
        <AboutContent />
      </AboutCt>
  </div>
  )
}

export default About;
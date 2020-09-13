import React from 'react';
import styled from 'styled-components';

import Main from './Main';

//-- STYLES --//
const Wrapper = styled.div({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '5%',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',

  '@media screen and (min-width: 1920px)': {
    paddingLeft: '7%',
  }
});

//-- COMPONENT --//
const AppWrapper = props => {
  return(
    <Wrapper id="app">
      <Main action={props.action} />
    </Wrapper>
  )
};

export default AppWrapper;
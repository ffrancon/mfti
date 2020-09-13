import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Select from './Select';
import Album from './Album';

//-- STYLES --//
const MainBlock = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 600,
  minHeight: 500,
});
//-- COMPONENT --//
const Main = () => {
  const [ category, setCategory ] = useState('');

  // Déclenche les animations d'apparition et disparition en fonction du menu affiché
  const handleButton = (value) => {
    // Menu sélection d'un style
    if (!category) {
      document.getElementById('selecttitle').classList.remove('selectappear');
      document.getElementById('selecttitle').classList.add('selectdisappear');
      document.querySelectorAll('li').forEach(element => {
        element.classList.remove('selectappear');
        element.style.transform = 'translateX(0)';
        element.classList.add('selectdisappear');
      });
      setTimeout(() => setCategory(value), 1200);
    }
    // Affichage des albums
    else {
      document.getElementById('albumct').classList.remove('albumappear');
      document.getElementById('albumct').classList.add('albumdisappear');
      setTimeout(() => setCategory(value), 1000);
    }
  }

  return(
    <MainBlock>
      { category
        ? (<Album category={category} action={handleButton} />)
        : (<Select action={handleButton} />)
      }
    </MainBlock>
  )
};

export default Main;
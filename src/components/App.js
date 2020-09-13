import React from 'react';
import { useState } from 'react';

import Home from './Home';
import AppWrapper from './AppWrapper';
import About from './About';

const App = () => {
  const [page, setPage] = useState('home')

  // Déclenche les animations de disparition de la page d'accueil et enclenche l'affichage de l'app
  const displayApp = param => {
    document.getElementById('homeleft').classList.add('homeleftdisappear');
    document.getElementById('homeright').classList.add('homerightdisappear');
    setTimeout(() => setPage(param), 900);
  }

  // Switch de la page d'accueil vers l'app quand le state "page" est modifié
  const renderSwitch = state => {
    switch(state) {
      case 'home':
        return (<Home action={displayApp} />);
      case 'app':
        return (<AppWrapper />);
    }
  }

  return(
    <div>
      <About />
      {renderSwitch(page)}
    </div>
  );
}

export default App;
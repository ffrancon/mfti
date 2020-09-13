import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AlbumDisplay from './AlbumDisplay'
import albums from '../albums.json';
import { TxtButton, ArrowButton } from '../styles/styles';

//-- STYLES --//
const PendingContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 300,
  width: 620,

  '@media screen and (min-width: 1200px)': {
    height: 400,
    width: 720,
  },

  '@media screen and (min-width: 1920px)': {
    height: 500,
    width: 820,
  }
})

//-- COMPONENT --//
const Album = props => {

  const C_ID = '3e6a3b6bdf4e4db88750fa47c69867bf';
  const C_S = '9cf0e608032d42f896ce614959ee89bc';

  const [ album, setAlbum ] = useState(null);
  const [ index, setIndex ] = useState(0);

  const category = albums.filter(obj => obj.category === props.category);

  // Navigation parmi les albums dans le composant AlbumDisplay
  const changeAlbum = way => {
    // Album suivant
    if(way === 'inc') {
      if (index === category[0].albums.length - 1) {
        setIndex(0);
      }
      else {
        setIndex(prevState => prevState + 1);
      }
    }
    // Album précédent
    else {
      if (index === 0) {
        setIndex(category[0].albums.length - 1);
      }
      else {
        setIndex(prevState => prevState - 1);
      }
    }
  }

  // useEffect mappé sur le state "index": Déclenché à chaque fois que l'on passe à l'album suivant ou précédent
  useEffect(() => {
    // Requêtes vers l'API Spotify
    const fetchData = async () => {
      let API_TOKEN = sessionStorage.getItem('API_TOKEN');
      const API_TOKEN_EXP = new Date(sessionStorage.getItem('API_TOKEN_EXP'));
      const now = new Date();

      // On vérifie si l'anthentication token est présent (première connexion ?) ou s'il a expiré
      if (!API_TOKEN || now > API_TOKEN_EXP) {
        // Requête pour générer un authentication token
        await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          body: 'grant_type=client_credentials',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(C_ID + ':' + C_S)
          }
        })
          .then(res => res.json())
          .then(data => {
            sessionStorage.setItem('API_TOKEN', data.access_token);
            const date = new Date();
            date.setSeconds(date.getSeconds() + 3590);
            sessionStorage.setItem('API_TOKEN_EXP', date.toISOString());
          });
          API_TOKEN = sessionStorage.getItem('API_TOKEN');
        }

      // Requête pour les infos d'album
      const API_URL = 'https://api.spotify.com/v1/albums/' + category[0].albums[index].id;
      await fetch(API_URL, {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`
            }
          })
        .then(res => res.json())
        .then(data => setAlbum(data));
    };
    fetchData();
  }, [index]);

  return(
    <div id='albumct' className='albumappear' css={`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <ArrowButton onClick={() => changeAlbum('dec')} css={`transform: rotate(90deg)`}>V</ArrowButton>
      <div css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}>
        {
          album
          ? ( <AlbumDisplay album={album} /> )
          : ( <PendingContainer><div className='pending'></div></PendingContainer> ) // Statut chargement de la requête
        }
        <TxtButton onClick={() => props.action('')}>Home</TxtButton>
      </div>
      <ArrowButton onClick={() => changeAlbum('inc')} css={`transform: rotate(-90deg)`}>V</ArrowButton>
    </div>
  )
};

export default Album;

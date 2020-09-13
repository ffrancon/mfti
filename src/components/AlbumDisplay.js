import React from 'react';
import styled from 'styled-components';
import SpotifyPlayer from 'react-spotify-player';

import { colors, fonts } from '../styles/styles';

//-- STYLES --//
const Grid = styled.div({
  margin: 40,
  display: 'grid',
  gridTemplateColumns: '300px 300px',
  gridGap: 20,

  '@media screen and (min-width: 1200px)': {
    gridTemplateColumns: '400px 300px',
  },

  '@media screen and (min-width: 1920px)': {
    gridTemplateColumns: '500px 300px',
  }
});

const AlbumPicCt = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  height: '300px',
  overflow: 'hidden',

  '@media screen and (min-width: 1200px)': {
    height: '400px'
  },

  '@media screen and (min-width: 1920px)': {
    height: '500px'
  }
});

const AlbumPic = styled.img({
  height: '100%',
});

const AlbumTitle = styled.h2({
  marginTop: 0,
  marginBottom: 10,
  fontFamily: fonts.sansSerif,
  fontSize: '1.6em',
  color: colors.primary,

  '@media screen and (min-width: 1200px)': {
    fontSize: '2em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '2.4em'
  }
});

// Paramètres lecteur Spotify
const size = {
  width: 300,
  height: '100%',
};
const view = 'list';
const theme = 'black';

//-- COMPONENT --//
const AlbumDisplay = props => {
  return (
    <Grid>
      <div css={`grid-column: 1/-1`}>
        {
          props.album.artists.length > 1
            ? (<AlbumTitle css={`text-align: center`}>{props.album.artists[0].name}, {props.album.artists[1].name} - {props.album.name}</AlbumTitle>)
            : (<AlbumTitle css={`text-align: center`}>{props.album.artists[0].name} - {props.album.name}</AlbumTitle>)
        }
      </div>
      <AlbumPicCt>
        <AlbumPic src={props.album.images[0].url} />
      </AlbumPicCt>
      <SpotifyPlayer
        uri={props.album.uri}
        size={size}
        view={view}
        theme={theme}
      />
    </Grid>
  )
};

export default AlbumDisplay;
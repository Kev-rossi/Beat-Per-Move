import React from 'react';
import BoutonBpm from './components/BoutonBpm/BoutonBpm';
import Demo from "./components/LecteurMusique/LecteurMusique";
//import PlayList from './components/PlayList/PLayList';
//import ReactAudioPlayer from 'react-audio-player';

import './App.css';

const App = () => {

  // const music = [
  //   {
  //     name: "Nirvana",
  //     image: "https://images.ladepeche.fr/api/v1/images/view/6130fc52d286c25f4a342194/full/image.jpg",
  //     url: "https://aveclagare.org/mp3/260717-MoonGogo-Thinker%20Bell.mp3",
  //     bpm: "70"
  //   }, {
  //     name: "Nirvana",
  //     image: "https://images.ladepeche.fr/api/v1/images/view/6130fc52d286c25f4a342194/full/image.jpg",
  //     url: "https://aveclagare.org/mp3/120717RisingAppalachia-Wider%20Circles.mp3",
  //     bpm: "120"
  //   }
  // ]

  return (
    <div className="App">
      <header className="App-header">
        <BoutonBpm />
      </header>
      <main>
        {/* <ReactAudioPlayer
          src={music[0].url}
          autoPlay
          controls
        /> */}
        <div className={'Demo'}>
        <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
          load playlist
        </button>
        <Demo />
        {/* <AudioPlayer currentPlayList={this.state.currentPlayList} 
          onToggle={({audioPlaying}) => console.log({audioPlaying})}
          onSongChanged={({currentSong}) => {console.log(currentSong)}}
        /> */}
      </div>
      </main>
    </div>
  );
}

export default App;

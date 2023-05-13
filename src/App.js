import imageRickMorty from "./Images/rick-morty.jpeg";
import './App.css';
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const [location, setLocation] = useState(null);
  const [episode, setEpisodio] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const api2 = await fetch('https://rickandmortyapi.com/api/location');
    const api3 = await fetch('https://rickandmortyapi.com/api/episode');
    const characterApi = await api.json();
    const locationApi = await api2.json();
    const episodeApi = await api3.json();
    //console.log(locationApi);
    setCharacters(characterApi.results);
    setLocation(locationApi.results);
    setEpisodio(episodeApi.results);
  };
  console.log(episode);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} location={location} episode={episode} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
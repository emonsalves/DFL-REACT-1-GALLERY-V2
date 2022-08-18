import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Section from './layout/Section';
import React from 'react'
import Mplayer from './components/Mplayer';

function App() {

  const digimons = [{
    "name": "Greymon",
    "img": "https://digimon.shadowsmith.com/img/greymon.jpg",
    "level": "Champion"
  }, {
    "name": "SkullGreymon",
    "img": "https://digimon.shadowsmith.com/img/skullgreymon.jpg",
    "level": "Ultimate"
  },
  {
    "name": "MetalGreymon",
    "img": "https://digimon.shadowsmith.com/img/metalgreymon.jpg",
    "level": "Ultimate"
  },
  {
    "name": "WarGreymon",
    "img": "https://digimon.shadowsmith.com/img/wargreymon.jpg",
    "level": "Mega"
  },
  {
    "name": "Angemon",
    "img": "https://digimon.shadowsmith.com/img/angemon.jpg",
    "level": "Champion"
  },
  {
    "name": "Angewomon",
    "img": "https://digimon.shadowsmith.com/img/angewomon.jpg",
    "level": "Ultimate"
  },
  {
    "name": "MagnaAngemon",
    "img": "https://digimon.shadowsmith.com/img/magnaangemon.jpg",
    "level": "Ultimate"
  }, {
    "name": "MarineAngemon",
    "img": "https://digimon.shadowsmith.com/img/marineangemon.jpg",
    "level": "Mega"
  }, {
    "name": "Agumon",
    "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
    "level": "Rookie"
  }, {
    "name": "Gabumon",
    "img": "https://digimon.shadowsmith.com/img/gabumon.jpg",
    "level": "Rookie"
  }, {
    "name": "Garurumon",
    "img": "https://digimon.shadowsmith.com/img/garurumon.jpg",
    "level": "Champion"
  }, {
    "name": "WereGarurumon",
    "img": "https://digimon.shadowsmith.com/img/weregarurumon.jpg",
    "level": "Ultimate"
  }, {
    "name": "MetalGarurumon",
    "img": "https://digimon.shadowsmith.com/img/metalgarurumon.jpg",
    "level": "Mega"
  }
  ];

  return (
    <>
      <Header titulo={"Galeria de Digimons con React"}/>
      <Section digimons={digimons} />
      <Mplayer/>
      <Footer titulo= "Descripción Digimons" descripcion={"Los Digimon (デジモン Dejimon)  son criaturas de la franquicia japonesa Digimon.En la ficción, sus cuerpos están hechos de  información digital, y cuando reciben gran daño, la información con la que están constituidos se daña y son destruidos."}/>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPoster/Rowpost';
import { originals, trending } from './urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={trending} title='Netflix Originels'/>
      <Rowpost url={originals} title='Action movies' isSmall/>
    
      
    </div>
  );
}

export default App;

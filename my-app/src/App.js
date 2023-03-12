import React from 'react'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import NavInfo from './Components/NavInfo/NavInfo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NavInfo/>
      <Banner/>
    </div>
  );
}

export default App;

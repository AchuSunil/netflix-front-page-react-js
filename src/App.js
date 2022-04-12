import React from 'react'
import NavBar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/RowPost/RowPost'
import './App.css'
import {orginals,action} from './urls'

function App() {
  return (
      <div className='App'>
              <NavBar/>
              <Banner/>
              <Rowpost url={orginals} title="Netflix Orginals"/>
              <Rowpost url={action} title="Actions" isSmall/>
              
      </div>
  );
}

export default App;

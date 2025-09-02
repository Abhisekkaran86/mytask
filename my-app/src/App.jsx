import React from 'react'

import "./App.css";


import { CategoryCards } from './Components/CategoryCards';
import DealOfTheDay from './Components/DealOfTheDay';
import Hero from './Components/Hero';


const App = () => {
  return (
    <div>
      <Hero/>
        <DealOfTheDay/>
      <CategoryCards/>
    
    </div>
  )
}

export default App
import './App.css'
import Grid from './components/Grid';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false)

  const darkMode = () => {
    setDark(!dark)
}

  return (
    <div className={`game ${dark ? 'dark' : ''}`}>
      <Nav onClick={ darkMode } dark={ dark } />
      <main className='main-table'>
        <Grid dark={ dark } />
      </ main>
    </ div>
  )
}

export default App;

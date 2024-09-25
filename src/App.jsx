import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { SearchEvents } from './components/SearchEvents'
import { ResultEvents } from './components/ResultEvents'
import { BodyStyled } from './styled-components/BodyStyled';
import { Footer } from './components/Footer';
import { CreateEvent } from './pages/CreateEvent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Copyright } from './components/Copyright';
import { FindEvents } from './pages/FindEvents';

function App() {

  // Config modo oscuro
  const [theme, setMode] = useState('light-mode');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const changeTheme = () => {
    const newMode = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  

  return (
    <Router>
      <BodyStyled $theme={theme}>

        <Nav $theme={theme} onSelectMode={changeTheme} />

        <Routes>
          <Route path="/create-event" element={<CreateEvent $theme={theme}/>} />
          <Route path="/" element={<FindEvents  $theme={theme}/>} />
        </Routes>

        <Footer $theme={theme} />

        <Copyright />

      </BodyStyled>

    </Router>
  )
}

export default App

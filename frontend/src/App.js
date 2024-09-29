// icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react'
import './App.css';
import Header from './pages/global/Header/Header';
import SideBar from './pages/global/SideBar/SideBar';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home/Home';
import Dash from './pages/Dash/Dash';
import { Routes, Route } from 'react-router-dom';

// aqui sao as rotas, ou seja, as paginas que vao ser acessadas

function App() {

  const {theme} = useTheme();

  return (
      <div className="App" id={theme}>
        <Header />
        <SideBar />
        <main id="main" className="main p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dash" element={<Dash />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
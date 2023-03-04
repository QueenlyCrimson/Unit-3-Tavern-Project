import React from 'react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="about" element={ <About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

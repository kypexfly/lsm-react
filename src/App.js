// CSS
import './bootstrap-grid.css';
import './w3.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

// Pages
import PSEfectivos from './Pages/PSEfectivos/PSEfectivos';
import IchiVelocidad from './Pages/IchiVelocidad/IchiVelocidad';
import Fragmentos from './Pages/Fragmentos/Fragmentos';
import Danio from './Pages/Danio/Danio';
import AtkvsDmg from './Pages/AtkvsDmg/AtkvsDmg';
import Templos from './Pages/Templos/Templos';
import SubCosmos from './Pages/SubCosmos/SubCosmos';
import XpTemplos from './Pages/XpTemplos/XpTemplos';
import Portal from './Pages/Portal/Portal';

function App() {


  return (
    <Router>
      <div className="App">

        <Nav />

        <Routes>
          <Route path='/' element={<Portal />} title='Logia Santos Mojados' />
          <Route path='/PSEfectivos' element={<PSEfectivos />} title='PS Efectivos - Calculadora | Logia Santos Mojados' />
          <Route path='/IchiVelocidad' element={<IchiVelocidad />} title='Ichi Velocidad - Calculadora | Logia Santos Mojados' />
          <Route path='/Fragmentos' element={<Fragmentos />} title='Fragmentos PvE - Calculadora | Logia Santos Mojados' />
          <Route path='/Danio' element={<Danio />} title='Daño - Calculadora | Logia Santos Mojados' />
          <Route path='/AtkvsDmg' element={<AtkvsDmg />} title='CAtkvsCDmg - Calculadora | Logia Santos Mojados' />
          <Route path='/Templos' element={<Templos />} title='Templos - Calculadora | Logia Santos Mojados' />
          <Route path='/SubCosmos' element={<SubCosmos />} title='Subatributos ideales - Tabla | Logia Santos Mojados' />
          <Route path='/XpTemplos' element={<XpTemplos />} title='XP Flores - Tabla | Logia Santos Mojados' />
        </Routes>

        <Footer />
      </div>

    </Router>
  );
}

export default App;

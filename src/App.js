// CSS
import './bootstrap-grid.css';
import './w3.css';
import './App.css';

// Libraries
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';


// Pages

import NotFound from './Pages/NotFound/NotFound';
const PSEfectivos = lazy(() => import('./Pages/PSEfectivos/PSEfectivos'));
const IchiVelocidad = lazy(() => import('./Pages/IchiVelocidad/IchiVelocidad'));
const Fragmentos = lazy(() => import('./Pages/Fragmentos/Fragmentos'));
const Danio = lazy(() => import('./Pages/Danio/Danio'));
const AtkvsDmg = lazy(() => import('./Pages/AtkvsDmg/AtkvsDmg'));
const Templos = lazy(() => import('./Pages/Templos/Templos'));
const SubCosmos = lazy(() => import('./Pages/SubCosmos/SubCosmos'));
const XpTemplos = lazy(() => import('./Pages/XpTemplos/XpTemplos'));
const Portal = lazy(() => import('./Pages/Portal/Portal'));

function App() {

  return (
    <Router>
      <div className="App">

        <Nav />

        <Suspense fallback={
          <section id="section" className="d-flex">
            <div className="container">
              <div className="content justify-content-center">

                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

              </div>
            </div>
          </section>
        }>

          <Routes>
            <Route path='/' element={<Portal />} />
            <Route path='/PSEfectivos' element={<PSEfectivos />} title='PS Efectivos - Calculadora | Logia Santos Mojados' />
            <Route path='/IchiVelocidad' element={<IchiVelocidad />} title='Ichi Velocidad - Calculadora | Logia Santos Mojados' />
            <Route path='/Fragmentos' element={<Fragmentos />} title='Fragmentos PvE - Calculadora | Logia Santos Mojados' />
            <Route path='/Danio' element={<Danio />} title='Daño - Calculadora | Logia Santos Mojados' />
            <Route path='/AtkvsDmg' element={<AtkvsDmg />} title='CAtkvsCDmg - Calculadora | Logia Santos Mojados' />
            <Route path='/Templos' element={<Templos />} title='Templos - Calculadora | Logia Santos Mojados' />
            <Route path='/SubCosmos' element={<SubCosmos />} title='Subatributos ideales - Tabla | Logia Santos Mojados' />
            <Route path='/XpTemplos' element={<XpTemplos />} title='XP Flores - Tabla | Logia Santos Mojados' />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </Suspense>

        <Footer />
      </div>

    </Router>
  );
}

export default App;

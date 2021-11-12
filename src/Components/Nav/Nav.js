import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav id="nav">
            <div className="container">
                <div id="nav-logo">
                    <NavLink className="logo" to="/">La Logia de los Santos Mojados</NavLink>
                </div>

                <ul>
                    <NavLink to='/PSEfectivos' className='nav-link' activeClassName="active">PS Efectivos</NavLink>
                    <NavLink to='/IchiVelocidad' className='nav-link' activeClassName="active">Ichi Velocidad</NavLink>
                    <NavLink to='/Fragmentos' className='nav-link' activeClassName="active">Boletos PvE</NavLink>
                    <NavLink to='/Danio' className='nav-link' activeClassName="active">Calc. Daño</NavLink>
                    <NavLink to='/AtkvsDmg' className='nav-link' activeClassName="active">Calc. CAtk vs CDmg</NavLink>
                    <NavLink to='/Templos' className='nav-link' activeClassName="active">Calc. Templos</NavLink>
                    <NavLink to='/SubCosmos' className='nav-link' activeClassName="active">Tabla de Subs</NavLink>
                    <NavLink to='/XpTemplos' className='nav-link' activeClassName="active">Tabla XP</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
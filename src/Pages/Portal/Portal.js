import React, { useEffect } from 'react';
import Calc from '../../Components/Calc/Calc';

import './Portal.css';
// images

import calc01 from '../../Images/calc-01.jpg';
import calc02 from '../../Images/calc-02.jpg';
import calc03 from '../../Images/calc-03.jpg';
import calc04 from '../../Images/calc-04.jpg';
import calc05 from '../../Images/calc-05.jpg';
import calc06 from '../../Images/calc-06.jpg';
import syoutube from '../../Images/social-youtube.png';
import sfacebook from '../../Images/social-facebook.png';
import sdiscord from '../../Images/social-discord.png';
import sinstagram from '../../Images/social-instagram.png';

function Portal() {

    useEffect(() => {
        window.scroll(0, 0,);
    }, []);

    return (
        < React.Fragment >


            <section id="banner">
            </section>

            <main id="main-body">
                <div className="container">
                    <div id="intro" className="boxes">
                        <div className="row">
                            <div className="col-lg d-flex justify-content-lg-start justify-content-center">
                                <div className="box-title">
                                    <center>
                                        <h1>Quantum Lex y Bolita Darroz</h1>
                                    </center>
                                </div>
                            </div>
                            <div id="social" className="col-lg-auto d-flex justify-content-center align-self-center">
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/QuantumLex"><img className="hover-animate" src={syoutube} alt="Youtube" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/LaLogiaDeLosSantosMojados/"><img className="hover-animate" src={sfacebook} alt="Facebook" /></a>
                                <a target="_blank" rel="noreferrer" href="https://discord.com/invite/Z2ZnQR3"><img className="hover-animate" src={sdiscord} alt="Discord" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/quantumybolita/"><img className="hover-animate" src={sinstagram} alt="Instagram" /></a>

                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-lg-8">

                            <div className="boxes">
                                <div className="box-title">
                                    <h1>Último vídeo</h1>
                                </div>
                                <div className="box-content w3-purple">
                                    <div className="container-iframe">
                                        <iframe className="responsive-iframe" src="https://www.youtube-nocookie.com/embed/videoseries?list=UUeTETrBUUG4Kd04_GJBo2hA" title="YouTube video player" allowFullScreen="" frameBorder="0"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                                <div className="box-title">
                                    <h1>Saint Seiya Awakening | 🛠 Calculadoras</h1>
                                </div>

                                <div className="calc">
                                    <Calc toUrl="/PSEfectivos" imageUrl={calc01} title="PS Efectivos" />
                                    <Calc toUrl="/IchiVelocidad" imageUrl={calc02} title="IchiVelocidad" />
                                    <Calc toUrl="/Fragmentos" imageUrl={calc03} title="Fragmentos PvE" />
                                    <Calc toUrl="/Danio" imageUrl={calc04} title="Daño" />
                                    <Calc toUrl="/AtkvsDmg" imageUrl={calc05} title="CATK vs CDMG" />
                                    <Calc toUrl="/Templos" imageUrl={calc06} title="Templos de flores" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="boxes">
                                <div className="box-title">
                                    <h1>REalM: Walk of Soul</h1>
                                </div>
                                <div className="box-content w3-purple">
                                    <center>
                                        <a target="_blank" rel="noreferrer" href="https://store.steampowered.com/app/417020/REalM_Walk_of_Soul/">
                                            <img style={{ maxWidth: '100%' }} src="https://cdn.cloudflare.steamstatic.com/steam/apps/417020/header.jpg?t=1635570045" alt="REalM: Walk of Soul" />
                                        </a>
                                        <br /><br />
                                        Disponible ya en: PC | PS4
                                    </center>
                                </div>
                            </div>


                            <div className="boxes">
                                <div className="box-title">
                                    <h1>Saint Seiya Awakening - Guías</h1>
                                </div>
                                <div className="box-content w3-purple">
                                    <h5>Tablas</h5>
                                    <ul>
                                        <li><a className="nav-link" href="/">Tabla de Experiencia de los Templo de Flores</a></li>
                                        <li><a className="nav-link" href="/">Tabla Subatributos de Comos</a></li>
                                        <li><a className="nav-link" href="/">Guía Torre del Sello</a></li>
                                        <li><a className="nav-link" href="/">Guía Torre Masei</a></li>
                                    </ul>

                                    <h5>Otros</h5>
                                    <ul>
                                        <li><a className="nav-link" href="https://docs.google.com/spreadsheets/u/1/d/1RmhUTEeM8s_FtRfTe9BQg9S3JelDSJQcgeuspk1R9Ic/htmlview?pru=AAABcgWrlpE*1EhEMxytuK__RD2qaFv4Xw#">
                                            Saint Seiya Awakening : Tier List/Skills/Cosmo/Tips</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="boxes">
                                <div className="box-title">
                                    <h1>Acerca de nosotros</h1>
                                </div>
                                <div className="box-content w3-purple">
                                    <p>¿Estás listo para usar la ciencia del cosmos para calcular matemáticamente las mejores
                                        estrategias de Saint Seiya Awakening?Bienvenido a la Logia de los Santos Mojados.
                                        <br /><br />
                                        Tenemos los directos Lunes y Miércoles a las 8: 30 pm hora del server.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment >
    )
}

export default Portal;
import '../../Components/Card/Card.css';

function SubCosmos() {
    return (
        <section id="section" className="d-flex">
            <div className="container ">
                <div className="content justify-content-center ">
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="card-big">
                                <div className="container">
                                    <h1>Subs ideales por cosmo</h1>

                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Cosmo lvl 1</th>
                                                <th>Subs Ideales</th>
                                                <th>Subs utiles</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><img src={require('../../Images/c1.png').default} alt="" />Fire Drop / Gota de Fuego</td>
                                                <td>Spd, %HP, %P.Atk</td>
                                                <td>Crit, def, HP</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c2.png').default} alt="" />P.stone / Piedra F</td>
                                                <td>Spd, %P.Atk, Crit</td>
                                                <td>def, HP</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c3.png').default} alt="" />Eagle Eye / Ojo de Águila</td>
                                                <td>Spd, %HP</td>
                                                <td>def, HP</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c4.png').default} alt="" />Rosary / Rosario</td>
                                                <td>Spd, Cdmg</td>
                                                <td>%Catk</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c5.png').default} alt="" />C.Stone / Piedra C.</td>
                                                <td>Spd, CAtk</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c6.png').default} alt="" />AntiStick / Anti Adherente</td>
                                                <td>Spd,%HP</td>
                                                <td>def, HP</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c7.png').default} alt="" />Whitemist / Niebla blanca</td>
                                                <td>Spd, %HP</td>
                                                <td>def, HP</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c8.png').default} alt="" />Flowering / Floración</td>
                                                <td>Spd</td>
                                                <td>def, HP, %HIT</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c9.png').default} alt="" />Tenacity / Tenacidad</td>
                                                <td>Spd, %HP</td>
                                                <td>P.Atk, Crit, Cdmg, %CAtk</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c10.png').default} alt="" />Spiritprint / Sello espiritual</td>
                                                <td>Spd, %HP</td>
                                                <td>P.Atk, Crit, Cdmg, %CAtk</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c11.png').default} alt="" />Knowing / conocimiento</td>
                                                <td>Spd,%HP</td>
                                                <td>P.Atk, Crit, Cdmg, %CAtk</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c12.png').default} alt="" />Seiya</td>
                                                <td>%HP, %HIT, Spd</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c13.png').default} alt="" />Newmoon / Luna nueva</td>
                                                <td>HP%</td>
                                                <td>%Catk (Kanon)</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c14.png').default} alt="" />Humingbird / Colibrí</td>
                                                <td>Lifesteal, Cdmg</td>
                                                <td>%Catk</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c15.png').default} alt="" />Staunch / Devoto</td>
                                                <td>%HP, Lifesteal, %P.Atk</td>
                                                <td>Res, Crit</td>
                                            </tr>
                                            <tr>
                                                <td><img src={require('../../Images/c16.png').default} alt="" />Crystalfire / Fuego de Cristal</td>
                                                <td>Lifesteal, %P.Atk</td>
                                                <td>Crit</td>
                                            </tr>
                                            <tr>
                                                <td>Legendario de Ataque</td>
                                                <td>Lifesteal, Spd</td>
                                                <td>P.Atk, Crit, Cdmg, %CAtk</td>
                                            </tr>
                                            <tr>
                                                <td>Legendary de Soporte</td>
                                                <td>Spd</td>
                                                <td>def, HP</td>
                                            </tr>
                                            <tr>
                                                <td>Legendario Tanque</td>
                                                <td>SPD, %HP</td>
                                                <td>Res, def, HP</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <footer className="w3-container w3-purple">
                                    <div className="container">
                                        <h1>Información adicional</h1>
                                        <p>Información de subs ideales gracias a Trapolice, <a href="https://www.reddit.com/r/SaintSeiyaKOTZ/comments/f96tsz/trapos_compendium_to_cosmo_burning_vol2/">
                                            post original</a></p>
                                        <p>Cuidado con los subs de "Curación"</p>
                                        <p><b>%Atk</b> siempre es mejor a <b>Atk</b></p>
                                        <p><b>%HP</b> siempre es mejor a <b>HP</b></p>
                                        <p><b>Def</b> siempre es mejor a <b>%Def</b></p>
                                        <p><b>2 subs planos</b> = a <b>1 sub de % (Atk, HP)</b></p>
                                        <p><b>2 subs de %</b> = a <b>1 sub plano (Def)</b></p>
                                    </div>
                                </footer>
                            </div>
                        </div>

                        <div className="col mt-lg-4">
                            <div className="container-iframe">
                                <iframe title="YouTube video player" className="responsive-iframe" src="https://www.youtube.com/embed/rdQReBH8RAE"></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubCosmos;
import { useEffect } from 'react';
import '../../Components/Card/Card.css';

function XpTemplos() {

    useEffect(() => {
        window.scroll(0, 0,);
    }, []);

    return (
        <section id="section" className="d-flex">
            <div className="container">
                <div className="content justify-content-center">

                    <div className="row row-cols-lg-2 row-cols-1 align-items-center">

                        <div className="col">
                            <div className="card-big">
                                <div className="container">
                                    <h1>Cajas moradas por templo</h1>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Templo</th>
                                                    <th>Prob</th>
                                                    <th>Grado 2</th>
                                                    <th>Grado 3</th>
                                                    <th>Grado 4</th>
                                                    <th>Grado 5</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Bronze Glow</td>
                                                    <td>16.5%</td>
                                                    <td>1,717</td>
                                                    <td>11,364</td>
                                                    <td>40,364</td>
                                                    <td>107,182</td>
                                                </tr>
                                                <tr>
                                                    <td>Silver Glow</td>
                                                    <td>4%</td>
                                                    <td>7,083</td>
                                                    <td>46,875</td>
                                                    <td>166,500</td>
                                                    <td>442,125</td>
                                                </tr>
                                                <tr>
                                                    <td>Tank Legion</td>
                                                    <td>4%</td>
                                                    <td>7,083</td>
                                                    <td>46,875</td>
                                                    <td>166,500</td>
                                                    <td>442,125</td>
                                                </tr>
                                                <tr>
                                                    <td>Speed Fist</td>
                                                    <td>5%</td>
                                                    <td>5,667</td>
                                                    <td>37,500</td>
                                                    <td>133,200</td>
                                                    <td>353,700</td>
                                                </tr>
                                                <tr>
                                                    <td>Mental CTRL</td>
                                                    <td>4%</td>
                                                    <td>7,083</td>
                                                    <td>46,875</td>
                                                    <td>166,500</td>
                                                    <td>442,125</td>
                                                </tr>
                                                <tr>
                                                    <td>Beast Soul</td>
                                                    <td>4%</td>
                                                    <td>7,083</td>
                                                    <td>46,875</td>
                                                    <td>166,500</td>
                                                    <td>442,125</td>
                                                </tr>
                                                <tr>
                                                    <td>God's Guard</td>
                                                    <td>0.8%</td>
                                                    <td>35,417</td>
                                                    <td>234,375</td>
                                                    <td>832,500</td>
                                                    <td>2,210,625</td>
                                                </tr>
                                                <tr>
                                                    <td>Divine Glow</td>
                                                    <td>16.5%</td>
                                                    <td>1,717</td>
                                                    <td>11,364</td>
                                                    <td>40,364</td>
                                                    <td>107,182</td>
                                                </tr>
                                                <tr>
                                                    <td>Frozen Fire</td>
                                                    <td>4%</td>
                                                    <td>7,083</td>
                                                    <td>46,875</td>
                                                    <td>166,500</td>
                                                    <td>442,125</td>
                                                </tr>
                                                <tr>
                                                    <td>Life Heal</td>
                                                    <td>4%</td>
                                                    <td>7,083</td>
                                                    <td>46,875</td>
                                                    <td>166,500</td>
                                                    <td>442,125</td>
                                                </tr>
                                                <tr>
                                                    <td>SPD Strike</td>
                                                    <td>2.5%</td>
                                                    <td>11,333</td>
                                                    <td>75,000</td>
                                                    <td>266,400</td>
                                                    <td>707,400</td>
                                                </tr>
                                                <tr>
                                                    <td>Dark Altar</td>
                                                    <td>16.5%</td>
                                                    <td>1,717</td>
                                                    <td>11,364</td>
                                                    <td>40,364</td>
                                                    <td>107,182</td>
                                                </tr>
                                                <tr>
                                                    <td>Absolute Domain</td>
                                                    <td>0.8%</td>
                                                    <td>35,417</td>
                                                    <td>234,375</td>
                                                    <td>832,500</td>
                                                    <td>2,210,625</td>
                                                </tr>
                                                <tr>
                                                    <td>Masei Elite</td>
                                                    <td>16.5%</td>
                                                    <td>1,717</td>
                                                    <td>11,364</td>
                                                    <td>40,364</td>
                                                    <td>107,182</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <footer className="w3-container w3-purple">
                                    <div className="container">
                                        <h1>Información adicional</h1>
                                        <p>La suma total no es 100% ya que es una aproximación</p>
                                    </div>
                                </footer>

                            </div>
                        </div>

                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="card-1">
                                        <div className="container">
                                            <h1 style={{ fontSize: 'medium' }}>Experiencia por flores</h1>

                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Flor</th>
                                                        <th>Xp</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Verde</td>
                                                        <td>10</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Azul</td>
                                                        <td>40</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Morada</td>
                                                        <td>120</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card-1">
                                        <div className="container">
                                            <h1 style={{ fontSize: 'medium' }}>Experiencia para grado</h1>
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Grado</th>
                                                        <th>Xp</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>34,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>225,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>799,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>2,122,200</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <br />
                                <div className="container-iframe">
                                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/rdQReBH8RAE" title="YouTube video player"></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default XpTemplos;
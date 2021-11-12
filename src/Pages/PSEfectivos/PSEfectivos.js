
import React from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-01.jpg';
import getOptions from "./getOptions";


function PSEfectivos() {
    return (
        <section id="section" className="d-flex">
            <div className="container">
                <div className="content justify-content-center">

                    <Card bg={background}
                        content={content()}
                        footer={footer()}
                    />
                </div>
            </div>
        </section >
    )
}

function content() {
    return (
        <React.Fragment>
            <h1>Atributos</h1>
            <div className="row">
                <div className="col"><label>PS Blanco</label></div>
                <div className="col"><input type="number" name="atk" id="psBase" defaultValue="100" /></div>
            </div>

            <div className="row">
                <div className="col"><label>PS Amarillo</label></div>
                <div className="col"><input type="number" name="atk" id="psBono" defaultValue="100" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Def F Blanco</label></div>
                <div className="col"><input type="number" name="mult" id="defFBase" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Def F Amarillo</label></div>
                <div className="col"><input type="number" name="mult" id="defFBono" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Def C Blanco</label></div>
                <div className="col"><input type="number" name="mult" id="defCBase" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Def C Amarillo</label></div>
                <div className="col"><input type="number" name="mult" id="defCBono" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Resistencia Fisica</label></div>
                <div className="col"><input type="number" name="pierce" id="resistF" defaultValue="12.5" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Resistencia Cosmica</label></div>
                <div className="col"><input type="number" name="skill" id="resistC" defaultValue="12.5" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Reducción de Daño</label></div>
                <div className="col"><input type="number" name="finalDmg" id="reduccion" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Cosmo equipado:</label></div>
                <div className="col">
                    <select name="cosmo" id="cosmo">
                        <option value="otro">Otro</option>
                        <option value="loli">Loli(Fuschia)</option>
                        <option value="escarabajo">Escarabajo</option>
                        <option value="mandala">Mandala</option>
                    </select>
                </div>
            </div>

            <center>
                <button className="btn" type="button" onClick={getOptions}>
                    Calcular PS Efectivos
                </button>
            </center>
        </React.Fragment>
    )
}

function footer() {
    return (
        <React.Fragment>
            <h1>Puntos de Salud</h1>
            <p id="PSpvp">PS PVP</p>
            <p id="PSEef">PS Físicos efectivos </p>
            <p id="PSEec">PS Cósmicos efectivos</p>
            <p id="PSProm">PS Efectivos promedio</p>
            <hr />
            <p>
                <a href="https://www.reddit.com/r/SaintSeiyaKOTZ/comments/gdroi6/complete_damage_formula/">
                    Fórmula de daño gracias a Pangon</a>
            </p>
        </React.Fragment>
    )
}



export default PSEfectivos;
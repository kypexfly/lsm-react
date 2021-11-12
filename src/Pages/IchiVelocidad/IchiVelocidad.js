import React from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-02.jpg';

function IchiVelocidad() {
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
            <h1>Combo Ichi</h1>
            <div className="row">
                <div className="col">
                    <label>Velocidad Ichi Amarillo 454+</label>
                </div>
                <div className="col">
                    <input type="number" name="atk" id="velocidadIchi" defaultValue="400" />
                </div>
            </div>

            <div className=" row">
                <div className="col">
                    <label>Velocidad Pj a Acelerar (Vel en Blanco)</label>
                </div>
                <div className="col">
                    <input type="number" name="atk" id="velocidadObjetivo" defaultValue="200" />
                </div>
            </div>

            <center>
                <button className="btn" type="button" onClick={getOptions}>
                    Calcular Velocidad
                </button>
            </center>
        </React.Fragment>
    )
}

function footer() {
    return (
        <React.Fragment>
            <h1>¿Cuánta velocidad necesitas?</h1>
            <p id="velocidadAgregar">Tu personaje necesita</p>
        </React.Fragment>
    )
}

function getOptions() {

    var velocidadIchi = parseFloat(document.getElementById("velocidadIchi").value);
    var velocidadObjetivo = parseFloat(document.getElementById("velocidadObjetivo").value);
    var velocidadIchiTotal = 454 + velocidadIchi;
    var velocidadAgregar = Math.ceil((velocidadIchiTotal - 49) / 2 - velocidadObjetivo);

    document.getElementById("velocidadAgregar").innerHTML = "Tu personaje necesita: " + velocidadObjetivo + " + <b>" + velocidadAgregar + "</b> de velocidad";

}

export default IchiVelocidad;
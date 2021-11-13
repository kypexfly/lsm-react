import React, { useEffect } from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-05.jpg'


function AtkvsDmg() {

    useEffect(() => {
        window.scroll(0, 0,);
    }, []);

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
                <div className="col"><label>C.Atk Blanco</label></div>
                <div className="col"><input type="number" name="atk" id="atkBase" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>C.Atk Amarillo</label></div>
                <div className="col"><input type="number" name="atk" id="atkBono" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>C.Atk Verde/PvE</label></div>
                <div className="col"><input type="number" name="atk" id="atkVerde" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>C. Dmg</label></div>
                <div className="col"><input type="number" name="mult" id="mult" defaultValue="0" /></div>
            </div>

            <center>
                <button className="btn" type="button" onClick={getOptions}>
                    Calcular Proporción
                </button>
            </center>
        </React.Fragment>
    )
}

function footer() {
    return (
        <React.Fragment>
            <h1>Qué conviene usar</h1>
            <p id="danioFinal">Es mejor usar</p>
            <p id="danioBase">Límite</p>
            <p id="danioMax">Máximo de Bono de ataque a buscar</p>
            <small>
                <p>* El Máximo es considerando un Daño Cósmico de 30% <br />
                    ** Solo usar el ataque verde para unidades exclusivas de PvE</p>
            </small>
        </React.Fragment>
    )
}

function getOptions() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var atkBase = parseFloat(document.getElementById("atkBase").value);
    var atkBono = parseFloat(document.getElementById("atkBono").value);
    var atkVerde = parseFloat(document.getElementById("atkVerde").value);

    atkBono = atkBono + atkVerde;

    var mult = parseFloat(document.getElementById("mult").value);


    var Threshold = (2.5462 * (1 + mult / 100) - 1) * atkBase;
    var ThresholdMax = (2.31006) * atkBase;

    Threshold = Math.round(Threshold * 100) / 100;
    ThresholdMax = Math.round(ThresholdMax * 100) / 100;


    document.getElementById("danioBase").innerHTML = "Límite: <b>" + numberWithCommas(Threshold) + "</b> de Ataque Cósmico de Bono";
    document.getElementById("danioMax").innerHTML = "Máximo: <b>" + numberWithCommas(ThresholdMax) + "</b> Bono de ataque a buscar";

    if (atkBono > Threshold) {
        document.getElementById("danioFinal").innerHTML = "Es mejor buscar <b>Daño Cósmico</b> ";
    } else {
        document.getElementById("danioFinal").innerHTML = "Es mejor buscar <b>Ataque Cósmico</b>";
    }

}


export default AtkvsDmg;
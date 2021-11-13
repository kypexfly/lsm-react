import React, { useEffect } from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-01.jpg';

function PSEfectivos() {

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

function getOptions() {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    var psBase = parseFloat(document.getElementById("psBase").value);
    var psBono = parseFloat(document.getElementById("psBono").value);
    var defFBase = parseFloat(document.getElementById("defFBase").value);
    var defFBono = parseFloat(document.getElementById("defFBono").value);
    var defCBase = parseFloat(document.getElementById("defCBase").value);
    var defCBono = parseFloat(document.getElementById("defCBono").value);

    var resistF = parseFloat(document.getElementById("resistF").value);
    var resistC = parseFloat(document.getElementById("resistC").value);
    var reduccion = parseFloat(document.getElementById("reduccion").value);

    var ps = (psBase + psBono) * 2;
    var defF = defFBase + defFBono;
    var defC = defCBase + defCBono;

    var cosmo = document.getElementById("cosmo").value;

    switch (cosmo) {
        case "otro":
            reduccion = 1;
            break;
        case "loli":
            reduccion = 0.8;
            resistF = resistF + 20;
            resistC = resistC + 20;
            break;
        case "escarabajo":
            ps = ps * 1.15;
            reduccion = 1;
            break;
        case "mandala":
            reduccion = 0.85;
            break;
        default:
            break;
    }

    var defFactorF = (1200) / (defF + 1200) * 1 / (1 + resistF / 100) * reduccion;
    var defFactorC = (1200) / (defC + 1200) * 1 / (1 + resistC / 100) * reduccion;

    var PSefecF = ps / defFactorF;
    var PSefecC = ps / defFactorC;
    var psPromedio = (PSefecF + PSefecC) / 2;

    ps = Math.floor(ps);
    PSefecF = Math.floor(PSefecF);
    PSefecC = Math.floor(PSefecC);
    psPromedio = Math.floor(psPromedio);

    document.getElementById("PSpvp").innerHTML = "PS PVP: <b>" + numberWithCommas(ps) + "</b>";
    document.getElementById("PSEef").innerHTML = "PS Físicos efectivos: <b>" + numberWithCommas(PSefecF) + "</b>";
    document.getElementById("PSEec").innerHTML = "PS Cósmicos efectivos: <b>" + numberWithCommas(PSefecC) + "</b>";
    document.getElementById("PSProm").innerHTML = "PS Efectivos promedio: <b>" + numberWithCommas(psPromedio) + "</b>";

}


export default PSEfectivos;
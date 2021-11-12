import React from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-04.jpg'

function Danio() {
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
            <h1>Atacante</h1>
            <div className="row">
                <div className="col"><label>Nivel</label></div>
                <div className="col"><input type="number" name="level" id="level" defaultValue="80" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P.Atk/C.Atk Blanco</label></div>
                <div className="col"><input type="number" name="atk" id="atkBase" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P.Atk/C.Atk Amarillo</label></div>
                <div className="col"><input type="number" name="atk" id="atkBono" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P.Atk/C.Atk Verde/PvE</label></div>
                <div className="col"><input type="number" name="atk" id="atkVerde" defaultValue="0" /></div>
            </div>


            <div className="row">
                <div className="col"><label>Crit Effect/C. Dmg</label></div>
                <div className="col"><input type="number" name="mult" id="mult" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P. Def/C. Def Pierce</label></div>
                <div className="col"><input type="number" name="pierce" id="pierce" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Skill Dmg</label></div>
                <div className="col"><input type="number" name="skill" id="skill" defaultValue="100" /></div>
            </div>

            <div className="row">
                <div className="col"><label>Daño Final</label></div>
                <div className="col"><input type="number" name="finalDmg" id="finalDmg" defaultValue="0" /></div>
            </div>

            <br />

            <h1>Defensas del objetivo</h1>

            <div className="row">
                <div className="col"><label>P Def/C Def Blanco</label></div>
                <div className="col"><input type="number" name="def" id="defBase" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P Def/C Def Amarillo</label></div>
                <div className="col"><input type="number" name="def" id="defBono" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P Def/C Def Verde</label></div>
                <div className="col"><input type="number" name="def" id="defVerde" defaultValue="0" /></div>
            </div>

            <div className="row">
                <div className="col"><label>P Dmg/C Dmg Resist</label></div>
                <div className="col"><input type="number" name="resist" id="resist" defaultValue="0" /></div>
            </div>

            <center>
                <button className="btn" type="button" onClick={getOptions}>
                    Calcular Daño
                </button>
            </center>

        </React.Fragment>
    )
}

function footer() {
    return (
        <React.Fragment>
            <h1>Daño</h1>
            <p id="danioBase">Daño Base.</p>
            <p id="danioFinal">Daño Crítico / Cósmico total</p>
            <p id="danioVerdadero">Daño Verdadero.</p>
            <hr />
            <p>
                <a href="https://www.reddit.com/r/SaintSeiyaKOTZ/comments/gdroi6/complete_damage_formula/">
                    Fórmula de daño gracias a Pangon</a>

            </p>
        </React.Fragment>
    )
}

function getOptions() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var level = parseFloat(document.getElementById("level").value);
    var atkBase = parseFloat(document.getElementById("atkBase").value);
    var atkBono = parseFloat(document.getElementById("atkBono").value);
    var atkVerde = parseFloat(document.getElementById("atkVerde").value);

    var mult = parseFloat(document.getElementById("mult").value);
    var pierce = parseFloat(document.getElementById("pierce").value);
    var skill = parseFloat(document.getElementById("skill").value);

    var defBase = parseFloat(document.getElementById("defBase").value);
    var defBono = parseFloat(document.getElementById("defBono").value);
    var defVerde = parseFloat(document.getElementById("defVerde").value);

    var resist = parseFloat(document.getElementById("resist").value);

    var finalDmg = parseFloat(document.getElementById("finalDmg").value);


    var atk = atkBase + atkBono + atkVerde;
    var def = defBase + defBono + defVerde;

    var defFactor = (400 + 10 * level) / (def - pierce + 400 + 10 * level) * 1 / (1 + resist / 100);


    var danioBase = atk * skill / 100;
    var danio = danioBase * defFactor;
    var danioFinal = danio * (1 + mult / 100) * (1 + finalDmg / 100);
    var danioVerdadero = danioBase * (1 + finalDmg / 100);

    danio = Math.round(danio * 100) / 100;
    danioFinal = Math.round(danioFinal * 100) / 100;
    danioVerdadero = Math.round(danioVerdadero * 100) / 100;

    document.getElementById("danioBase").innerHTML = "Daño Base: <b>" + numberWithCommas(danio) + "</b>";
    document.getElementById("danioFinal").innerHTML = "Daño Crítico/real <b>" + numberWithCommas(danioFinal) + "</b>";
    document.getElementById("danioVerdadero").innerHTML = "Daño Verdadero <b>" + numberWithCommas(danioVerdadero) + "</b>";

}


export default Danio;
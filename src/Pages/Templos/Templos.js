import React, { useEffect } from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-06.jpg'

function Templos() {

    useEffect(() => {
        window.scroll(0, 0,);
    }, []);

    return (
        <section id="section" className="d-flex">
            <div className="container">
                <div className="content justify-content-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto d-flex">
                            <Card bg={background}
                                content={content()}
                                footer={footer()}
                            />
                        </div>
                        <div className="col col-lg col-12">
                            <div className="container-iframe">
                                <iframe title='Youtube Video' className="responsive-iframe" src="https://www.youtube.com/embed/rdQReBH8RAE"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

function content() {
    return (
        <React.Fragment>
            <h1>Grado, nivel y templo</h1>
            <div className="row">
                <div className="col-auto">
                    <label htmlhtmlFor="templo">Templo</label>
                    <select id="templo">
                        <option value="16.5" selected="selected">Bronze Glow</option>
                        <option value="4">Silver Glow</option>
                        <option value="4">Tank Legion</option>
                        <option value="5">Speed Fist</option>
                        <option value="4">Mental CTRL</option>
                        <option value="4">Beast Soul</option>
                        <option value="0.8">God's Guard</option>
                        <option value="16.5">Divine Glow</option>
                        <option value="4">Frozen Fire</option>
                        <option value="4">Life Heal</option>
                        <option value="2.5">SPD Strike</option>
                        <option value="16.5">Dark Altar</option>
                        <option value="0.8">Absolute Domain</option>
                        <option value="16.5">Masei Elite</option>
                    </select>
                </div>
                <div className="col-auto">
                    <form action="" method="post" id="MyForm">
                        <label htmlFor="grado">Grado</label>
                        <select id="grado">
                            <option value="1" selected="selected">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </form>
                </div>
                <div className="col-3">
                    <label htmlFor="nivel">Nivel</label>
                    <input type="number" name="nivel" id="nivel" defaultValue="1" />
                </div>
            </div>

            <h1>Grado objetivo</h1>
            <div className="row">
                <div className="col"> <select id="gradoObj">
                    <option value="34000" selected="selected">2</option>
                    <option value="225000">3</option>
                    <option value="799200">4</option>
                    <option value="2122200">5</option>
                </select></div>
                <div className="col">
                    <button className="btn" type="button" onClick={getOptions}>
                        Calcular Cajas Moradas
                    </button>
                </div>
            </div>
            <center><h1 id="flores">Flores Necesarias</h1></center>
        </React.Fragment >
    )
}

function footer() {
    return (
        <React.Fragment>
            <h1>Información adicional</h1>
            <p id="probFLor">Probabilidad de Flor.</p>
            <p id="xp">XP Actual.</p>
            <p id="xpGrado">XP Grado.</p>
            <p id="xpNecesaria">XP Faltante.</p>
        </React.Fragment>
    )
}


function getOptions() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var grado = parseFloat(document.getElementById("grado").value);
    var nivel = parseFloat(document.getElementById("nivel").value) - 1;
    var templo = parseFloat(document.getElementById("templo").value);

    var xp = 0;
    var xpAcumulada = 0;

    switch (grado) {
        case 2:
            xpAcumulada = 34000;
            break;
        case 3:
            xpAcumulada = 225000;
            break;
        case 4:
            xpAcumulada = 799200;
            break;
        case 5:
            xpAcumulada = 2122200;
            break;
        default:
            break;
    }
    while (nivel > 0) {
        xp = 30 + 100 * (grado - 1);
        if (grado < 2) {
            xp += 10 * (nivel - 1);
        } else {
            xp += 10 * (80 - 1);
            if (grado < 3) {
                xp += 20 * (nivel - 1);
            } else {
                xp += 20 * (100 - 1);
                if (grado < 4) {
                    xp += 30 * (nivel - 1);
                } else {
                    xp += 30 * (120 - 1);
                    if (grado < 5) {
                        xp += 40 * (nivel - 1);
                    } else {
                        xp += 40 * (140 - 1);
                        xp += 50 * (nivel - 1);
                    }
                }
            }
        }
        xpAcumulada += xp;
        nivel--;
    }

    var gradoObj = document.getElementById("gradoObj").value;
    var xpNecesaria = gradoObj - xpAcumulada;
    var flores = xpNecesaria / 120 / templo * 100;
    flores = Math.ceil(flores);

    document.getElementById("probFLor").innerHTML = "Probabilidad de obtener una flor de este templo: <b>" + templo + "</b>%";
    document.getElementById("xp").innerHTML = "XP acumulada <b>" + numberWithCommas(xpAcumulada) + "</b> XP";
    document.getElementById("xpGrado").innerHTML = "XP para alcanza el grado seleccionado <b>" + numberWithCommas(gradoObj) + "</b> XP";
    document.getElementById("xpNecesaria").innerHTML = "XP faltante para alcanzar el grado seleccionado <b>" + numberWithCommas(xpNecesaria) + "</b> XP";
    document.getElementById("flores").innerHTML = "Necesitas <b>" + numberWithCommas(flores) + "</b> cajas";

}

export default Templos;
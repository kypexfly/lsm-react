import React from "react";
import Card from "../../Components/Card/Card";
import background from '../../Images/calc-03.jpg';

function Fragmentos() {
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
            <h1>Boletos PvE</h1>

            <div className="row">
                <div className="col"><label>Boletos de PvP Melee</label></div>
                <div className="col"><input type="number" name="atk" id="boletosBase" defaultValue="0" /></div>
            </div>

            <center>
                <button className="btn" type="button" onClick={getOptions}>
                    Calcular Libros
                </button>
            </center>
        </React.Fragment>
    )
}

function footer() {
    return (
        <React.Fragment>
            <h1>¿Cuántos fragmentos vas a obtener?</h1>
            <p id="fragsFinales">fragmentos de libro azul</p>
            <p id="librosFinales">libros azules</p>
        </React.Fragment>
    )
}

function getOptions() {
    var boletosBase = parseFloat(document.getElementById("boletosBase").value);
    var fragsTotales = boletosBase * 10 + 30;
    var librosTotales = Math.floor(fragsTotales / 30);
    var res = Math.round((fragsTotales / 30 - librosTotales) * 30);
    document.getElementById("fragsFinales").innerHTML = "<b>" + fragsTotales + "</b> fragmentos de libro azul";

    var librosText = "";
    if (librosTotales > 1) {
        librosText = " libros azules ";
    } else {
        librosText = " libro azul ";
    }

    if (res !== 0) {
        document.getElementById("librosFinales").innerHTML = "<b>" + librosTotales + "</b>" + librosText + "y sobran <b>" + res + "</b> fragmentos de libro azul";
    } else {
        document.getElementById("librosFinales").innerHTML = "<b>" + librosTotales + "</b>" + librosText;
    }

}

export default Fragmentos;
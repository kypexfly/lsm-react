export default function getOptions() {

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
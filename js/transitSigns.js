function addTransitSigns() {
    signs = [];
    for(var i=0; i<TRANSIT_CHECKBOX_LIST.length;i++){
        var checkbox = document.getElementById(TRANSIT_CHECKBOX_LIST[i]);
        if(!checkbox){
            continue;
        }
        if(!checkbox.checked){
            continue;
        }
        var listedSings=[];
        switch (TRANSIT_CHECKBOX_LIST[i]) {
            case "transit_fundamentales":
                listedSings=transitFundSings;
                break;
            case "transit_indicadoras":
                listedSings=transitIndSings;
                break;
            case "transit_maniobras":
                listedSings=mbrSings;
                break;
            case "transit_freno":
                listedSings=frenoSigns;
                break;
            case "transit_ram":
                listedSings=ramSigns;
                break;
            case "transit_perpignan":
                listedSings=perpignanSigns;
                break;
            default:
                break;
        }
        for(var j=0; j<listedSings.length;j++){
            signs.push(listedSings[j]);
        }
    }
    return signs;
}
const TRANSIT_FOLDER_NAME = "lib2";
var transitFundSings = [
    { name: "FF1B - Pág. 88", text: "Vía libre"},
    { name: "FF1C - Pág. 88", text: "Vía libre"},
    { name: "FF1D - Pág. 88", text: "Vía libre"},
    { name: "FF1E - Pág. 88", text: "Vía libre"},
    { name: "FF3D - Pág. 89", text: "Anuncio de precaución"},
    { name: "FF3E - Pág. 89", text: "Anuncio de precaución"},
    { name: "FF3F - Pág. 89", text: "Anuncio de precaución"},
    { name: "FF5C - Pág. 89", text: "Anuncio de parada"},
    { name: "FF5D - Pág. 89", text: "Anuncio de parada"},
    { name: "FF5E - Pág. 89", text: "Anuncio de parada"},
    { name: "FF7E - Pág. 90", text: "Parada"},
    { name: "FF7F - Pág. 90", text: "Parada"},
    { name: "FF7G - Pág. 90", text: "Parada"},
    { name: "FF7H - Pág. 90", text: "Parada"},
    { name: "FF8D - Pág. 91", text: "Rebase autorizado"},
    { name: "FF9A - Pág. 91", text: "Movimiento autorizado"},
    { name: "FF9B - Pág. 91", text: "Movimiento autorizado"},
    { name: "FF12A - Pág. 90", text: "Parada diferida"},
    { name: "FF12B - Pág. 90", text: "Parada diferida"},
]
var transitIndSings = [
    { name: "FI16 - Pág. 92", text: "Poste de punto protegido"},
    { name: "FI3E - Pág. 92", text: "Indicadora de dirección de día y noche, indicando vía directa."},
    { name: "FI3F - Pág. 92", text: "Indicadora de dirección de día y noche, indicando desvío a la izquierda."},
    { name: "FI3G - Pág. 92", text: "Indicadora de dirección de día y noche, indicando desvío a la derecha."},
    { name: "FI3H_2 - Pág. 92", text: "Indicadora de dirección de noche, indicando vía directa."},
    { name: "FI3H - Pág. 92", text: "Indicadora de dirección de día, indicando vía directa."},
    { name: "FI3I_2 - Pág. 92", text: "Indicadora de dirección de noche, indicando desvío hacia la izquierda."},
    { name: "FI3I - Pág. 92", text: "Indicadora de dirección de día, indicando desvío hacia la izquierda."},
    { name: "FI3J_2 - Pág. 92", text: "Indicadora de dirección de noche, indicando desvío hacia la derecha."},
    { name: "FI3J - Pág. 92", text: "Indicadora de dirección de día, indicando desvío hacia la derecha."},
    { name: "FI4E - Pág. 93", text: "Indicadora de posición de aguja de día, indicando vía directa."},
    { name: "FI4E_2 - Pág. 93", text: "Indicadora de posición de aguja de noche, indicando vía directa."},
    { name: "FI4F - Pág. 93", text: "Indicadora de posición de aguja de día, indicando desvío a la derecha."},
    { name: "FI4F_2 - Pág. 93", text: "Indicadora de posición de aguja de noche, indicando desvío a la derecha"},
    { name: "FI4G - Pág. 93", text: "Indicadora de posición de aguja de día, indicando desvío a la izquierda"},
    { name: "FI4G_2 - Pág. 93", text: "Indicadora de posición de aguja de noche, indicando desvío a la izquierda."},
    { name: "FI9D - Pág. 94", text: "Poste de punto protegido. Se instala a lo largo de la línea. La flecha indica la dirección en que se encuentra la estación más próxima."}
]
var mbrSings = [
    { name: "P4A - Pág. 102", text: "En maniobras Tirar"},
    { name: "P4B - Pág. 102", text: "En maniobras Tirar"},
    { name: "P4C - Pág. 102", text: "En maniobras Empujar"},
    { name: "P4D - Pág. 102", text: "En maniobras Empujar"},
    { name: "P4E - Pág. 102", text: "En maniobras Lanzar o empujar rápido"},
    { name: "P4F - Pág. 102", text: "En maniobras Lanzar o empujar rápido"},
    { name: "P4G - Pág. 102", text: "En maniobras Reducir la marcha o empujar despacio"},
    { name: "P4H - Pág. 102", text: "En maniobras Reducir la marcha o empujar despacio"},
    { name: "P4I - Pág. 102", text: "En maniobras Parar"},
    { name: "P4J - Pág. 102", text: "En maniobras Parar"}
]
var frenoSigns = [
    { name: "P5A - Pág. 103", text: "Apretar frenos"},
    { name: "P5B - Pág. 103", text: "Apretar frenos"},
    { name: "P5C - Pág. 103", text: "Apretar frenos"},
    { name: "P5D - Pág. 103", text: "Aflojar frenos"},
    { name: "P5E - Pág. 103", text: "Aflojar frenos"},
    { name: "P5F - Pág. 103", text: "Aflojar frenos"},
    { name: "P5G - Pág. 103", text: "Prueba de frenos Terminada"},
    { name: "P5H - Pág. 103", text: "Prueba de frenos Terminada"},
    { name: "P5I - Pág. 103", text: "Prueba de frenos Terminada"},
    { name: "P5J - Pág. 103", text: "Prueba de frenos Anormal"},
    { name: "P5K - Pág. 103", text: "Prueba de frenos Anormal"}
]
var ramSigns = [
    { name: "FF10C - Pág. 107", text: "Paso a nivel protegido"},
    { name: "FF10C - Pág. 107", text: "Paso a nivel protegido"},
    { name: "FF11B - Pág. 108", text: "Paso a nivel sin protección"},
    { name: "FI17A - Pág. 108", text: "Indicadora de precaución luminosa: ordena al Maquinista no superar la velocidad de 30 km/h al pasar frente a él y por las agujas situadas a continuación."},
    { name: "FI17B - Pág. 108", text: "Indicadora de precaución (pantalla): ordena al Maquinista no superar la velocidad de 30 km/h al pasar frente a él y por las agujas situadas a continuación."},
    { name: "FI12A - Pág. 109", text: "Indicador de conexión al circuito telefónico: poste dotado de conector a la intemperie."},
    { name: "FI12B - Pág. 109", text: "Indicador de conexión al circuito telefónico: poste no dotado de conector a la intemperie. La flecha indica la dirección del poste más próximo."},
    { name: "FI15AÑ - Pág. 109", text: "Indica proximidad de un desvío en plena vía a tomar de talón a la distancia indicada."},
    { name: "FI15AO - Pág. 109", text: "Indica proximidad de un desvío en plena vía a tomar de punta a la distancia indicada."},
    { name: "FI15AP - Pág. 109", text: "Indica El punto en el que el maquinista debe iniciar el frenado del tren, en las condiciones que se determinen por Consigna."},
    { name: "FI15AQ - Pág. 109", text: "Indica el punto en que finaliza el circuito de vía que afecta a las agujas y que debe quedar libre en las maniobras que afecten a la aguja o agujas que señala."},
    // LZB
    { name: "FF7I - Pág. 106", text: "En la línea Alta Velocidad Madrid-Sevilla ordena parar ante ella sin rebasarla. Para los trenes con LZB, la señalización en cabina prevalece sobre la indicación de la señal."},
]
var perpignanSigns = [
    { name: "SIB1 - Pág. 112", text: "Señal de bloqueo. Protección no franqueable."},
    { name: "SIB2 - Pág. 112", text: "Señal de bloqueo. Protección franqueable."},
    { name: "SIB3 - Pág. 112", text: "Señal de bloqueo. Señal de límite de cantón. Delimita simultáneamente cantones de ERTMS 1 y ERTMS 2."},
    { name: "SIB4 - Pág. 112", text: "Señal de bloqueo. Señal de límite de cantón. Delimita simultáneamente cantones de ERTMS 1 y ERTMS 2."},
    { name: "SIB5 - Pág. 112", text: "Señal de bloqueo. Señal de límite de cantón. Delimita cantones de ERTMS 2."},
    { name: "SIB6 - Pág. 113", text: "Señal de bloqueo. Señal de fin de autorización de movimiento. Ordena detenerse antes de la primera baliza del grupo de señal."},
    { name: "SIB7 - Pág. 113", text: "Señal de bloqueo. Señal de fin de autorización de movimiento. Ordena detenerse antes de la primera baliza del grupo de señal."},
    { name: "SIB8 - Pág. 113", text: "Señal de bloqueo. Señal de fin de autorización de movimiento. Ordena la detención lo antes posible."},
    { name: "SIB9 - Pág. 113", text: "Señal de bloqueo. Señal de marcha a la vista."},
    { name: "SIB10 - Pág. 113", text: "Señal de bloqueo. Señal de marcha a la vista."},
    { name: "SIB11 - Pág. 113", text: "Señal de bloqueo. Señal de marcha a la vista."},
    { name: "SIB12 - Pág. 113", text: "Señal de bloqueo. Señal de marcha a la vista."},
    { name: "SIM1 - Pág. 114", text: "Señal de marcha de maniobra."},
    { name: "SIM2 - Pág. 114", text: "Indica el punto máximo que no se puede rebasar cuando se ha presentado la señal de marcha de maniobras (modo Shunting)."},
    { name: "SII1 - Pág. 114", text: "Señal de las instalaciones. Hito kilométrico y hectométrico. Indica el punto kilométrico y la vía."},
    { name: "SII2 - Pág. 115", text: "Señal de las instalaciones. Señal de limitación de velocidad. Anuncio permanente."},
    { name: "SII3 - Pág. 115", text: "Señal de las instalaciones. Señal de limitación de velocidad. Inicio permanente."},
    { name: "SII4 - Pág. 115", text: "Señal de las instalaciones. Señal de limitación de velocidad. Fin permanente."},
    { name: "SII5 - Pág. 115", text: "Señal de las instalaciones. Señal de limitación de velocidad. Anuncio temporal."},
    { name: "SII6 - Pág. 115", text: "Señal de las instalaciones. Señal de limitación de velocidad. Inicio temporal."},
    { name: "SII7 - Pág. 115", text: "Señal de las instalaciones. Señal de limitación de velocidad. Fin temporal."},
    { name: "SII8 - Pág. 115", text: "Señal de las instalaciones. Señal de final de vía. Anuncio. Ordena prepararse para detener el tren antes de la posterior señal ejecutiva de Final de Vía."},
    { name: "SII9 - Pág. 115", text: "Señal de las instalaciones. Señal de final de vía. Ejecución. Ordena detención sin rebasarla"},
    { name: "SII10 - Pág. 116", text: "Señal de las instalaciones. Señal de final de la catenaria. Indica el punto límite que los vehículos de tracción eléctrica no deben rebasar."}
]

const TRANSIT_CHECKBOX_LIST=["transit_fundamentales", "transit_indicadoras", "transit_maniobras", "transit_freno", "transit_ram", "transit_perpignan"]

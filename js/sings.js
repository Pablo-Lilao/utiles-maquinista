const FUND_FOLDER_NAME = "lib2";
function addSigns() {
    signs = [];
    for(var i=0; i<CHECKBOX_LIST.length;i++){
        var checkbox = document.getElementById(CHECKBOX_LIST[i]);
        if(!checkbox){
            continue;
        }
        if(!checkbox.checked){
            continue;
        }
        var listedSings=[];
        switch (CHECKBOX_LIST[i]) {
            case "fundamentales":
                listedSings=fundSings;
                break;
            case "electrica":
                listedSings=elecSings;
                break;
            case "indicadoras":
                listedSings=indSings;
                break;
            case "cartelones":
                listedSings=cartelSings;
                break;
            case "cambiadores":
                listedSings=cambiaSigns;
                break;
            case "velocidad":
                listedSings=velSings;
                break;
            case "portatiles":
                listedSings=portaSings;
                break;
            case "trenes":
                listedSings=trenesSings;
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
var fundSings = [
    { name: "FF1A - Pág. 50", text: "Vía libre"},
    { name: "FF2 - Pág. 50", text: "Vía libre condicional"},
    { name: "FF3A - Pág. 50", text: "Anuncio de precaución"},
    { name: "FF3B - Pág. 50", text: "Anuncio de precaución"},
    { name: "FF3C - Pág. 50", text: "Anuncio de precaución"},
    { name: "FF4 - Pág. 51", text: "Preanuncio de parada"},
    { name: "FF5A - Pág. 51", text: "Anuncio de parada"},
    { name: "FF5B - Pág. 51", text: "Anuncio de parada"},
    { name: "FF6 - Pág. 52", text: "Anuncio de parada inmediata"},
    { name: "FF7A - Pág. 52", text: "Parada"},
    { name: "FF7B - Pág. 52", text: "Parada"},
    { name: "FF7C - Pág. 53", text: "Parada selectiva"},
    { name: "FF7D - Pág. 53", text: "Parada selectiva"},
    { name: "FF8A - Pág. 54", text: "Rebase autorizado"},
    { name: "FF8B - Pág. 54", text: "Rebase autorizado"},
    { name: "FF8C - Pág. 54", text: "Rebase autorizado"},
    { name: "FF9 - Pág. 55", text: "Movimiento autorizado"},
    { name: "FF10A - Pág. 55", text: "Paso a nivel protegido"},
    { name: "FF10B - Pág. 55", text: "Paso a nivel protegido"},
    { name: "FF11A - Pág. 56", text: "Paso a nivel sin protección"},
]
var indSings = [
    { name: "FI1A - Pág. 57", text: "Indicadora de entrada. Indicando itinerario establecido a vía directa."},
    { name: "FI1B - Pág. 57", text: "Indicadora de entrada. Indicando itinerario establecido a vía."},
    { name: "FI2A - Pág. 57", text: "Indicadora de salida. Indicando que la señal de salida no ordena parada. Ordena, a un tren parado, emprender la marcha, si nada se opone, hasta la señal de salida atendiéndose a lo que ésta ordene. Ordena, a un tren en movimiento, circular normalmente, si nada se opone."},
    { name: "FI2B - Pág. 57", text: "Indicadora de salida. Indicando que la señal de salida no ordena parada. Ordena, a un tren parado, emprender la marcha, si nada se opone, hasta la señal de salida en condiciones de efectuar parada ante ella. Ordena, a un tren en movimiento, circular en condiciones de efectuar parada ante la señal de salida."},
    { name: "FI3A - Pág. 58", text: "Indicadora de dirección indicando vía directa."},
    { name: "FI3B - Pág. 58", text: "Indicadora de dirección indicando desvío a la izquierda."},
    { name: "FI3C - Pág. 58", text: "Indicadora de dirección indicando desvío a la derecha."},
    { name: "FI3D - Pág. 58", text: "Indicadora de dirección. La letra indica la dirección y su significado se recogerá en un documento específico del AI."},
    { name: "FI4A - Pág. 59", text: "Indicadora de posición de agujas indicando vía directa. Indica circular normalmente, si nada se opone."},
    { name: "FI4B - Pág. 59", text: "Indicadora de posición de agujas indicando desvío a la derecha. Indica no exceder la velocidad en km/h que indica la pantalla al paso por la o las agujas a continuación, tanto si se toman de punta como de talón."},
    { name: "FI4C - Pág. 59", text: "Indicadora de posición de agujas indicando desvío a la izquierda. Indica no exceder la velocidad en km/h que indica la pantalla al paso por la o las agujas a continuación, tanto si se toman de punta como de talón."},
    { name: "FI5 - Pág. 60", text: "Indicadora de comprobación de acoplamiento de agujas. Ordena (encendida) circular normalmente si nada se opone; (apagada) en estaciones abiertas circular normalmente, si nada se opone, considerándose inexistente e informar de la anomalía al RC. Apagada y en AC cerrada, efectuar parada ante la aguja, reanudando la marcha después de comprobar que está bien dispuesta."},
    { name: "FI6A - Pág. 61", text: "Pantallas de proximidad de avanzada sin indicadores de dirección. No se instalarán delante de señales de salida o entrada que cumplan, además, la función de avanzada. Distancias entre pantallas: 150m,150m,200m. La distancia normal de frenado la constituye la baliza previa de ASFA de la señal avanzada, o en su defecto, la tercera pantalla. Desde la tercera pantalla será visible la señal avanzada, para lo cual podrá reducirse su separación a menos de 200m. En líneas AV las franjas podrán ser de color azul y la distancia de frenado se cuenta desde la primera pantalla. En RAM la distancia entre pantallas de proximidad, y entre la tercera de ellas y la señal de avanzada es de 100 m."},
    { name: "FI6B - Pág. 61", text: "Pantallas de proximidad de avanzada sin indicadores de dirección. Corresponde a señales avanzadas de estaciones donde haya un cambio de sistema de bloqueo (a no automático). No se instalarán delante de señales de salida o entrada que cumplan, además, la función de avanzada. Distancias entre pantallas: 150m,150m,200m. La distancia normal de frenado la constituye la baliza previa de ASFA de la señal avanzada, o en su defecto, la tercera pantalla. Desde la tercera pantalla será visible la señal avanzada, para lo cual podrá reducirse su separación a menos de 200m. En líneas AV las franjas podrán ser de color azul y la distancia de frenado se cuenta desde la primera pantalla. En RAM la distancia entre pantallas de proximidad, y entre la tercera de ellas y la señal de avanzada es de 100 m."},
    { name: "FI6C - Pág. 61", text: "Pantallas de proximidad de avanzada con indicadores de dirección. Corresponde a señales avanzadas de bifurcaciones. No se instalarán delante de señales de salida o entrada que cumplan, además, la función de avanzada. Distancias entre pantallas: 150m,150m,200m. La distancia normal de frenado la constituye la baliza previa de ASFA de la señal avanzada, o en su defecto, la tercera pantalla. Desde la tercera pantalla será visible la señal avanzada, para lo cual podrá reducirse su separación a menos de 200m. En líneas AV las franjas podrán ser de color azul y la distancia de frenado se cuenta desde la primera pantalla. En RAM la distancia entre pantallas de proximidad, y entre la tercera de ellas y la señal de avanzada es de 100 m."},
    { name: "FI6D - Pág. 61", text: "Pantallas de proximidad de paso a nivel con visibilidad inferior a 300 m. Se instalan delante de la SPN para avisar al Maquinista de la proximidad de la misma, cuando no sea visible a la distancia de 300 m."},
    { name: "FI7A - Pág. 62", text: "Pantalla de LZB o ERTMS Nivel 2. No dotado de señal luminosa. En el interior figuran los códigos de identificación del cantón"},
    { name: "FI7B - Pág. 62", text: "Pantalla de ERTMS Nivel 2. No dotado de señal luminosa. En el interior figuran los códigos de identificación del cantón"},
    { name: "FI8 - Pág. 62", text: "Piquete de entrevías. Se instala al inicio de la convergencia entre dos vías. Indica el punto hasta donde es compatible la circulación simultánea por ambas vías, sin que se produzcan interferencias entre ellas. En vías dotadas de señal de salida, el límite de compatibilidad operativa lo marcan dichas señales. En estos casos no resulta imprescindible la presencia del piquete de entrevías."},
    { name: "FI9A - Pág. 63", text: "Postes kilométricos y hectométricos. Se instalan a lo largo de la línea e indican el punto kilométrico y hectométrico respecto al origen. Llevan la misma inscripción en ambas caras, salvo el sentido de la flecha. El nº de arriba indica el kilómetro. El de abajo el hectómetro. Y la flecha, la dirección en la que se encuentra la estación más próxima."},
    { name: "FI9C - Pág. 63", text: "Postes kilométricos y hectométricos. Nota: No tiene flecha porque se encuentra dentro de una estación. Se instalan a lo largo de la línea e indican el punto kilométrico y hectométrico respecto al origen. Llevan la misma inscripción en ambas caras, salvo el sentido de la flecha. El nº de arriba indica el kilómetro. El de abajo el hectómetro. Y la flecha, la dirección en la que se encuentra la estación más próxima."},
    { name: "FI10A - Pág. 63", text: "Postes kilométricos y hectométricos. Se coloca en vía general. Los números indican, por orden decreciente de tamaño, el kilómetro, el hectómetro y los metros. Además, en el interior de un recuadro figura, el número de la vía y la denominación de la línea."},
    { name: "FI10B - Pág. 63", text: "Postes kilométricos y hectométricos. Se coloca en vías de apartado o ramales. Los números indican, por orden decreciente de tamaño, el kilómetro, el hectómetro y los metros. Además, en el interior de un recuadro figura, el número de la vía y la denominación de la línea."},
    { name: "FI10C - Pág. 63", text: "Postes kilométricos y hectométricos. Se coloca al inicio de un cambio de kilometraje. Los números indican, por orden decreciente de tamaño, el kilómetro, el hectómetro y los metros. Además, en el interior de un recuadro figura, el número de la vía y la denominación de la línea."},
    { name: "FI10D - Pág. 63", text: "Postes kilométricos y hectométricos. Se coloca al inicio de un cambio de kilometraje. Los números indican, por orden decreciente de tamaño, el kilómetro, el hectómetro y los metros. Además, en el interior de un recuadro figura, el número de la vía y la denominación de la línea."},
    { name: "FI11A - Pág. 64", text: "Indicadores de rasante (rampa). Se instalan en los puntos donde cambia el perfil longitudinal de la vía. El nº superior indica la rasante en milímetros por metro; el inferior, su longitud en metros. En la cara opuesta llevan la indicación correspondiente al sentido contrario de circulación."},
    { name: "FI11B - Pág. 64", text: "Indicadores de rasante (rasante nula). Se instalan en los puntos donde cambia el perfil longitudinal de la vía. El nº superior indica la rasante en milímetros por metro; el inferior, su longitud en metros. En la cara opuesta llevan la indicación correspondiente al sentido contrario de circulación."},
    { name: "FI11C - Pág. 64", text: "Indicadores de rasante (pendiente). Se instalan en los puntos donde cambia el perfil longitudinal de la vía. El nº superior indica la rasante en milímetros por metro; el inferior, su longitud en metros. En la cara opuesta llevan la indicación correspondiente al sentido contrario de circulación."},
    { name: "FI12A - Pág. 64", text: "Indicadores de rasante. Se instalan en los puntos donde comienza la transición hacia un cambio de rasante significantivo, ascendente o descendente, e indican la rasante media aproximada en milímetros por metro."},
    { name: "FI12B - Pág. 64", text: "Indicadores de rasante. Se instalan en los puntos donde comienza la transición hacia un cambio de rasante significantivo, ascendente o descendente, e indican la rasante media aproximada en milímetros por metro."},
    { name: "FI12C - Pág. 64", text: "Indicadores de rasante. Se instalan en los puntos donde comienza la transición hacia un cambio de rasante significantivo, ascendente o descendente, e indican la rasante media aproximada en milímetros por metro."},
    { name: "FI12D - Pág. 64", text: "Indicadores de rasante. Se instalan en los puntos donde comienza la transición hacia un cambio de rasante significantivo, ascendente o descendente, e indican la rasante media aproximada en milímetros por metro."},
    { name: "FI13A - Pág. 64", text: "Indicadoras de peligro en trinchera, terraplén o zona inundable (anuncio). Indica al Maquinista la proximidad de una trinchera, terraplén o zona inundable de potencial riesgo. Se sitúa a distancia de frenado del inicio."},
    { name: "FI13B - Pág. 64", text: "Indicadoras de peligro en trinchera, terraplén o zona inundable (inicio). Se coloca al inicio de la trinchera, terraplén o zona inundable de potencial riesgo, en ambos sentidos de circulación. Indica al Maquinista el punto desde el que tiene que cumplimentar la notificación recibida. Indica el fin de la trinchera, terraplén o zona inundable para las circulaciones en sentido contrario."},
]
var elecSings = [
    { name: "FI14A - Pág. 65", text: "Ordena parar ante ella sin rebasarla."},
    { name: "FI14B - Pág. 65", text: "Ordena parar ante ella sin rebasarla, cuando el itinerario está orientado en la dirección de la flecha."},
    { name: "FI14C - Pág. 65", text: "Ordena cerrar parcialmente el regulador al paso por el seccionamiento de lámina de aire de la línea de contacto."},
    { name: "FI14D - Pág. 65", text: "Ordena cerrar totalmente el regulador al paso por el aislador de sección de la línea de contacto y no estacionar en él."},
    { name: "FI14E - Pág. 65", text: "Ordena bajar los pantógrafos a su paso hasta pasar por la señal de elevación de pantógrafos."},
    { name: "FI14F - Pág. 65", text: "Indica que se puede elevar el pantógrafo a su paso por ella."},
    { name: "FI14G - Pág. 65", text: "Indica que a la distancia de 500 m se encuentra la señal de principio de zona neutra o la de bajada de pantógrafos."},
    { name: "FI14H - Pág. 65", text: "Proximidad de principio de zona neutra. A la distancia de 500 m se encuentra la señal de principio de zona neutra. (Alta velocidad)"},
    { name: "FI14I - Pág. 65", text: "Indica el principio de zona neutra de la línea de contacto. Ordena abrir el disyuntor hasta la señal de fin de la zona neutra."},
    { name: "FI14J - Pág. 65", text: "Indica el final de la zona neutra de la línea de contacto. Permite cerrar el disyuntor, una vez rebasada la misma."},
    { name: "FI14K - Pág. 65", text: "Indica que la tensión de la línea de contacto pasa de 3000 V c.c a 25000 V c.a ."},
    { name: "FI14L - Pág. 65", text: "Indica que la tensión de la línea de contacto pasa de 25000 V c.a a 3000 V c.c ."},
]
var cartelSings = [
    { name: "FI15A - Pág. 66", text: "Ordena dar el silbido de atención. Podrá llevar una leyenda indicadora de la causa; personal ded infraestructura en la vía, paso a nivel, etc. Durante los periodos en los que no exista la causa por la que se instaló, será retirada."},
    { name: "FI15B - Pág. 66", text: "Indica la proximidad de un apeadero. Está situado a distancia de frenado del mismo."},
    { name: "FI15C - Pág. 66", text: "Indica la proximidad del eje del apeadero. Está situado a 100 m del mismo."},
    { name: "FI15D - Pág. 66", text: "Indica el PK y la distancia en metros, a la que está situado el PN (el número lo es a título de ejemplo)."},
    { name: "FI15E - Pág. 66", text: "Indica el punto donde comienza (o termina) el circuito eléctrico del PN."},
    { name: "FI15F - Pág. 66", text: "Indica el último de un grupo de PN protegidos por una señal."},
    { name: "FI15G - Pág. 66", text: "Indica que una estación de servicio intermitente AC está cerrada."},
    { name: "FI15H - Pág. 66", text: "Indica según el caso: Encendido - estación de servicio intermitente AC abierta. Apagado - se actuará como en el caso de estación abierta. Se ubica en el mástil de la señal de entrada."},
    { name: "FI15I - Pág. 66", text: "Indica según el caso: Encencido - estación de servicio intermitente AC cerrada. Apagado - se actuará como en el caso de estación abierta. Se ubica en el mástil de la señal de entrada."},
    { name: "FI15J - Pág. 67", text: "Indica el final de una vía de servicio a la distancia en metros que indique el cartelón (el número lo es a título de ejemplo)."},
    { name: "FI15K_1 - Pág. 67", text: "Indica el punto hasta el que se pueden efectuar movimientos de maniobras."},
    { name: "FI15K_2 - Pág. 67", text: "Indica el punto hasta el que se pueden efectuar movimientos de maniobras."},
    { name: "FI15L - Pág. 67", text: "Indica el emplazamiento de un teléfono instalado en la línea. Se coloca sobre la caja del mismo o en el edificio que lo alberga."},
    { name: "FI15M - Pág. 67", text: "Indica el punto donde empiezan las señales de bloqueo indicado en el cartelón."},
    { name: "FI15N - Pág. 67", text: "Indica el punto donde terminan las señales de bloqueo indicado en el cartelón."},
    { name: "FI15Ñ - Pág. 67", text: "Indica el número de la vía. Se coloca en BAB, BLAB y BSL, a la salida de las estaciones, después de la última aguja."},
    { name: "FI15O - Pág. 67", text: "Indica el punto donde empieza el Sistema de Protección Automática de Trenes."},
    { name: "FI15P - Pág. 67", text: "Indica el punto donde termina el Sistema de Protección Automática de Trenes ."},
    { name: "FI15Q - Pág. 67", text: "Indica el punto donde empieza el Sistema de Anuncio de Señales y Frenado automático."},
    { name: "FI15R - Pág. 67", text: "Indica el punto donde termina el Sistema de Anuncio de Señales y Frenado automático."},
    { name: "FI15S - Pág. 68", text: "Indica el punto donde empieza el circuito eléctrico de agujas (distancia mínima al piquete de entrevías: 4 m)."},
    { name: "FI15T - Pág. 68", text: "Indica las asignaciones de radiotelefonía correspondientes a una banda del PM (el número es a título de ejemplo)."},
    { name: "FI15U - Pág. 68", text: "Indica la entrada en la Red Ferroviaria de Interés General."},
    { name: "FI15V - Pág. 68", text: "Indica la salida en la Red Ferroviaria de Interés General."},
    { name: "FI15X - Pág. 68", text: "Indica el punto donde empieza el sistema ERTMS."},
    { name: "FI15Y - Pág. 68", text: "Indica el punto donde termina el sistema ERTMS."},
    { name: "FI15Z - Pág. 68", text: "Indica el punto donde empieza el BCA."},
    { name: "FI15AA - Pág. 68", text: "Indica el punto donde termina el BCA."},
    { name: "FI15AB - Pág. 68", text: "Indica proximidad a un cambio de signo de la rasante en un túnel."},
    { name: "FI15AC - Pág. 68", text: "Indica cambio de rasante en túnel. Marca el punto donde cambia el signo de la rasante, de cara a una eventual circulación del tren por gravedad."},
    { name: "FI15AD - Pág. 68", text: "Indica cambio de ancho de vía. Marca el inicio de la transición del ancho 1668 a 1435 mm."},
    { name: "FI15AE - Pág. 68", text: "Indica cambio de ancho de vía. Marca el inicio de la transición del ancho 1435 a 1668 mm."},
    { name: "FI15AF - Pág. 69", text: "Indica cambio de modo ASFA. Marca el punto donde debe efectuarse el cambio de modo ASFA, pudiendo efectuarse en movimiento."},
    { name: "FI15AG - Pág. 69", text: "Se coloca a la distancia de frenado de la boca del túnel. Indica gálibro restringido en túnel. Informa que determinados trenes están afectados por prescripciones especiales y permanentes de circulacióbn, debido a su inscripción en gálibo. Ek Personal de conducción cumplimentará las limitaciones de velocidad quele hayan sido notificadas por este motivo. La falta del cartelón no exime del cumplimiento de dichas limitaciones."},
    { name: "FI15AH - Pág. 69", text: "Indica distancia a final de velocidad limitada o a final de zona neutra. Marca el punto desde donde un tren de longitud inferior a 200 m, puede reanudar su marcha normal, después de haber atravesado una zona de limitación de velocidad máxima o un cambio orientado a vía desviada a menos de 200 km/h, o una zona neutra. Si hay varios cambios, la señal se coloca a la distancia del último del grupo afectado por la limitación"},
    { name: "FI15AI - Pág. 69", text: "Indica distancia a final de velocidad limitada o a final de zona neutra. Marca el punto desde donde un tren de longitud inferior a 400 m, puede reanudar su marcha normal, después de haber atravesado una zona de limitación de velocidad máxima o un cambio orientado a vía desviada a menos de 400 km/h, o una zona neutra. Si hay varios cambios, la señal se coloca a la distancia del último del grupo afectado por la limitación"},
    { name: "FI15AJ - Pág. 69", text: "Indica límite entre gestores de infraestrucutra. Marca el punto a partir del cual deja de aplicarse la normativa de circulación de un gestor de infraestructura y empieza a aplicarse la de otro."},
    { name: "FI15AK - Pág. 69", text: "Indica la vía la que dan sus indicaciones las señales instaladas en lugar que puedan ofrecer duda. Se instalan en el mástil de las señales."},
    { name: "FI15AL - Pág. 69", text: "Indica la vía la que dan sus indicaciones las señales instaladas en lugar que puedan ofrecer duda. Se instalan en el mástil de las señales."},
    { name: "FI15AM - Pág. 69", text: "Indica la vía la que dan sus indicaciones las señales instaladas en lugar que puedan ofrecer duda. Se instalan en el mástil de las señales."},
]
var cambiaSigns = [
    { name: "FI15A - Pág. 70", text: "Indica con luz fija, plataforma enclavada para composiciones autopropulsadas CAF."},
    { name: "FI15B - Pág. 70", text: "Indica con luz fija, plataforma enclavada para composiciones autopropulsadas TALGO. Con luz intermitente, plataforma enclavada a composiciones remolcadas TALGO."},
    { name: "FI15C - Pág. 70", text: "Indica para trenes TALGO remolcados, el punto donde se estaciona la locomotora, en espera de la composición procedente del cambiador."},
    { name: "FI15D - Pág. 70", text: "Indica para trenes TALGO remolcados, el punto de detención del tren cuando remolquen composiciones de 9 o menos vehículos."},
    { name: "FI15E - Pág. 70", text: "Indica para trenes TALGO remolcados, el punto de detención del tren cuando remolquen composiciones de 10 o más vehículos."},
    { name: "FI15F - Pág. 70", text: "Indica para trenes TALGO remolcados, el punto en el que el Maquinista debe efectuar una aplicación de freno."},
    { name: "FI15G - Pág. 70", text: "Indica para trenes TALGO remolcados, el punto en el que detenido el tren, se encuentra la pasarela para el personal de servicio."},
    { name: "FI15H - Pág. 70", text: "Indica para trenes TALGO remolcados, el punto donde debe efectuar parada, para que se retroceda hacia el cambiador."},
    { name: "FI15I - Pág. 70", text: "ACTIVAR CONMUTADOR. Indica para composiciones CAF, el punto a partir del cual debe actuar sobre el conmutador de puesta en marcha de la secuencia de cambio."},
    { name: "FI15J - Pág. 70", text: "LÍMITE DE CONMUTACIÓN. Indica para composiciones CAF, el límite para comprobar que se ha activado la secuencia de cambio."},
    { name: "FI15K - Pág. 70", text: "FINAL OPERACIÓN UNIDAD SIMPLE. Indica para composiciones CAF, en unidad simple, que el último de los ejes ha rebasado la instalación del cambiador, para que desde ese punto pueda reponer el conmutador de cambio a su posición normal."},
    { name: "FI15L - Pág. 70", text: "FINAL OPERACIÓN UNIDAD ACOPLADA. Indica para composiciones CAF, en doble composición, que el último de los ejes ha rebasado la instalación del cambiador, para que desde ese punto pueda reponer el conmutador de cambio a su posición normal."},
    { name: "FI16M - Pág. 71", text: "CONFIGURAR TREN. Indica para trenes TALGO autopropulsados, accionar el pulsador azul situado en la cabeza motriz."},
    { name: "FI16N - Pág. 71", text: "INICIO CAMBIO. Indica para trenes TALGO autopropulsados, accionar el pulsador naranja situado en la cabeza motriz."},
    { name: "FI16Ñ - Pág. 71", text: "FIN CAMBIO DE ANCHO CON UNA COMPOSICIÓN. Indica para trenes TALGO autopropulsados, que ha salido del cambiador, accionar el pulsador azul situado en la cabeza motriz."},
    { name: "FI16O - Pág. 71", text: "FIN CAMBIO DE ANCHO CON DOS COMPOSICIÓN. Indica para trenes TALGO autopropulsados, que ha salido del cambiador, accionar el pulsador azul situado en la cabeza motriz."},
]
var velSings = [
    { name: "FVM3A - Pág. 72", text: "Preanuncio de velocidad máxima. Ordena no exceder la velocidad de 160 km/h al pasar por la señal de anuncio de velocidad máxima situada a continuación. Su posición marca el punto de frenado en el que se debe iniciar el frenado del tren para poder cumplir la orden de la señal de velocidad máxima."},
    { name: "FVM1A - Pág. 72", text: "Anuncio de velocidad máxima. Ordena no exceder la velocidad indicada (en km/h), al pasar por la señal de velocidad máxima a la que anuncia. Su posición marca el punto en el que se debe iniciar el frenado del tren para poder cumplir la ordena de la señal de velocidad máxima."},
    { name: "FVM1B - Pág. 72", text: "Anuncio de velocidad máxima. Ordena no exceder la velocidad indicada (en km/h), al pasar por la señal de velocidad máxima a la que anuncia. Su posición marca el punto en el que se debe iniciar el frenado del tren para poder cumplir la ordena de la señal de velocidad máxima. Nota: supone CSV y tiene baliza ASFA asociada."},
    { name: "FVM2A - Pág. 73", text: "Velocidad máxima. Ordena no exceder la velocidad indicada (en km/h), desde esta señal hasta la siguiente que establezca un nuevo límite. Nota: No sobrepasar la velocida hasta que liberes el trampo por cola."},
    { name: "FVM2B - Pág. 73", text: "Velocidad máxima. Ordena no exceder la velocidad indicada (en km/h), desde esta señal hasta la siguiente que establezca un nuevo límite. Nota: No sobrepasar la velocida hasta que liberes el trampo por cola. (CSV)"},
    { name: "FVM4A - Pág. 73", text: "Anuncio de velocidad máxima por paso a nivel. Ordena no exceder la velocidad de 155 km/h al paso por el PN situado a continuación y hasta que el primer vehículo haya rebasado el mismo."},
    { name: "FVM4A_3 - Pág. 74", text: "Señales de velocidad máxima que afectan a sólo a determinadas series de locomotoras o automotres, podrán establecer uno, dos o tres límites diferentes."},
    { name: "FVM4A_4 - Pág. 74", text: "Señales de velocidad máxima que afectan a sólo a determinadas series de locomotoras o automotres, podrán establecer uno, dos o tres límites diferentes. Los números del cartelón y de la señal se corresponde biunívocamente según el orden de colocación de arriba a abajo."},
    { name: "FVM4A_5 - Pág. 74", text: "En las líneas donde esté prevista la circulación de trenes de tipo N,A y B, las señales de velocidad máxima impuesta por las curvas, estarán compuestas por tres señales independientes situadas una sobre otra. La señal superior afecta a los trenes de Tipo N, la intermedia a los de Tipo A y la inferior a los de Tipo B."},
    { name: "FVM4A_7 - Pág. 75", text: "En las líneas donde esté prevista la circulación de trenes de tipo N,A y B, sobre la señal de finalización de cualquier limitación temporal de velocidad máxima, se pondrá una señal de velocidad máxima admisible a partir de ese punto con los valores correspondientes a los tres tipos de tren."},
    { name: "FVL1A - Pág. 76", text: "Preanuncio de limitación temporal de velocida máxima."},
    { name: "FVL2A - Pág. 76", text: "Anuncio de limitación temporal de velocidad máxima."},
    { name: "FVL2B - Pág. 76", text: "Anuncio de limitación temporal de velocidad máxima. (Supone CSV, con baliza asociada)"},
    { name: "FVL3A - Pág. 77", text: "Limitación temporal de velocidad máxima."},
    { name: "FVL3A - Pág. 77", text: "Limitación temporal de velocidad máxima. (Supone CSV)"},
    { name: "FVL4A - Pág. 77", text: "Fin de limitación temporal de velocidad máxima. Ordena reanudar la marcha normal, si nada se opone, a la velocidad máxima indicada en la señal situada sobre ella, cuando el último vehículo del tren la haya rebasado. Se reanudará la marcha normal, una vez rebasada por el primer vehículo cuando el AI así lo indique. Sobre esta señal será colocada la señal FVM2A o FVM2B (blanca o naranja)."},
    { name: "FVL4A_A - Pág. 78", text: "M - Mercancías. V - los demás trenes, cualquiera que sea su clase (viajeros, automotores, locomotoras aislada, etc.). Las señales de limitación de velocidad máxima podrán establecer dos límites diferentes."},
    { name: "FVL4A_B - Pág. 78", text: "C - trenes convencionales. A - automotores. Las señales de limitación de velocidad máxima podrán establecer dos límites diferentes."},
]
var portaSings = [
    { name: "P1A - Pág. 81", text: "Parada. Ordena detención inmediata."},
    { name: "P1B - Pág. 81", text: "Parada. Ordena detención inmediata."},
    { name: "P1C - Pág. 81", text: "Parada. Ordena detención inmediata."},
    { name: "P1D - Pág. 81", text: "Parada. Ordena detención inmediata. En entornos afectados por obras o quellos casos en los que las circunstacias lo requieran."},
    { name: "P2A - Pág. 82", text: "Marche el tren."},
    { name: "P2B - Pág. 82", text: "Marche el tren."},
    { name: "P3A - Pág. 83", text: "Señal de paso."},
    { name: "P3B - Pág. 83", text: "Señal de paso."},
]
var trenesSings = [
    { name: "T1A - Pág. 84", text: "Señales de cabeza."},
    { name: "T1B - Pág. 84", text: "Señales de cabeza."},
    { name: "T2A - Pág. 84", text: "Señal de cola luminosa. Obligatoria para trenes de viajeros, para trenes de mercancías en líneas operadas de forma nominal con bloqueo telefónico o bloqueo eléctrico manual."},
    { name: "T3A - Pág. 85", text: "Señal de cola (placa reflectante). Para trenes de mercancías, salvo en las líneas operadas de forma nominal con bloqueo telefónico o bloqueo eléctrico manual."},
    { name: "T4A - Pág. 85", text: "Señal acústica de los trenes. Atención."},
    { name: "T4B - Pág. 85", text: "Señal acústica de los trenes. Atención especial."},
    { name: "T4C - Pág. 86", text: "Señal de alarma. Ordena detención inmediata de todos los trenes y maniobras que estén en movimiento."},
]
const CHECKBOX_LIST=["fundamentales", "indicadoras", "electrica", "cartelones", "cambiadores", "velocidad", "portatiles", "trenes"]
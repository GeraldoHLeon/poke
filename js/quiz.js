// declaracion de variables
let elementoDivKakuna = document.getElementsByClassName("cartaSeleccionada1");
let elementoDivPikachu = document.getElementsByClassName("cartaSeleccionada2");
let elementoDivChimchar = document.getElementsByClassName("cartaSeleccionada3");
let elementoDivLuxray = document.getElementsByClassName("cartaSeleccionada4");
let elementoDivUmbreon = document.getElementsByClassName("cartaSeleccionada5");
let elementoDivBronzong = document.getElementsByClassName("cartaSeleccionada6");
let elementoDivChespin = document.getElementsByClassName("cartaSeleccionada7");
let elementoDivChimecho = document.getElementsByClassName("cartaSeleccionada8");
let elementoDivBibarel = document.getElementsByClassName("cartaSeleccionada9");
let elementoDivSlowpoke = document.getElementsByClassName("cartaSeleccionada10");
let elementoDivThroh = document.getElementsByClassName("cartaSeleccionada11");
let elementoDivSnover = document.getElementsByClassName("cartaSeleccionada12");
let elementoDivPiloswine = document.getElementsByClassName("cartaSeleccionada13");
let elementoDivStantler = document.getElementsByClassName("cartaSeleccionada14");
let elementoDivSandile = document.getElementsByClassName("cartaSeleccionada15");
let elementoDivVolcarona = document.getElementsByClassName("cartaSeleccionada16");
let elementoDivSwampert = document.getElementsByClassName("cartaSeleccionada17");
let elementoDivGrumpig = document.getElementsByClassName("cartaSeleccionada18");

const contenedorQuiz = document.querySelector(".container");
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

// creacion de funciones
function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  } else if (nextTextNodeId == 22) {
    for (elementoDivStantler of elementoDivStantler)
      elementoDivStantler.className = "cartaSeleccionadaStantler";
  } else if (nextTextNodeId == 23) {
    for (elementoDivThroh of elementoDivThroh)
      elementoDivThroh.className = "cartaSeleccionadaThroh";
  } else if (nextTextNodeId == 24) {
    for (elementoDivBibarel of elementoDivBibarel)
      elementoDivBibarel.className = "cartaSeleccionadaBibarel";
  } else if (nextTextNodeId == 25) {
    for (elementoDivLuxray of elementoDivLuxray)
      elementoDivLuxray.className = "cartaSeleccionadaLuxray";
  } else if (nextTextNodeId == 26) {
    for (elementoDivUmbreon of elementoDivUmbreon)
      elementoDivUmbreon.className = "cartaSeleccionadaUmbreon";
  } else if (nextTextNodeId == 27) {
    for (elementoDivPikachu of elementoDivPikachu)
      elementoDivPikachu.className = "cartaSeleccionadaPikachu";
  } else if (nextTextNodeId == 28) {
    for (elementoDivSandile of elementoDivSandile)
      elementoDivSandile.className = "cartaSeleccionadaSandile";
  } else if (nextTextNodeId == 29) {
    for (elementoDivSwampert of elementoDivSwampert)
      elementoDivSwampert.className = "cartaSeleccionadaSwampert";
  } else if (nextTextNodeId == 30) {
    for (elementoDivSnover of elementoDivSnover)
      elementoDivSnover.className = "cartaSeleccionadaSnover";
    } else if (nextTextNodeId == 31) {
      for (elementoDivPiloswine of elementoDivPiloswine)
        elementoDivPiloswine.className = "cartaSeleccionadaPiloswine";
      } else if (nextTextNodeId == 32) {
        for (elementoDivChespin of elementoDivChespin)
          elementoDivChespin.className = "cartaSeleccionadaChespin";
        } else if (nextTextNodeId == 33) {
          for (elementoDivSlowpoke of elementoDivSlowpoke)
            elementoDivSlowpoke.className = "cartaSeleccionadaSlowpoke";
          } else if (nextTextNodeId == 34) {
            for (elementoDivKakuna of elementoDivKakuna)
              elementoDivKakuna.className = "cartaSeleccionadaKakuna";
            } else if (nextTextNodeId == 35) {
              for (elementoDivGrumpig of elementoDivGrumpig)
                elementoDivGrumpig.className = "cartaSeleccionadaGrumpig";
              } else if (nextTextNodeId == 36) {
                for (elementoDivChimecho of elementoDivChimecho)
                  elementoDivChimecho.className = "cartaSeleccionadaChimecho";
                } else if (nextTextNodeId == 37) {
                  for (elementoDivVolcarona of elementoDivVolcarona)
                    elementoDivVolcarona.className = "cartaSeleccionadaVolcarona";
                  } else if (nextTextNodeId == 38) {
                    for (elementoDivBronzong of elementoDivBronzong)
                      elementoDivBronzong.className = "cartaSeleccionadaBronzong";
                    } else if (nextTextNodeId == 39) {
                      for (elementoDivChimchar of elementoDivChimchar)
                        elementoDivChimchar.className = "cartaSeleccionadaChimchar";

  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

//opciones 
const textNodes = [
  {
    id: 1,
    text: "¿Cual es tu objetivo al adoptar?",
    options: [
      {
        text: "Entrenarlo",

        nextText: 2,
      },
      {
        text: "que sea mi mejor amigo",
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text: "¿que habilidad prefieres?",
    options: [
      {
        text: "ataque",

        nextText: 4,
      },
      {
        text: "Defensa",
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text: "Con que te identificas mas...",
    options: [
      {
        text: "Perfeccion",
        nextText: 5,
      },
      {
        text: "Obstinado",
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text: "Prefieres evolucion...",
    options: [
      {
        text: "por piedra",
        nextText: 7,
      },
      {
        text: "por intercambio",
        nextText: 8,
      },
    ],
  },
  {
    id: 5,
    text: "¿Tienes miedo a los fantasmas?",
    options: [
      {
        text: "si",
        nextText: 8,
      },
      {
        text: "no",
        nextText: 9,
      },
    ],
  },
  {
    id: 6,
    text: "¿que medio de transporte prefieres?",
    options: [
      {
        text: "bicicleta",
        nextText: 9,
      },
      {
        text: "volar",
        nextText: 10,
      },
    ],
  },
  {
    id: 7,
    text: "¿que estado te disgusta mas?",
    options: [
      {
        text: "envenenado",
        nextText: 11,
      },
      {
        text: "confuso",
        nextText: 12,
      },
    ],
  },
  {
    id: 8,
    text: "Prefieres peleas...",
    options: [
      {
        text: "cuerpo a cuerpo",
        nextText: 12,
      },
      {
        text: "a distancia",
        nextText: 13,
      },
    ],
  },
  {
    id: 9,
    text: "prefieres...",
    options: [
      {
        text: "frio",
        nextText: 13,
      },
      {
        text: "calor",
        nextText: 14,
      },
    ],
  },
  {
    id: 10,
    text: "prefieres...",
    options: [
      {
        text: "Cafe",
        nextText: 14,
      },
      {
        text: "TV",
        nextText: 15,
      },
    ],
  },
  {
    id: 11,
    text: "¿porque pelearias?",
    options: [
      {
        text: "Honor",
        nextText: 16,
      },
      {
        text: "Diversion",
        nextText: 17,
      },
    ],
  },
  {
    id: 12,
    text: "Prefieres...",
    options: [
      {
        text: "Oscuridad",
        nextText: 17,
      },
      {
        text: "Luz",
        nextText: 18,
      },
    ],
  },
  {
    id: 13,
    text: "Elige un habitat",
    options: [
      {
        text: "Ciudad",
        nextText: 18,
      },
      {
        text: "Montaña",
        nextText: 19,
      },
    ],
  },
  {
    id: 14,
    text: "¿que Baya prefieres?",
    options: [
      {
        text: "Meluce",
        nextText: 19,
      },
      {
        text: "Algama",
        nextText: 20,
      },
    ],
  },
  {
    id: 15,
    text: "¿como haces amigos?",
    options: [
      {
        text: "No soy amiguerx",
        nextText: 20,
      },
      {
        text: "me adapto al entorno",
        nextText: 21,
      },
    ],
  },
  {
    id: 16,
    text: "prefieres...",
    options: [
      {
        text: "Lealtad",
        nextText: 22,
      },
      {
        text: "Ternura",
        nextText: 24,
      },
      {
        text: "Disciplina",
        nextText: 23,
      },
    ],
  },
  {
    id: 17,
    text: "¿Que tanto te gusta pelear?",
    options: [
      {
        text: "me divierte",
        nextText: 25,
      },
      {
        text: "demasiado",
        nextText: 26,
      },
      {
        text: "Siempre listo",
        nextText: 27,
      },
      {
        text: "no me gusta",
        nextText: 28,
      },
    ],
  },
  {
    id: 18,
    text: "elige una palabra...",
    options: [
      {
        text: "Ingenioso",
        nextText: 29,
      },
      {
        text: "Poderoso",
        nextText: 30,
      },
      {
        text: "Silencioso",
        nextText: 31,
      },
    ],
  },
  {
    id: 19,
    text: "Eres...",
    options: [
      {
        text: "Introvertido",
        nextText: 33,
      },
      {
        text: "Extrovertido",
        nextText: 32,
      },
      {
        text: "Odioso",
        nextText: 34,
      },
    ],
  },
  {
    id: 20,
    text: "Prefieres...",
    options: [
      {
        text: "Cantar",
        nextText: 35,
      },
      {
        text: "Bailar",
        nextText: 36,
      },
    ],
  },
  {
    id: 21,
    text: "Prefieres un amigo...",
    options: [
      {
        text: "Grande",
        nextText: 38,
      },
      {
        text: "Mediano",
        nextText: 37,
      },
      {
        text: "pequeño",
        nextText: 39,
      },
    ],
  },
  {
    id: 22,
    text: "",
    
  },
  {
    id: 23,
    text: "",
    
  },
  {
    id: 24,
    text: "",
    
  },
  {
    id: 25,
    text: "",
    
  },
  {
    id: 26,
    text: "",
    
  },
  {
    id: 27,
    text: "",
    
  },
  {
    id: 28,
    text: "",
    
  },
  {
    id: 29,
    text: "",
    
  },
  {
    id: 30,
    text: "",
    
  },
  {
    id: 31,
    text: "",
    
  },
  {
    id: 32,
    text: "",
    
  },
  {
    id: 33,
    text: "",
    
  },
  {
    id: 34,
    text: "",
    
  },
  {
    id: 35,
    text: "",
    
  },
  {
    id: 36,
    text: "",
    
  },
  {
    id: 37,
    text: "",
    
  },
  {
    id: 38,
    text: "",
    
  },
  {
    id: 39,
    text: "",
    
  },
];

startGame();

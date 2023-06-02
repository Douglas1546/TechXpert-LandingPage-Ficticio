// Joga para o fim da pagina
document.getElementById('contact').addEventListener('click', function (event) {
    event.preventDefault();
    const targetPosition = document.body.scrollHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

//=====================================================================================//
// Efeito maquina de escrever
const textoElemento = document.getElementById("effect_2");
const texto = textoElemento.textContent;
textoElemento.textContent = ""; 

let index = 0;
const velocidade = 100; 

function digitarTexto() {
  if (index < texto.length) {
    textoElemento.textContent += texto.charAt(index);
    index++;
    setTimeout(digitarTexto, velocidade);
  }
}

setTimeout(digitarTexto, 1000);
//=====================================================================================//
// Efeito Fade-In
const elemento = document.getElementById('effect_1');
let opacidade = 0;
const vel = 0.008; 

function fadeIn() {
  if (opacidade < 1) {
    opacidade += vel;
    elemento.style.opacity = opacidade;
    setTimeout(fadeIn, 10); // Aguarda 10ms antes de ajustar a opacidade novamente
  }
}

fadeIn();
//=====================================================================================//

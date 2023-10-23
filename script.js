// pegar os elementos do HTML via DOM
let soma = document.getElementById('soma');
let subtracaoA = document.getElementById('subtracaoA');
let subtracaoB = document.getElementById('subtracaoB');
let multiplicacao = document.getElementById('multiplicacao');
let divisaoA = document.getElementById('divisaoA');
let divisaoB = document.getElementById('divisaoB');
let potenciaA = document.getElementById('potenciaA');
let potenciaB = document.getElementById('potenciaB');
let raizQuadradaA = document.getElementById('raizQuadradaA');
let raizQuadradaB = document.getElementById('raizQuadradaB');
let fatorialA = document.getElementById('fatorialA');
let fatorialB = document.getElementById('fatorialB');
let porcentagemA = document.getElementById('porcentagemA');
let porcentagemB = document.getElementById('porcentagemB');
let media = document.getElementById('media');

// fazer as funções com os cálculos
function calcularSoma(a, b) {
  return a + b;
}

function calcularSubtracaoA(a, b) {
  return a - b;
}

function calcularSubtracaoB(a, b) {
  return b - a;
}

function calcularMultiplicacao(a, b) {
  return a * b;
}

function calcularDivisaoA(a, b) {
  return (a / b).toFixed(2);
}

function calcularDivisaoB(a, b) {
  return (b / a).toFixed(2);
}

function calcularPotenciaA(a, b) {
  return a ** b;
}

function calcularPotenciaB(a, b) {
  return b ** a;
}

function calcularRaizQuadradaA(a) {
  return Math.sqrt(a).toFixed(2);
}

function calcularRaizQuadradaB(b) {
  return Math.sqrt(b).toFixed(2);
}

function calcularFatorialA(a) {
  //var factorialize = a;
  if (a < 0) return -1;
  else if (a == 0) return 1;
  else {
    return a * calcularFatorialA(a - 1);
  }
}

function calcularFatorialB(b) {
  //var factorialize = a;
  if (b < 0) return -1;
  else if (b == 0) return 1;
  else {
    return b * calcularFatorialB(b - 1);
  }
}

function calcularPorcentagemA(a, b) {
  return ((b * 100) / a).toFixed(1);
}

function calcularPorcentagemB(a, b) {
  return ((a * 100) / b).toFixed(1);
}

function calcularMedia(a, b) {
  return (a + b) / 2;
}

// fazer a função calcular para exibir os resultados
function calcular() {
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcularSoma(a, b);
  subtracaoA.innerHTML = calcularSubtracaoA(a, b);
  subtracaoB.innerHTML = calcularSubtracaoB(a, b);
  multiplicacao.innerHTML = calcularMultiplicacao(a, b);
  divisaoA.innerHTML = calcularDivisaoA(a, b);
  divisaoB.innerHTML = calcularDivisaoB(a, b);
  potenciaA.innerHTML = calcularPotenciaA(a, b);
  potenciaB.innerHTML = calcularPotenciaB(a, b);
  raizQuadradaA.innerHTML = calcularRaizQuadradaA(a);
  raizQuadradaB.innerHTML = calcularRaizQuadradaB(b);
  fatorialA.innerHTML = calcularFatorialA(a);
  fatorialB.innerHTML = calcularFatorialB(b);
  porcentagemA.innerHTML = calcularPorcentagemA(a, b);
  porcentagemB.innerHTML = calcularPorcentagemB(a, b);
  media.innerHTML = calcularMedia(a, b);
}

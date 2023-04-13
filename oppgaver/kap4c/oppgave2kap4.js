
let tall1El = document.querySelector("#tall1");
let tall2El = document.querySelector("#tall2");
let tall3El = document.querySelector("#tall3");
let tall4El = document.querySelector("#tall4");
let tall5El = document.querySelector("#tall5");
let knappEl = document.querySelector("button");
let resultatEl = document.querySelector("#resultat");


knappEl.addEventListener("click", beregn);

function beregn() {
  let tall1 = Number(tall1El.value);
  let tall2 = Number(tall2El.value);
  let tall3 = number(tall3E1.value);
  let tall4 = number(tall4E1.value);
  let tall5 = number(tall5E1.value);
  let sum = tall1 + tall2 + tall3 + tall4 + tall5;
  let gjennomsnitt = tall1 + tall2 + tall3 + tall4 + tall5;

  resultatEl.innerHTML = "Summen blir " + sum;
  resultatEl.innerHTML = " blir " + sum;
}
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var arreglo = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let valor = Math.floor(Math.random() * arreglo.length);

  let numero = arreglo[valor];

  var simbolo = ["♥", "♠", "♣", "♦"];
  let simbolonumero = Math.floor(Math.random() * simbolo.length);
  let NuevoSimbolo = simbolo[simbolonumero];

  let cambiarNumero = document.getElementById("sizeNumber");
  cambiarNumero.innerHTML = numero;
  let simboloencabezado = document.getElementById("symbol-top");
  let simbolopie = document.getElementById("symbol-botton");

  if (NuevoSimbolo == "♠" || NuevoSimbolo == "♣") {
    simboloencabezado.style.color = "black";
    simbolopie.style.color = "black";
  } else {
    //corazones o diamantes

    simboloencabezado.style.color = "red";
    simbolopie.style.color = "red";
  }
  simboloencabezado.innerHTML = NuevoSimbolo;
  simbolopie.innerHTML = NuevoSimbolo;
};

"use strict";

const carros: string[] = [
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "Tesla",
  "BMW",
  "Mercedes",
];

const titles: string[] = [
  "the King",
  "the super human",
  "the Titan",
  "the chaos",
  "the god",
  "the giant",
];

function getRandomCar(carros: string[]): string {
  const random: number = Math.floor(Math.random() * carros.length);
  return carros[random];
}

function getRandomTitle(titles: string[]): string {
  const random: number = Math.floor(Math.random() * titles.length);
  return titles[random];
}

document.getElementById("sortearBtn")?.addEventListener("click", function () {
  const carro: string = getRandomCar(carros);
  const title: string = getRandomTitle(titles);

  document.getElementById("carro")!.innerText = `O carro sorteado é: ${carro}`;
  document.getElementById(
    "titulo"
  )!.innerText = `Seu título concedido foi: ${title}`;
});

/* Comentarios: 
  O math.floor gera numero decimal aleatorio || O math.random aredonda o número para baixo até o inteiro mais próximo.
  Resultando na multiplicação dos carros gerando um comprimento neles.
*/

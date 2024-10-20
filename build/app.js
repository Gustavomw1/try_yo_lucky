"use strict";
const carros = [
    "Ferrari",
    "Lamborghini",
    "Porsche",
    "Tesla",
    "BMW",
    "Mercedes",
];
const titles = [
    "the King",
    "the super human",
    "the Titan",
    "the chaos",
    "the god",
    "the giant",
];
function getRandomCar(carros) {
    const random = Math.floor(Math.random() * carros.length);
    return carros[random];
}
function getRandomTitle(titles) {
    const random = Math.floor(Math.random() * titles.length);
    return titles[random];
}
document.getElementById("sortearBtn")?.addEventListener("click", function () {
    const carro = getRandomCar(carros);
    const title = getRandomTitle(titles);
    document.getElementById("carro").innerText = `O carro sorteado é: ${carro}`;
    document.getElementById("titulo").innerText = `Seu título concedido foi: ${title}`;
});

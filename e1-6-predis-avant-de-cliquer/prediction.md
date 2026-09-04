1 — Afficher
document.getElementById("out1").textContent = "Bonjour la classe";

Cela va afficher --> Bonjour la classe

2 — Calculer
let a = 4;
let b = 3;
let total = a + b;
document.getElementById("out2").textContent = total;

La réponse est 7 car a vaut 4 et b vaut 3. Le programme additionne les deux valeurs : 4 + 3 = 7.

3 — Compter
let fruits = ["pomme", "poire", "kiwi"];
document.getElementById("out3").textContent = fruits.length;

La réponse est 3, car le tableau contient 3 fruits : pomme, poire et kiwi.

4 — Condition
let note = 5;
let texte;
if (note >= 4) {
  texte = "suffisant";
} else {
  texte = "insuffisant";
}
document.getElementById("out4").textContent = texte;

La réponse est « suffisant », car note vaut 5 et 5 est supérieur ou égal à 4. La condition note >= 4 est donc vraie.

5 — Boucle simple
let message = "";
for (let i = 1; i <= 3; i = i + 1) {
  message = message + i + " ";
}
document.getElementById("out5").textContent = message;

La réponse est :

1 2 3

La boucle commence à 1 et augmente la valeur de i de 1 à chaque tour jusqu'à 3.

6 — Clic
let n = 0;
document.getElementById("b6").addEventListener("click", function () {
  n = n + 1;
  document.getElementById("out6").textContent = n;
});
Cliquez plusieurs fois sur Lancer. Que fait le nombre ?

À chaque clic sur « Lancer », le nombre augmente de 1. Il commence à 0, puis devient : 1 → 2 → 3 → 4 → 5 → etc.
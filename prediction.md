1 — Afficher
document.getElementById("out1").textContent = "Bonjour la classe";

Cela va afficher --> Bonjour la classe

2 — Calculer
let a = 4;
let b = 3;
let total = a + b;
document.getElementById("out2").textContent = total;

La réponse est 7 car la valeur a c'est 4, b c'est 3 et il y a une demande d'additionner les deux donc 4+3 ça fait 7

3 — Compter
let fruits = ["pomme", "poire", "kiwi"];
document.getElementById("out3").textContent = fruits.length;

La réponse est 3

4 — Condition
let note = 5;
let texte;
if (note >= 4) {
  texte = "suffisant";
} else {
  texte = "insuffisant";
}
document.getElementById("out4").textContent = texte;

La réponse est suffisant

5 — Boucle simple
let message = "";
for (let i = 1; i <= 3; i = i + 1) {
  message = message + i + " ";
}
document.getElementById("out5").textContent = message;

1 2 3

6 — Clic
let n = 0;
document.getElementById("b6").addEventListener("click", function () {
  n = n + 1;
  document.getElementById("out6").textContent = n;
});
Cliquez plusieurs fois sur Lancer. Que fait le nombre ?

Les chiffres font + 1 à chaque fois que l'on clique donc 0 1 2 3 4 etc.
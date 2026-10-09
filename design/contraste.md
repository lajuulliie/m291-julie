# Contrastes & accessibilité — Libri (design retenu : Piste A, éditoriale & sobre)

Vérification de la maquette selon s08 : contraste (≥ 4,5:1), tailles minimales (texte ≥ 16 px, zone cliquable ≈ 44 × 44 px), information jamais portée par la couleur seule.

> **Méthode.** Couleurs relevées sur la capture du design retenu (couleur moyenne des pixels du texte et du fond), ratios calculés avec la formule WCAG (celle de WebAIM). Tailles ramenées à un écran de 390 px et estimées d'après la hauteur des capitales : elles sont approximatives, à ±1 ou 2 px. À re-mesurer avec l'inspecteur dès que l'appli est en code (s9).

## Checklist (P1)

- [x] contraste titre / fond mesuré
- [x] contraste texte / fond mesuré
- [x] contraste bouton / fond mesuré
- [x] pas d'info seulement en couleur
- [x] on devine l'ordre de lecture

---

## 1. Contrastes (seuil : 4,5:1)

| Élément | Couleur du texte | Couleur du fond | Ratio | ≥ 4,5:1 |
|---|---|---|:---:|:---:|
| Titre de l'app « Libri » | #3D2713 | #FBF0DF | 12,4:1 | ✅ |
| Étiquette de genre (« ROMAN ») | #27170B | #FBF0DF | 15,4:1 | ✅ |
| Titre de carte | #251208 | #FBF0DF | 15,9:1 | ✅ |
| Auteur | #3E2F22 | #FBF0DF | 11,4:1 | ✅ |
| Genre · pages | #413325 | #FBF0DF | 10,8:1 | ✅ |
| Barre de recherche (texte indicatif) | #3F2815 | #EEE1CE | 10,7:1 | ✅ |
| Libellé du panneau (« NOMBRE DE PAGES ») | #2A1407 | #F8ECDA | 15,0:1 | ✅ |
| Valeurs du curseur (0 et 1000) | #362313 | #F8EDDB | 12,9:1 | ✅ |
| Texte du bouton « TOUS » | #FEFBF0 | #4E3721 (bouton) | 10,7:1 | ✅ |
| Bouton « TOUS » contre le panneau | #4E3721 | #F8EDDB | 9,6:1 | ✅ |
| Poignées du curseur contre le panneau | #402B19 | #F8EDDB | 11,5:1 | ✅ |

**Résultat : tous les textes dépassent largement 4,5:1** (le plus bas : 9,6:1). Aucun contraste à corriger.

---

## 2. Tailles minimales

| Élément | Taille estimée | Règle du cours | Verdict |
|---|---|---|:---:|
| Titre de carte (gras, majuscules) | ≈ 14 px | texte courant ≥ 16 px | ❌ |
| Auteur / genre · pages | ≈ 12 à 13 px | texte courant ≥ 16 px | ❌ |
| Étiquette de genre (« ROMAN ») | ≈ 13 à 14 px | texte courant ≥ 16 px | ❌ |
| Libellés du panneau (« GENRES », « NOMBRE DE PAGES ») | ≈ 14 px | texte courant ≥ 16 px | ❌ |
| Texte de la barre de recherche | ≈ 15 px | texte courant ≥ 16 px | ⚠️ limite |
| Bouton « TOUS » (zone cliquable) | ≈ 33 px de haut | ≈ 44 × 44 px | ❌ |
| Poignées du curseur | ≈ 14 px de diamètre | ≈ 44 × 44 px | ❌ |
| Cartes de livre (zone cliquable) | pleine carte, largeur ≈ 170 px | ≈ 44 × 44 px | ✅ |

**Résultat : les contrastes sont excellents, mais les tailles ne respectent pas le minimum du cours.** Les textes sont trop petits et les deux contrôles du panneau (bouton et curseur) sont trop petits pour un pouce.

---

## 3. Information portée par la couleur seule

- **Genre d'un livre** : écrit en toutes lettres (« ROMAN · 512 PAGES »), pas de code couleur. ✅
- **Filtres** : le genre choisi s'affiche dans le bouton (« TOUS »), le nombre de pages en chiffres (0 / 1000). ✅
- **Écran « Aucun résultat »** : le message est écrit (« Aucun livre ne correspond… ») en plus du rouge discret. ✅

Aucune information n'est donnée par la couleur seule.

---

## 4. Ordre de lecture

De haut en bas : logo « Libri », barre de recherche, grille (étiquette de genre → couverture → titre → auteur → genre · pages), puis panneau de filtres fixé en bas. L'ordre se devine.
À surveiller au test avec un camarade (e2-7) : les filtres sont en bas de l'écran, donc le test de localisation dira si Léa les trouve du premier coup.
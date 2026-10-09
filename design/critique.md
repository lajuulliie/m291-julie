# Critique comparative & arbitrage — Libri (e2-6)

**Persona :** Léa, 19 ans, lit le soir ou dans les transports, sur smartphone (390 px), souvent une main prise. Elle veut filtrer vite, voir le nombre de pages tout de suite, sans créer de compte.
**Tâche :** trouver un livre selon le genre et le nombre de pages en quelques secondes.

> **Méthode.** Les couleurs (hex) et les ratios de contraste sont relevés sur la capture des 3 pistes (échantillon des pixels du texte) et calculés avec la formule WCAG. Ils seront re-mesurés sur WebAIM en s8. Les tailles sont ramenées à un écran de 390 px.

---

## 1. Matrice d'évaluation (1 à 5)

| Critère | Piste A — Éditoriale & sobre | Piste B — Chaleureuse & terroir | Piste C — Moderne & pragmatique |
|---|:---:|:---:|:---:|
| Lisibilité | 4 | 3 | 5 |
| Navigation | 4 | 4 | 4 |
| Feedback | 3 | 3 | 4 |
| Cohérence | 5 | 4 | 3 |
| Accessibilité | 4 | 3 | 4 |
| **Total /25** | **20** | **17** | **20** |
| Fidélité au brief (qualitatif) | forte | moyenne | faible |

---

## 2. Fiches critiques

### Fiche critique — design 1 · direction A (Éditoriale & sobre)

**2 forces**

1. Critère : Lisibilité — preuve : titre de carte en brun #251208 sur crème #FBF0DF (contraste 15,9:1), auteur en #3E2F22 (11,4:1) et « genre · pages » en #413325 (10,8:1). Le titre est en gras, l'auteur et les pages en normal : la hiérarchie se lit sans effort.
2. Critère : Cohérence — preuve : une seule famille de bruns pour le texte, le bouton « TOUS » (#4E3721, texte #FEFBF0, 10,7:1) et les curseurs. Le serif est réservé au logo « Libri » et aux couvertures, et les filets fins sont identiques partout.

**2 faiblesses**

1. Critère : Feedback — preuve : seul le bouton « TOUS » se reconnaît comme cliquable. Les cartes n'ont ni bouton, ni flèche, ni état visible : Léa ne devine pas qu'elles ouvrent une fiche.
2. Critère : Accessibilité — preuve : le bouton « TOUS » mesure environ 33 px de haut et les poignées du curseur environ 14 px, loin des 48 px visés en e2-4 pour une main prise. En plus, titres, auteurs et infos sont tous en majuscules à la même petite taille (environ 13 px).

**Verdict**
Je garde ce design parce que (persona + tâche) : Léa, le soir dans le bus avec une main prise, doit trouver un roman de moins de 300 pages en quelques secondes. Ici, les filtres Genres et Nombre de pages restent visibles en permanence en bas de l'écran, et le texte brun très contrasté reste lisible en déplacement. Je corrige les cibles tactiles et j'ajoute un indice cliquable sur les cartes, en reprenant le principe de la piste C (éléments d'action bien foncés).

---

### Fiche critique — design 2 · direction B (Chaleureuse & terroir)

**2 forces**

1. Critère : Cohérence — preuve : fond pêche #FEF2E5, panneau de filtres #FCDECB et couvertures dans les tons orange-rouge forment un ensemble harmonieux. Le bouton « TOUS » (#BE3B18, texte #FFFFFA, 5,5:1) reprend le même rouge-orangé que les étiquettes.
2. Critère : Navigation — preuve : même structure que A, avec recherche en haut et un panneau fixe en bas séparé par un filet vertical, « GENRES » à gauche et « NOMBRE DE PAGES » (curseur 0 à 1000) à droite. Léa règle ses deux contraintes sans quitter la liste.

**2 faiblesses**

1. Critère : Lisibilité — preuve : tout le texte est dans la même teinte rouge-orangé. Les étiquettes en #B02A13 sur #FEF3E7 font 6,0:1, et surtout le libellé « GENRES » du panneau en #B8290F sur #FCDECB tombe à 4,9:1, juste au-dessus du seuil de 4,5:1 du brief, sans marge. Titre, auteur et pages se confondent, car seule la graisse les distingue.
2. Critère : Feedback — preuve : l'accent rouge-orangé est utilisé partout (étiquettes, titres, filets, curseurs), donc il ne signale plus ce qui est cliquable. Ce rouge ressemble aussi à celui d'une erreur, alors que le brief réserve un rouge discret à l'erreur.

**Verdict**
J'élimine ce design parce que (persona + tâche) : Léa, dans le bus, doit repérer en un coup d'œil le nombre de pages et le bouton pour filtrer. Ici, le texte rouge-orangé partout rend les infos clés moins distinctes, et le contraste du panneau de filtres, son outil principal, est le plus juste des trois.

---

### Fiche critique — design 3 · direction C (Moderne & pragmatique)

**2 forces**

1. Critère : Lisibilité — preuve : texte noir #010001 sur fond #F9F9F9 (contraste 19,9:1), le meilleur des trois, avec étiquettes et titres en gras et une hiérarchie nette.
2. Critère : Feedback — preuve : le bouton « TOUS » est noir #000000 avec texte blanc (21:1) et les curseurs sont noirs sur le panneau #FAFAFA. Les éléments d'action sont les plus visibles de l'écran, y compris au pouce.

**2 faiblesses**

1. Critère : Cohérence — preuve : fond blanc presque pur et logo « Libri » en sans-serif gras, face à des couvertures serif très colorées (jaune vif pour « Petit manuel d'écologie », violet et rose pour « Là où chantent les écrevisses »). Les couvertures dominent l'écran et l'interface n'a plus de couleur propre.
2. Critère : Fidélité au brief — preuve : le brief demande un fond blanc cassé/crème, un accent chaud et l'ambiance d'une petite librairie de quartier. Cette piste est blanche, noire et sans accent chaud : on dirait une appli générique.

**Verdict**
J'élimine ce design parce que (persona + tâche) : Léa lirait très bien les infos et trouverait vite le filtre, mais elle ne retrouverait pas l'ambiance « calme, chaleureuse, petite librairie » qui donne envie de lire le soir. Je lui emprunte seulement son feedback (boutons et curseurs foncés bien visibles) pour la piste retenue.

---

## 3. Arbitrage

**Je retiens la Piste A (Éditoriale & sobre)** parce que Léa pourra filtrer par genre et par nombre de pages d'un seul regard, avec des filtres toujours visibles (son besoin de rapidité) et un texte brun très contrasté (10,8:1 à 15,9:1) sur fond crème, lisible dans les transports. C'est la seule qui respecte à la fois la palette du brief (fond blanc cassé, texte foncé presque noir, accent chaud) et son ambiance de petite librairie de quartier.

**Je lui intègre le feedback de la Piste C** : boutons et curseurs foncés, très contrastés.

**J'abandonne B** parce que son texte rouge-orangé partout frôle le seuil de contraste (4,9:1 dans le panneau de filtres) et que l'accent ne guide plus l'œil.
**J'abandonne C** parce que son blanc et noir pur s'éloigne du brief, malgré une lisibilité supérieure.

*A et C ont le même total (20/25) : le choix se fait donc sur la fidélité au brief et sur le besoin de Léa, pas sur la note.*


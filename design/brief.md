# Brief de Conception — Libri

## 1. Contexte & Problématique
En Suisse romande, de nombreux étudiants aimeraient lire davantage mais peinent à choisir un livre adapté à leur temps disponible. Face à une pile de lecture trop grande ou à un choix trop vaste, ils renoncent souvent faute d'un moyen rapide de filtrer selon leurs contraintes. Libri répond à ce besoin en permettant de trouver un livre selon le genre et le nombre de pages, en quelques secondes.

## 2. Profil de l'Utilisateur Cible (Persona)
- **Prénom & Âge :** Léa, 19 ans
- **Contexte d'utilisation :** Sessions de lecture courtes, le soir ou dans les transports, sur smartphone (390 px), souvent à une main
- **Besoins clés :** Rapidité de filtrage, filtres toujours visibles, information directe sur le nombre de pages, pas de compte à créer

## 3. Fonctionnalités Essentielles (Périmètre MVP)
1. Affichage de 40 livres fictifs sous forme de cartes d'interface (genre, titre, auteur, nombre de pages), triés automatiquement du livre le plus court au plus long.
2. Filtrage instantané par genre (Roman, Essai, Fictif, Roman policier, Psychologie, Philosophie) et par tranche de nombre de pages (moins de 200, 200 à 299, 300 à 399, 400 et plus), recherche dynamique par titre. Les filtres restent toujours visibles en bas de l'écran.
3. Consultation d'une fiche détaillée complète (résumé, auteur, genre, nombre de pages).

## 4. Contraintes Techniques & Ergonomiques
- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Polices :** Playfair Display (logo, titre de la fiche) et Inter (tout le reste).
- **Accessibilité :** Ratios de contraste WCAG AA (≥ 4,5:1), texte courant à 16 px minimum, zones cliquables d'au moins 44 px, navigation clavier assurée, aucune information portée par la couleur seule.

## 5. Écrans

### Écran 1 — Catalogue
- On y voit : le nom Libri, une barre de recherche, la liste des livres en grille à deux colonnes (genre, titre, auteur, nombre de pages) et le panneau de filtres toujours ouvert en bas
- On peut y faire : filtrer par genre et par tranche de nombre de pages (deux menus de choix), chercher par titre
- Bouton principal : ouvrir une fiche livre (toute la carte est cliquable)

### Écran 2 — Fiche livre
- On y voit : titre, auteur, genre, nombre de pages, résumé court
- On peut y faire : lire le résumé, revenir au catalogue
- Bouton principal : retour au catalogue

### Écran 3 — Aucun résultat
- On y voit : message indiquant qu'aucun livre ne correspond aux filtres
- On peut y faire : réinitialiser les filtres
- Bouton principal : réinitialiser les filtres

## 6. Ambiance Visuelle
Calme, épurée, chaleureuse. Comme une petite librairie de quartier — peu d'éléments à l'écran, de la place pour respirer, rien de criard.

**Palette :**
- Fond : crème #FCF1E0 (panneau de filtres #FDF6EA, fond secondaire #F2E3CC)
- Texte : brun très foncé #4A2F22
- Accent : brun chaud #5A3D2C (boutons et menus de choix)
- Attention / erreur : rouge discret #9B2C2C
- Focus clavier : #9A3F1E

## 7. Interdits
- Pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter.
- Pas d'API externe (type Google Books).
- Pas de scan de code-barres ni de reconnaissance d'image.
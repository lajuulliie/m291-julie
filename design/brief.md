# Brief de Conception — Libri

## 1. Contexte & Problématique
En Suisse romande, de nombreux étudiants aimeraient lire davantage mais peinent à choisir un livre adapté à leur temps disponible. Face à une pile de lecture trop grande ou à un choix trop vaste, ils renoncent souvent faute d'un moyen rapide de filtrer selon leurs contraintes. Libri répond à ce besoin en permettant de trouver un livre selon le genre et le nombre de pages, en quelques secondes.

## 2. Profil de l'Utilisateur Cible (Persona)
- **Prénom & Âge :** Léa, 19 ans
- **Contexte d'utilisation :** Sessions de lecture courtes, le soir ou dans les transports, sur smartphone (390 px)
- **Besoins clés :** Rapidité de filtrage, information directe sur le nombre de pages, pas de compte à créer

## 3. Fonctionnalités Essentielles (Périmètre MVP)
1. Affichage d'une liste de livres sous forme de cartes d'interface (titre, auteur, genre, nombre de pages).
2. Filtrage instantané par genre et par nombre de pages, recherche dynamique par titre.
3. Consultation d'une fiche détaillée complète (résumé, auteur, genre, nombre de pages).

## 4. Contraintes Techniques & Ergonomiques
- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Accessibilité :** Ratios de contraste WCAG AA (≥ 4,5:1), navigation clavier assurée.

## 5. Écrans

### Écran 1 — Catalogue
- On y voit : liste des livres (titre, auteur, genre, nombre de pages)
- On peut y faire : filtrer par genre et par nombre de pages, chercher par titre
- Bouton principal : ouvrir une fiche livre

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
- Fond : blanc cassé / crème
- Texte : gris foncé, presque noir
- Accent : une couleur chaude (terracotta ou vert sauge)
- Attention / erreur : rouge discret, pas agressif

## 7. Interdits
- Pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter.
- Pas d'API externe (type Google Books).
- Pas de scan de code-barres ni de reconnaissance d'image.
const conteneur = document.getElementById("liste-cartes");

// Les genres sont en minuscules dans data.json : on met la première lettre en majuscule pour l'affichage
function majuscule(texte) {
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}

// "roman policier" devient "roman-policier" : sert de classe CSS pour la couleur de la couverture
function classeGenre(genre) {
  return "genre-" + genre.replace(/\s+/g, "-");
}

// État 1 — Chargement
conteneur.innerHTML = "<p class='etat-chargement'>Chargement des livres en cours...</p>";

fetch("../data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Erreur de chargement : " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    // État 3 — Vide
    if (donnees.length === 0) {
      conteneur.innerHTML = "<p class='etat-vide'>Aucun livre enregistré pour le moment.</p>";
      return;
    }

    // État 2 — Succès
    conteneur.innerHTML = donnees.map(function (livre) {
      return `
        <article class="carte ${classeGenre(livre.genre)}">
          <p class="genre">${majuscule(livre.genre)}</p>
          <div class="couverture" aria-hidden="true"><span class="couv-titre">${livre.titre}</span><span class="couv-auteur">${livre.auteur}</span></div>
          <h3><a href="#" class="carte-lien">${livre.titre}</a></h3>
          <p class="auteur">${livre.auteur}</p>
          <p class="pages">${livre.pages} pages</p>
        </article>
      `;
    }).join("");
  })
  .catch(function (erreur) {
    // État 4 — Erreur
    console.error("Détail technique :", erreur);
    conteneur.innerHTML = "<p class='etat-erreur'>⚠️ Impossible de charger les livres. Vérifiez votre connexion et la présence du fichier data.json, puis réessayez.</p>";
  });

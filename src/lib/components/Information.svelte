<script>

import { displayBlock  } from '$lib/js/displayBlock.js'

// la valeur de header est assignée par `bind:this={header}`
// this est l'élément html, dans ce cas : div#information-header
// bind signifie : assigne this à header
// note : header est undefined tant que le composant n'est pas monté (voir onMount())
// note (suite): sans effet ici car on ne peut pas cliquer avant que le composant ne soit monté
let header;

</script>

<header>
  <div bind:this={header} id="information-header">
    <h1>Plan interactif du Faubourg à m’lasse</h1>
    <section>
      <div class="header-column">
        <p>Le plan interactif du Faubourg à m’lasse (PIFM) est un prototype de système d’information géographique historique basé sur le fonds « Quadrilatère rue Amherst, rue Papineau, rue Craig et rue Dorchester (Radio-Canada) » des Archives de Montréal.</p>

        <p>Il facilite l’exploration de cet ensemble documentaire par l’intégration d’un jeu de données ouvertes et liées permettant la formalisation du lien entre les photographies et le plan d’expropriation produits en 1963 dans le cadre de la réalisation du projet de construction de la Maison de Radio-Canada à Montréal.</p>
        <p>Sources documentaires :</p>
        <ul>
          <li>Quadrilatère rue Amherst, rue Papineau, rue Craig et rue Dorchester (Radio-Canada). (1963). Fonds du service des affaires institutionnelles (<a href="https://archivesdemontreal.ica-atom.org/c196-quartier-demoli-radio-canada">VM094, SY, SS1, SSS3, C196</a>), Archives de la Ville de Montréal.</li>
          <li>licence <a href="https://creativecommons.org/licenses/by-nc-sa/2.5/ca/deed.fr">CC BY-NC-SA 2.5 CA</a></li>
        </ul>
      </div>
      <div class="header-column">
        <h2>À propos</h2>
        <h3>Réalisation</h3>
        <ul>
          <li>programmation de l’application et géoréférencement du plan : David Valentine</li>
          <li>dépouillement des archives et géolocalisation des bâtiments : Yannic Rozon</li>
        </ul>
        <h3>Données</h3>
        <p>Le <abbr title="Plan interactif du Faubourg à m’lasse">PIFM</abbr> utilise les données du <a href="https://qdmtl.ca">projet <abbr title="Quartiers disparus de Montréal">QDMTL</abbr></a>.
        <h3>Contact</h3>
        <p>Questions ou commentaires? N’hésitez pas à nous contacter :</p>
        <ul>
          <li><a href="mailto:david.valentine@umontreal.ca">david.valentine@umontreal.ca</a></li>
          <li><a href="mailto:yannicrozon@gmail.com">yannicrozon@gmail.com</a></li>
        </ul>
      </div>
      <div class="header-column">
        <h2>Notes techniques</h2>
        <p>Version : 0.1 - avril 2023</p>
        <p>Cette application n’a pas été testée sur de petits écrans (tablette et appareils mobiles).</p>
        <p>Dimensions minimales recommandées :</p>
        <ul>
          <li>largeur : 1200px</li>
          <li>hauteur : 335px</li>
        </ul>
        <p>Informations supplémentaires :</p>
        <ul><li><a href="https://github.com/qdmtl/pifm">https://github.com/qdmtl/pifm/</a></li></ul>
      </div>
    </section>
  </div>
  <div id="application-header">
    <h1><abbr title="Plan interactif du Faubourg à m’lasse">PIFM</abbr> <span>v0.1</span></h1>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" id="icon" on:click={displayBlock(header)}>
      <i class="fa fa-bars"></i>
    </a>
  </div>
</header>

<style>

header div#information-header {
  display: none;
  padding: 10px;
}
header div#information-header h1 {
  margin: 0;
}
header div#information-header section {
  display: flex;
}
div.header-column {
  flex: 1;
  padding: 10px 20px 10px 0;
}
div.header-column h2 {
  margin-top: 0;
}
div.header-column p,
div.header-column ul {
  line-height: 1.25;
}
header div#application-header {
  height: 40px;
  box-shadow: 0 3px 3px rgba(0,0,0,0.4);
  z-index: 500;
  position: relative;
}
header div#application-header h1 {
  margin: 0;
  font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  padding-left: 10px;
}
header div#application-header h1 span {
  font-size: 80%;
  color: gray;
}
header div#application-header a#icon {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  color: #333333;
  width: 48px;
  height: 40px;
  margin-right: 10px;
  font-size: x-large;
  text-align: center;
  padding-top: 6px;
  box-sizing: border-box;
}

header div#application-header h1 {
  font-weight: 900;
  font-size: 1.5rem;
}

</style>
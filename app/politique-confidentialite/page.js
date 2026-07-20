import "../globals.css";

export const metadata = {
  title: "Politique de confidentialité | Maison Novia",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="legal-page">
      <div className="container">
        <a className="btn" href="/">Retour au site</a>
        <h1>Politique de confidentialité</h1>

        <p>
          Cette politique de confidentialité explique comment Maison Novia / KAILIB
          peut collecter et traiter certaines données personnelles dans le cadre du site maisonnovia.fr.
        </p>

        <h2>Données susceptibles d’être collectées</h2>
        <ul>
          <li>Adresse e-mail communiquée via le formulaire de contact ou la liste d’attente</li>
          <li>Informations communiquées volontairement dans un message</li>
          <li>Données techniques nécessaires au fonctionnement du site</li>
        </ul>

        <h2>Finalités du traitement</h2>
        <ul>
          <li>Répondre aux demandes envoyées via le site</li>
          <li>Informer les personnes inscrites du lancement du produit Maison Novia</li>
          <li>Améliorer le fonctionnement et la sécurité du site</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Les traitements sont réalisés sur la base du consentement de la personne concernée
          lorsqu’elle transmet volontairement ses informations, ou sur la base de l’intérêt légitime
          de l’éditeur pour assurer le bon fonctionnement du site.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les données sont conservées pendant une durée limitée, strictement nécessaire aux finalités
          poursuivies, ou jusqu’au retrait du consentement lorsque celui-ci constitue la base légale du traitement.
        </p>

        <h2>Destinataires</h2>
        <p>
          Les données sont destinées à KAILIB et, le cas échéant, à ses prestataires techniques
          intervenant dans l’hébergement, la maintenance ou la gestion de la liste d’attente.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément à la réglementation applicable, vous disposez notamment d’un droit d’accès,
          de rectification, d’effacement, d’opposition, de limitation et, dans certains cas, de portabilité.
          Vous pouvez exercer vos droits en écrivant à <strong>contact@maisonnovia.fr</strong>.
        </p>

        <h2>Cookies</h2>
        <p>
          Une information complémentaire sur les cookies et traceurs devra être ajoutée si des outils
          de mesure d’audience, publicitaires ou d’autres services tiers sont activés lors de la mise en ligne.
        </p>
      </div>
    </main>
  );
}

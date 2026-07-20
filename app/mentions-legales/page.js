import "../globals.css";

export const metadata = {
  title: "Mentions légales | Maison Novia",
};

export default function MentionsLegales() {
  return (
    <main className="legal-page">
      <div className="container">
        <a className="btn" href="/">Retour au site</a>
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>maisonnovia.fr</strong> est édité par <strong>KAILIB</strong>,
          société par actions simplifiée unipersonnelle (SASU).
        </p>
        <ul>
          <li>Marque présentée : Maison Novia</li>
          <li>Forme juridique : SASU</li>
          <li>SIREN : 107016578</li>
          <li>RCS : Blois</li>
          <li>Siège social : 4 chemin de la Richellerie, 41190 Saint-Lubin-en-Vergonnois</li>
          <li>Adresse e-mail : contact@maisonnovia.fr</li>
          <li>Téléphone : 06 98 25 75 96</li>
          <li>Responsable de la publication : Nicolas THERY</li>
        </ul>

        <h2>Hébergement</h2>
        <p>
          Le site est destiné à être hébergé sur une plateforme de type Vercel.
          Les informations précises d’hébergement devront être complétées lors de la mise en ligne définitive.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des éléments présents sur ce site, notamment les textes, visuels,
          logos, graphismes, icônes et contenus, sont protégés par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, modification ou exploitation,
          totale ou partielle, sans autorisation écrite préalable, est interdite.
        </p>

        <h2>Responsabilité</h2>
        <p>
          L’éditeur s’efforce de fournir des informations aussi précises que possible.
          Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes
          ou des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires.
        </p>
      </div>
    </main>
  );
}

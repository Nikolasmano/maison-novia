# Mise en ligne de Maison Novia

## Situation actuelle

Le site est prêt techniquement pour un premier déploiement Vercel.
Le domaine prévu est `maisonnovia.fr`, actuellement géré chez GoDaddy.

## Étape 1 — Tester le site

Sur un ordinateur avec Node.js installé :

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Étape 2 — Mettre le code dans un dépôt GitHub

1. Créer un compte GitHub si nécessaire.
2. Créer un dépôt privé nommé `maison-novia`.
3. Importer le contenu du dossier du projet.
4. Ne jamais publier de mots de passe ou de clés secrètes dans le dépôt.

## Étape 3 — Déployer sur Vercel

1. Créer un compte Vercel.
2. Connecter le compte GitHub.
3. Importer le dépôt `maison-novia`.
4. Vercel détectera Next.js automatiquement.
5. Lancer le déploiement.

Un sous-domaine temporaire Vercel sera créé pour vérifier le site avant de connecter `maisonnovia.fr`.

## Étape 4 — Connecter `maisonnovia.fr`

Dans le projet Vercel :

1. Ouvrir les paramètres du projet.
2. Ajouter `maisonnovia.fr` comme domaine.
3. Ajouter aussi `www.maisonnovia.fr`.
4. Vercel affichera les valeurs DNS à configurer.

Dans GoDaddy :

1. Ouvrir la gestion DNS de `maisonnovia.fr`.
2. Modifier uniquement les enregistrements demandés par Vercel.
3. Ne pas modifier les enregistrements MX si l'adresse `contact@maisonnovia.fr` utilise un service e-mail existant.
4. Attendre la validation DNS.

## Étape 5 — Liste d'attente

Le choix actuel est un formulaire simple sans service externe.
Le bouton ouvre le logiciel de messagerie du visiteur avec une demande préremplie à `contact@maisonnovia.fr`.

Limite : ce système ne constitue pas une base de données automatique de prospects.
Pour une vraie collecte d'e-mails, il faudra ultérieurement connecter Brevo, Mailchimp ou un backend.

## Étape 6 — Avant publication définitive

- Vérifier le SIREN communiqué.
- Compléter les coordonnées exactes de l'hébergeur dans les mentions légales.
- Remplacer le prototype annoté par un visuel commercial propre lorsque celui-ci sera disponible.
- Tester le site sur mobile et ordinateur.
- Tester l'adresse `contact@maisonnovia.fr`.


## Messagerie Proton

Le domaine `maisonnovia.fr` est relié à Proton pour la messagerie.

Lors de la connexion du site à Vercel, conserver tous les enregistrements DNS liés à Proton, notamment :
- les enregistrements MX ;
- les enregistrements TXT de vérification et SPF ;
- les enregistrements DKIM ;
- l'enregistrement DMARC s'il est configuré.

Ne modifier que les enregistrements nécessaires au site web et explicitement demandés par Vercel.

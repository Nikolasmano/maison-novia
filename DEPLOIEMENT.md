# Déploiement gratuit avec GitHub Pages

## Principe

Le site est exporté en fichiers statiques HTML, CSS et JavaScript, puis publié
gratuitement par GitHub Pages à chaque modification de la branche `main`.

## Conditions du plan gratuit

Le dépôt doit être public avec GitHub Free pour utiliser GitHub Pages.
Le projet ne contient ni mot de passe, ni clé privée, ni donnée secrète.

## Activation

1. Dans le dépôt GitHub, ouvrir `Settings`.
2. Ouvrir `General`, puis modifier la visibilité en `Public` si nécessaire.
3. Ouvrir `Settings` > `Pages`.
4. Dans `Build and deployment`, choisir `GitHub Actions`.
5. Ouvrir l'onglet `Actions` pour suivre le déploiement.
6. Lorsque le workflow est vert, ouvrir l'adresse indiquée.

## Domaine personnalisé

Dans `Settings` > `Pages`, renseigner `maisonnovia.fr` dans `Custom domain`
avant de modifier les DNS.

Chez le fournisseur DNS, ajouter les enregistrements web indiqués par GitHub.
Ne jamais supprimer les enregistrements Proton liés à la messagerie :
MX, SPF/TXT, DKIM et DMARC.

Les enregistrements A officiels GitHub Pages pour le domaine racine sont :

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Pour `www`, créer un CNAME vers `nikolasmano.github.io`.

Une fois le certificat disponible, activer `Enforce HTTPS`.

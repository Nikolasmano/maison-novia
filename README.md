# Maison Novia — GitHub Pages V7

Site vitrine premium pour Maison Novia / KAILIB.

## Hébergement

Cette version est configurée pour un hébergement gratuit avec GitHub Pages.

## Déploiement automatique

À chaque commit sur la branche `main`, le workflow
`.github/workflows/deploy-pages.yml` construit et publie le site.

## Configuration locale

```bash
npm install
npm run build
```

Le site statique est généré dans le dossier `out`.

Consultez `DEPLOIEMENT.md` pour les étapes GitHub Pages et la connexion
du domaine `maisonnovia.fr`.

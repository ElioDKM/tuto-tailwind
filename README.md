# Ma première fiche Tailwind

Exercice J1/E1

## Installation et compilation

```bash
npm ci
npm run build
```

Pour le développement :

```bash
npm run dev
```

Puis ouvrir index.html dans le navigateur.

node_modules/ et dist/ ne sont pas versionnés : il faut lancer npm run build après le clonage.

## Quatre classes et leur effet

- `bg-accent` -> Fond du bouton-lien en bleu `#1d4ed8`, défini dans `src/input.css` par `--color-accent` dans `@theme`
- `max-w-md` + `mx-auto` -> La fiche est limitée en largeur et centrée horizontalement dans la page
- `shadow-md` -> Ombre portée autour de la fiche, qui la détache du fond gris
- `mt-6` -> Espace vertical entre le paragraphe et le bouton

## Prédiction

Ayant déjà travaillé un peu avec tailwind je ne suis pas surpris du resultat, il s'est passé ce que je m'imaginais.
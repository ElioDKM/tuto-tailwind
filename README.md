# TP 1

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

## Classes et leur effet

- `bg-accent` -> Fond du bouton-lien en bleu `#1d4ed8`, défini dans `src/input.css` par `--color-accent` dans `@theme`
- `max-w-md` + `mx-auto` -> La fiche est limitée en largeur et centrée horizontalement dans la page
- `shadow-md` -> Ombre portée autour de la fiche, qui la détache du fond gris
- `mt-6` -> Espace vertical entre le paragraphe et le bouton

## Prédiction

Ayant déjà travaillé un peu avec tailwind je ne suis pas surpris du resultat, il s'est passé ce que je m'imaginais.

# TP 2

## DA
Pour le visuel quelque chose de simple mais efficace qui attire l'oeil, sobre et minimaliste.

## Explication des choix

### hièrarchie du titre
Mise en avant du nom de l'album avec les classes `text-4xl font-black`, et `md:text-6xl` pour s'adapter avec le responsive du layout

### rythme des espacements
Une interface minimaliste pour un signe de qualité et un style premium.

Responsive avec l'utilisation de `md:grid-cols-2 md:gap-16`, de base tout en une colonne et au dessus de md on passe a 2 colonnes.

### couleur de l’action
Des couleurs soft, avec une couleur d'accent contrasté `--color-accent: #765d4c;` mais en accord avec la DA et le thème de l'album (vu avec l'artiste directement).


## Aide
Utilisation de l'ia pour la génération des contenues text (titre, description, etc)

## Capture d'écran

![alt text](./images/image.png)

![alt text](./images/image-1.png)
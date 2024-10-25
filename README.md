# PIFM - Kool Kids Edition

Version [Svelte](https://svelte.dev) du PIFM.

# Installation

Placer les tuiles dans le répertoire `/static/t/` (l’application actuelle ne les utilise pas pour l’instant, donc il est possible de sauter cette étape).

Cloner le dépôt :

```bash
$ git clone git@github.com:qdmtl/pifm-kedition.git
```

Installer les dépendances :

```bash
$ cd pifm-kedition
$ npm install
```

Démarrer le serveur de développement :

```bash
$ npm run dev

# or start the server and open the app in a new browser tab
$ npm run dev -- --open
```

## Building

To create a production version of your app (pas configuré):

```bash
$ npm run build
```

You can preview the production build with `npm run preview`.
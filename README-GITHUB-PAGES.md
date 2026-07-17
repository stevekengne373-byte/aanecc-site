# Mettre le site en ligne avec GitHub Pages (gratuit, permanent)

1. Va sur https://github.com/new et crée un nouveau dépôt (par exemple `aanecc-site`), en **Public**. Ne coche aucune case d'initialisation (pas de README, pas de .gitignore).

2. Une fois le dépôt créé, clique sur **"uploading an existing file"** (lien affiché sur la page vide du dépôt).

3. Dézippe `aanecc-site-static.zip` sur ton ordinateur, puis glisse **tout le contenu du dossier** (pas le dossier lui-même : `index.html`, `activites/`, `guides/`, `association/`, `static/`, `.nojekyll`) dans la zone d'upload de GitHub.

4. Valide le commit ("Commit changes").

5. Va dans l'onglet **Settings** du dépôt → section **Pages** (dans le menu de gauche) → sous "Build and deployment", choisis **Source : Deploy from a branch**, branche **main**, dossier **/ (root)** → **Save**.

6. Patiente 1 à 2 minutes, puis rafraîchis la page Settings > Pages : ton lien apparaît en haut, du type :
   `https://TON-PSEUDO.github.io/aanecc-site/`

Ce lien est permanent (contrairement à Netlify Drop) et se met à jour à chaque fois que tu modifies un fichier sur GitHub.

## Mettre à jour le site plus tard

- Directement sur GitHub : ouvre le fichier à modifier dans le dépôt, clique sur l'icône crayon, modifie, commit. Le site se met à jour automatiquement en 1-2 minutes.
- Ou en local : si tu modifies `app.py` / `data.py` (dans le zip `aanecc-site.zip`, la version Flask), relance `python3 freeze.py` pour régénérer le dossier `build/`, puis remplace les fichiers sur GitHub par ce nouveau contenu.

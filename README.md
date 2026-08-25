# Portfolio - Issa BOLY

Site portfolio professionnel de **Issa BOLY**, Développeur Full Stack Senior (Web & Mobile).
Site statique, sans build ni dépendance : HTML5, CSS3 et JavaScript vanilla.

---

## Fonctionnalités

| | |
|---|---|
| **Bilingue FR / EN** | Bascule instantanée, langue détectée depuis le navigateur et mémorisée |
| **Thème clair / sombre** | Suit `prefers-color-scheme`, choix mémorisé en `localStorage` |
| **Données centralisées** | Tout le contenu du CV vit dans un seul fichier : `assets/js/data.js` |
| **Filtres projets** | Par domaine : plateformes d'État, géomatique, éducation, santé |
| **Responsive** | Mobile-first, menu burger, aucun scroll horizontal |
| **Accessibilité** | Repères ARIA, skip-link, focus visible, `prefers-reduced-motion` |
| **SEO** | Meta description, Open Graph, JSON-LD `Person`, `sitemap.xml`, `robots.txt` |
| **Formulaire de contact** | Validation côté client puis ouverture du client mail (`mailto:`) |
| **Impression** | Feuille de style `@media print` pour exporter une version PDF propre |

## Structure

```
Mon_CV/
├── index.html              # Structure sémantique de la page
├── assets/
│   ├── css/style.css       # Design system (tokens) + composants
│   ├── js/data.js          # ← LE CONTENU DU CV (à éditer)
│   ├── js/i18n.js          # Libellés d'interface FR / EN
│   ├── js/main.js          # Rendu, i18n, thème, interactions
│   └── img/                # favicon.svg, og-cover.svg
├── robots.txt
├── sitemap.xml
└── serve.sh                # Serveur de prévisualisation local
```

## Lancer en local

```bash
./serve.sh          # http://localhost:8080
./serve.sh 3000     # sur un autre port
```

Ou directement : `python3 -m http.server 8080`, puis ouvrir <http://localhost:8080>.
(Ouvrir `index.html` par double-clic fonctionne aussi, tout étant statique.)

## Mettre à jour le contenu

Tout se passe dans **`assets/js/data.js`**. Chaque champ textuel est un objet `{ fr, en }` :

```js
{
  role:   { fr: "Développeur Full Stack Senior", en: "Senior Full Stack Developer" },
  company: "EXCELIS-SA",
  period: { fr: "Mai 2026 - Aujourd'hui", en: "May 2026 - Present" },
  current: true,
  bullets: { fr: ["…"], en: ["…"] },
  stack:  ["Architecture", "Java", "React"]
}
```

- **Ajouter une expérience** → une entrée dans `experience` (la plus récente en premier).
- **Ajouter un projet** → une entrée dans `projects`. Le champ `tags` doit référencer un `id`
  présent dans `projectFilters` ; `featured: true` affiche le badge « Référence » ;
  `link: null` masque le lien externe.
- **Ajouter une formation** → une entrée dans `education` ; `credential` affiche
  le bouton de vérification du certificat.
- **Changer les couleurs** → les variables `--accent*` en haut de `assets/css/style.css`.

Aucune recompilation nécessaire : rechargez la page.

## Déploiement - GitHub Pages

Le site est publié sur **<https://issbil.github.io/my_portfolio/>** depuis la branche `main`.

### Mise en ligne initiale

```bash
git remote add origin git@github.com:issbil/my_portfolio.git   # ou l'URL HTTPS
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Build and deployment**
→ *Source* : `Deploy from a branch` · *Branch* : `main` · *Folder* : `/ (root)` → **Save**.

Le premier déploiement prend une à deux minutes. L'onglet **Actions** affiche
l'avancement du job `pages build and deployment`.

### Publier une mise à jour

```bash
git add -A && git commit -m "Mise à jour du contenu" && git push
```

GitHub Pages redéploie automatiquement à chaque push sur `main`.

### Autres hébergeurs

Le site étant 100 % statique, il se déploie tel quel ailleurs :

- **Netlify / Vercel** - glisser-déposer le dossier ou connecter le dépôt.
  Build command : *aucune*. Publish directory : `.`
- **LWS / OVH** - transférer le contenu du dossier par FTP dans `www/` ou `public_html/`.

### Domaine personnalisé

Pour brancher un domaine (ex. `issaboly.dev`) :

1. Créer un fichier `CNAME` à la racine contenant le domaine.
2. Chez le registrar, pointer un `CNAME` vers `issbil.github.io`.
3. Remplacer `https://issbil.github.io/my_portfolio/` par le nouveau domaine dans
   `index.html` (`canonical`, `og:url`, `og:image`, JSON-LD), `robots.txt` et `sitemap.xml`.

## Notes

- Le formulaire de contact utilise `mailto:` - aucun back-end requis. Pour un envoi
  serveur, brancher [Formspree](https://formspree.io) ou une fonction serverless
  dans `initForm()` (`assets/js/main.js`).
- Les données personnelles non nécessaires à un site public (situation familiale,
  permis de conduire) et les coordonnées des références professionnelles ne sont
  volontairement pas publiées. Elles restent disponibles sur le CV complet.
- `assets/img/og-cover.png` est l'image d'aperçu affichée lors d'un partage sur
  LinkedIn, WhatsApp ou Slack. Elle est générée à partir de `og-cover.svg` :
  après modification du SVG, régénérer le PNG en 1200×630.
- `.nojekyll` désactive le traitement Jekyll de GitHub Pages : les fichiers sont
  servis tels quels.

---

© Issa BOLY - [issaboly@gmail.com](mailto:issaboly@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/issa-boly-8957b8116) ·
[GitHub](https://github.com/issbil)

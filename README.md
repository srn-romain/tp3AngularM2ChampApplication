# TP3 Angular - Gestion d'Activités

Application **Angular** - Romain SIEURIN - *Champ d'application M2*.

---

## Déploiement Github Pages

L'application est déployée via cette URL :
**[https://srn-romain.github.io/tp3AngularM2ChampApplication/](https://srn-romain.github.io/tp3AngularM2ChampApplication/)**

---

## Compte rendu

Le compte rendu est disponible à la racine du dépôt :  
📁 **`CR-RomainSieurin.pdf`**

Ce document présente l'ensemble de la réalisation du projet avec des captures d'écrans.

---

## Lancement du projet en local

### Prérequis
- **Node.js** (v18+)
- **npm**

### Commandes
1. Cloner le dépôt et entrer dans le dossier :
   ```bash
   git clone https://github.com/srn-romain/tp3AngularM2ChampApplication.git
   cd tp3AngularM2ChampApplication
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm start
   ```

4. Ouvrir [http://localhost:4200/](http://localhost:4200/) dans votre navigateur.

---

## Error auxquelles j'ai été confronté : pas de `href` dans `app.html` ?

Dans le menu (src/app/app.html), on utilise routerLink plutôt que href pour deux raisons :

- `href` recharge entièrement la page. L'application repart de zéro, les données du tableau en mémoire sont perdues et GitHub Pages renvoie une erreur 404.

- `routerLink` change de page instantanément sans rechargement, ce qui conserve les données en mémoire dans le service.

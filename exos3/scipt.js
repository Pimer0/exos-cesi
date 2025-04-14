const path = require('path');
const fs = require('fs');
const os = require('os');

// cd exos3 puis node scipt.js pour executer ce fichier

console.log('=== GESTION DE FICHIERS ET RÉPERTOIRES ===\n');

// Création du dossier "documents" s'il n'existe pas déjà
const documentsDir = path.join(__dirname, 'documents');
if (!fs.existsSync(documentsDir)) {
    fs.mkdirSync(documentsDir);
    console.log(`1. Dossier créé: ${documentsDir}`);
} else {
    console.log(`1. Le dossier existe déjà: ${documentsDir}`);
}

// Création du fichier rapport.txt vide s'il n'existe pas déjà
const rapportFile = path.join(documentsDir, 'rapport.txt');
if (!fs.existsSync(rapportFile)) {
    fs.writeFileSync(rapportFile, '');
    console.log(`2. Fichier créé: ${rapportFile}`);
} else {
    console.log(`2. Le fichier existe déjà: ${rapportFile}`);
}

console.log('\n=== OPÉRATIONS AVEC LE MODULE PATH ===\n');

// 1. Utilisation de path.join pour créer le chemin complet
const userHomeDir = os.homedir();
const cheminJoin = path.join(userHomeDir, 'documents', 'rapport.txt');
console.log(`3. path.join: ${cheminJoin}`);

// 2. Utilisation de path.resolve pour obtenir le chemin absolu
const cheminAbsolu = path.resolve(rapportFile);
console.log(`4. path.resolve: ${cheminAbsolu}`);

// 3. Utilisation de path.extname pour vérifier l'extension
const extension = path.extname(rapportFile);
console.log(`5. path.extname: ${extension}`);
console.log(`   Le fichier a-t-il une extension .txt? ${extension === '.txt' ? 'Oui' : 'Non'}`);

// 4. Utilisation de path.dirname pour obtenir le répertoire
const repertoire = path.dirname(rapportFile);
console.log(`6. path.dirname: ${repertoire}`);

// 5. Utilisation de path.basename pour extraire le nom du fichier sans extension
const nomFichier = path.basename(rapportFile, extension);
console.log(`7. path.basename: ${nomFichier}`);

// 6. Utilisation de path.parse pour obtenir un objet avec les détails du chemin
const detailsChemin = path.parse(rapportFile);
console.log('8. path.parse:');
console.log(detailsChemin);

// 7. Utilisation de path.normalize pour créer un chemin normalisé
const cheminNonNormalise = path.join(__dirname, 'documents///', './', 'rapport.txt');
const cheminNormalise = path.normalize(cheminNonNormalise);
console.log(`9. path.normalize:`);
console.log(`   Avant: ${cheminNonNormalise}`);
console.log(`   Après: ${cheminNormalise}`);
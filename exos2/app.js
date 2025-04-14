const bookInfo = require('./bookInfo');

// Afficher un titre pour la console
console.log("=== INFORMATIONS SUR LE LIVRE ===");

// Afficher les détails du livre dans la console
console.log(`Titre: ${bookInfo.title}`);
console.log(`Auteur: ${bookInfo.author}`);
console.log(`Année de publication: ${bookInfo.publicationYear}`);
console.log(`Genre: ${bookInfo.genre}`);
console.log(`Nombre de pages: ${bookInfo.pages}`);
console.log(`Langue: ${bookInfo.language}`);
console.log(`Éditeur: ${bookInfo.publisher}`);
console.log(`ISBN: ${bookInfo.isbn}`);
console.log("\n=== RÉSUMÉ ===");
console.log(bookInfo.summary);
console.log(document);

console.log(document.title);

const livroFavorito = document.getElementById("book-2");
console.log(livroFavorito);

console.dir(livroFavorito);

const bookItems = document.getElementsByClassName("book-item");
console.log(bookItems);

console.log(bookItems[2]);

const allParagraph = document.getElementsByTagName("p").item(0);
console.log(allParagraph);

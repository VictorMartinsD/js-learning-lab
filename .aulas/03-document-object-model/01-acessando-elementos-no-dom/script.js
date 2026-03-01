console.log(document);

console.log(document.title);

const livroFavorito = document.getElementById("book-2");
console.log(livroFavorito);

console.dir(livroFavorito);

const colecaoLivros = document.getElementsByClassName("book-item");
console.log(colecaoLivros);

console.log(colecaoLivros[2]);

const todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos.item(0));

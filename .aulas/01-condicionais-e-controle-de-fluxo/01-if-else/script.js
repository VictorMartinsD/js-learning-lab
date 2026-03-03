// Fiz usando o try catch sem que o exercício pedisse

let email = "victor@gmail.com";
let password = "123";
let isAdmin = false;
const validLogin = email === "victor@gmail.com" && password === "123";
const haveAcess = validLogin || isAdmin;

try {
  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Tipo de dado incorreto. Digite apenas letras, números e caracteres especiais.");
  }

  if (!haveAcess) {
    throw new Error("O e-mail ou a senha está incorreto.");
  }

  console.log("Login realizado com sucesso!");
} catch (error) {
  console.log("Alerta: " + error.message);
}

let email = "victor@gmail.com";
let password = "123";
let validEmail = "victor@gmail.com";
let validPassword = "123";
let isAdmin = true;
const validation = email === validEmail && password === validPassword;
const haveAcess = validation || isAdmin;

try {
  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Tipo de dado inválido, digite letras, números e caracteres especiais.");
  }

  if (!haveAcess) {
    throw new Error("O e-mail ou a senha estão incorretos.");
  }

  console.log("Acesso liberado!");
} catch (error) {
  console.log("Alerta: " + error.message);
}

/*
Usando try catch para diferenciar

Aprendi que posso usar somente "validation" no lugar de colocar "validation === true"
*/

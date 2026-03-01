let input = Number("abc");

if (typeof input !== "number" || Number.isNaN(input) || input < 0 || input > 23) {
  console.log("❌ ERRO: O valor digitado não é um horário válido!");
} else {
  if (input <= 12) console.log("Bom dia!");
  else if (input > 12 && input <= 18) {
    console.log("Boa tarde!");
  } else {
    console.log("Boa noite!");
  }
}

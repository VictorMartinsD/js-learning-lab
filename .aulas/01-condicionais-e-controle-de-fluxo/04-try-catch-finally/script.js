let input = 500;

try {
  if (typeof input !== "number" || Number.isNaN(input)) {
    throw new Error("O valor do peso é inválido (não é um número).");
  }

  if (input > 450) {
    throw new Error("Peso máximo excedido! O elevador não pode subir.");
  }

  console.log("✅ Elevador liberado. Subindo...");
} catch (error) {
  console.log("Alerta: ", error.message);
} finally {
  console.log("🚪 Portas fechadas.");
}

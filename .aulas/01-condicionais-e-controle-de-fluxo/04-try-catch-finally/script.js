let pesoCarga = 500;

try {
  if (typeof pesoCarga !== "number" || Number.isNaN(pesoCarga)) {
    throw new Error("O valor do peso é inválido (não é um número).");
  }

  if (pesoCarga > 450) {
    throw new Error("Peso máximo excedido! O elevador não pode subir.");
  }

  console.log("✅ Elevador liberado. Subindo...");
} catch (error) {
  console.log("⚠️ ALERTA DO SISTEMA: " + error.message);
} finally {
  console.log("🚪 Portas fechadas.");
}

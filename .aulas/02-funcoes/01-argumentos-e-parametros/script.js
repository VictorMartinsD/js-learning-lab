function gerarRelatorio(vendedor = "Vendedor(a) Desconhecido(a)", valorVenda = 0, bonus = 0) {
  try {
    if (typeof vendedor !== "string") {
      throw new Error("O nome do vendedor precisa ser um texto válido.");
    }

    if (
      typeof valorVenda !== "number" ||
      Number.isNaN(valorVenda) ||
      typeof bonus !== "number" ||
      Number.isNaN(bonus)
    ) {
      throw new Error("Os valores de venda ou bônus precisam ser números válidos.");
    }

    let total = valorVenda + bonus;
    console.log("Relatório:", vendedor, "recebeu o total de", total);
  } catch (error) {
    console.log("⚠️ Erro no Relatório:", error.message);
  }
}

gerarRelatorio(200);
gerarRelatorio("Rodrigo", 1000, 200);
gerarRelatorio(true, 100, 10);

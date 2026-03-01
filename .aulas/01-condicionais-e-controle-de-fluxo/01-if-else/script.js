function ativarDispositivo(dispositivo, callback) {
  console.log(`🔄 Acionando: ${dispositivo}...`);
  callback();
}

function confirmacaoSimples() {
  console.log("✅ Dispositivo ativado com sucesso!");
}

ativarDispositivo("Lâmpada", confirmacaoSimples);

ativarDispositivo("Alarme", function () {
  console.log("🚨 Alarme tocando! Atenção!");
});

ativarDispositivo("Câmera", () => console.log("📸 Foto capturada!"));

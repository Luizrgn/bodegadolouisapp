function compartilharApp() {
    // Mensagem que será compartilhada
    const mensagem = "Confira o aplicativo da Bodega do Louis e peça seus pratos favoritos! Baixe o app: [URL_DO_APP]";

    // Alerta com a mensagem de compartilhamento
    alert("Você pode compartilhar o link do app. Clique abaixo para compartilhar no WhatsApp!");

    // Link para compartilhamento no WhatsApp (alterar o URL para o link correto do app)
    const urlWhatsapp = "https://wa.me/?text=" + encodeURIComponent(mensagem);

    // Abrir o link do WhatsApp (em dispositivos móveis, vai abrir o WhatsApp; em desktop, vai abrir a versão web)
    window.open(urlWhatsapp, "_blank");
}

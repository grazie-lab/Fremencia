function responder(alternativa) {
    const resposta = document.getElementById("resposta");

    if (alternativa === "B") {
        resposta.textContent = "✅ Correto! As cigarras são importantes para o equilíbrio dos ecossistemas.";
        resposta.style.color = "#166534";
    } else {
        resposta.textContent = "❌ Não é essa. Tente novamente!";
        resposta.style.color = "#b91c1c";
    }
}
 document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contatoForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const confirmacao = document.getElementById("mensagemConfirmacao");

    if (nome !== "" && email !== "" && mensagem !== "") {
      alert("Sua mensagem foi enviada com sucesso!");
      confirmacao.style.display = "block";
      form.reset(); 
    } else {
      alert("Mensagem enviada.");
      confirmacao.style.display = "none";
    }
  });
});




    const searchInput = document.getElementById("searchInput");
    const catalogos = document.querySelectorAll(".catalogo");

    searchInput.addEventListener("input", function () {
      const termo = searchInput.value.toLowerCase();

      catalogos.forEach(function (catalogo) {
        const titulo = catalogo.getAttribute("data-title").toLowerCase();


        if (titulo.includes(termo)) {
          catalogo.style.display = "block";
        } else {
          catalogo.style.display = "none";
        }
      });
    });
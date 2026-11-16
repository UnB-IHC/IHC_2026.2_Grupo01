/* Dá a cada caixa de marcar dos checklists o nome do item correspondente,
   para que leitores de tela anunciem o que está sendo marcado. */
(function () {
  function rotular() {
    var caixas = document.querySelectorAll(
      ".md-content li.task-list-item input[type='checkbox']"
    );
    caixas.forEach(function (caixa) {
      if (caixa.getAttribute("aria-label") || caixa.getAttribute("aria-labelledby")) {
        return;
      }
      var item = caixa.closest("li");
      if (!item) {
        return;
      }
      var destaque = item.querySelector("strong");
      var texto = (destaque ? destaque.textContent : item.textContent)
        .replace(/\s+/g, " ")
        .trim();
      if (texto) {
        caixa.setAttribute("aria-label", texto);
      }
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(rotular);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rotular);
  } else {
    rotular();
  }
})();

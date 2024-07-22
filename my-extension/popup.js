document.addEventListener("DOMContentLoaded", function () {
  // Carregar tema salvo do localStorage
  restorePredefinedTheme();

  // Carregar dados salvos do localStorage
  restoreData();

  // Cria listeners para eventos
  initializeListeners();
});

function initializeListeners() {
  createListener({
    element: "#toggle-theme",
    event: "click",
    action: toogleTheme
  });

  createListener({
    element: "#calculate-button",
    event: "click",
    action: (e) => {
      e.preventDefault();
      debouncedCalculateHours();
    }
  });

  createListener({
    element: "#reset-button",
    event: "click",
    action: resetForm
  });

  createListener({
    element: "#copy-result",
    event: "click",
    action: copyToClipboard
  });

  createListener({
    element: "#start-counter-button",
    event: "click",
    action: startCounter
  });

  createListener({
    element: "#clear-counter-button",
    event: "click",
    action: clearCounter
  });
}

// As funções auxiliares devem ser incluídas aqui
// Exemplo:
function toogleTheme() {
  const predefinedTheme = getStorageItem("theme");
  if (!predefinedTheme) {
    document.documentElement.setAttribute("data-theme", "dark");
    setStorageItem("theme", "dark");
    getElement("#toggle-theme").setAttribute(
      "data-title",
      APP_CONFIG.ligthThemeLabel
    );
    return;
  }
  document.documentElement.removeAttribute("data-theme");
  getElement("#toggle-theme").setAttribute(
    "data-title",
    APP_CONFIG.darkThemeLabel
  );
  removeStorageItem("theme");
}

// Adicione as outras funções aqui

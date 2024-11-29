function viewCamera(location, image) {
    const panelContent = document.getElementById("panel-content");
    panelContent.innerHTML = `
        <h3>Câmera - ${location}</h3>
        <img src="${image}" alt="Imagem de ${location}" style="width: 100%; border-radius: 8px; margin-top: 10px;">
        <button onclick="closePanel()">Fechar</button>
    `;
}

function toggleLight(element) {
    const location = element.getAttribute("data-location");
    const lightIcon = element.querySelector("span");
    const isOn = lightIcon.textContent === "💡";

    // Troca o estado da luz
    lightIcon.textContent = isOn ? "🔦" : "💡";

    // Atualiza o painel
    const panelContent = document.getElementById("panel-content");
    panelContent.innerHTML = `
        <h3>Luz - ${location}</h3>
        <p>A luz da ${location} foi ${isOn ? "desligada" : "ligada"}.</p>
        <button onclick="closePanel()">Fechar</button>
    `;
}
let temperatures = {}; // Objeto para armazenar temperaturas por local

function controlTemperature(location) {
    // Inicializa a temperatura padrão, se não existir
    if (!(location in temperatures)) {
        temperatures[location] = 22; // Temperatura inicial padrão (22°C)
    }

    const panelContent = document.getElementById("panel-content");
    panelContent.innerHTML = `
        <h3>Controle de Temperatura - ${location}</h3>
        <p>Temperatura atual: <span id="temp-display">${temperatures[location]}</span>°C</p>
        <button onclick="changeTemperature('${location}', -1)">-</button>
        <button onclick="changeTemperature('${location}', 1)">+</button>
        <button onclick="closePanel()">Fechar</button>
    `;
}

function changeTemperature(location, change) {
    // Atualiza a temperatura
    temperatures[location] += change;
    // Atualiza o display
    const tempDisplay = document.getElementById("temp-display");
    if (tempDisplay) {
        tempDisplay.textContent = temperatures[location];
    }
}

function closePanel() {
    const panelContent = document.getElementById("panel-content");
    panelContent.innerHTML = "<p>Selecione um ícone na planta para interagir.</p>";
}

const body = document.querySelector("body");
body.style.fontFamily = 'Inter, sans-serif'; 
body.style.margin = '0';

// Fondo azul oscuro
const main = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.minHeight = "100vh";
// Color de fondo oscuro y la imagen de patrón
main.style.background = "#181a25 url('assets/imgs/Background_image@2x.png') no-repeat center top";
main.style.backgroundSize = '100% auto'; 
main.style.color = "white";
main.style.padding = '80px 20px'; 

// --- Seccion 1: Titulo y descripción ---
const section1 = document.createElement("section");
section1.style.display = "flex";
section1.style.flexDirection = "column";
section1.style.alignItems = "center";
section1.style.marginBottom = '60px'; 

// Título
const h1 = document.createElement("h1");
h1.textContent = "Quality feedbacks for your SaaS products";
h1.style.fontSize = '40px';
h1.style.fontWeight = '700'; 
h1.style.textAlign = 'center';
h1.style.maxWidth = '600px';
h1.style.lineHeight = '1.2';
section1.appendChild(h1);

// Descripción
const description = document.createElement("p");
description.textContent = "The blocks & components you need";
description.style.fontSize = '18px';
description.style.fontWeight = '400';
description.style.color = '#8e96ac';
description.style.marginTop = '10px';
section1.appendChild(description);

main.appendChild(section1);

// --- Sección 2: Cards ---
const section2 = document.createElement("section");
section2.style.display = "flex";
section2.style.flexWrap = "wrap";
section2.style.justifyContent = "center"; 
section2.style.gap = "50px";

// Datos de las Cards dentro de un arreglo
const cardData = [
    {
        icon: '👋', 
        title: "Collect Feedback at Multiple Touchpoints",
        text: "Provide a comprehensive understanding of the customer experience.",
        imgSrc: "assets/imgs/photo_1.png"
    },
    {
        icon: '🗓️', 
        title: "Ask Targeted and Specific Questions",
        text: "Avoid vague or open-ended questions that might not yield actionable insights.",
        imgSrc: "assets/imgs/photo_2.png"
    },
    {
        icon: '📝', 
        title: "Prioritize and Respond to Feedback",
        text: "Communicate the changes or improvements you've made in response to their feedback.",
        imgSrc: "assets/imgs/photo_3.png"
    },
];

// Creación de las Cards usando los datos
cardData.forEach(data => {
    const card = createCard(data);
    section2.appendChild(card);
});

main.appendChild(section2);
body.appendChild(main);

// Función para crear cards
function createCard(data) {
    const card = document.createElement("div");
    card.style.width = "300px"; 
    card.style.backgroundColor = "#1c1f2e";
    card.style.borderRadius = "16px";
    card.style.padding = "30px";
    // Sombra para el efecto de profundidad
    card.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.2)"; 
    card.style.display = "flex";
    card.style.flexDirection = "column";

    // Ícono
    const iconContainer = document.createElement("div");
    iconContainer.textContent = data.icon;
    iconContainer.style.width = '48px';
    iconContainer.style.height = '48px';
    iconContainer.style.borderRadius = '50%';
    iconContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    iconContainer.style.display = 'flex';
    iconContainer.style.justifyContent = 'center';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.fontSize = '24px';
    iconContainer.style.marginBottom = '20px';
    card.appendChild(iconContainer);

    // Título
    const titleElement = document.createElement("h3");
    titleElement.textContent = data.title;
    titleElement.style.fontSize = '20px';
    titleElement.style.fontWeight = '600';
    titleElement.style.color = 'white';
    titleElement.style.marginBottom = '10px';
    card.appendChild(titleElement);

    // Descripción
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = data.text;
    descriptionElement.style.fontSize = '16px';
    descriptionElement.style.color = '#8e96ac'; 
    descriptionElement.style.lineHeight = '1.5';
    descriptionElement.style.marginBottom = '20px';
    card.appendChild(descriptionElement);

    // Imagen
    const image = document.createElement("img");
    image.src = data.imgSrc;
    image.style.width = '100%';
    image.style.height = 'auto';
    image.style.borderRadius = '8px';
    image.style.objectFit = 'cover';
    card.appendChild(image);

    return card;
}


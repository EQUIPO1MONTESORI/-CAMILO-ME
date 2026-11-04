
// Textos en español e inglés
const translations = {
  es: {
    title: "Página de Camilo",
    nav1: "Sobre mí",
    nav2: "Mi proyecto de vida",
    aboutTitle: "Sobre mí",
    aboutText: "Mi nombre es Camilo, tengo 15 años y nací en Ibagué, Colombia. Me gustan mucho los videojuegos porque son una forma divertida de pasar mi tiempo libre y entretenerme. En el futuro quiero ser abogado, ya que me interesa aprender sobre las leyes y ayudar a las personas. Soy una persona con metas y espero poder cumplir mis sueños con esfuerzo y dedicación.",
    projectTitle: "Mi proyecto de vida",
    projectText: "Mi proyecto de vida es ser abogado. Tengo 15 años y quiero empezar desde ahora a esforzarme para cumplir esta meta. Me interesa el Derecho porque quiero defender los derechos de las personas y ayudar a quienes lo necesiten. Para lograrlo, quiero terminar mis estudios, entrar a una universidad y estudiar Derecho. Sé que será un camino que requiere responsabilidad, disciplina y mucho esfuerzo, pero estoy dispuesto a superar las dificultades. En el futuro quiero tener una buena profesión, ayudar a mi familia y ser un abogado honesto y responsable. Mi mayor propósito es cumplir mis sueños y construir un futuro del que pueda sentirme orgulloso.",
    goal1: "1. Terminar el colegio y esforzarme en mis estudios.",
    goal2: "2. Estudiar Derecho en una universidad y graduarme como abogado.",
    goal3: "3. Ejercer la profesión, siendo un abogado responsable, honesto y ayudando a las personas."
  },

  en: {
    title: "Camilo's Page",
    nav1: "About Me",
    nav2: "My Life Project",
    aboutTitle: "About Me",
    aboutText: "My name is Camilo, I am 15 years old and I was born in Ibagué, Colombia. I really like video games because they are a fun way to spend my free time and entertain myself. In the future, I want to become a lawyer because I am interested in learning about laws and helping people. I am a person with goals, and I hope to achieve my dreams with effort and dedication.",
    projectTitle: "My Life Project",
    projectText: "My life project is to become a lawyer. I am 15 years old and I want to start working hard now to achieve this goal. I am interested in Law because I want to defend people's rights and help those who need it. To achieve this, I want to finish my studies, enter a university and study Law. I know it will be a path that requires responsibility, discipline and a lot of effort, but I am willing to overcome difficulties. In the future, I want to have a good profession, help my family and become an honest and responsible lawyer. My greatest purpose is to achieve my dreams and build a future I can be proud of.",
    goal1: "1. Finish school and work hard on my studies.",
    goal2: "2. Study Law at a university and graduate as a lawyer.",
    goal3: "3. Practice my profession, being a responsible and honest lawyer and helping people."
  }
};

// Función para cambiar el idioma
function changeLanguage(language) {

  // Cambiar todos los textos
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[language][key];
  });

  // Cambiar el idioma del documento
  document.documentElement.lang = language;

  // Cambiar el título de la pestaña
  document.title = language === "es"
    ? "Camilo Melgarejo"
    : "Camilo Melgarejo";

  // Marcar el botón seleccionado
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.classList.toggle(
      "active",
      button.getAttribute("data-lang") === language
    );
  });
}

// Detectar los clics de los botones
document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    const language = button.getAttribute("data-lang");
    changeLanguage(language);
  });
});

// Idioma inicial
changeLanguage("es");


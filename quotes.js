// Lista de frases
const quotes = [
    '"La mejor forma de predecir el futuro es crearlo." – Peter Drucker',
    '"Cree que puedes y ya estás a mitad de camino." – Theodore Roosevelt',
    '"No cuentes los días, haz que los días cuenten." – Muhammad Ali',
    '"La vida es 10% lo que me ocurre y 90% cómo reacciono a ello." – Charles Swindoll',
    '"El único modo de hacer un gran trabajo es amar lo que haces." – Steve Jobs',
    '"Tu tiempo es limitado. No lo desperdicies viviendo la vida de alguien más." – Steve Jobs'
];

// Elegir una frase del día según la fecha
const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const quoteOfDay = quotes[dayOfYear % quotes.length];

// Mostrar frase
const quoteElement = document.getElementById("daily-quote");
quoteElement.innerText = quoteOfDay;

// Preparar texto para compartir
const encodedQuote = encodeURIComponent(quoteOfDay);
const siteURL = encodeURIComponent("https://evolvivo.com");

// Generar enlaces de compartir
document.getElementById("share-twitter").href =
    `https://twitter.com/intent/tweet?text=${encodedQuote}`;
document.getElementById("share-facebook").href =
    `https://www.facebook.com/sharer/sharer.php?u=${siteURL}`;
document.getElementById("share-linkedin").href =
    `https://www.linkedin.com/sharing/share-offsite/?url=${siteURL}`;
document.getElementById("share-whatsapp").href =
    `https://api.whatsapp.com/send?text=${encodedQuote}%20${siteURL}`;

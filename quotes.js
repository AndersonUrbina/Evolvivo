// Lista de frases con formato { quote, author }
const inspirationalQuotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { quote: "The mind is everything. What you think you become.", author: "Buddha" },
        { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        // ... (the rest of your quotes)
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" }
];

// Elementos donde se mostrará la frase
const quoteElement = document.getElementById("daily-quote");
const attributionElement = document.getElementById("quote-author");

// Función para obtener el día del año (1-366)
function getDayOfYear(date = new Date()) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Muestra la frase del día y configura los enlaces para compartir.
function setDailyInspiration() {
    if (!quoteElement || !attributionElement) {
        console.error("Quote display elements not found in the DOM.");
        return;
    }

    if (inspirationalQuotes.length === 0) {
        quoteElement.textContent = "No inspirational quotes available today.";
        attributionElement.textContent = "";
        return;
    }

    const dayOfYear = getDayOfYear();
    const quoteIndex = (dayOfYear - 1) % inspirationalQuotes.length;
    const selectedQuote = inspirationalQuotes[quoteIndex];

    quoteElement.textContent = `"${selectedQuote.quote}"`;
    attributionElement.textContent = `— ${selectedQuote.author}`;

    // --- FIX: Correctly prepare sharing links ---
    
    // The text to be shared. Includes the quote and author.
    const shareText = `"${selectedQuote.quote}" — ${selectedQuote.author}`;
    const encodedShareText = encodeURIComponent(shareText);
    
    // The URL of your website to be included in the share.
    const siteURL = "https://evolvivo.com";
    const encodedSiteURL = encodeURIComponent(siteURL);

    // --- Find each button and set its href attribute safely ---
    const shareTwitter = document.getElementById("share-twitter");
    if (shareTwitter) {
        // Twitter shares both text and a URL separately.
        shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedSiteURL}`;
    }

    const shareFacebook = document.getElementById("share-facebook");
    if (shareFacebook) {
        // Facebook's basic sharer primarily shares a URL. It will pull the title and image from that URL's metadata.
        // The `quote` parameter can sometimes pre-fill the text, but it's not officially supported on all platforms.
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedSiteURL}"e=${encodedShareText}`;
    }

    const shareLinkedin = document.getElementById("share-linkedin");
    if (shareLinkedin) {
        // LinkedIn ONLY shares a URL. It does not allow pre-filled text via URL parameters.
        shareLinkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedSiteURL}`;
    }

    const shareWhatsapp = document.getElementById("share-whatsapp");
    if (shareWhatsapp) {
        // WhatsApp combines the text and the URL into a single message.
        const whatsappText = encodeURIComponent(`${shareText} \n\nRead more at: ${siteURL}`);
        shareWhatsapp.href = `https://api.whatsapp.com/send?text=${whatsappText}`;
    }
}

// Ejecuta la función cuando el DOM esté completamente cargado.
document.addEventListener("DOMContentLoaded", setDailyInspiration);

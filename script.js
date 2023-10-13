
const intro = document.getElementsByClassName('left');
// Dynamic Date and Time
function updateDateTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZoneName: 'short' };
    const now = new Date();
    const dateTime = now.toLocaleDateString('en-US', options);
    document.getElementById("date-time").textContent = dateTime;
    document.getElementById("date-time-submenu").textContent = dateTime;
}

setInterval(updateDateTime, 1000);

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileSubmenu = document.querySelector(".mobile-submenu");

mobileMenuToggle.addEventListener("click", () => {
    mobileSubmenu.style.display = mobileSubmenu.style.display === "none" ? "flex" : "none";
    screenLeft.style.display=none;
}); 

// Array of coding quotes to display with typing effect
const codingQuotes = [
    "Write code, drink coffee, repeat.",
    "Coding is poetry in motion.",
    "Frontend development: Where the magic happens.",
    "The best error message is the one that never shows up.",
    "Design is not just what it looks like, but how it works.",
    "Code like you're going to war, but debug like you're at a party.",
];

const codingQuotesElement = document.getElementById("coding-quotes");
let currentIndex = 0;

function typeCodingQuote() {
    const currentQuote = codingQuotes[currentIndex];
    let charIndex = 0;
    const typingEffect = setInterval(() => {
        if (charIndex <= currentQuote.length) {
            codingQuotesElement.textContent = currentQuote.slice(0, charIndex);
            charIndex++;
        } else {
            clearInterval(typingEffect);
            setTimeout(() => {
                eraseCodingQuote();
            }, 2000);
        }
    }, 100);
}

function eraseCodingQuote() {
    let charIndex = codingQuotesElement.textContent.length;
    const erasingEffect = setInterval(() => {
        if (charIndex >= 0) {
            codingQuotesElement.textContent = codingQuotesElement.textContent.slice(0, charIndex);
            charIndex--;
        } else {
            clearInterval(erasingEffect);
            currentIndex = (currentIndex + 1) % codingQuotes.length;
            setTimeout(() => {
                typeCodingQuote();
            }, 1000);
        }
    }, 50);
}

// Start typing the first coding quote
typeCodingQuote();

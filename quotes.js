const quotes = [
    "All we have to decide is what to do with the time that is given to us. - Gandalf",
    "Not all those who wander are lost. - J.R.R. Tolkien",
    "A wizard is never late, nor is he early, he arrives precisely when he means to. -Gandalf",
    "Even the smallest person can change the course of the future. - Galadriel",
    "There is some good in this world, and it's worth fighting for. - Samwise Gamgee",
    "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to give out death in judgement. For even the very wise cannot see all ends. - Gandalf"
];

let quoteIndex = 0;
const quoteText = document.getElementById("quote-text");

function showNextQuote() {
    quoteText.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}

setInterval(showNextQuote, 5000);
showNextQuote();
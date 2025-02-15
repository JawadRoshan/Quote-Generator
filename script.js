const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "You become what you believe.", author: "Oprah Winfrey" },
    { text: "I didn't fail the test. I just found 100 ways to do it wrong.", author: "Benjamin Franklin" },
    { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Love the life you live. Live the life you love", author: "Bob Marley" },
    { text: "I failed my way to success.", author: "Thomas Edison" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.querySelector('.quote-box');
    document.getElementById('quote').innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById('author').innerText = `- ${quotes[randomIndex].author}`;

    // Add fade-in animation
    quoteBox.classList.remove('fade-in');
    void quoteBox.offsetWidth; // Trigger reflow to restart animation
    quoteBox.classList.add('fade-in');
}

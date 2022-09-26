const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
const GenQuote = document.getElementById("generate");


function generateQuote() { 
fetch("https://type.fit/api/quotes")
.then(response => response.json())
.then(data => {
    const selectedObject = data[Math.floor(Math.random() * data.length)];
    Quote.textContent =`"${selectedObject.text}"`;
    Author.textContent =`-- ${selectedObject.author}`;
})};

GenQuote.addEventListener("click", () => {
    generateQuote()
});







 
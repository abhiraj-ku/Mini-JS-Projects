const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa"
    }
  ];
  
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote');
  
  newQuoteBtn.addEventListener('click', getQuote);
  
  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quote.textContent = randomQuote.quote;
    author.textContent = randomQuote.author;
  }
  
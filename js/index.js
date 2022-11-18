let myQuotes = [
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote:
      "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote: "Only the paranoid survive.",
    author: "Andy Grove",
  },
  {
    quote: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
];

let quote = document.querySelector("strong");
let author = document.querySelector(".author");

let RefreshBtn = document.querySelector("button");
const getRandomQuote = () => {
  let random = Math.floor(Math.random() * 6);
  quote.innerHTML = `${myQuotes[random].quote} <i class="fa-solid fa-quote-right"></i>`;
  author.innerHTML = myQuotes[random].author;
};

window.addEventListener("onload", getRandomQuote());

RefreshBtn.addEventListener("click", getRandomQuote);

console.log(quote);

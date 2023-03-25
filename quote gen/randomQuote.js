const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector("button");

function makeHttpRequest(method, url, Callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    // console.log(xhr.response.users[2]);
    Callback(xhr.response);
  });
  xhr.open(method, url);
  xhr.send();
}

button.addEventListener("click", () => {
  makeHttpRequest("GET", "https://dummyjson.com/quotes", (data) => {
    // console.log(data);

    const random = Math.floor(Math.random() * 31);
    console.log(random);
    quote.innerText = data.quotes[random].quote;
    console.log(quote.innerText);
    author.innerText = data.quotes[random].author;
    console.log(author.innerText);
  });
});

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1

  let Header = document.querySelector("#main-title");
  Header.innerText = "Welcome!! I am DOM Toretto";

  // // Part 2

  let body = document.querySelector("body");

  body.style.backgroundColor = "lightBlue";

  // Part 3
  let fav = document.querySelector("#favorite-things");
  fav.removeChild(fav.lastElementChild);

  // Part 4
  let speTi = document.querySelectorAll(".special-title");
  //speTi.style.fontSize = "2rem";
  for (let i of speTi) {
    i.style.fontSize = "2rem";
  }
  console.log(speTi);

  // Part 5

  let pastR = document.querySelector("#past-races");
  for (let i of pastR.childNodes) {
    if (i.textContent === "Chicago") {
      i.remove();
    }
  }

  // Part 6

  let den = document.createElement("li");
  den.innerText = "Denver";
  pastR.appendChild(den);

  // Part 7

  const mainDiv = document.querySelector(".main");
  let denBlog = document.createElement("div");
  denBlog.setAttribute("class", "blog-post purple");
  console.log(denBlog);
  denBlog.classList.add("purple");
  denBlog.innerHTML = `<h1>${den.innerText}</h1>
  <p>The Mile High City!</p>`;
  mainDiv.appendChild(denBlog);

  // Part 8

  const ranQ = document.querySelector("#quote-title");
  ranQ.addEventListener("Click", (handleClick) => {
    randomQuote();
  });

  // Part 9

  const allBlogs = document.querySelectorAll(".blog-post");

  for (const i of allBlogs) {
    for (let j of i.children) {
      j.style.pointerEvents = "none";
    }
    i.addEventListener("mouseout", (event) => {
      event.target.classList.toggle("purple");
      event.target.classList.toggle("red");
    });
    i.addEventListener("mouseenter", (event) => {
      event.target.classList.toggle("red");
      event.target.classList.toggle("purple");
    });
  }
});


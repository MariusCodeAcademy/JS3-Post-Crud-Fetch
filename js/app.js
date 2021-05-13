"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";

// nuorodos
const postsContainer = document.querySelector(".post-container");

Api.getPosts(10, function (postsArr) {
  console.log(postsArr);
  generatePosts(postsArr);
});

function generatePosts(postArrData) {
  postsContainer.innerHTML = null;
  postArrData.forEach((postObj) => {
    // generuojam viena el
    const cardEl = document.createElement("article");
    cardEl.className = "card";
    cardEl.innerHTML = `
    <img src="https://picsum.photos/seed/abrakadabra/300/200" class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    postsContainer.append(cardEl);
    // vieno el generacijos pabaiga
  });
}

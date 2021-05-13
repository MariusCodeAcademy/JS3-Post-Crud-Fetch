"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";
import Post from "./class/Posts.js";
import { loadNav } from "./functions.js";

loadNav();

// nuorodos
export const postsContainer = document.querySelector(".post-container");
let pirmasP;
console.log("postsContainer", postsContainer);

if (postsContainer) {
  Api.getPosts(10, function (postsArr) {
    postsContainer.innerHTML = null;
    console.log(postsArr);
    postsArr.forEach((postObj) => new Post(postsContainer, postObj));
  });
}

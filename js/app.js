"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";
import generatePosts from "./class/Posts.js";

// nuorodos
export const postsContainer = document.querySelector(".post-container");

Api.getPosts(10, function (postsArr) {
  console.log(postsArr);
  generatePosts(postsArr);
});

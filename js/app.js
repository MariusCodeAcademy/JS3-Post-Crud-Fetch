"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";
import Post from "./class/Posts.js";
import { loadNav } from "./functions.js";

loadNav();

// nuorodos
const postsContainer = document.querySelector(".post-container");
const singlePostsPage = document.querySelector(".single-posts-page");

if (postsContainer) {
  console.log("Posts page");

  Api.getPosts(10, function (postsArr) {
    postsContainer.innerHTML = null;
    console.log(postsArr);
    postsArr.forEach((postObj) => new Post(postsContainer, postObj));
  });
}

if (singlePostsPage) {
  console.log("sigle post page");
  // gaunam GET paramerta is URL nuorodos
  /// "singlePost.html?postId=4"
  const urlParams = new URLSearchParams(window.location.search);
  const postIdFromGet = urlParams.get("postId");
  console.log(postIdFromGet);

  // gauti post kurio id yra postIdFromGet

  // gavus uzpildyti title ir body info siame puslapyje
}

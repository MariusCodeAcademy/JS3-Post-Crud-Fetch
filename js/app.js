"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";
import Post from "./class/Posts.js";
import { loadNav } from "./functions.js";

loadNav();

// nuorodos
const postsContainer = document.querySelector(".post-container");
const singlePostsPage = document.querySelector(".single-posts-page");
const addPostPage = document.querySelector(".add-posts-page");

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

  // nuorodos
  const cardEl = document.querySelector(".card");
  const imgEl = cardEl.querySelector("img");
  const titleEl = cardEl.querySelector(".card-title");
  const pEl = cardEl.querySelector(".card-text");

  // gaunam GET paramerta is URL nuorodos
  /// "singlePost.html?postId=4"
  const urlParams = new URLSearchParams(window.location.search);
  const postIdFromGet = urlParams.get("postId");
  console.log(postIdFromGet);

  // gauti post kurio id yra postIdFromGet
  // padaryti fetch i "https://jsonplaceholder.typicode.com/posts/id"
  // fetch("https://jsonplaceholder.typicode.com/posts/" + postIdFromGet)
  //   .then((resp) => resp.json())
  //   .then((userObj) => {
  //     console.log(userObj);
  //     titleEl.textContent = userObj.title;
  //     pEl.textContent = userObj.body;
  //     imgEl.src = `https://picsum.photos/seed/${userObj.id}/1000/500`;
  //   })
  //   .catch((err) => console.error(err));

  Api.getSinglePost(postIdFromGet, (userObj) => {
    titleEl.textContent = userObj.title;
    pEl.textContent = userObj.body;
    imgEl.src = `https://picsum.photos/seed/${userObj.id}/1000/500`;
  });

  // gavus uzpildyti title ir body ir img info siame puslapyje
}

if (addPostPage) {
  console.log("we are on add post page, right?");
}

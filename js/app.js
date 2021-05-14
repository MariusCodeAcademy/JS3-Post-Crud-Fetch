"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";
import Post from "./class/Posts.js";
import { loadNav } from "./functions.js";

loadNav();

// nuorodos
const postsContainer = document.querySelector(".post-container");
const singlePostsPage = document.querySelector(".single-posts-page");
console.log("singlePostsPage", singlePostsPage);

const addPostPage = document.querySelector(".add-posts-page");

Api.getWeaterData();

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
} //singlePostsPage Pabaiga

if (addPostPage) {
  console.log("we are on add post page, right?");
  const formEl = document.getElementById("add-post-form");
  const formPartEl = document.querySelector(".form-part");
  const formSuccessEl = document.querySelector(".form-success");
  const titleEl = document.getElementById("title");
  const bodyEl = document.getElementById("body");
  const restartFormBtn = document.querySelector(".another-post-btn");

  restartFormBtn.addEventListener("click", handleFormSent);

  function handleFormSent() {
    formPartEl.classList.toggle("d-none");
    formSuccessEl.classList.toggle("d-none");
  }

  formEl.addEventListener("submit", (event) => {
    // sustabdom forma nuo puslapio perkrovimo
    event.preventDefault();
    console.log("issiusta");
    // gauti ivesties lauku reiksmes // jas isloginti kai forma yra submitinama
    // console.log(bodyEl.value);
    // console.log(titleEl.value);
    // suformuoti reiksmes objekto pavidalu
    const postToCreateData = {
      title: titleEl.value,
      body: bodyEl.value,
      userId: 1,
    };
    // console.log("naujas el irasymui ", postToCreateData);
    Api.sendPost(postToCreateData, handleFormSent);
    titleEl.value = "";
    bodyEl.value = "";
  });
}

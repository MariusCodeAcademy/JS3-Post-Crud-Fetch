"use strict"; // here we go again
console.log("app.js");

import Api from "./class/Api.js";

Api.getPosts(10, function (postsArr) {
  console.log(postsArr);
  generatePosts(postsArr);
});

function generatePosts(postArrData) {}

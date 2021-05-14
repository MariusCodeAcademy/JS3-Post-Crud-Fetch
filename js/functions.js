// load same nav to all pages
export function loadNav() {
  fetch("../html/nav.html")
    .then((resp) => resp.text())
    .then((nav) => document.body.insertAdjacentHTML("afterbegin", nav))
    .catch((err) => console.warn(err));
}

// gaunam GET paramerta is URL nuorodos
/// http://127.0.0.1:5500/pages/singlePost.html?postId=1
export function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const postIdFromGet = urlParams.get("postId");
  return postIdFromGet;
}

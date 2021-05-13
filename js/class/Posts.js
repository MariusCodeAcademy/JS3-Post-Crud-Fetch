import { postsContainer } from "../app.js";
export default function generatePosts(postArrData) {
  postsContainer.innerHTML = null;
  postArrData.forEach((postObj) => {
    // generuojam viena el
    const cardEl = document.createElement("article");
    cardEl.className = "card";
    cardEl.innerHTML = `
      <img src="https://picsum.photos/seed/${postObj.id}/300/200" class="card-img-top" alt="..." />
      <div class="card-body">
          <h5 class="card-title">${postObj.title}</h5>
          <p class="card-text">
                  ${postObj.body}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      `;
    postsContainer.append(cardEl);
    // vieno el generacijos pabaiga
  });
}

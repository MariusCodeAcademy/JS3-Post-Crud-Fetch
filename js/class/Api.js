export default class Api {
  static postUrl = "https://jsonplaceholder.typicode.com/";

  static getPosts(howMany, successCallback) {
    fetch(Api.postUrl + "posts")
      .then((resp) => resp.json())
      .then((data) => successCallback(data.slice(0, howMany)))
      .catch((err) => console.warn(err));
  }

  static getSinglePost(id, successCallback) {
    fetch(Api.postUrl + "posts/" + id)
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => console.warn(err));
  }
}

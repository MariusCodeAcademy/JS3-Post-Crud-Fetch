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

  static sendPost(objToBeSent, successCallback) {
    fetch(Api.postUrl + "posts", {
      method: "POST",
      body: JSON.stringify(objToBeSent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        successCallback(data);
      })
      .catch((err) => console.log(err));
  }
}

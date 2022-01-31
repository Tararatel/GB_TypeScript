import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
// import { renderToast } from "./lib.js";
import { searchHandler } from "./search-form-data.js";
import { getTodosByCount } from "./lesson3.js";

localStorage.setItem("user", "");
localStorage.setItem("favoritesAmount", "6");

localStorage["user"] = JSON.stringify({
  userName: "БОрис",
  userAvatar: "/img/avatar.png",
});

interface User {
  userName: string;
  userAvatar: string;
}

const getData = (parametr: string): string | null => {
  return localStorage.getItem(parametr);
};

function instanceOfUser(object: any): object is User {
  return "userName" in object && "userAvatar" in object;
}

function getUserData(): User {
  const checkData = getData("user");
  if (checkData !== null) {
    const data: unknown = JSON.parse(checkData);
    if (instanceOfUser(data)) {
      return data;
    } else {
      return { userName: "", userAvatar: "" };
    }
  }
  return { userName: "", userAvatar: "" };
}

function getFavoritesAmount(): number {
  let favorite: unknown = localStorage.getItem("favoritesAmount");
  return Number(favorite);
}

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock(
    getUserData().userName,
    getUserData().userAvatar,
    getFavoritesAmount()
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  searchHandler();
  getTodosByCount(3);
  // renderToast(
  //     {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //     {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
});

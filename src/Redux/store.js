import { createStore } from "redux";

const authState = {
  data: {
    name: "Rey",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
};

//wajib dalam bentuk function (disebut namanya reducer) sebagai terminal untuk memasukan state ke dalam store
const authReducer = (state = authState) => {
  return state;
};

export const store = createStore(authReducer);

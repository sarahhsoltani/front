import axios from "axios";

const Api = axios.create({ baseURL:"http://localhost:5000"});

//getFood
 export function getAllMenu() {
    return Api.get("/project/getFood")
}
//addFood
export function addMenu(name,price) {
    return Api.post("/project/addFood",{name,price})
}
//deleteMenu
export function deleteMenus(id) {
    return Api.delete(`/project/deleteFood/${id}`);
  }

  //update Menu 

  export function updateMenus(id) {
    return Api.put(`/project/updateFood/${id}`);
  }
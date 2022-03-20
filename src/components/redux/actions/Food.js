import {getAllMenu,addMenu,deleteMenus} from "../../../services/api"
import { GET_MENU ,ADD_MENU,DELETE_MENU,UPDATE_MENU} from "./type";
import axios from "axios"
//getFood
export const getFoodApi=()=> async(dispatch)=>{
    try{
const res=await getAllMenu();
dispatch({
    type:GET_MENU,
    payload:res.data
})
    }
    catch(error){
    console.log(error)
    }
}
//AddFood
export const addMenuApi=(name,price)=> async (dispatch) =>{
    
    try {
    const res=await addMenu(name,price);
    dispatch({
        type:ADD_MENU,
        payload:res.data
    })
 
}
catch(error){
console.log(error)
}
}
export const deleteMenu = (id)=> async (dispatch) => {
    try {
      await deleteMenus (id);
      dispatch({
        type:DELETE_MENU,
        payload:id
    })
      console.log("delete")
      dispatch(getFoodApi);
    } catch (error) {
      console.log(error);
    }
  };
// update Menu
export const updateMenu = (name,price,id ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5000/project/updateFood/${id}`,{name,price }) 
       
      dispatch({
        type: UPDATE_MENU,    
        payload: res.data
      });
      console.log("suuuperrr")
    } catch (error) {
      console.log(error);
    }
  };
//   -----------------------

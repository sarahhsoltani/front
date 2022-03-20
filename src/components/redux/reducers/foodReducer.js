
import { ADD_MENU, GET_MENU,UPDATE_MENU,DELETE_MENU} from "../actions/type";
const initialState={
    tab: [],
}
const foodReducer =(state = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case GET_MENU:
return{
    ...state,
    tab:payload,
}

case ADD_MENU:
    return {
        ...state,
        tab:[...state.tab, payload]
    }
case DELETE_MENU:
      return {
        ...state,
        tab: state.tab.filter(
          el => el._id !== payload
        )
      };
      case UPDATE_MENU:
        return {
          ...state,
          
          tab: state.tab.map(el =>el._id === payload._id ? payload : el)
        };
    }
    return state
}

export default foodReducer
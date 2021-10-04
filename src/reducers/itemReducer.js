import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload)
      }
    case REMOVE_FROM_CART:
      //TODO
      return {
        ...state,
        cartItems: state.cartItems.filter(el => el.itemId !== action.payload.itemId)
      }
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO
      return {
        ...state,
        cartItems: state.cartItems.map(el => {
          if(el.itemId === action.payload.itemId) {
            // el.itemId = action.payload.itemId;
            el.quantity = action.payload.quantity;
          } else {
          }
          return el;
        })
      }
      // return state.cartItems.map(el => 
      //   el.itemId === action.payload.itemId
      //     ? {cartItems: {...state.cartItems, ...el.quantity = action.payload.quantity}}
      //     : {...state.cartItems}
      //   )
    default:
      return state;
  }
}

export default itemReducer;
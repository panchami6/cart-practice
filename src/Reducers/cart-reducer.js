export const CartReducer = (state, action) => {
    switch(action.type){
        case "GET_DATA":
            return {
                ...state, 
                data: action.payload
            }
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        case "INCREASE_QUANTITY":
            return{
                ...state,
                cart: state.cart.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity+1}: product)
            }

        case "DECREASE_QUANTITY":
            return{
                ...state,
                cart: state.cart.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity-1}: product)
            }
        case "SAVE_FOR_LATER":
            return{
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
                saved: [...state.saved, action.payload]
                }
        case "REMOVE_FROM_SAVED":
            return{
                ...state,
                saved: state.saved.filter(product => product.id !== action.payload.id)
                }

        case "MOVE_TO_CART":
            return{
                ...state,
                saved: state.saved.filter(product => product.id !== action.payload.id),
                cart:[...state.cart, action.payload]
                }
        default: return state;
    }
}


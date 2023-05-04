import { useContext, useReducer } from "react";
import { createContext } from "react"
import { act } from "react-dom/test-utils";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];
        default:
            return console.log("Something went wrong!!!");
    }
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )

}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
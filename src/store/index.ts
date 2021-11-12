import { createStore } from "redux";

// state
const initState = {
    nowCategoryRoute: '',
    buyData: [],
};
export const actionType = {
    ADD_BUYDATA: "ADD_BUYDATA",
    CHANGE_CATEGORYROUTE: "CHANGE_CATEGORYROUTE"
}
export type TAction = {
    value:unknown,
    type :keyof typeof actionType 
}
const reducer = (state = initState, action: TAction): typeof initState => {
    switch (action.type) {
        case actionType.CHANGE_CATEGORYROUTE: {
            return {
                ...state,
                nowCategoryRoute: action.value as string
            };
        }
        default:
            return state;
    }
};
export const store = createStore(reducer)
export type TState = typeof initState
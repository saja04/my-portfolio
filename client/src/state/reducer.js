import { TEST } from "./actions";

let initialState = {
    user: {name: 'test-user'}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;
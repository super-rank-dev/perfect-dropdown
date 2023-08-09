import { ErrorState } from "../../models/error.model";
import { FETCH_DATA_FAILURE } from "../types";

const initialState: ErrorState = {
    error: null
};

const errorReducer = (state = initialState, action: any): ErrorState => {
    switch (action.type) {
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default errorReducer;
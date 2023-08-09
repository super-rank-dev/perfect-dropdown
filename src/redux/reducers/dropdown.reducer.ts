import { DropdownState } from "../../models/dropdown.model";
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DropdownActionTypes,
    CHOOSE_DATA,
} from "../types";

const initialState: DropdownState = {
    data: [],
    loading: false,
    focusId: ''
};

const dataReducer = (state = initialState, action: DropdownActionTypes): DropdownState => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false
            };
        case CHOOSE_DATA:
            return {
                ...state,
                focusId: action.payload
            }
        default:
            return state;
    }
};

export default dataReducer;
import { Dispatch } from 'redux';
import { SERVER_ADDRESS } from '../../config/key';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    CHOOSE_DATA,
    DropdownActionTypes
} from '../types';

export const fetchData = (): any => async (dispatch: Dispatch<DropdownActionTypes>) => {

    dispatch({ type: FETCH_DATA_REQUEST });

    try {
        const response = await fetch(SERVER_ADDRESS);
        const data = await response.json();
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data
        });
        dispatch(chooseData(data[0].id));
    } catch (error: any) {
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: error.message
        });
    }
}

export const chooseData = (dataId: string): any => async (dispatch: Dispatch<DropdownActionTypes>) => {
    dispatch({
        type: CHOOSE_DATA,
        payload: dataId
    });
}
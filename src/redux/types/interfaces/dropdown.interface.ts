import { Data } from '../../../models/data.model';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    CHOOSE_DATA
} from '../constants';

interface FetchDataRequestAction {
    type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: Data[];
}

interface FetchDataFailureAction {
    type: typeof FETCH_DATA_FAILURE;
    payload: string;
}

interface ChooseDataAction {
    type: typeof CHOOSE_DATA;
    payload: string;
}

export type DropdownActionTypes =
    | FetchDataRequestAction
    | FetchDataSuccessAction
    | FetchDataFailureAction
    | ChooseDataAction;
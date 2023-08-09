import { combineReducers } from 'redux';
import errorReducer from './error.reducer';
import dropdownReducer from './dropdown.reducer';
import { DropdownState } from '../../models/dropdown.model';
import { ErrorState } from '../../models/error.model';

export interface RootState {
    dropdown: DropdownState,
    error: ErrorState
}

const rootReducer = combineReducers<RootState>({
    dropdown: dropdownReducer,
    error: errorReducer
});

export default rootReducer;
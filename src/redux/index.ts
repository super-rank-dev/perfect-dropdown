import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './reducers';

const initialState: any = {};

const middleware: ThunkMiddleware<RootState>[] = [thunk];

const store: Store<RootState> = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
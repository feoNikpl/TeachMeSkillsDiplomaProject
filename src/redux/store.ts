import { createStore, combineReducers, applyMiddleware } from "redux";
import { postsReducer, uiReducer } from './reducers';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watcherPosts} from './action-creators';

const middleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherPosts(),
    ])
}

const store = createStore(combineReducers({
    posts: postsReducer,
    ui: uiReducer
}), {}, applyMiddleware(middleware));

middleware.run(rootSaga);

export {
    store
}
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import videoReducer from './feature/videoSlice';
import toggleReducer from './feature/toggleSlice'
import rootSaga from './rootSaga';
import authReducer from "./feature/authSlice";
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        video: videoReducer,
        toggle: toggleReducer,
        auth:authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store;
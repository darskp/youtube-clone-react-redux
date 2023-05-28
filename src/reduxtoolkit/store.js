import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import videoReducer from './feature/videoSlice';
import rootSaga from './rootSaga';
const sagaMiddleware=createSagaMiddleware()
const store=configureStore({
    reducer:{
    video:videoReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store;
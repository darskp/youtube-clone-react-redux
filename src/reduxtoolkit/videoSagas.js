import { takeLatest, put, fork, call } from 'redux-saga/effects';
import { getVideos, setVideos } from './feature/videoSlice';
import axios from 'axios';

const API_ENDPOINT = `https://youtube138.p.rapidapi.com`;
const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YT_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

function* onLoadVideoAsync({ payload }) {
    try {
        const videoName = payload;
        const response = yield call(axios.get,`${API_ENDPOINT}/search/?q=${videoName}`, options);
        if (response.status == 200) {
            yield put(setVideos({ ...response.data }))
        }
    } catch (error) {
        console.log(error);

    }
}

function* onLoadVideos() {
    yield takeLatest(getVideos.type, onLoadVideoAsync)
}

export const videosSagas = [fork(onLoadVideos)]
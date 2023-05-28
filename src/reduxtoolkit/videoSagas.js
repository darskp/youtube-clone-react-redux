import { takeLatest, put, fork, call,delay } from 'redux-saga/effects';
import { getVideos, setVideos } from './feature/videoSlice';
import axios from 'axios';

//rapidAPI
const API_ENDPOINT = `https://youtube138.p.rapidapi.com`;
const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_YT_RAPIDAPI_KEY,
        'X-RapidAPI-Key': '245f78cf12msh9102a5a16230fecp1acaa2jsn2fb26133f161',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

let key='AIzaSyBiFOSouTRUac87VhQi6JL7zkygwP_up20';
// let key=process.env.REACT_YT_RESPONSE_API_KEY;

function* onLoadVideoAsync({ payload }) {
    yield delay(800);
    try {
        const response = yield call(axios.get,`${API_ENDPOINT}/search/?q=${payload}`, options);

        // const response = yield call(axios.get,`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${payload}&key=${key} `);
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
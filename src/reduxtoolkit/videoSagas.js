import { takeLatest, put, fork, call, delay } from 'redux-saga/effects';
import { getVideos, setError, setVideos } from './feature/videoSlice';
import axios from 'axios';

//rapidAPI
const API_ENDPOINT = `https://youtube138.p.rapidapi.com`;
const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },

    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YT_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

let key = process.env.REACT_APP_YT_RESPONSE_API_KEY;

function* onLoadVideoAsync({ payload }) {
    let searchQuery = payload;
    if (!searchQuery) {
      const randomQueryList = ['cats', 'dogs', 'nature', 'music','react','java','Mysore','India','USPC','Peace','Men','kannada cinema']; 
      const randomIndex = Math.floor(Math.random() * randomQueryList.length);
      searchQuery = randomQueryList[randomIndex];
    }
    yield delay(100);
    try {
        const response = yield call(axios.get, `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${key} `);
        if (response.status == 200) {
            const videos = {
                items: response.data.items,
                nextPageToken: response.data.nextPageToken,
            };
            yield put(setVideos(videos));
        }
        yield put(getVideos(''));
    } catch (error) {
        console.log(error);
        yield put(setError(error.message || "Something went wrong!"));
    }
}


function* onLoadMoreVideoAsync({ payload, nextPageToken }) {
    try {
        const response = yield call(axios.get,'https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: key,
                q: payload,
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                pageToken: nextPageToken
            },
        });
        if (response.status == 200) {
            const newVideos = {
                items: response.data.items,
                nextPageToken: response.data.nextPageToken
            }
            yield put(setVideos(newVideos))
        }
            yield put(getVideos(''));

    }
    catch (error) {
        console.log(error);
        yield put(setError(error.message || "Failed to load more videos"));
    }
}
export function* watchGetVideos() {
    yield takeLatest(getVideos.type, onLoadVideoAsync);
}
function* onLoadVideos() {
    yield takeLatest(getVideos.type, onLoadMoreVideoAsync);
}

export const videosSagas = [fork(onLoadVideos), fork(watchGetVideos)];




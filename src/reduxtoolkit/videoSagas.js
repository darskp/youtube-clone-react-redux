import { takeLatest, put, fork, call, delay } from 'redux-saga/effects';
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

// let key = 'AIzaSyBiFOSouTRUac87VhQi6JL7zkygwP_up20';
// let key='AIzaSyBj8qLX-Z8fVe5JkpYUxqzSJk8u5mYQNWI';
// let key=process.env.REACT_YT_RESPONSE_API_KEY;

function* onLoadVideoAsync({ payload }) {
    let searchQuery = payload;
    if (!searchQuery) {
      // Generate random search query if no query is provided
      const randomQueryList = ['cats', 'dogs', 'nature', 'music']; // Add more random queries as needed
      const randomIndex = Math.floor(Math.random() * randomQueryList.length);
      searchQuery = randomQueryList[randomIndex];
    }
    yield delay(800);
    try {
        const response = yield call(axios.get,`${API_ENDPOINT}/search/?q=${payload}`, options);
        // const response = yield call(axios.get, `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${key} `);
        if (response.status == 200) {
            const videos = {
                items: response.data.items,
                nextPageToken: response.data.nextPageToken,
            };
            yield put(setVideos(videos));
        }
    } catch (error) {
        console.log(error);
    }
}


function* onLoadMoreVideoAsync({ payload, nextPageToken }) {
    try {
        // const response = yield call(axios.get,'https://www.googleapis.com/youtube/v3/search', {
        //     params: {
        //         key: key,
        //         q: payload,
        //         part: 'snippet',
        //         maxResults: 10,
        //         type: 'video',
        //         pageToken: nextPageToken
        //     },
        // });
        const response = yield call(axios.get, `${API_ENDPOINT}/search`, {
      params: {
    q: payload,
    part: 'snippet',
    maxResults: 10,
    type: 'video',
    pageToken: nextPageToken
  },
  headers: options.headers
    });


        if (response.status == 200) {
            const newVideos = {
                items: response.data.items,
                nextPageToken: response.data.nextPageToken
            }
            yield put(setVideos(newVideos))
        }
    }
    catch (error) {
        console.log(error);
    }
}
export function* watchGetVideos() {
    yield takeLatest(getVideos.type, onLoadVideoAsync);
}
function* onLoadVideos() {
    yield takeLatest(getVideos.type, onLoadMoreVideoAsync);
}

export const videosSagas = [fork(onLoadVideos), fork(watchGetVideos)];




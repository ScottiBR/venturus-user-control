import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  REQUEST_API_GET_USER_DATA,
  REQUEST_API_GET_USER_POSTS,
  REQUEST_API_GET_USER_ALBUMS,
  REQUEST_API_GET_USER_PHOTOS,
  REQUEST_API_GET_RIDE_DAYS
} from "../constants/ActionTypes";
import {
  recieveUserData,
  recieveUserPosts,
  recieveUserAlbums,
  recieveUserPhotos,
  getUserAlbums,
  getUserPhotos,
  getUserPosts,
  getUserRideDays,
  recieveUserRideDays
} from "../actions";

const getUserDataRequest = async () => {
  const responseFromServer = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  return await responseFromServer.json();
};
const getUserPhotosRequest = async () => {
  const responseFromServer = await fetch(
    `https://jsonplaceholder.typicode.com/photos`
  );
  return await responseFromServer.json();
};

const getUserAlbumsRequest = async () => {
  const responseFromServer = await fetch(
    `https://jsonplaceholder.typicode.com/albums`
  );
  return await responseFromServer.json();
};

const getUserPostsRequest = async () => {
  const responseFromServer = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return await responseFromServer.json();
};

function* getApiUserData() {
  try {
    const userInfo = yield call(getUserDataRequest);
    yield put(recieveUserData(userInfo));
    yield put(getUserAlbums());
    yield put(getUserPosts());
    yield put(getUserRideDays());
  } catch (error) {
    console.log(error);
  }
}
function* getApiUserPhotos() {
  try {
    const photos = yield call(getUserPhotosRequest);
    yield put(recieveUserPhotos(photos));
  } catch (error) {
    console.log(error);
  }
}
function* getApiUserAlbums() {
  try {
    const albums = yield call(getUserAlbumsRequest);
    yield put(recieveUserAlbums(albums));
    yield put(getUserPhotos());
  } catch (error) {
    console.log(error);
  }
}
function* getApiUserPosts() {
  try {
    const posts = yield call(getUserPostsRequest);
    yield put(recieveUserPosts(posts));
  } catch (error) {
    console.log(error);
  }
}
function* getApiUserRideDays() {
  try {
    yield put(recieveUserRideDays(null));
  } catch (error) {
    console.log(error);
  }
}

export function* userData() {
  yield takeEvery(REQUEST_API_GET_USER_DATA, getApiUserData);
}
export function* userPhotos() {
  yield takeEvery(REQUEST_API_GET_USER_PHOTOS, getApiUserPhotos);
}
export function* userAlbums() {
  yield takeEvery(REQUEST_API_GET_USER_ALBUMS, getApiUserAlbums);
}
export function* userPosts() {
  yield takeEvery(REQUEST_API_GET_USER_POSTS, getApiUserPosts);
}
export function* userRideDays() {
  yield takeEvery(REQUEST_API_GET_RIDE_DAYS, getApiUserRideDays);
}

export default function* rootSaga() {
  yield all([
    fork(userData),
    fork(userPhotos),
    fork(userAlbums),
    fork(userPosts),
    fork(userRideDays)
  ]);
}

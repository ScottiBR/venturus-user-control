import { REQUEST_API_GET_USER_DATA } from "../constants/ActionTypes";
import { REQUEST_API_GET_USER_POSTS } from "../constants/ActionTypes";
import { REQUEST_API_GET_USER_ALBUMS } from "../constants/ActionTypes";
import { REQUEST_API_GET_USER_PHOTOS } from "../constants/ActionTypes";
import { RECIEVE_API_GET_USER_DATA } from "../constants/ActionTypes";
import { RECIEVE_API_GET_USER_POSTS } from "../constants/ActionTypes";
import { RECIEVE_API_GET_USER_ALBUMS } from "../constants/ActionTypes";
import { RECIEVE_API_GET_USER_PHOTOS } from "../constants/ActionTypes";
import { REQUEST_API_GET_RIDE_DAYS } from "../constants/ActionTypes";
import { RECIEVE_API_GET_RIDE_DAYS } from "../constants/ActionTypes";

export const getUserData = () => {
  return {
    type: REQUEST_API_GET_USER_DATA
  };
};

export const getUserPosts = () => {
  return {
    type: REQUEST_API_GET_USER_POSTS
  };
};

export const getUserAlbums = () => {
  return {
    type: REQUEST_API_GET_USER_ALBUMS
  };
};

export const getUserPhotos = () => {
  return {
    type: REQUEST_API_GET_USER_PHOTOS
  };
};

export const getUserRideDays = () => {
  return {
    type: REQUEST_API_GET_RIDE_DAYS
  };
};

export const recieveUserData = userInfo => {
  return {
    type: RECIEVE_API_GET_USER_DATA,
    payload: userInfo
  };
};

export const recieveUserPosts = posts => {
  return {
    type: RECIEVE_API_GET_USER_POSTS,
    payload: posts
  };
};

export const recieveUserAlbums = albums => {
  return {
    type: RECIEVE_API_GET_USER_ALBUMS,
    payload: albums
  };
};

export const recieveUserPhotos = photos => {
  return {
    type: RECIEVE_API_GET_USER_PHOTOS,
    payload: photos
  };
};

export const recieveUserRideDays = rideDays => {
  return {
    type: RECIEVE_API_GET_RIDE_DAYS,
    payload: rideDays
  };
};

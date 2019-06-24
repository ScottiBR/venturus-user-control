import {
  RECIEVE_API_GET_USER_DATA,
  RECIEVE_API_GET_RIDE_DAYS,
  RECIEVE_API_GET_USER_POSTS,
  RECIEVE_API_GET_USER_ALBUMS,
  RECIEVE_API_GET_USER_PHOTOS
} from "../constants/ActionTypes";

const INIT_STATE = {
  userInfo: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RECIEVE_API_GET_USER_DATA: {
      return {
        ...state,
        userInfo: [...action.payload]
      };
    }
    case RECIEVE_API_GET_USER_POSTS: {
      return {
        ...state,
        userInfo: state.userInfo.map(user => {
          return {
            ...user,
            posts: action.payload.filter(post => post.userId === user.id)
          };
        })
      };
    }
    case RECIEVE_API_GET_USER_ALBUMS: {
      return {
        ...state,
        userInfo: state.userInfo.map(user => {
          return {
            ...user,
            albums: action.payload.filter(album => album.userId === user.id)
          };
        })
      };
    }
    case RECIEVE_API_GET_USER_PHOTOS: {
      return {
        ...state,
        userInfo: state.userInfo.map(user => {
          return {
            ...user,
            albums: user.albums.map(album => {
              return {
                ...album,
                photos: action.payload.filter(
                  photo => photo.albumId === album.id
                )
              };
            })
          };
        })
      };
    }
    case RECIEVE_API_GET_RIDE_DAYS: {
      const generateDayOfWeek = () => {
        const howManyDays = Math.floor(Math.random() * 7 + 1);
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let dayOfWeek = [];
        while (dayOfWeek.length < howManyDays) {
          dayOfWeek = [...dayOfWeek, days[Math.floor(Math.random() * 6)]];
        }
        return [...new Set(dayOfWeek)]; //remove duplicates
      };
      return {
        ...state,
        userInfo: state.userInfo.map(user => {
          return {
            ...user,
            rideGroup: Math.floor(Math.random() * 3 + 1),
            dayOfWeek: generateDayOfWeek()
          };
        })
      };
    }
    default:
      return state;
  }
};

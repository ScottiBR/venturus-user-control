import UserReduce from "../../reducers/User";
import { removeUser, recieveUserData } from "../../actions";
import {
  RECIEVE_API_GET_USER_DATA,
  REMOVE_USER
} from "../../constants/ActionTypes";

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];
test("should setup default state", () => {
  const state = UserReduce(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    userInfo: []
  });
});

test("Should insert users", () => {
  const action = recieveUserData(users);
  const state = UserReduce(undefined, action);
  expect(state.userInfo.length).toBe(2);
});

test("Should remove the user id = 1", () => {
  const getUserAction = recieveUserData(users);
  let state = UserReduce(undefined, getUserAction);
  const removeUserAction = removeUser(1);
  state = UserReduce(state, removeUserAction);
  expect(state.userInfo.filter(user => user.id !== 1).length).toBe(1);
});

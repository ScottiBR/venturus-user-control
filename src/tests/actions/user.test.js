import { removeUser, createUser } from "../../actions";
import { REMOVE_USER, CREATE_USER } from "../../constants/ActionTypes";

test("Should create a action to remove the user id = 1", () => {
  const removeAction = removeUser(1);
  expect(removeAction).toEqual({ type: REMOVE_USER, payload: 1 });
});

test("Should create a user action", () => {
  const fakeUser = {
    username: "GUi",
    city: "BH",
    name: "GUI",
    email: "g@gmail.com",
    rideGroup: 2,
    dayOfWeek: ["Mon"]
  };
  const removeAction = createUser(fakeUser);
  expect(removeAction).toEqual({ type: CREATE_USER, payload: fakeUser });
});

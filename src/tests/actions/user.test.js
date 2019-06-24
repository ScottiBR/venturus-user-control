import { removeUser } from "../../actions";
import { REMOVE_USER } from "../../constants/ActionTypes";

test("Should remove the user id = 1", () => {
  const removeAction = removeUser(1);
  expect(removeAction).toEqual({ type: REMOVE_USER, payload: 1 });
});

import { receiveServerItems } from "../api/api";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

// RECEIVE ITEMS
function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    items,
  };
}

export function handleReceiveServerItems() {
  return (dispatch) => {
    //dispatch(showLoading());
    receiveServerItems().then((data) => {
      dispatch(receiveItems(data));
      //dispatch(hideLoading());
    });
  };
}

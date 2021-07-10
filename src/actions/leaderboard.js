import { receiveServerItems, addServerItem } from "../api/api";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const ADD_ITEM = "ADD_ITEM";

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

// ADD AN ITEM
function addItem(newItem) {
  return {
    type: ADD_ITEM,
    newItem,
  };
}

export function handleAddServerItem(newItem) {
  return (dispatch) => {
    dispatch(addItem(newItem));
    addServerItem(newItem);
  };
}

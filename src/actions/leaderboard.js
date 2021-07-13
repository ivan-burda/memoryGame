import { receiveServerItems, addServerItem, reduceLeaderBoardToTopTen } from "../api/api";
import { leaderboardLoading } from "../actions/loadings";
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
    dispatch(leaderboardLoading(true));
    receiveServerItems().then((data) => {
      dispatch(receiveItems(data));
      dispatch(leaderboardLoading(false));
      reduceLeaderBoardToTopTen(data);
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

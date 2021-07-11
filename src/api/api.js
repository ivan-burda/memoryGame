import firebase from "firebase";
import database from "./firebase";

// Receive server items
export async function receiveServerItems() {
  const response = await firebase
    .database()
    .ref("/leaderboard")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
}

// Add a server item
export async function addServerItem(newItem) {
  const response = await firebase
    .database()
    .ref("leaderboard/" + newItem.id)
    .set(newItem, (error) => {
      if (error) {
        console.log("Saving a new item to the server has failed");
      } else {
        console.log("A new item has been saved to the server successfully");
      }
    });
  return response;
}

// Bulk-delete server items
export async function bulkDeleteServerItems(data) {
  let newSet = {};
  if (data !== undefined && Object.values(data).length > 10) {
    Object.values(data)
      .sort((a, b) => a.secondCount - b.secondCount || a.requiredFlips - b.requiredFlips)
      .slice(0, 10)
      .forEach((item) => {
        newSet[item.id] = { ...item };
      });
    await firebase
      .database()
      .ref("leaderboard")
      .set(newSet, (error) => {
        if (error) {
          console.log("Saving reduced leaderboard data to the server has failed");
        } else {
          console.log("Reduced leaderboard data have been saved to the server successfully");
        }
      });
  }
}

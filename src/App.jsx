import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddFriend from "./pages/adList"
import List from "./pages/home";


function App() {
  const [friends, setFriends] = useState([]);
  // deconstructe l.friends chaque wahda
  function addFriend(friend) {
    // hadi l fonction li tajoute friend
    setFriends([...friends, friend]);
  }


  return (
    <>
      <List addfriend={addFriend}></List>
      <AddFriend friends={friends}></AddFriend>
    </>
  );
}

export default App;

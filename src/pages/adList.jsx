import { useState } from "react";

function AddFriend({ friends }) {
  const [friend, setFriend] = useState();
  return (
    <>
      <h2>List of robot friends</h2>

      <input class="search" type="search" name="" id="" />
      <div className="container">
        {friends.map((e, i) => {
          return (
            <div className="cart">
              <h1 class="title">{e.name}</h1>
              <img src={e.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AddFriend;

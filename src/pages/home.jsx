import { useState } from "react";


const List = ({addfriend}) => {
  const [inp, setInp] = useState();
  const [person, setPerson] = useState();
  return (
    <>
      <div className="header">
        <h1>my robrts friends</h1>
        <button>light</button>
      </div>
          <form action="#" onSubmit={(e) => {
              e.preventDefault();
              addfriend({
                name: inp,
                image: "https://robohash.org/" + inp,
              });
              setInp(""); 

          }}
          >
        <h3>Add New Friend</h3>
        <label htmlFor="name">robot Name</label>
        <input
          id="name"
          value={inp}
          type="text"
          placeholder="CPO RD2"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <label htmlFor="">robot image</label>
        <div class="image">
          <img src={`https://robohash.org/` + inp} alt="" />
        </div>
              <button>Add Friend</button>
      </form>
    </>
  );
};
export default List;

import React, { use, useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const Home = () => {
  const [data, setData] = useState("");
  const [array, setArray] = useState([]);

  const db = getDatabase();

  const handleSubmit = (e) => {
    e.preventDefault();

    set(push(ref(db, "users/")), {
      username: data,
    });

    // setData("");
  };

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val().forEach((element) => {
        console.log(element)
      });;
      // console.log(snapshot.val());
      // console.log(data);

      const myArray = [];
      // updateStarCount(postElement, data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setData(e.target.value)}
            className="w-50 h-20 border border-black"
            type="text"
          />
          <button className="w-20 h-10 border active:scale-1.3">
            Done/Add
          </button>
        </form>

        <h1></h1>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Datapi from "./Datapi";
import Maps from "./Maps";

const Data = () => {
  const [detail, setdetails] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setdetails(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="">
      <section className="bg-[#f4f7fc] h-max">
        {detail.map((currElem) => {
          return <Maps key={currElem.id} {...currElem} />;
        })}
      </section>
    </div>
  );
};

export default Data;

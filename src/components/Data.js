import React, { useState } from "react";
import Datapi from "./Datapi";
import Maps from "./Maps";

const Data = () => {
  const [detail, setdetails] = useState(Datapi);
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

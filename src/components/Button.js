import React, { useState } from "react";
import Collapsible from "react-collapsible";

const Button = (currElem) => {
  const [show, setshow] = useState(false);
  console.log(currElem);
  return (
    <div key={currElem.id}>
      <button onClick={() => setshow(!show)}>
        {show ? "Hide Details" : "View details"}
      </button>
      {show && (
        <div>
          <p className="">{currElem.Details}</p>
        </div>
      )}
    </div>
  );
};

export default Button;

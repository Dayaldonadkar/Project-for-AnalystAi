import React, { useState } from "react";
import Button from "./Button";

const Maps = (currElem) => {
  const [show, setshow] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5 flex flex-col">
        <div className="flex justify-between  items-center my-8 py-12  bg-white rounded-xl">
          <div>
            <h1>{currElem.Company}</h1>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Contact</p>
            <p>{currElem.Contact}</p>
          </div>

          <div className=" space-y-2">
            <p className="font-semibold">City</p>
            <p>{currElem.City}</p>
          </div>

          <div className=" space-y-2">
            <p className="font-medium">State</p>
            <p>{currElem.State}</p>
          </div>

          <div>
            <button
              className="bg-red-500 px-1 py-1 rounded-xl"
              onClick={() => setshow(!show)}
            >
              {show ? "Hide Details" : "View details"}
            </button>
          </div>
        </div>
        <div>
          {show && (
            <>
              <div className="bg-white relative bottom-9 flex justify-center rounded-xl">
                <div className="w-4/5 space-y-4 border border-1 px-10 py-6 my-10 rounded-2xl shadow-xl">
                  <div className="space-y-3">
                    <h1 className="text-lg font-medium ">Description</h1>
                    <p>{currElem.Details}</p>
                  </div>
                  <div className="flex space-x-72">
                    <div className="space-y-3">
                      <div>
                        <div>
                          <h1>Contact</h1>
                        </div>
                      </div>
                      <div>
                        <p>{currElem.Contact}</p>
                        <h1>Designation</h1>
                      </div>

                      <div>
                        <p>{currElem.Designation}</p>
                        <h1>Email</h1>
                        <h1></h1>
                      </div>

                      <div>
                        {currElem.Email}
                        <h1>Phone</h1>
                      </div>

                      <div>
                        <p>{currElem.Phone}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h1>Address</h1>
                      </div>

                      <div>
                        <p>{currElem.Address}</p>
                        <h1>City</h1>
                      </div>

                      <div>
                        <p>{currElem.City}</p>
                        <h1>State</h1>
                      </div>

                      <div>
                        <p>{currElem.State}</p>
                        <h1>Country</h1>
                      </div>

                      <div>
                        <p>{currElem.Country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maps;

{
  /* <div className=" px-6  space-x-20 space-y-4 w-4/5 border border-1 my-5 py-12">
                <div>
                  <h1>Description</h1>
                  <p>{currElem.Details}</p>
                </div>

                <div className="flex space-x-52">
                  <div>
                    <h1>Contact Person</h1>
                    <p>{currElem.Contact}</p>
                  </div>
                  <div>
                    
                  </div>
                </div>

                <div className="flex space-x-52">
                  <div>
                    <h1>Designation</h1>
                    <p>{currElem.Designation}</p>
                  </div>

                  <div>
                    <h1>City</h1>
                    <p>{currElem.City}</p>
                  </div>
                </div>

                <div className="flex space-x-52 items-center">
                  <div>
                    <h1>Email</h1>
                    <h1>{currElem.Email}</h1>
                  </div>

                  <div>
                    <h1>State</h1>
                    <p>{currElem.State}</p>
                  </div>
                </div>

                <div className="flex space-x-52 items-center">
                  <div>
                    <h1>Phone</h1>
                    <p>{currElem.Phone}</p>
                  </div>

                  <div>
                    <h1>Country</h1>
                    <p>{currElem.Country}</p>
                  </div>
                </div>
              </div> */
}

import React, { useState, ChangeEvent } from "react";
import "../../styling/App.css";

function Work({ workExperience, setWorkExperience }: any) {
  const [place, setPlace] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");

  const handleWork = (
    i: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkExperience((currentworkExperience: any) => {
      const newWork = currentworkExperience.map((work: any, index: number) => {
        if (index === i) {
          return { ...work, [event.target.name]: event.target.value };
        }
        return work;
      });
      console.log("newWork", newWork);
      return newWork;
    });
    switch (event.target.name) {
      case "place":
        setPlace(event.target.value);
        break;
      case "position":
        setPosition(event.target.value);
        break;
      case "date_started":
        setDateStarted(event.target.value);
        break;
      case "date_ended":
        setDateEnded(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      default:
    }
  };

  const addWorkField = () => {
    setWorkExperience([
      ...workExperience,
      {
        place: "",
        position: "",
        description: "",
        date_started: "",
        date_ended: "",
      },
    ]);
  };

  let removeWorkField = (index: number) => {
    let newWork = [...workExperience];
    newWork.splice(index, 1);
    setWorkExperience(newWork);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Work Experience</h3>
        <hr />
      </div>
      <div>
        <>
          {workExperience.map((element: any, index: number) => (
            <div className="form-inline" key={index}>
              <form>
                <div className="flex flex-col p-5 w-full">
                  {/* <div className="col-lg-12 text-left">
                    <h3>
                      <b>
                        <i className="fas fa-check-circle mr-1"></i>3
                      </b>
                    </h3>
                  </div> */}
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>Company*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="place"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>Position*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="position"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>Start Date</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="date"
                      name="date_started"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>End Date*</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="date"
                      name="date_ended"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>Description*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="description"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                </div>
              </form>
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeWorkField(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <button
            className="button add"
            type="button"
            onClick={(e: any) => addWorkField()}
          >
            Add
          </button>
          <br />
          <br />
        </>
      </div>
    </div>
  );
}

export default Work;

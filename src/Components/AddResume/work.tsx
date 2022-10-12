import React, { useState, ChangeEvent } from "react";
import "../../styling/App.css";
import { useNavigate } from "react-router-dom";

function Work({ workExperience, setWorkExperience }: any) {
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");

  // const initialWork = [
  //   {
  //     place: "",
  //     description: "",
  //     dateStarted: "",
  //     dateEnded: "",
  //   },
  // ];
  // type work = typeof initialWork[number];
  // const [workExperience, setWorkExperience] = useState<work[]>(initialWork);

  const navigate = useNavigate();

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
      case "date_started":
        setDateStarted(event.target.value);
        break;
      case "date_ended":
        setDateEnded(event.target.value);
        break;
      case "workdes":
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
                  <div className="col-lg-12 text-left">
                    <h3>
                      <b>
                        <i className="fas fa-check-circle mr-1"></i>3
                      </b>
                    </h3>
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>Company*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="Company"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>Start Date</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="date_started"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>End Date*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="date_ended"
                      onChange={(event) => handleWork(index, event)}
                    />
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>Description*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="workdes"
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

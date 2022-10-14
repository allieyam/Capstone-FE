import React, { useState, ChangeEvent } from "react";
import "../../styling/App.css";
import { useNavigate } from "react-router-dom";

function Education({ formValues, setFormValues }: any) {
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");

  const handleEducation = (
    i: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const newFormValues: FormValue[] = [...formValues];
    // newFormValues[i][event.target.name] = event.target.value;
    setFormValues((currentFormValues: any) => {
      const newFormValues = currentFormValues.map(
        (formValue: any, index: number) => {
          if (index === i) {
            return { ...formValue, [event.target.name]: event.target.value };
          }
          return formValue;
        }
      );
      console.log("newFormValues", newFormValues);
      return newFormValues;
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
      case "description":
        setDescription(event.target.value);
        break;
      default:
    }
  };

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        place: "",
        description: "",
        date_started: "",
        date_ended: "",
      },
    ]);
  };

  let removeFormFields = (index: number) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Education</h3>
        <hr />
      </div>
      <div>
        <>
          {formValues.map((element: any, index: number) => (
            <div className="form-inline" key={index}>
              <form>
                <div className="flex flex-col p-5 w-full">
                  <div className="col-lg-12 text-left">
                    <h3>
                      <b>
                        <i className="fas fa-check-circle mr-1"></i>1
                      </b>
                    </h3>
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>Institute/Organisation*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="place"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>Start Date</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="date_started"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>End Date*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="date_ended"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                  <div className="col-lg-4 text-left">
                    <label>Description*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="description"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                </div>
              </form>
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <button
            className="button add"
            type="button"
            onClick={() => addFormFields()}
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

export default Education;

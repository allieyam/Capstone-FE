import React, { useState, ChangeEvent } from "react";
import "../../styling/App.css";

function Education({ formValues, setFormValues }: any) {
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
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>Institute/Organisation*</label>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="place"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>Start Date</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="date"
                      name="date_started"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
                    <label>End Date*</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                      type="date"
                      name="date_ended"
                      onChange={(event) => handleEducation(index, event)}
                    />
                  </div>
                  <br />
                  <div className="col-lg-4 text-left flex justify-between">
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
                <button type="button" onClick={() => removeFormFields(index)}>
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <button type="button" onClick={() => addFormFields()}>
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

import { ChangeEvent, useState } from "react";
import { currUser } from "../types";
import Education from "./education";
import Work from "./work";
import "../../styling/App.css";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import Popup from "./Popup";
import { Link, useNavigate } from "react-router-dom";
import "98.css";

export default function InputForm({
  name,
  contact,
  email,
  handleChange,
  handleSubmit,
  handleSkill,
  allSkills,
  addSkillfields,
  removeSkills,
  workExperience,
  setWorkExperience,
  formValues,
  setFormValues,
  showNext,
  summary,
  handleSummary,
}: currUser) {
  const [showModal, setShowModal] = useState(false);

  // const handleSummary = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setSummary(event?.target.value);
  // };

  return (
    <div>
      <div className="form-container">
        <form className="inputform" onSubmit={handleSubmit}>
          <div className="form-right">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  id="text22"
                  placeholder="grid-name"
                >
                  Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-name"
                  type="text"
                  placeholder="Test"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  placeholder="grid-contact"
                >
                  Contact
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-contact"
                  type="text"
                  placeholder="Test"
                  name="contact"
                  value={contact}
                  onChange={handleChange}
                />
                <p className="text-gray-600 text-xs italic">
                  Contact number here{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  placeholder="grid-email"
                >
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-email"
                  type="email"
                  placeholder="example@example.com"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="card-title ">Skills</h3>
            <hr />

            {allSkills.map((element: any, index) => (
              <div className="form-inline" key={index}>
                <form>
                  <div className="flex flex-col p-5 w-full ">
                    <div className="col-lg-4 text-left flex justify-between">
                      <label>Skills*</label>
                      <input
                        className=" text-gray-700 font-bold"
                        type="text"
                        name="name"
                        onChange={(event) => handleSkill(index, event)}
                      />
                    </div>
                    <br />
                    <div className="col-lg-4 text-left flex justify-between">
                      <label>Description*</label>
                      <input
                        className=" text-gray-700 font-bold"
                        type="text"
                        name="description"
                        onChange={(event) => handleSkill(index, event)}
                      />
                    </div>
                  </div>
                </form>
                {index ? (
                  <button
                    type="button"
                    className="button remove"
                    onClick={() => removeSkills(index)}
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            ))}
            <button
              className="button add"
              type="button"
              onClick={(e: any) => addSkillfields(e)}
            >
              Add
            </button>
            <br />
            <br />

            <Education formValues={formValues} setFormValues={setFormValues} />
          </div>

          <div className="form-left">
            <Work
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
            <div className="summary-box">
              <div className="flex -mx-3 mb-6 flex-col">
                <div className="w-full px-3">
                  <div className="card-body">
                    <h3 className="card-title">Summary</h3>
                    <hr />
                  </div>
                  <GrammarlyEditorPlugin clientId="client_CpFc5E3M1jpP8iwmtjGyZX">
                    <textarea
                      id="summary"
                      className="summary-modal appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Fill in the blurb..."
                      name="summary"
                      value={summary}
                      rows={5}
                      onChange={handleSummary}
                    ></textarea>
                  </GrammarlyEditorPlugin>
                  <button
                    type="button"
                    className="modal-button"
                    onClick={() => setShowModal(true)}
                    style={{
                      backgroundColor: "rgb(4,131,132)",
                    }}
                  >
                    Suggestion
                  </button>
                </div>
              </div>
              <>
                {showModal ? (
                  <>
                    <Popup setShowModal={setShowModal} summary={summary} />
                  </>
                ) : null}
              </>
            </div>
            {showNext === true ? (
              <Link to="/template" state={summary}>
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Next
                </button>
              </Link>
            ) : (
              <button
                type="submit"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";

type Props = { results: any };

export default function SentimentPop({ results }: Props) {
  // console.log("in sentiment pop", results, typeof results);

  const passiveArray: any = [];
  const activeArray: any = [];
  const filterResults = () => {
    // console.log("in filter results");
    if (results !== undefined)
      for (let element of results) {
        // console.log("element in for loop", element, element.result);
        if (element.result == "passive") {
          // console.log("is passive", element);
          passiveArray.push(element);
        } else if (element.result == "active") {
          // console.log("is active", element);
          activeArray.push(element);
        } else {
          return;
        }
      }
  };
  filterResults();
  // console.log("passive array", passiveArray, "active array", activeArray);
  return (
    <div className="sentiment-pop-container">
      <div className="sentiment-what">
        Using active voice will engage your reader better than passive voice.
        Here's some help figuring out what needs changing!
      </div>
      <br />
      <div className="sentiment-passive-box">
        Passive results:
        {passiveArray.length > 0 ? (
          passiveArray.map((results: any, index: number) => (
            <div className="text-gray-500" key={index}>
              {results.text}
            </div>
          ))
        ) : (
          <div>No passive results, great job!</div>
        )}
      </div>
      <br />
      <div className="sentiment-active-box">
        Active results:
        {activeArray.length > 0 ? (
          activeArray.map((results: any, index: number) => (
            <div className="text-gray-500" key={index}>
              {results.text}
            </div>
          ))
        ) : (
          <div>No active results, keep trying!</div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";

type Props = { results: any };

export default function SentimentPop({ results }: Props) {
  console.log("in sentiment pop", results, typeof results);

  // useEffect(() => {
  //   if (results !== null) {
  //     filterResults();
  //     console.log("results not null in use effect");
  //   } else return;
  // }, []);

  const passiveArray: any = [];
  const activeArray: any = [];
  const filterResults = () => {
    console.log("in filter results");
    for (let element of results) {
      console.log("element in for loop", element, element.result);
      if (element.result == "passive") {
        console.log("is passive", element);
        passiveArray.push(element);
      } else if (element.result == "active") {
        console.log("is active", element);
        activeArray.push(element);
      } else {
        return;
      }
    }
  };
  filterResults();
  console.log("passive array", passiveArray, "active array", activeArray);
  return (
    <div className="sentiment-pop-container">
      <div className="sentiment-passive-box">
        Passive results:
        {passiveArray.map((results: any, index: number) => (
          <div className="text-gray-500" key={index}>
            {results.text}
          </div>
        ))}
      </div>
      <div className="sentiment-active-box">
        Active results:
        {activeArray.map((results: any, index: number) => (
          <div className="text-gray-500" key={index}>
            {results.text}
          </div>
        ))}
      </div>
    </div>
  );
}

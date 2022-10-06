import React, { MouseEvent } from "react";
import "../styling/App.css";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

// function CssStyle({ data: { font, fontSize, color } }: Style) {
//   return (
//     <div style={`font-size:${fontSize}; color:${color}; font:${font}`}></div>
//   );
// }

function Template1() {
  const handleSubmit = (e: MouseEvent) => {
    console.log("clicked");
  };

  // const obj = { font: "A", fontSize: 8, color: "white" };
  return (
    <div>
      <p>Template1 1</p>

      {/* Example
      <div>
        <CssStyle data={obj} />
      </div> */}

      <button onClick={(e) => handleSubmit(e)}></button>
    </div>
  );
}

export default Template1;

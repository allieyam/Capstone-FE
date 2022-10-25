import React from "react";

type Props = { results: any };

export default function SentimentPop({ results }: Props) {
  console.log("in sentiment pop", results);
  return (
    <div>
      SentimentPop
      {/* map data out as list*/}
    </div>
  );
}

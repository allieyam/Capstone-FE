import React from "react";
interface Props {
  name: string;
  email: string;
  keyskills: string;
  work: string;
  education: string;
}

export const template1 = ({
  name,
  email,
  keyskills,
  work,
  education,
}: Props) => {
  // dumb component for template styling
  // div class names will be specific to each template and have its own css stylesheet
  return <div>template1</div>;
};

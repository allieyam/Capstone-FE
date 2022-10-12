export interface Style {
  font: string;
  color: string;
}

export interface UserTypes {
  name: string;
  email: string;
  phone: string;
  keyskills: string;
  work: string;
  education: string;
}

// interface Skill {
//   name: string;
//   description?: string;
// }

// interface Work {
//   place: string;
//   description: string;
//   date_started: string;
//   date_ended: string;
// }

// interface Education {
//   place: string;
//   description: string;
//   date_started: string;
//   date_ended: string;
// }

export interface currUser {
  name: string;
  contact: string;
  email: string;
  education: Array<object>;
  formValues: Array<object>;
  skill: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // handleEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addFormFields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFormFields: (index: number) => void;
  handleEducation: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSkill: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  allSkills: Array<object>;
  addSkillfields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeSkills: (index: number) => void;
  workExperience: Array<object>;
  setWorkExperience: Function;
}

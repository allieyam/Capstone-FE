export interface Style {
  font: string;
  color: string;
}

export interface UserTypes {
  username: string;
  email: string;
  phone: string;
  keyskills: Array<Skill>;
  work: Array<Work>;
  education: Array<Education>;
  // blurb?: string;
  user: number;
  // updateEducation?: (index: number, name: string, value: string) => void;
  // updateAll?: (name: string, value: string) => void;
  // updateSkill?: (index: number, name: string, value: string) => void;
  // updateWork?: (index: number, name: string, value: string) => void;
}

interface Skill {
  name: string;
  description?: string;
}

interface Work {
  place: string;
  description: string;
  position: string;
  date_started: string;
  date_ended: string;
}

interface Education {
  place: string;
  level: string;
  description: string;
  date_started: string;
  date_ended: string;
}

export interface currUser {
  name: string;
  contact: string;
  email: string;
  education: Array<object>;
  skill: string;
  summary: string;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSkill: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  allSkills: Array<object>;
  addSkillfields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeSkills: (index: number) => void;
  workExperience: Array<object>;
  setWorkExperience: Function;
  formValues: Array<object>;
  setFormValues: Function;
}

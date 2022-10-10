export interface Style {
  font: string;
  color: string;
}

export interface UserTypes {
  name: string;
  email: string;
  phone: string;
  keyskills: Array<Skill>;
  work: Array<Work>;
  education: Array<Education>;
}

interface Skill {
  name: string;
  description?: string;
}

interface Work {
  place: string;
  description: string;
  date_started: string;
  date_ended: string;
}

interface Education {
  place: string;
  description: string;
  date_started: string;
  date_ended: string;
}

import brain from "brain.js";

export default function TrainBrain() {
  const trainingData = [
    "Individual position with over 10 years of professional experience.",
    "Individual position with over 5 years of professional experience.",
    "Energetic and dynamic individual with a proven record of generating and building relationships, managing projects from concept to completion, and coaching individuals to success.",
    "Energetic and passionate individual with a proven record of generating and building relationships and managing projects from concept to completion.",
    "Energetic and passionate individual with a strong background in management and communication.",
    "Excellent problem-solving skills and ability to perform well in a team.",
    "Excellent problem-solving skills, hardworking and ability to perform well in a team.",
    "Excellent problem-solving and time-management abilities; adept at identifying the root cause of issues and implementing creative, targeted solutions.",
    "Excellent problem-solving and organizational abilities; adept at identifying the root cause of issues and implementing creative, targeted solutions.",
    "Excellent problem-solving and time-management abilities; adept at identifying the issues and implementing creative solutions.",
    "Skilled in building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges.",
    "Skilled in organization, demonstrating exceptional communication skills, and making critical decisions during challenges.",
    "Adaptable individual with an ability to work independently, and developing opportunities that further establish organizational goals.",
    "Adaptable individual with an ability to work in a team, and developing opportunities that further establish organizational goals.",
    "Adaptable individual with an ability to work in a team, and exceptional communication skills.",
    "Adaptable and organized team player with the ability to communicate effectively and efficiently.",
    "Keen to support ABC Inc. with excellent organizational and analytical skills.",
    "Keen to support ABC Inc. with excellent communication and analytical skills.",
    "Seeking to use proven project management and communication skills to improve performance for X.",
    "Seeking to use proven organizational and communication skills to improve performance for X.",
    "Managed, identified and eliminated an issue that saved almost $100,000 per year.",
    "Managed, identified and eliminated an issue that increased revenue by 10%.",
    "Debugged several apps and contributed to 10 GitHub projects. Involved in 30+ client projects.",
  ];

  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    iterations: 1500,
    // log: (details: string) => console.log(details),
    errorThresh: 0.011,
  });

  // console.log("Training result: ", result);

  const run1: string = lstm.run("Individual");
  const run2: string = lstm.run("Energetic" || "Excellent" || "Skill");
  const run3: string = lstm.run("Adaptable");
  const run4: string = lstm.run("Keen" || "Seeking" || "Managed");

  console.log(`run 1:  ${run1}`);
  console.log(`run 2:  ${run2}`);
  console.log(`run 3: ${run3}`);
  // console.log(`run 4: It ${run4}`);
  return (
    <div>
      Individual {run1}.
      <br />
      Excellent {run2}.
      <br />
      Seeking {run3}.
      <br />
      Managed {run4}.
    </div>
  );
}

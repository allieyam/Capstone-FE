import brain from "brain.js";

export default function TrainBrain() {
  const trainingData = [
    "Individual with over 10 years of experience.",
    "Individual with over 5 years of experience.",
    "Individual with over 2 years of experience.",
    // "Individual with 3 years of experience.",
    // "Individual with 1 year of experience.",
    // "Possesses excellent communication & problem-solving abilities to meet business needs.",
    // "Possesses excellent problem-solving & communication abilities to meet business needs.",
    // "Possesses excellent managerial & problem-solving abilities to meet business needs.",
    // "Possesses excellent teamwork & problem-solving abilities to meet business needs.",
    // "Possesses excellent organisational & communication abilities to meet business needs.",
    // "Possesses excellent analytical & communication abilities to meet business needs.",
    // "Possesses excellent analytical & problem-solving abilities to meet business needs.",
    "Possesses good communication ability to meet business needs.",
    "Possesses good problem-solving ability to meet business needs.",
    "Possesses good managerial ability to meet business needs.",
    "Possesses good teamwork ability to meet business needs.",
    "Possesses good organisational ability to meet business needs.",
    // "Possesses good analytical ability to meet business needs.",
    "Looking for opportunity to improve my knowledge.",
    "Looking for opportunity to expand my knowledge.",
    "Looking for opportunity to grow my knowledge.",
    "Looking for opportunity to improve my professional skillset.",
    "Looking for opportunity to expand my professional skillset.",
    // "Looking for opportunity to expand my professional skillset and help Company X grow.",
    // "Looking for opportunity to expand my knowledge and help Company X grow.",
    // "Looking for opportunity to improve my professional skillset and help Company X grow.",
    // "Looking for opportunity to improve my knowledge and help Company X grow.",
    // "Looking for opportunity to use my professional skillset and help Company X grow.",
    // "Looking for opportunity to expand my professional skillset and support Company X growth.",
    // "Looking for opportunity to expand my knowledge and support Company X growth.",
    // "Looking for opportunity to improve my professional skillset and support Company X growth.",
    // "Looking for opportunity to improve my knowledge and support Company X growth.",
    "Looking for opportunity to use my professional skillset.",
  ];

  // // create data based on input which will be used for training
  // const data = [
  //   {
  //     input: "Individual",
  //     output: "Individual with over 10 years of experience.",
  //   },
  //   {
  //     input: "Professional",
  //     output: "Individual with over 5 years of experience.",
  //   },
  //   {
  //     input: "Professional",
  //     output: "Individual with over 2 years of experience.",
  //   },
  //   {
  //     input: "Individual",
  //     output: "Resourceful individual with over 2 years of experience.",
  //   },
  // ];

  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    iterations: 39,
    errorThresh: 0.011,
  });

  const para1: string = lstm.run("Individual");
  const para2: string = lstm.run("Possesses");
  const para3: string = lstm.run("Looking");

  // const network = new brain.NeuralNetwork();
  // const keyword = network.run({ summary });
  // console.log(keyword);

  return (
    <div>
      Individual {para1}
      <br />
      Possesses {para2}.
      <br />
      Looking {para3}.
    </div>
  );
}

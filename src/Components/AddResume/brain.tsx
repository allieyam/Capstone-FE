import brain from "brain.js";

export default function TrainBrain({ summary }: any) {
  const trainingData = [
    "Individual with over 10 years of experience.",
    "Individual with over 5 years of experience.",
    "Individual with over 2 years of experience.",
    "Individual with 3 years of experience.",
    "Individual with 1 year of experience.",
    "Resourceful individual with over 2 years of experience.",
    "Resourceful individual with over 5 years of experience.",
    "Resourceful individual with 1 year of experience.",
    "Driven individual with over 2 years of experience.",
    "Driven individual with over 10 years of experience.",
    "Driven individual with 1 year of experience.",
    "Possesses excellent communication & problem-solving abilities to meet business needs.",
    "Possesses excellent problem-solving & communication abilities to meet business needs.",
    "Possesses excellent managerial & problem-solving abilities to meet business needs.",
    "Possesses excellent teamwork & problem-solving abilities to meet business needs.",
    "Possesses excellent organisational & communication abilities to meet business needs.",
    "Possesses excellent analytical & communication abilities to meet business needs.",
    "Possesses excellent analytical & problem-solving abilities to meet business needs.",
    "Possesses good communication ability to meet business needs.",
    "Possesses good problem-solving ability to meet business needs.",
    "Possesses good managerial ability to meet business needs.",
    "Possesses good teamwork ability to meet business needs.",
    "Possesses good organisational ability to meet business needs.",
    "Possesses good analytical ability to meet business needs.",
    "communication & problem-solving",
    "analytical & problem-solving",
    "managerial & analytical",
    "Possesses good analytical & problem-solving ability to meet business needs.",
    "Has strong analytical skills and is an expert in different systems.",
    "Has strong problem-solving skills and is an expert in different systems.",
    "Has strong problem-solving skills & works well under pressure.",
    "Has strong analytical skills and works well under pressure.",
    "Looking for opportunity to improve my knowledge.",
    "Looking for opportunity to expand my knowledge.",
    "Looking for opportunity to grow my knowledge.",
    "Looking for opportunity to improve my professional skillset.",
    "Looking for opportunity to expand my professional skillset.",
    "Looking for opportunity to expand my professional skillset and help Company X grow.",
    "Looking for opportunity to expand my knowledge and help Company X grow.",
    "Looking for opportunity to improve my professional skillset and help Company X grow.",
    "Looking for opportunity to improve my knowledge and help Company X grow.",
    "Looking for opportunity to use my professional skillset and help Company X grow.",
    "Looking for opportunity to expand my professional skillset and support Company X growth.",
    "Looking for opportunity to expand my knowledge and support Company X growth.",
    "Looking for opportunity to improve my professional skillset and support Company X growth.",
    "Looking for opportunity to improve my knowledge and support Company X growth.",
    "Looking for opportunity to use my professional skillset.",
    "Aim to share my knowledge base and skills with X Company.",
    "Aim to share my skillset and knowledge with X Company.",
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

  console.log(summary);

  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    iterations: 49,
    // log: (details: string) => console.log(details),
    errorThresh: 0.005,
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

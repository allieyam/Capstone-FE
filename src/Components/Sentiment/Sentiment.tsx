export default function Sentiment(props: object) {
  /**
   * bring in the brain.js dependency
   */
  const brain = require("brain.js");
  console.log("props", props);
  const dataArray = props;
  // const filtered = dataArray.map((key) => [console.log("key in map", key)]);
  // console.log("data array", dataArray);

  const dataFunc = () => {
    const gettingPlaces = Object.values(dataArray);
    console.log("get places", gettingPlaces);

    // dataArray.forEach((obj) => obj.place !== null);
  };
  dataFunc();

  /**
   * Import the data file
   */
  // const data = require("./data.json");
  // console.log("data", data);
  const data = [
    {
      input: "The cat was chasing the mouse",
      output: "active",
    },
    {
      input: "The mouse was being chased by the cat",
      output: "active",
    },
    {
      input: "We are going to watch a movie tonight",
      output: "active",
    },
    {
      input: "A movie is going to be watched by us tonight",
      output: "passive",
    },
    {
      input: "The two kings are signing the treaty",
      output: "active",
    },
    {
      input: "The director will give you instructions",
      output: "active",
    },
    {
      input: "My department realized a 14 percent increase in sales",
      output: "active",
    },
    {
      input: "A revenue growth of 14 percent was realized in my department",
      output: "passive",
    },
    {
      input: "The Grand Canyon is visited by thousands of tourists every year",
      output: "passive",
    },
    {
      input:
        "Introduced a new document scanning system, increasing office efficiency and improving filing process",
      output: "active",
    },
    {
      input:
        "Managed a group of developers to create a new customer-focused website",
      output: "active",
    },
    {
      input: "My team achieved 25 percent growth over one year",
      output: "active",
    },
    {
      input: "Answered calls and directed lines to the appropriate individual",
      output: "active",
    },
    {
      input: "25 percent growth was achieved on the team over one year",
      output: "passive",
    },
    {
      input:
        "Organized team-building activities to bring cohesiveness to the group",
      output: "active",
    },
    {
      input: "Responsible for answering phones and directing calls",
      output: "passive",
    },
    {
      input: "The meeting was called off",
      output: "passive",
    },
    {
      input:
        "The department budget was increased because I helped my team meet sales goals for the quarter.",
      output: "passive",
    },
    {
      input:
        "Helped increase the department budget because my team met sales goals for the quarter.",
      output: "active",
    },
    {
      input: "I was tasked with mentoring new hires.",
      output: "passive",
    },
    {
      input:
        "I mentored new hires so they were better prepared for their role and understood expectations.",
      output: "active",
    },
  ];

  const config = {
    iterations: 500,
    errorThresh: 0.04,
  };
  console.log("data", data);
  /**
   * Create the  neural network
   */
  const network = new brain.recurrent.LSTM();
  console.log("network", network);
  /**
   * Training the model and setting the number
   * of iteration to make during the training
   */
  const result = network.train(data, config);

  const test = "Organized team-building activities for the group";

  const output: string = network.run(test);

  /**
   * Printing the output on the console
   */
  console.log(
    `Test text: ${test}`,
    `Category: ${output}`,
    `results of training:`,
    result
  );
}

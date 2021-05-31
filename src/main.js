/*
  (C) 2020 David Lettier
  lettier.com
*/

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    teamNames: ["Superman", "Batman"],
    qas: [
      {
        question: "Name A Job Which Might Require Someone To Work On Christmas?",
        answers: [
          {
            text: "Nurse",
            money: 22
          },
          {
            text: "Doctor",
            money: 17
          },
          {
            text: "Police",
            money: 15
          },
          {
            text: "Cashier",
            money: 8
          },
          {
            text: "Santa Claus",
            money: 7
          },
          {
            text: "Cook",
            money: 5
          }
        ]
      },
      {
        question: "What Everyday Activity Burns The Most Calories?",
        answers: [
          {
            text: "Running",
            money: 17
          },
          {
            text: "Walking",
            money: 11
          },
          {
            text: "Yoga",
            money: 8
          },
          {
            text: "Laughing",
            money: 6
          },
          {
            text: "Cleaning",
            money: 5
          },
          {
            text: "Gardening",
            money: 3
          }
        ]
      },
      {
        question: "Name Something Vampires Hate",
        answers: [
          {
            text: "Sun",
            money: 17
          },
          {
            text: "Cross",
            money: 15
          },
          {
            text: "Garlic",
            money: 10
          },
          {
            text: "Wooden Stake",
            money: 8
          },
          {
            text: "Holy Water",
            money: 7
          },
          {
            text: "Van Helsing",
            money: 5
          }
        ]
      },
      {
        question: "Name An Animal That Can Climb Trees",
        answers: [
          {
            text: "Monkey",
            money: 20
          },
          {
            text: "Squirrel",
            money: 17
          },
          {
            text: "Cat",
            money: 12
          },
          {
            text: "Snake",
            money: 10
          },
          {
            text: "Sloth",
            money: 6
          },
          {
            text: "Panda",
            money: 4
          }
        ]
      }
    ]
  }
});

export default app;

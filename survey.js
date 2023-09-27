const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profile = {};

const question = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const askQues = (index) => {
  if (index >= question.length) {
    generateProfile();
    rl.close();
    return;
  }
  rl.question(`${question[index]}`, (answer) => {
    profile[`answer${index + 1}`] = answer;
    askQues(index + 1);
  });
};

const generateProfile = () => {
  console.log(`
  ${profile.answer1} loves listening to ${profile.answer3} while ${profile.answer2}, 
devouring ${profile.answer5} for ${profile.answer4}, 
prefers ${profile.answer6} over any other sport, 
and is amazing at ${profile.answer7}.`);
};

askQues(0);

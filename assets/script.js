/* list of questions*/

var questions = [
  {
    question: "Common used data types DO NOT include?",
    anwsers: [
      { text: "Strings" correct: false},
      { text: "Boolean" correct: false},
      { text: "Alerts" correct: true},
      { text: "Numbers" correct: false},
    ]

  },
  {
    question: "The condition in an else/if statement is enclosed within?",
    anwsers: [
      { text: "Quotes" correct: false},
      { text: "Curly Brackets" correct: false},
      { text: "Parenthesis" correct: true},
      { text: "Square Brackets" correct: false},
    ]

  },
  {
    question: "Array's in JavaScript can be used to store?",
    anwsers: [
      { text: "Numbers and Strings" correct: false},
      { text: "Other Arrays" correct: false},
      { text: "Booleans" correct: false},
      { text: "All the above" correct: true},
    ]
  
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables?",
    anwsers: [
      { text: "Commas" correct: false},
      { text: "Curly brackets" correct: false},
      { text: "Quotes" correct: true},
      { text: "Parenthesis" correct: false},
    ]  
  }
];

//--event for click--//
const startButton = document.getElementById('s-btn');
startButton.addEventListener('click', (e) => {
  console.log('click')

} )


const questionElement = document.getElementById("questions");







//--for loop for progressing though questions and correct or not--//
for(var i=0; i < questions.length; i++){

  var response = window.prompt(questions[i].prompt);

  if (response == questions[i].anwsers) {
    alert("Correct!");
  } else {
    time--;
    alert("Incorrect!");
  }
}



//--wrong anwser deducts time--//






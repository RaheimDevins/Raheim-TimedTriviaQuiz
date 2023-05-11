/* list of questions*/
var currentQuestion = 0
var questions = [
  {
    question: "Common used data types DO NOT include?",
    anwsers: [
      { text: "Strings", correct: false},
      { text: "Boolean", correct: false},
      { text: "Alerts", correct: true},
      { text: "Numbers", correct: false},
    ]

  },
  {
    question: "The condition in an else/if statement is enclosed within?",
    anwsers: [
      { text: "Quotes", correct: false},
      { text: "Curly Brackets", correct: false},
      { text: "Parenthesis", correct: true},
      { text: "Square Brackets", correct: false},
    ]

  },
  {
    question: "Array's in JavaScript can be used to store?",
    anwsers: [
      { text: "Numbers and Strings", correct: false},
      { text: "Other Arrays", correct: false},
      { text: "Booleans", correct: false},
      { text: "All the above", correct: true},
    ]
  
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables?",
    anwsers: [
      { text: "Commas", correct: false},
      { text: "Curly brackets", correct: false},
      { text: "Quotes", correct: true},
      { text: "Parenthesis", correct: false},
    ]  
  }
];

//--event for start click--//
const startButton = document.getElementById('start');
const options = document.getElementById('anwser')
const startscreen = document.getElementById('startscreen');
const Ques = document.getElementById('Questions');
startButton.addEventListener('click', (e) => {
startscreen.setAttribute('class', 'hidden')
Ques.removeAttribute('class', 'hidden')
popQues()

} )

function popQues() {
  var quizQues = questions[currentQuestion]
  var titleEl = document.getElementById('title')
  titleEl.textContent = quizQues.question

  // loop though anwsers
for(var i=0; i < quizQues.anwsers.length; i++){

 // create anwser buttons 
const element = quizQues.anwsers[i].text
console.log(element) 
var elementNode = document.createElement('button')
elementNode.setAttribute('class', 'element');
elementNode.setAttribute('value', element)
elementNode. textContent = i + 1 + '. ' + element;
console.log(elementNode)
options.appendChild(elementNode)
}
}

//--for loop for progressing though questions and correct or not--//





//--wrong anwser deducts time--//






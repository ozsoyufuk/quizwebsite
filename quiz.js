//let's create all the questions

let questions = [
{question: 'Which day the Sun`s direct rays cross the celestial equator?',
choice1: 'a. the equinox',
choice2: 'b. the ecliptic',
choice3: 'c. the symbology',
choice4: 'd. the solstice',


answer: 1,
},
{question: 'Which of these objects is the farthest from the Sun?',
choice1: 'a. 90377 Sedna',
choice2: 'b. Uranus',
choice3: 'c. Kuiper belt',
choice4: 'd. Neptune',

answer: 1,
},
{question: 'Who invented the telescope?',
choice1: 'a. Hans Lippershey',
choice2: 'b. Galileo',
choice3: 'c. Johannes Kepler',
choice4: 'd. Newton',

answer: 1,
},
{question: 'What term describes the alignment of three celestial bodies?',
choice1: 'a. sizzle',
choice2: 'b. suzerainty',
choice3: 'c. aphelion',
choice4: 'd. syzygy',

answer: 4,
},
{question: 'What makes a planet a dwarf planet?',
choice1: 'a. smell',
choice2: 'b. color',
choice3: 'c. distance from Kuiper belt',
choice4: 'd. size and shape',

answer: 4,
}

,
{question: 'How many times larger is the radius of the Sun than that of the Earth?',
choice1: 'a. 1025',
choice2: 'b. 41.8',
choice3: 'c. 109',
choice4: 'd. 100',

answer: 3,
},
{question: 'Who was the first person to enter outer space twice?',
choice1: 'a. Kevin Kelly',
choice2: 'b. Vladimir Komarov',
choice3: 'c. Yuri Gagarin',
choice4: 'd. Neil Armstrong',

answer: 2,
},
{question: 'What is the nucleus of a comet made of?',
choice1: 'a. radio waves,dust',
choice2: 'b. helium, oxygen and water',
choice3: 'c. ice, dust, and organic materials',
choice4: 'd. fire, hydrogen',

answer: 3,
}
]
// Get value for timer count
const timerCount = document.getElementById('timerCount')
// Variables for render
let timerQuestion = 15 // 15 secs for every question
let timer = null

//create content for question and choices
const question = document.querySelector('#questionContent');
const choices = Array.from(document.querySelectorAll('.choiceContent'));
const advance = document.querySelector('#advance');
const scoreContent = document.querySelector('#scoreNo');

//create progress bar
const barFull = document.querySelector('#barFull');

//create constants
const ScoreMark = 25
const MaxQuestion = 8


let ongoingQuestion = {}
let Answers = true
let score = 0
let counterQuestion = 0
let allQuestions = []

// Create correct and incorrect sounds
let correct = new Audio();
correct.src = 'imgmusic/audio/correct.mp3';
let incorrect = new Audio();
incorrect.src = 'imgmusic/audio/incorrect.mp3';


//start the game
Start = () => {

	counterQuestion = 0
    score = 0
    allQuestions = [...questions]
		counterRender()
	  timer = setInterval(counterRender, 1000)

    displayNewQuestion()

}

//create display the questions
displayNewQuestion = () => {

	 if(allQuestions.length === 0 || counterQuestion > MaxQuestion) {

		 clearInterval(timer)
        localStorage.setItem('recentScore', score)

        return window.location.assign('score.html')
}
counterQuestion++
advance.innerText = `Question ${counterQuestion} of ${MaxQuestion}`

//update progress bar
barFull.style.width = `${(counterQuestion/MaxQuestion) * 100}%`

// Set the timer to 15s
timerQuestion = 15

//randomize the questions
const questionRandom = Math.floor(Math.random() * allQuestions.length)
ongoingQuestion = allQuestions[questionRandom]
question.innerText = ongoingQuestion.question

//receive choices for the questions
choices.forEach(choice => {
    const number = choice.dataset['number']
	 choice.innerText = ongoingQuestion['choice' + number]
    })
allQuestions.splice(questionRandom, 1)

  Answers = true
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
		if(!Answers) return
			Answers = false
		const chosenChoice = e.target
		const selectedAnswer = chosenChoice.dataset['number']
		var assignClass = selectedAnswer == ongoingQuestion.answer ? 'correct' : 'incorrect'

		//add score using if-else
        if(assignClass === 'correct') {
			incrementScore(ScoreMark)

			correct.play()
		} else {
			incorrect.play()
		}
    //add the class
		chosenChoice.parentElement.classList.add(assignClass)

		//remove the class
		setTimeout(() => {
			chosenChoice.parentElement.classList.remove(assignClass)
			           displayNewQuestion()
        }, 1000)
    })
})

incrementScore = number  => {
	score +=number
 scoreContent.innerText = score
}
function counterRender () {
  if (timerQuestion >= 0) {
    timerCount.innerHTML = `${timerQuestion}s`
    timerQuestion--
  } else {
    timerQuestion = 15
    displayNewQuestion()
  }
}
var myVar;

//load the website
function myLoader() {
  myVar = setTimeout(showPage, 3500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
//start the quiz
Start()

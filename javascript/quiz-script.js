var questions = [{
	"question": "What year was the character \u0022Arsène Lupin\u0022 originally created?",
	"option1": "1925",
	"option2": "1905",
	"option3": "1915",
	"option4": "1945",
	"answer": "2"
}, {
	"question": "What valuable item does \u0022Assane\u0022 steal from the Louvre?",
	"option1": "Sapphire Amulet",
	"option2": "Silver Tiara",
	"option3": "Diamond Necklace",
	"option4": "Emerald Jewelry",
	"answer": "3"
}, {
	"question": "How does \u0022Babakar\u0022 die?",
	"option1": "He was killed in prison",
	"option2": "He has a heart attack",
	"option3": "He suffers a stroke",
	"option4": "He falls from a roof",
	"answer": "1"
}, {
	"question": "Which famous French city was \u0022Lupin\u0022 filmed in?",
	"option1": "Lille",
	"option2": "Paris",
	"option3": "Nante",
	"option4": "Marseille",
	"answer": "2"
}, {
	"question": "What's the last name of the wealthy & rich family \u0022Assane\u0022 is entangled with ?",
	"option1": "Sangrini",
	"option2": "Pellegrini",
	"option3": "Mancini",
	"option4": "Corleone",
	"answer": "2"
}, {
	"question": "Who is determined to follow \u0022Assane\u0022 throughout the series?",
	"option1": "Officer Guedira",
	"option2": "Gabriele Dumont",
	"option3": "Capitaine Romain Laugier",
	"option4": "Juliette Pellegrini",
	"answer": "1"
}, {
	"question": "On what platform is Lupine broadcast?",
	"option1": "HBO",
	"option2": "Canal+",
	"option3": "Disney",
	"option4": "Netflix",
	"answer": "4"
}, {
	"question": "What is Assane Diop's Nickname ?",
	"option1": "Assassin",
	"option2": "Gentleman Burglar",
	"option3": "Young Gentleman",
	"option4": "Gentleman Murder",
	"answer": "2"
}, {
	"question": "Who killed Babakar Diop ?",
	"option1": "Unknown Person",
	"option2": "Youssef Guédira",
	"option3": "Gabriel Dumont",
	"option4": "Léonard",
	"answer": "4"
}, {
	"question": "Who was the Assane Diop's Best friend?",
	"option1": "Hubert Pellegrini",
	"option2": "Juliette Pellegrini",
	"option3": "Benjamin Ferel",
	"option4": "Youssef Guédira",
	"answer": "3"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var tryButton = document.getElementById('tryButton')
var homeButton = document.getElementById('homeButton')
var homeButton2 = document.getElementById('homeButton2')

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score + "/" + questions.length * 10;
		tryButton.style.display="block";
		homeButton2.style.display="block";
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
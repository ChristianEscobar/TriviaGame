// Category objects
var _globalView = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	questions: [
	{
		question: 'What sanguine nickname for black market diamonds reflects the wars they\'re said to fund?',
		choiceA: 'Blood Diamonds',
		choiceB: 'White Diamonds',
		choiceC: 'Air Diamonds',
		choiceD: 'Cubic Zirconia', 
		correctAnswer: 'Blood Diamonds',
	},
	{
		question: 'What Southeast Asian nation gets buzzed by bumblebee bats, the world\'s smallest mammals?',
		choiceA: 'Vietnam',
		choiceB: 'Thailand',
		choiceC: 'Indonesia',
		choideD: 'Myanmar',
		correctAnswer: 'Thailand',
	},
	{
		question: 'What city banned pigeon-food vendors at Nelson\'s Column as part of its war on bird droppings?',
		choiceA: 'San Francisco',
		choiceB: 'Hong Kong',
		choiceC: 'London',
		choideD: 'New York',
		correctAnswer: 'London',
	},
	{
		question: 'What Middle Eastern nation bills its Ramon Crater as the largest natural crater in the world?',
		choiceA: 'Israel',
		choiceB: 'Baghdad',
		choiceC: 'Tehran',
		choideD: 'Jerusalem',
		correctAnswer: 'Israel',
	},
	{
		question: 'What nation challenges trekkers to cross an unforgiving plateau called the Great Karroo?',
		choiceA: 'Egypt',
		choiceB: 'Nepal',
		choiceC: 'Tanzania',
		choideD: 'South Africa',
		correctAnswer: 'South Africa',
	}],
};

var _soundAndScreen = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	questions: [
	{
		question: 'What homage to beachwear helped launch Sisqo\'s solo career?',
		choiceA: 'The Macarena',
		choiceB: 'Enter the Dru',
		choiceC: 'The Thong Song',
		choiceD: 'Last Dragon',
		correctAnswer: 'The Thong Song',
	},
	{
		question: 'What did Jason Robards call \"the land of the living dead\"?',
		choiceA: 'The Haight',
		choiceB: 'Disneyland',
		choiceC: 'Hollywood',
		choiceD: 'New York City',
		correctAnswer: 'Hollywood',
	},
	{
		question: 'What Sex and the City principal is a Liverpudlian?',
		choiceA: 'Kim Cattrall',
		choiceB: 'Sarah Jessica Paker',
		choiceC: 'Kristin Davis',
		choiceD: 'Chris Noth',
		correctAnswer: 'Kim Cattrall',
	},
	{
		question: 'What 1999 song introduced Eminem\'s Slim Shady persona?',
		choiceA: 'My Name Is',
		choiceB: 'I\'m Shady',
		choiceC: 'Role Model',
		choiceD: 'Brain Damage',
		correctAnswer: 'My Name Is',
	},
	{
		question: 'Who was the first Taiwanese director to cop an Oscar?',
		choiceA: 'Jackie Chan',
		choiceB: 'Ang Lee',
		choiceC: 'Ariel Lin',
		choiceD: 'Jerry Yan',
		correctAnswer: 'Ang Lee',
	}],
};

var _news = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	questions: [
	{
		question: 'What Long Islander got in hot water with Albion Prison authorities for dying her hair with purplr Kool-Aid?',
		choiceA: 'Dominique Strauss-Khan (Foxy Brown)',
		choiceB: 'Lil Kim',
		choiceC: 'Amy Fisher',
		choiceD: 'Amy Winehouse',
		correctAnswer: 'Amy Fisher',
	},
	{
		question: 'What name was given to the gathering of 750,000-plus women that marched on Washington to oppose gun violence, in 2000?',
		choiceA: 'Mom\'s Against Guns March',
		choiceB: 'The Women Against Guns March',
		choiceC: 'Females Against Guns March',
		choiceD: 'The Million Mom March',
		correctAnswer: 'The Million Mom March',
	},
	{
		question: 'What African leader donned a team jersey to celebrate when the Springboks beat New Zealand at the 1995 Rugby World Cup?',
		choiceA: 'Kofi Atta Annan',
		choiceB: 'Julius Malema',
		choiceC: 'Nelson Mandela',
		choiceD: 'Desmond Tutu',
		correctAnswer: 'Nelson Mandela',
	},
	{
		question: 'What convicted serial killer\'s remains were exhumed from a Massachusetts grave for forensic tests, on October 26, 2001?',
		choiceA: 'Jeffrey Dahmer',
		choiceB: 'Trevor Hardy',
		choiceC: 'Albert DeSalvo\'s',
		choiceD: 'Ricardo Caputo',
		correctAnswer: 'Albert DeSalvo\'s',
	},
	{
		question: 'What convicted serial killer\'s remains were exhumed from a Massachusetts grave for forensic tests, on October 26, 2001?',
		choiceA: 'Jeffrey Dahmer',
		choiceB: 'Trevor Hardy',
		choiceC: 'Albert DeSalvo\'s',
		choiceD: 'Ricardo Caputo',
		correctAnswer: 'Albert DeSalvo\'s',
	},
	{
		question: 'Who sued Abe Hirschfeld for not coughing up the $1 million he promised for her dropping a lawsuit against Bill Clinton?',
		choiceA: 'Paula Jones',
		choiceB: 'Monica Lewinsky',
		choiceC: 'Nancy Kerrigan',
		choiceD: 'Linda Tripp',
		correctAnswer: 'Paula Jones',
	}],
};

var _writtenWord = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	questions: [
	{
		question: 'Who\'s the triangle-haired engineer that doesn\'t take criticism well, in Dilbert?',
		choiceA: 'Dilbert',
		choiceB: 'Wally',
		choiceC: 'Asok',
		choiceD: 'Alice',
		correctAnswer: 'Alice',
	},
	{
		question: 'Who topped the first-ever Forbes list of \"Richest Deceased Celebrities\" in 2001?',
		choiceA: 'Frank Sinatra',
		choiceB: 'Elvis Presley',
		choiceC: 'Jerry Garcia',
		choiceD: 'John Lennon',
		correctAnswer: 'Elvis Presley',
	},
	{
		question: 'What thighmistress squeezed out the diet guide Eat, Cheat and Melt the Fat Away?',
		choiceA: 'Carmen Electra',
		choiceB: 'Cindy Crawford',
		choiceC: 'Suzanne Somers',
		choiceD: 'Martha Steward',
		correctAnswer: 'Suzanne Sommers',
	},
	{
		question: 'What annual sporting event is central to Tom Clancy\'s book The Sum of All Fears?',
		choiceA: 'The Rose Bowl',
		choiceB: 'The NBA Finals',
		choiceC: 'The World Series',
		choiceD: 'The Super Bowl',
		correctAnswer: 'The Super Bowl',
	},
	{
		question: 'What\'s the last name of George MacDonald Fraser\'s brilliant old-school adventurer?',
		choiceA: 'Flashman',
		choiceB: 'Bunyan',
		choiceC: 'Sawyer',
		choiceD: 'Dundee',
		correctAnswer: 'Flashman',
	}],
};

var _innovations = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	questions: [
	{
		question: 'What game console sold over 30 million units, dominating rivals like Intellivision and Colecovision, in the 11 years it was made?',
		choiceA: 'The Nintendo Entertainment System',
		choiceB: 'The Sega Master System',
		choiceC: 'The Commodore 64',
		choiceD: 'The Atari VCS, or 2600',
		correctAnswer: 'The Atari VCS, or 2600',
	},
	{
		question: 'What virus, slated to have its last samples destroyed simultaneously in Atlanta and Moscow, got a reprieve on December 31, 1993?',
		choiceA: 'Polio',
		choiceB: 'Ebola',
		choiceC: 'Smallpox',
		choiceD: 'Rabies',
		correctAnswer: 'Smallpox',
	},
	{
		question: 'What remedy for erectile dysfunction, made with 18 herbs, was unleashed in America in 2000 after 50 years as a hot item in China?',
		choiceA: 'betterMAN',
		choiceB: 'Tiger Balm',
		choiceC: 'Dragon Herbs',
		choiceD: 'Dong Quai',
		correctAnswer: 'betterMAN',
	},
	{
		question: 'What unusual phenomenon knocked out power to six million North Americans in 1989?',
		choiceA: 'a water-spout',
		choiceB: 'a solar storm',
		choiceC: 'ball lighting',
		choiceD: 'a meteor strike',
		correctAnswer: 'a solar storm',
	},
	{
		question: 'What nation enjoyed the world\'s highest percentage of homes with personal computers, byt 2001?',
		choiceA: 'USA',
		choiceB: 'South Korea',
		choiceC: 'Britain',
		choiceD: 'Iceland',
		correctAnswer: 'South Korea',
	}],
};

var _gameTime = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	questions: [
	{
		question: 'How many bulls bite the dust annually in Spanish bull rings?',
		choiceA: '11,000',
		choiceB: '33,000',
		choiceC: '55,000',
		choiceD: '77,000',
		correctAnswer: '11,000',
	},
	{
		question: 'What hip-hop group\'s first kung fu video game racket up 600,000 sales for Playstation?',
		choiceA: 'Run DMC\'s',
		choiceB: 'Wu Tang Clan\'s',
		choiceC: 'N.W.A\'s',
		choiceD: 'Beastie Boys\'',
		correctAnswer: 'Wu Tang Clan\'s',
	},
	{
		question: 'How many homers did Mark McGwire blast in his final 11 at-bats, the year he hit 70?',
		choiceA: 'One',
		choiceB: 'Three',
		choiceC: 'Five',
		choiceD: 'Seven',
		correctAnswer: 'Five',
	},
	{
		question: 'What sport, otherwise banned on Japanese ski slopes, debuted at the 1998 Nagano Olympics?',
		choiceA: 'Snowmobiling',
		choiceB: 'Sledding',
		choiceC: 'Ski Jumping',
		choiceD: 'Snowboarding',
		correctAnswer: 'Snowboarding',
	},
	{
		question: 'Who interrupted his retirement to play in the 1992 NBA All-Star Game, then was named MVP?',
		choiceA: 'Magic Johnson',
		choiceB: 'Michael Jordan',
		choiceC: 'Larry Bird',
		choiceD: 'Karl Malone',
		correctAnswer: 'Magic Johnson',
	}],
};
// End category objects

// Global variables
var _secondsRemaining = 30;
var _intervalId;
// End Global variables

// Listeners
$('#gv-category').on('click', function(){
	displayCategory(this);
});

$('#ww-category').on('click', function(){
	displayCategory(this);
});

$('#ss-category').on('click', function(){
	displayCategory(this);
});

$('#inv-category').on('click', function(){
	displayCategory(this);
});

$('#nws-category').on('click', function(){
	displayCategory(this);
});

$('#gt-category').on('click', function(){
	displayCategory(this);
});

$('#global-view').on('click', function() {
	console.log("global view start");
});

$('#written-word').on('click', function() {
	console.log("written word start");
});

$('#sound-and-screen').on('click', function() {
	console.log("sound and screen start");
});

$('#innovations').on('click', function() {
	console.log("innovations start");
});

$('#news').on('click', function() {
	console.log("news start");
});

$('#game-time').on('click', function() {
	console.log("game time start");
});
// End Listeners

// Displays the details for the selected cateogory.
// Will toggle up all others.
function displayCategory(clickedCategory) {
	$('.category-details').slideUp('slow');
	$('#' + clickedCategory.id + '-details').slideToggle('slow');
}

function startGame() {
	getGlobalViewQuestion();

	startCountdown();
}


function getGlobalViewQuestion() {
	var randomPos = Math.floor(Math.random() * globalViewQuestions.length);

	var questionObj = globalViewQuestions[randomPos];
}

function startCountdown() {
	$("#countdown").html(_secondsRemaining);

	_intervalId = setInterval(countdown, 1000);
}

function countdown() {
	_secondsRemaining--;

	$("#countdown").html(_secondsRemaining);

	if(_secondsRemaining === 0) {
		clearInterval(_intervalId);
		$("#countdown").html('Time\'s Up!');
	}
}
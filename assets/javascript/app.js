var secondsRemaining = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var intervalId;

$('#gv-category').on('click', function(){
        $('#gv-category-details').slideToggle('slow');
});

$('#ww-category').on('click', function(){
        $('#ww-category-details').slideToggle('slow');
});

$('#ss-category').on('click', function(){
        $('#ss-category-details').slideToggle('slow');
});

$('#inv-category').on('click', function(){
        $('#inv-category-details').slideToggle('slow');
});

$('#nws-category').on('click', function(){
        $('#nws-category-details').slideToggle('slow');
});

$('#gt-category').on('click', function(){
        $('#gt-category-details').slideToggle('slow');
});

function startGame() {
	getGlobalViewQuestion();

	startCountdown();
}


function getGlobalViewQuestion() {
	var randomPos = Math.floor(Math.random() * globalViewQuestions.length);

	var questionObj = globalViewQuestions[randomPos];

	console.log(questionObj);
}

function startCountdown() {
	$("#countdown").html(secondsRemaining);

	intervalId = setInterval(countdown, 1000);
}

function countdown() {
	secondsRemaining--;

	$("#countdown").html(secondsRemaining);

	if(secondsRemaining === 0) {
		clearInterval(intervalId);
		$("#countdown").html('Time\'s Up!');
	}
}
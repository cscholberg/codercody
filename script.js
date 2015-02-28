var one = ["fox", "run", "fun", "won", "nun"];
var two = ["kind", "good", "evil", "hate", "gray"];
var three = ["abbot", "cream", "skeet", "truck", "fight"];
var four = ["acidic", "access", "belief", "buddha", "goblin"];
var five = ["alcohol", "cheated", "courage", "godlike", "magnify"]
var answer = "";
var progressArr = [];
var answerArr = [];
var count = 0;
var drawArr = ['head', 'torso', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
var startBool = false;
var wins = 0;
var loses = 0;
var guessesArr = [];

function resetGame(){
	$('#progress').remove();
	$('#guesses').remove();

	$('#head').hide();
	$('#torso').hide();
	$('#leftArm').hide();
	$('#rightArm').hide();
	$('#leftLeg').hide();
	$('#rightLeg').hide();

	progressArr = [];
	answerArr = [];
	guessesArr = [];

	$('#guessField').val('');
	$('#diffLevelField').val('');

	guess = '';
	$('#guesses').remove();
}



function endGame(bool){
	startBool = false;
	count = 0;

	if(bool){
		wins++;
		$('#wins').find('p').remove();
		$('#wins').append('<p>' + wins + '</p>');
		resetGame();
	} else {
		loses++;
		$('#loses').find('p').remove();
		$('#loses').append('<p>' + loses + '</p>');
		resetGame();
	}
	
}


function draw(){
	$('#' + drawArr[count]).show();
	count++;

	if(count >= 6){
		endGame();
	}
}




$(document).ready(function(){
	$('#start').on('click', function(){
		startBool = true;
		var diffLevel = $('#diffLevelField').val();
		answer = selectWord(diffLevel);

		answerArr = answer.split('');
		for(var i = 0; i < answerArr.length; i++){
			progressArr.push('_');
		}

		$('#progressBox').append('<div id="progress">' + progressArr + '</div>');


	});

	
	$('#submit').on('click', function(){
		if(startBool){
			var guess = $('#guessField').val();

		if(guess.length > 1){
			if(guess == answer){
				endGame(true);
			} else {
				endGame(false);
			}
		} else {
			guessesArr.push(guess);
			$('#guesses').remove();
			$('#guessedLetters').append('<div id="guesses">' + guessesArr + ', </div>');
			var bool = false;	
			for(var i = 0; i < answerArr.length + 1; i++){	
				
					if(guess == answerArr[i]){
						progressArr[i] = guess;
						$('#progress').remove();
						$('#progressBox').append('<div id="progress">' + progressArr + '</div>');
						bool = true;
					} else if(answerArr[i] == undefined && bool == false) {
						draw();
					}
				
			}
		}}


			
		}
	)



})

function selectWord(input){
		var i = Math.floor(Math.random() * 5)
		
		if(input == 1) return one[i];
		if(input == 2) return two[i];
		if(input == 3) return three[i];
		if(input == 4) return four[i];
		if(input == 5) return five[i];

}

	





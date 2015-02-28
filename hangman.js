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
	
	$('#guessField').val('');
	$('#diffLevelField').val('');


	progressArr = [];
	answerArr = [];
	guessesArr = [];



	guess = '';

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

	if(count > 5){
		endGame();
	}
}




$(document).ready(function(){
	$('#start').on('click', function(){
		startBool = true;
		
	$('#head').hide();
	$('#torso').hide();
	$('#leftArm').hide();
	$('#rightArm').hide();
	$('#leftLeg').hide();
	$('#rightLeg').hide();

		var diffLevel = $('#diffLevelField').val();
		answer = selectWord(diffLevel);
		$('#diffLevelField').val('');

		answerArr = answer.split('');
		for(var i = 0; i < answerArr.length; i++){
			progressArr.push('_');
		}

		$('#progress').remove();
		$('#guesses').remove();
		$('#progressBox').append('<div id="progress">' + progressArr + '</div>');


	});

	
	$('#submit').on('click', function(){
		if(startBool){
			var guess = $('#guessField').val().toLowerCase();

		if(guess.length > 1){
			if(guess == answer){
				endGame(true);
			} else {
				$('#head').show();
				$('#torso').show();
				$('#leftArm').show();
				$('#rightArm').show();
				$('#leftLeg').show();
				$('#rightLeg').show();
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
						$('#guessField').val('');
					} else if(answerArr[i] == undefined && bool == false) {
						draw();
						$('#guessField').val('');
					}
				
			}
			if(compareArrays(progressArr, answerArr))	
			endGame(true);

		}
		function compareArrays(arr1, arr2){
			for(var i = 0; i < arr1.length; i++){
				if(arr1[i] != arr2[i])
					return false;
			}
				return true;
			
		}

		
			



		}
			
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

	




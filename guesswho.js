	//creating player objects
	var x1 = {
		hair: "Y",
		sex: "M",
		eyes: "G",
		glasses: "Y",
		hat: "Y",
		name: "Joe"
	}


	var x26 = {
		hair: "B",
		sex: "M",
		eyes: "G",
		glasses: "Y",
		hat: "N",
		name: "James"
	}
 

	var x11 = {
		hair: "Y",
		sex: "M",
		eyes: "C",
		glasses: "N",
		hat: "Y",
		name: "Nick"
	}


	var x31 = {
		hair: "B",
		sex: "M",
		eyes: "B",
		glasses: "N",
		hat: "Y",
		name: "Garrett"
	}


	var x6 = {
		hair: "Y",
		sex: "M",
		eyes: "B",
		glasses: "Y",
		hat: "N",
		name: "Tom"
	}


	var x36 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "N",
		hat: "N",
		name: "Frodo"
	}


	var x15 = {
		hair: "Y",
		sex: "F",
		eyes: "G",
		glasses: "N",
		hat: "Y",
		name: "Holly"
	}


	var x20 = {
		hair: "Y",
		sex: "F",
		eyes: "B",
		glasses: "N",
		hat: "N",
		name: "Chelsea"
	}


	var x33 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "Y",
		hat: "Y",
		name: "Kiyan"
	}


	var x23 = {
		hair: "Y",
		sex: "F",
		eyes: "C",
		glasses: "N",
		hat: "Y",
		name: "Mandy"
	}


	var x34 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "Y",
		hat: "N",
		name: "Hunter"
	}


	var x35 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "N",
		hat: "Y",
		name: "Skeet"
	}


	var x30 = {
		hair: "B",
		sex: "M",
		eyes: "B",
		glasses: "Y",
		hat: "N",
		name: "Zach"
	}


	var x9 = {
		hair: "Y",
		sex: "M",
		eyes: "C",
		glasses: "Y",
		hat: "Y",
		name: "Bill"
	}


	var x21 = {
		hair: "Y",
		sex: "F",
		eyes: "C",
		glasses: "Y",
		hat: "Y",
		name: "Kathryn"
	}


	var x28 = {
		hair: "B",
		sex: "M",
		eyes: "G",
		glasses: "N",
		hat: "N",
		name: "Andy"
	}


	var x4 = {
		hair: "Y",
		sex: "M",
		eyes: "G",
		glasses: "N",
		hat: "N",
		name: "Al"
	}


	var x8 = {
		hair: "Y",
		sex: "M",
		eyes: "B",
		glasses: "N",
		hat: "N",
		name: "Dan"
	}	

	var tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "",
		hat: ""
	}

	//declaring boolean to check 
	//if card has been drawn to start game
	var start = false;

	var comp = "";


$(document).ready(function(){

	//draw card button at start of game
	$("#player").on("click", "button", function(){
		start = true;
		var playerDiv = $(this).closest("#player");
		$(this).remove();  //removing draw card button
		var replaceDraw = "<p style='margin-left: 490px'><strong>YOUR CHARACTER</strong></p>";
		playerDiv.append(replaceDraw);
		playerDiv.find("img").remove();
		var player = playerChar();
		playerDiv.prepend(player);
		var comp = compChar();
		

	});


	//setting the object above to user's 
	//choice and clearing old choices
	$("#zero").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "R",
			sex: "",
			eyes: "",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#one").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "Y",
			sex: "",
			eyes: "",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#two").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "B",
			sex: "",
			eyes: "",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#three").on("click", function(){
		if(start == true){		
			tempObj = {
			hair: "",
			sex: "M",
			eyes: "",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#four").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "F",
			eyes: "",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#five").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "G",
			glasses: "",
			hat: ""	
			}
		}
	});

	$("#six").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "B",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#seven").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "C",
			glasses: "",
			hat: ""
			}
		}
	});

	$("#eight").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "",
			glasses: "Y",
			hat: ""
			}
		}
	});

	$("#nine").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "",
			glasses: "N",
			hat: ""
			}
		}
	});

	$("#ten").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "",
			glasses: "",
			hat: "Y"
			}
		}
	});

	$("#eleven").on("click", function(){
		if(start == true){	
			tempObj = {
			hair: "",
			sex: "",
			eyes: "",
			glasses: "",
			hat: "N"
			}
		}
	});

	//change background color after click to red on the clicked button for all attribute buttons
	//and add attribute to the question to the computer
	$(".attributes").on("click", function(){
		if(start == false){
			alert("Please draw a card to start playing!");
		} else {	
			$(".attributes").css({"background-color": "blue"});
			$(this).css({"background-color": "red"});
			var attribute = $(this).find("p").text() + "?";
			var attrHTML = $("<p align='center' id='tempAttr'>" + attribute + "</p>");
			$("#tempAttr").remove();
			$("#attrField").append(attrHTML);
		}
	});	


	//checking game has started and attribute has been selected
	$("#continue").on("click", function(){
		if(start == false){
			alert("Please draw a card to start playing!");
		} else {
			if(tempObj.hair == "" && tempObj.sex == "" && tempObj.eyes == "" && tempObj.glasses == "" && tempObj.hat == ""){
				alert("Please select an attribute to the left before hitting 'CONTINUE...'");
			} else {

				var backCard = "<img class = 'back' src='/images/back.jpg'/>";
				//comparing tempObj w/ compObj
				for(var key in compObj){
					if(tempObj[key] != compObj[key]){
						var matches = "." + key + tempObj[key];
						//var backCard = $("<img class = 'back' src='Back.jpg'/>");						
						$(matches).closest(".piece").append(backCard);
						$(matches).remove();
					} else if(tempObj[key] == compObj[key]){
						if(key == "hair"){
							if(compObj[key] == "Y"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var hairR = "." + key + "R";
								$(hairR).closest(".piece").append(backCard);
								$(hairR).remove();
								
								var hairB = "." + key + "B";
								$(hairB).closest(".piece").append(backCard);
								$(hairB).remove();								
							}

							if(compObj[key] == "B"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");
								
								var hairY = "." + key + "Y";
								$(hairY).closest(".piece").append(backCard);
								$(hairY).remove();
								
								var hairR = "." + key + "R";
								$(hairR).closest(".piece").append(backCard);
								$(hairR).remove();								
							} 
							
							if(compObj[key] == "R"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");
								
								var hairY = "." + key + "Y";
								$(hairY).closest(".piece").append(backCard);
								$(hairY).remove();
								
								var hairB = "." + key + "B";
								$(hairB).closest(".piece").append(backCard);
								$(hairB).remove();								
							}
							
						} else if(key == "sex"){
							if(compObj[key] == "M"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var sexF = "." + key + "F";
								$(sexF).closest(".piece").append(backCard);
								$(sexF).remove();
							} else if(compObj[key] == "F"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var sexM = "." + key + "M";
								$(sexM).closest(".piece").append(backCard);
								$(sexM).remove();
							}
						} else if(key == "eyes"){
							if(compObj[key] == "G"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");
								
								var eyesC = "." + key + "C";
								$(eyesC).closest(".piece").append(backCard);
								$(eyesC).remove();
								
								var eyesB = "." + key + "B";
								$(eyesB).closest(".piece").append(backCard);
								$(eyesB).remove();	
							} else if(compObj[key] == "C"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");
								
								var eyesG = "." + key + "G";
								$(eyesG).closest(".piece").append(backCard);
								$(eyesG).remove();

								var eyesB = "." + key + "B";
								$(eyesB).closest(".piece").append(backCard);
								$(eyesB).remove();									
							} else if(compObj[key] == "B"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");
								
								var eyesG = "." + key + "G";
								$(eyesG).closest(".piece").append(backCard);
								$(eyesG).remove();
								
								var eyesC = "." + key + "C";
								$(eyesC).closest(".piece").append(backCard);
								$(eyesC).remove();									
							}
						} else if(key == "glasses"){
							if(compObj[key] == "Y"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var glassesN = "." + key + "N";
								$(glassesN).closest(".piece").append(backCard);
								$(glassesN).remove();
							} else if(compObj[key] == "N"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var glassesY = "." + key + "Y";
								$(glassesY).closest(".piece").append(backCard);
								$(glassesY).remove();
							}							
						} else if(key == "hat"){
							if(compObj[key] == "Y"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var hatN = "." + key + "N";
								$(hatN).closest(".piece").append(backCard);
								$(hatN).remove();
							} else if(compObj[key] == "N"){
								//var backCard = $("<img class = 'back' src='Back.jpg'/>");

								var hatY = "." + key + "Y";
								$(hatY).closest(".piece").append(backCard);
								$(hatY).remove();
							}
						}
					}
				}
			}
		}
	});


	$("#submitName").on("click", function(){
		//setting the name after SUBMIT NAME is clicked & comparing
		var nameGuess = document.forms["username"]["input"].value;

		//check to see if guess is correct
		if(start == false){
			alert("Please draw a card to start playing!")
		} else {
			if(nameGuess == ""){
				alert("Please enter a name before clicking Guess!");	
			} else {
				if(nameGuess.toLowerCase() == compObj.name.toLowerCase() && start == true){
					alert("Congratulations! You win the game!");
					start = false;
				} else if(nameGuess.toLowerCase() != compObj.name.toLowerCase() && start == true) {
					alert("You lose! Your opponent's character was: " + compObj.name);
					start = false;
				}
			}
		}
	});
}); //end document ready function

//function to generate player character
function playerChar(){
	var num = Math.floor(Math.random() * ((18-1)+1) + 1);
	var result = ""; //player's character

	//setting player's image equal to corresponding 
	//player object
	if(num == 1){
		result = "<img style='margin-left: 75px' src='images/1 - YMGYY.jpg'/>";
		playerObj = x1;
	}
	if(num == 2){
		result = "<img style='margin-left: 75px' src='images/26 - BMGYN.jpg'/>";
		playerObj = x26;
	}
	if(num == 3){
		result = "<img style='margin-left: 75px' src='images/11 - YMCNY.jpg'/>";
		playerObj = x11;
	}
	if(num == 4){
		result = "<img style='margin-left: 75px' src='images/31 - BMBNY.jpg'/>";
		playerObj = x31;
	}
	if(num == 5){
		result = "<img style='margin-left: 75px' src='images/6 - YMBYN.jpg'/>";
		playerObj = x6;
	}
	if(num == 6){
		result = "<img style='margin-left: 75px' src='images/36 - BMCNN.jpg'/>";
		playerObj = x36;
	}
	if(num == 7){
		result = "<img style='margin-left: 75px' src='images/15 - YFGNY.jpg'/>";
		playerObj = x15;
	}
	if(num == 8){
		result = "<img style='margin-left: 75px' src='images/20 - YFBNN.jpg'/>";
		playerObj = x20;
	}
	if(num == 9){
		result = "<img style='margin-left: 75px' src='images/33 - BMCYY.jpg'/>";
		playerObj = x33;
	}
	if(num == 10){
		result = "<img style='margin-left: 75px' src='images/23 - YFCNY.jpg'/>";
		playerObj = x23;
	}
	if(num == 11){
		result = "<img style='margin-left: 75px' src='images/34 - BMCYN.jpg'/>";
		playerObj = x34;
	}
	if(num == 12){
		result = "<img style='margin-left: 75px' src='images/35 - BMCNY.jpg'/>";
		playerObj = x35;
	}
	if(num == 13){
		result = "<img style='margin-left: 75px' src='images/30 - BMBYN.jpg'/>";
		playerObj = x30;
	}
	if(num == 14){
		result = "<img style='margin-left: 75px' src='images/9 - YMCYY.jpg'/>";
		playerObj = x9;
	}
	if(num == 15){
		result = "<img style='margin-left: 75px' src='images/21 - YFCYY.jpg'/>";
		playerObj = x21;
	}
	if(num == 16){
		result = "<img style='margin-left: 75px' src='images/28 - BMGNN.jpg'/>";
		playerObj = x28;
	}
	if(num == 17){
		result = "<img style='margin-left: 75px' src='images/4 - YMGNN.jpg'/>";
		playerObj = x4;
	}
	if(num == 18){
		result = "<img style='margin-left: 75px' src='images/8 - YMBNN.jpg'/>";
		playerObj = x8;
	}

	return result;
};

//function to generate computer's character
function compChar() {
	var num2 = Math.floor(Math.random() * ((18-1)+1) + 1);
	var resultAI = ""; //computer's character

	//setting computer's image equal to
	//corresponding computer object
	if(num2 == 1){
		resultAI = $("<img src='1 - YMGYY.jpg'/>");
		compObj = x1;
	}
	if(num2 == 2){
		resultAI = $("<img src='26 - BMGYN.jpg'/>");
		compObj = x26;
	}
	if(num2 == 3){
		resultAI = $("<img src='11 - YMCNY.jpg'/>");
		compObj = x11;
	}
	if(num2 == 4){
		resultAI = $("<img src='31 - BMBNY.jpg'/>");
		compObj = x31;
	}
	if(num2 == 5){
		resultAI = $("<img src='6 - YMBYN.jpg'/>");
		compObj = x6;
	}
	if(num2 == 6){
		resultAI = $("<img src='36 - BMCNN.jpg'/>");
		compObj = x36;
	}
	if(num2 == 7){
		resultAI = $("<img src='15 - YFGNY.jpg'/>");
		compObj = x15;
	}
	if(num2 == 8){
		resultAI = $("<img src='20 - YFBNN.jpg'/>");
		compObj = x20;
	}
	if(num2 == 9){
		resultAI = $("<img src='33 - BMCYY.jpg'/>");
		compObj = x33;
	}
	if(num2 == 10){
		resultAI = $("<img src='23 - YFCNY.jpg'/>");
		compObj = x23;
	}
	if(num2 == 11){
		resultAI = $("<img src='34 - BMCYN.jpg'/>");
		compObj = x34;
	}
	if(num2 == 12){
		resultAI = $("<img src='35 - BMCNY.jpg'/>");
		compObj = x35;
	}
	if(num2 == 13){
		resultAI = $("<img src='30 - BMBYN.jpg'/>");
		compObj = x30;
	}
	if(num2 == 14){
		resultAI = $("<img src='9 - YMCYY.jpg'/>");
		compObj = x9;
	}
	if(num2 == 15){
		resultAI = $("<img src='21 - YFCYY.jpg'/>");
		compObj = x21;
	}
	if(num2 == 16){
		resultAI = $("<img src='28 - BMGNN.jpg'/>");
		compObj = x28;
	}
	if(num2 == 17){
		resultAI = $("<img src='4 - YMGNN.jpg'/>");
		compObj = x4;
	}
	if(num2 == 18){
		resultAI = $("<img src='8 - YMBNN.jpg'/>");
		compObj = x8;
	}

	return resultAI;	
};
	
	
	
	
	
	
	
	
	
	
	
	
	


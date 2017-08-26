
$(document).ready(function() {	
	var Kenobi = {
		hp:120,
		attack:8,
		counter:20,
		attackPlus:8
	};

	var Luke = {
		hp:150,
		attack:6,
		counter:8,
		attackPlus:6
	};

	var Sidious = {
		hp:90,
		attack:12,
		counter:16,
		attackPlus:12
	};

	var Maul = {
		hp:100,
		attack:10,
		counter:25,
		attackPlus:7
	};

	var allCharacters = [Kenobi, Luke, Sidious, Maul];
	var playerCharacter;
	var currentOpponent;
	var opponentCharacters = [];
	var canAttack = false;
	var defeatedEnemies = 0;

	var kenobiImage = "<img src='assets/images/kenobi.png'>";
	var lukeImage = "<img src='assets/images/luke.jpg'>";
	var sidiousImage = "<img src='assets/images/sidious.png'>";
	var maulImage = "<img src='assets/images/maul.png'>";

	/**
	 *
	 * 
	 * @param  {object} Character
	 * @param  {object}	Character
	 * @return {}
	 */
	function attack(player, enemy) {
      enemy.hp = enemy.hp - player.attack;
      player.attack = player.attack + player.attackPlus;
      if(enemy.hp > 0) {
      	player.hp = player.hp - enemy.counter;
  	  }
      if(enemy.hp <= 0) {
      	defeatedEnemy();
      	if(defeatedEnemies == 3) {
			alert("You win!");
		}
      }
      else if(player.hp <= 0) {
      	defeatedPlayer();
      }
	};

	function defeatedEnemy() {
		canAttack = false;
		$("#defending-enemy").remove();
		bindAll();
		defeatedEnemies++;
	}

	function defeatedPlayer() {
		$("#attack").unbind();
		alert("You lost.");
	}

	function clearSelectionScreen() {
		$("#character-selection").empty();
	}

	/**
	 *  The following Bind functions will bind each character picture to an event handler
	 *  that moves the chosen character to the Defender element. Binding a hero that does
	 *  not exist anymore on the page should be harmless.
	 */

	function kenobiBind() {
		$("#Kenobi").on("click", function() {
			$("#Kenobi").remove();
			$("#defender").append("<div id='defending-enemy' class='enemy-character'><div class='name'>Obi-Wan Kenobi</div>" + kenobiImage + "<div id='enemy-health' class='health'>100</div></div>");
			$("#Luke").unbind();
			$("#Sidious").unbind();
			$("#Maul").unbind();
			currentOpponent = Kenobi;
			canAttack = true;
		});
	}
	function lukeBind() {
		$("#Luke").on("click", function() {
			$("#Luke").remove();
			$("#defender").append("<div id='defending-enemy' class='enemy-character'><div class='name'>Luke Skywalker</div>" + lukeImage + "<div id='enemy-health' class='health'>150</div></div>");
			$("#Kenobi").unbind();
			$("#Sidious").unbind();
			$("#Maul").unbind();
			currentOpponent = Luke;
			canAttack = true;
		});
	}
	function sidiousBind() {
		$("#Sidious").on("click", function() {
			$("#Sidious").remove();
			$("#defender").append("<div id='defending-enemy' class='enemy-character'><div class='name'>Darth Sidious</div>" + sidiousImage + "<div id='enemy-health' class='health'>90</div></div>");
			$("#Luke").unbind();
			$("#Kenobi").unbind();
			$("#Maul").unbind();
			currentOpponent = Sidious;
			canAttack = true;
		});
	}
	function maulBind() {
		$("#Maul").on("click", function() {
			$("#Maul").remove();
			$("#defender").append("<div id='defending-enemy' class='enemy-character'><div class='name'>Darth Maul</div>" + maulImage + "<div id='enemy-health' class='health'>120</div></div>");
			$("#Luke").unbind();
			$("#Sidious").unbind();
			$("#Kenobi").unbind();
			currentOpponent = Maul;
			canAttack = true;
		});
	}

	function bindAll() {
		kenobiBind();
		lukeBind();
		sidiousBind();
		maulBind();
	}
	/**
	 * The following event handlers are the initial handlers that allow the user to
	 * select their character of choice.
	 */

	$("#Kenobi-click").on("click", function() {
		playerCharacter = Kenobi;
		$("#your-character").append("<div class='character'><div class='name'>Obi-Wan Kenobi</div>" + kenobiImage + "<div id='current-health' class='health'>100</div></div>");
		$("#enemy-characters").append("<div class='row'><div id='Luke' class='enemy-character'><div class='name'>Luke Skywalker</div>" + lukeImage + "<div class='health'>150</div></div><div id='Sidious' class='enemy-character'><div class='name'>Darth Sidious</div>" + sidiousImage + "<div class='health'>90</div></div><div id='Maul' class='enemy-character'><div class='name'>Darth Maul</div>" + maulImage + "<div class='health'>120</div></div></div>");
		clearSelectionScreen();
		maulBind();
		lukeBind();
		sidiousBind();
	});

	$("#Luke-click").on("click", function() {
		playerCharacter = Luke;
		$("#your-character").append("<div class='character'><div class='name'>Luke Skywalker</div>" + lukeImage + "<div id='current-health' class='health'>150</div></div>");
		$("#enemy-characters").append("<div class='row'><div id='Kenobi' class='enemy-character'><div class='name'>Obi-Wan Kenobi</div>" + kenobiImage + "<div class='health'>100</div></div><div id='Sidious' class='enemy-character'><div class='name'>Darth Sidious</div>" + sidiousImage + "<div class='health'>90</div></div><div id='Maul' class='enemy-character'><div class='name'>Darth Maul</div>" + maulImage + "<div class='health'>120</div></div></div>");
		clearSelectionScreen();
		kenobiBind();
		maulBind();
		sidiousBind();
	});

	$("#Sidious-click").on("click", function() {
		playerCharacter = Sidious;
		$("#your-character").append("<div class='character'><div class='name'>Darth Sidious</div>" + sidiousImage + "<div id='current-health' class='health'>90</div></div>");
		$("#enemy-characters").append("<div class='row'><div id='Kenobi' class='enemy-character'><div class='name'>Obi-Wan Kenobi</div>" + kenobiImage + "<div class='health'>100</div></div><div id='Luke' class='enemy-character'><div class='name'>Luke Skywalker</div>" + lukeImage + "<div class='health'>150</div></div><div id='Maul' class='enemy-character'><div class='name'>Darth Maul</div>" + maulImage + "<div class='health'>120</div></div></div></div>");
		clearSelectionScreen();
		kenobiBind();
		lukeBind();
		maulBind();
	});

	$("#Maul-click").on("click", function() {
		playerCharacter = Maul;
		$("#your-character").append("<div class='character'><div class='name'>Darth Maul</div>" + maulImage + "<div id='current-health' class='health'>120</div></div>");
		$("#enemy-characters").append("<div class='row'><div id='Kenobi' class='enemy-character'><div class='name'>Obi-Wan Kenobi</div>" + kenobiImage + "<div class='health'>100</div></div><div id='Luke' class='enemy-character'><div class='name'>Luke Skywalker</div>" + lukeImage + "<div class='health'>150</div></div><div id='Sidious' class='enemy-character'><div class='name'>Darth Sidious</div>" + sidiousImage + "<div class='health'>90</div></div></div></div>");
		clearSelectionScreen();
		kenobiBind();
		lukeBind();
		sidiousBind();
	});

	$("#attack").on("click", function() {
		if(canAttack){
			attack(playerCharacter, currentOpponent);
			console.log(playerCharacter.hp + " " + currentOpponent.hp);
			$("#current-health").text(playerCharacter.hp);
			$("#enemy-health").text(currentOpponent.hp);
		}
	});
});


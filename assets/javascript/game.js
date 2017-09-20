//VARIABLES
var wins = 0;
var losses = 0;
var RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19 );

// FUNCTIONS 
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
var startGame = function(){
  // the computer picks a random number between 19 and 120
  RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19 );
  console.log(RandomNumber);
  // the when click gems are random number between 19 and 120
  var gemYellowCounter = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var gemGreenCounter = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var gemBlueCounter = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var gemPinkCounter = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var userCounter = 0;
  // Write that number on screen that number
  $("#number-to-reach").text(RandomNumber);

  // CLICK FUNCTIONS
  $("#gemYellowpic").click(function(){
    userCounter += gemYellowCounter;
    console.log("Yellow is worth", gemYellowCounter);
    console.log("score is now: ", userCounter);
    $("#totalScore").text(userCounter);
    checkScore();
  });

  $("#gemGreenpic").click(function(){
    userCounter += gemGreenCounter;
    console.log("GREEN is worth", gemGreenCounter);
    console.log("score is now: ", userCounter);
    $("#totalScore").text(userCounter);
    checkScore();
  });

  $("#gemPinkpic").click(function(){
    userCounter += gemPinkCounter;
    console.log("PINK is worth", gemPinkCounter);
    console.log("score is now: ", userCounter);
    $("#totalScore").text(userCounter);
    checkScore();
  });

  $("#gemBluepic").click(function(){
    userCounter += gemBlueCounter;
    console.log("BLUE is worth", gemBlueCounter);
    console.log("score is now: ", userCounter);
    $("#totalScore").text(userCounter);
    checkScore();
  });

  function checkScore(){
    if(userCounter === RandomNumber) {
      wins++;
      userCounter = 0;
      $("#totalScore").text(userCounter);
      console.log("wins", wins);
      $("#winsTrack").text(wins);
      startGame();
    }

    if(userCounter > RandomNumber) {
      losses++;
      userCounter = 0;
      $("#totalScore").text(userCounter);
      // alert("Sorry no match, game over")
      console.log("losses", losses);
      $("#lossesTrack").text(losses);
      userCounter=0;
      startGame();
    }
  }
}
startGame();
// Below is the code I tried when I was trying to consoliadate it in a shorter code to avoid repeating myself but the code added everything together with one click instead of with each click. 


  // $(".gemsDiv").click(function(){
      // userCounter += gemYellowCounter;
      // console.log("yellow", gemYellowCounter);
      // userCounter += gemGreenCounter;
      // console.log("green", gemGreenCounter);
      // userCounter += gemPinkCounter;
      // console.log("pink", gemPinkCounter);
      // userCounter += gemBlueCounter;
      // console.log("blue", gemBlueCounter);




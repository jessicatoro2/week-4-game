//VARIABLES
var wins = 0;
var losses = 0;
var RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19 );

// FUNCTIONS 
// When the game begins, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
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
    $("#totalScore").text(userCounter);
    checkScore();
  });

  $("#gemGreenpic").click(function(){
    userCounter += gemGreenCounter;
    $("#totalScore").text(userCounter);
    checkScore();
  });

  $("#gemPinkpic").click(function(){
    userCounter += gemPinkCounter;
    $("#totalScore").text(userCounter);
    checkScore();
  });

  $("#gemBluepic").click(function(){
    userCounter += gemBlueCounter;
    $("#totalScore").text(userCounter);
    checkScore();
  });

  var checkScore = function(){
    if(userCounter === RandomNumber) {
      wins++;
      userCounter = 0;
      // I was trying to make the gems rotate when there was a win which the below code does but I couldn't get it to stop without messing up the count on the other pieces. 
      // var angle = 0;
      // setInterval(function(){
      //   angle+=3;
      //   $(".gemsDiv").rotate(angle);},10);
      // $(".gemsDiv").rotate({ count:4, duration:0.6, easing:'ease-out' });
      $("#totalScore").text(userCounter);
      console.log("wins", wins);
      $("#winsTrack").text(wins);
      startGame();
    }

    if(userCounter > RandomNumber) {
      losses++;
      userCounter = 0;
      $("#totalScore").text(userCounter);
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




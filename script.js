//Global Constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence

 


//Global Variables
var clueHoldTime = 1000;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var strikeprogress = 0;//counts number of strikes
var timeCounterReducer = 1; //temporary fix for the rapid growth upon next start

function startGame() {
  //intialize game variables
  clueHoldTime = 1000;
  strikeprogress = 0;
  progress = 0;
  gamePlaying = true;
  secretpattern();
  
  document.getElementById("timer").innerHTML = "";
  
  document.getElementById("button1").innerHTML = "";
  document.getElementById("button2").innerHTML = "";
  document.getElementById("button3").innerHTML = "";
  document.getElementById("button4").innerHTML = "";
  document.getElementById("button5").innerHTML = "";
  document.getElementById("button6").innerHTML = "";
  
  document.getElementById("strike1").classList.add("hidden");
  document.getElementById("strike2").classList.add("hidden");
  document.getElementById("strike3").classList.add("hidden");
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  document.getElementById("strikeArea").classList.remove("hidden");
  
  playClueSequence();
  startTimer();
}

function stopGame() {
  //intialize game variables
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  document.getElementById("strikeArea").classList.add("hidden");
  stopTimer();
}


function resetGame() {
  //intialize game variables
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function showStrike(stk) {
  document.getElementById("strike" + stk).classList.remove("hidden"); 
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function addStrike() { //presents a strike on the webpage
  if (gamePlaying)
  playBuzzerTone();
  strikeprogress += 1;
  setTimeout(showStrike,0,strikeprogress)
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
    console.log("length of clue is: " + clueHoldTime);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initail wait time
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    console.log("play single clue:" + pattern[i] + " in " + delay + "ms ");
    setTimeout(playSingleClue, delay, pattern[i]); //set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function alertForWin() {
  alert("Game Over. You won!")
}


function alertForLose() {
  alert("Game Over. You lost.")
}

function loseGameStrikes() { //display when player loses due to 3 strikes
  if (gamePlaying) {
  resetGame();
  stopTimer();
  document.getElementById("timer").innerHTML = " 💀💀💀💀💀💀💀💀💀💀💀💀 You were caught trying to stop the virus!!!! 💀💀💀💀💀💀💀💀💀💀💀💀"; 
  document.getElementById("button1").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button2").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button3").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button4").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button5").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button6").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  setTimeout(alertForLose, 1000);
  timeCounterReducer+= 4;
  }
}

function loseGameTimePenalty() { //display when player loses due to running out of time
  if (gamePlaying) {
  resetGame();
  stopTimer();
  document.getElementById("timer").innerHTML = " 🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸 The virus was downloaded! ALIEN TAKEOVER! 🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸 "; 
  document.getElementById("button1").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button2").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button3").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button4").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button5").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  document.getElementById("button6").innerHTML = "👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾";
  setTimeout(alertForLose, 1000);
  timeCounterReducer+= 4;
  }
}

function winGame() {
  if (gamePlaying) {
  resetGame();
  stopTimer();
  document.getElementById("timer").innerHTML = " 🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇 You stopped the virus from being downloaded! VICTORY! 🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇🥇 "; 
  document.getElementById("button1").innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  document.getElementById("button2").innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  document.getElementById("button3").innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  document.getElementById("button4").innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  document.getElementById("button5").innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  document.getElementById("button6").innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  setTimeout(alertForWin, 1000);
  timeCounterReducer+= 4;
  }
}

function timerCounter() { //adds emoji to innerHTML of timer button to act as a time reference
  if (gamePlaying)
    document.getElementById("timer").innerHTML += "🦠";
}

function startTimer() { //start the timercount function
  if (gamePlaying){
  const timerdelay = 1714;
  setInterval(timerCounter, (timerdelay * timeCounterReducer));
  setInterval(loseGameTimePenalty, 120000);
  }
}

function stopTimer() { //stop the starttimer function
  clearInterval(startTimer);
  document.getElementById("timer").innerHTML = "";
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    console.log("user correct")
    guessCounter++;
  } 
  else{
    console.log("user incorrect")
    addStrike();
    console.log(strikeprogress);
    setTimeout(playClueSequence, 2000);
    }
  
  if(strikeprogress == 3){
    loseGameStrikes();
  }
  
  if(guessCounter > progress)
    {
      progress++;
      clueHoldTime -= 130;
      playClueSequence();
    }
  
  if(progress == pattern.length){
    winGame();
  }
}

function secretpattern() {
  for(let i=0;i<8;i++){
     pattern[i] = Math.floor(Math.random() * 6) + 1; //creates the pattern
    //for the game
  }
}

















// Sound Synthesis Functions
const freqMap = {
  1: 523.25,
  2: 466.164,
  3: 415.305,
  4: 622.254,
  5: 587.33,
  6: 698.456,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);


//plays buzzer audio
function playBuzzerTone() {
  document.getElementById("myBuzzer").play();
}

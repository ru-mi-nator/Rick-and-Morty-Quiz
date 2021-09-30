var readlineSync = require('readline-sync');
var chalk = require('chalk');

var  score = 0;

console.log(chalk.green("HEY!" + "\n"));

var userName = readlineSync.question(chalk.greenBright("What's your name ? " + "\n"));
console.log(chalk.red("Welcome " + userName + " to the The Rick and Morty quiz!"));

console.log("------------------------------")

function play(question, options, answer)
{
  var userAnswer = readlineSync.question(question+"\n" + options);

if (userAnswer === answer)
  {
    console.log(chalk.green("You are absolutely correct!"))
    score = score + 1
  }
else 
{
  console.log(chalk.red("Oof! That was incorrect!"))
}

console.log(chalk.blueBright("Your current score is : " + score))
console.log("------------------------------")


}

console.log(chalk.green.bgWhite("LEVEL I"))
console.log(chalk.italic.blue("Score at least 3 points to qualify for the next level!" + '\n'))

console.log("------------------------------")


//Questions


var que1 ={
  question : "Who is Morty based on?",
  options : "a)Frankenstein \nb)Marty from Back To The Future \nc)Hugo Strange \n",
  answer : "b",
}

var que2 ={
  question : "What does Rick use to travel between dimensions and universes?",
  options : "a)Universe Key \nb)Space laser \nc)Portal gun \n",
  answer : "c",
}

var que3 ={
  question : "What is Rick's last name? ",
  options : "a)Sanchez \nb)Smith \nc)Matthew \n",
  answer : "a",
}

var que4 ={
  question : "Who are Rick's two best friends? ",
  options : "a)Beakperson and Squinchy \nb)Eagleperson and Scrunchyr \nc)Birdperson and Squanchy \n ",
  answer : "c",
}

var questionList = [que1, que2, que3, que4,]

for(var i=0 ; i<questionList.length ; i++)
{var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  }



//LEVEL 2

if (score > 2){
  console.log(chalk.greenBright("You Made It To The Next Level!" + "\n"));
  console.log(chalk.green.bgWhite("LEVEL II"));
  console.log(chalk.italic.blue("Score at least 6 points to qualify for the next level!" + "\n"));
  console.log("------------------------------")


var que5 ={
  question : "What species makes up half of Morty's son?",
  options : "a)Gazorpazorp \nb)Gurglenstein \nc)Gaflumarorp \n ",
  answer : "a",
}

var que6 ={
  question : "What word should you never say to a Traflorkian? ",
  options : "a)Hello \nb)Glip-Glop \nc)Mimsypop \n ",
  answer : "b",
}

var que7 ={
  question : "What is Scary Terry's catchphrase?",
  options : "a)Bitch \nb)Kablam \nc)Here's looking at you \n ",
  answer : "a",
}

var que8 ={
  question : "What defunct product does Rick love and long for?",
  options : "a)Tab cola \nb)Duz detergent \nc)McDonald's Szechuan sauce \n ",
  answer : "c",
}

var questionList = [que5, que6, que7, que8,]

for(var i=0 ; i<questionList.length ; i++)
{var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  }




// LEVEL 3


if (score>5)
    { console.log(chalk.blue("You Made It To The Next Level!" + "\n"));
  console.log(chalk.green.bgWhite("LEVEL THREE"));
  console.log(chalk.italic.blue("Time for the final level!!"));
  console.log("------------------------------")
  
  
  var que9 ={
  question : "According to Birdperson, what does - Wubba Lubba dub-dub mean?",
  options : "a)Welcome to the party \nb)Where is the bathroom \nc)I am in great pain, please help me \n ",
  answer : "c",
}

var que10 ={
  question : "Which of these characters does Dan Harmon play in the series?",
  options : "a)Squanchy \nb)Birdperson \nc)Abradolf Lincler \n ",
  answer : "b",
}

var que11 ={
  question : "What popular action program from the 1980s is Rick and Morty's favorite TV series, Ball Fondlers, a parody of?",
  options : "a)A-Team \nb)Airwolf \nc)Magnum-PI \n ",
  answer : "a",
}

var que12 ={
  question : "What does Morty name his sentient, muscle-memory arm?",
  options : "a)Armstrong \nb)Armothy \nc)Armpit \n",
  answer : "b",
}
  
var questionList = [que9, que10, que11, que12,]

for(var i=0 ; i<questionList.length ; i++)
{var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  }

  }
  else {
    console.log(chalk.bold.red("Sorry, you didn't qualify."));

  }

}

else {console.log(chalk.bold.red("Sorry, you didn't qualify."));
  
}

console.log("------------------------------")
console.log(chalk.greenBright(userName + ", your final score is : " + score));
if (score>=11)
  {console.log("You Are A True Fan!!")}

  else if (score<=10 && score>=6) {
    console.log("Pay attention when you watch it the next time!")}
    
else 
{console.log("Have you even watched the show?")}
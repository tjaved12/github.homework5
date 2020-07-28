//Assigning values to variables
var currentDay = document.getElementById("currentDay");
var planed1= document.getElementById("dayPlan1");
var planed2= document.getElementById("dayPlan2");
var planed3= document.getElementById("dayPlan3");
var planed4= document.getElementById("dayPlan4");
var planed5= document.getElementById("dayPlan5");
var planed6= document.getElementById("dayPlan6");
var planed7= document.getElementById("dayPlan7");
var planed8= document.getElementById("dayPlan8");
var planed9= document.getElementById("dayPlan9");
var planed10= document.getElementById("dayPlan10");
var planed11= document.getElementById("dayPlan11");
var timed1 = document.getElementById('time1')
var timed2 = document.getElementById('time2')
var timed3 = document.getElementById('time3')
var timed4 = document.getElementById('time4')
var timed5 = document.getElementById('time5')
var timed6 = document.getElementById('time6')
var timed7 = document.getElementById('time7')
var timed8 = document.getElementById('time8')
var timed9 = document.getElementById('time9')
var timed10 = document.getElementById('time10')
var timed11= document.getElementById('time11')

// Moment.js used for Date function
var now = moment();
var date= now.format("MM/DD/YYYY");
var time = now.format("HH:mm");
//Date and time displayed
currentDay.append(date);
currentTime.append(time)
//Date and Time formatted to compare with row value
var current = now.format("H");
currentM = parseInt(current);
console.log(currentM);
//adding audio
var bleep= new Audio();
bleep.src="bleep-sound.mp3";
function loadContent(){
bleep.play();}

//function to display row background-colors based on time of the day





  function timeRow1() {
    timed1 = parseInt(9);
console.log(timed1);
 if (currentM === timed1){
document.getElementById("row1").style.backgroundColor = "#ff6961";
}
else if (currentM < timed1){
document.getElementById("row1").style.backgroundColor = "#77dd77";
}
else{
document.getElementById("row1").style.backgroundColor = "#d6d4d4";
}}

timeRow1()

function timeRow2() {
 timed2 = parseInt(10);
console.log(timed2);
 if (currentM === timed2){
document.getElementById("row2").style.backgroundColor = "#ff6961";
}
else if (currentM < timed2){
document.getElementById("row2").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row2").style.backgroundColor = "#d6d4d4";
}}   


timeRow2()

function timeRow3() {
timed3 = parseInt(11);
console.log(timed3);
if (currentM === timed3){
document.getElementById("row3").style.backgroundColor = "#ff6961";
}
else if (currentM < timed3){
document.getElementById("row3").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row3").style.backgroundColor = "#d6d4d4";
}

}

timeRow3()

function timeRow4() {

timed4 = parseInt(12);
console.log(timed4);
if (currentM === timed4){
document.getElementById("row4").style.backgroundColor = "#ff6961";
}
else if (currentM < timed4){
document.getElementById("row4").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row4").style.backgroundColor = "#d6d4d4";
}} 


timeRow4()

function timeRow5() {
timed5 = parseInt(13);
console.log(timed5);
if (currentM === timed5){
document.getElementById("row5").style.backgroundColor = "#ff6961";
}
else if (currentM < timed5){
document.getElementById("row5").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row5").style.backgroundColor = "#d6d4d4";
}}


timeRow5()

function timeRow6() {

timed6 = parseInt(14);
console.log(timed6);
if (currentM === timed6){
document.getElementById("row6").style.backgroundColor = "#ff6961";
}
else if (currentM < timed6){
document.getElementById("row6").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row6").style.backgroundColor = "#d6d4d4";
}}

timeRow6()
function timeRow7() {

timed7 = parseInt(15);
console.log(timed7);
if (currentM === timed7){
document.getElementById("row7").style.backgroundColor = "#ff6961";
}
else if (currentM < timed7){
document.getElementById("row7").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row7").style.backgroundColor = "#d6d4d4";
}

}

timeRow7()
function timeRow8() {

timed8 = parseInt(16);
console.log(timed8);
if (currentM === timed8){
document.getElementById("row8").style.backgroundColor = "#ff6961";
}
else if (currentM < timed8){
document.getElementById("row8").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row8").style.backgroundColor = "#d6d4d4";
}

}

timeRow8()
function timeRow9() {
timed9 = parseInt(17);
console.log(timed9);
if (currentM === timed9){
document.getElementById("row9").style.backgroundColor = "#ff6961";
}
else if (currentM < timed9){
document.getElementById("row9").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row9").style.backgroundColor = "#d6d4d4";
}}



timeRow9()
function timeRow10() {

timed10 = parseInt(18);
console.log(timed10);
if (currentM === timed10){
document.getElementById("row10").style.backgroundColor = "#ff6961";
}
else if (currentM < timed10){
document.getElementById("row10").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row10").style.backgroundColor = "#d6d4d4";
}}


timeRow10()
function timeRow11() {

timed11 = parseInt(19);
console.log(timed11);
if (currentM === timed11){
document.getElementById("row11").style.backgroundColor = "#ff6961";
}
else if (currentM < timed11){
document.getElementById("row11").style.backgroundColor = "#77dd77";

}
else{

document.getElementById("row11").style.backgroundColor = "#d6d4d4";
}

}

timeRow11()
    
 

//save button click function save teh value in local storage. Each row has its own save button, saving the value in unique key.
  $("#saveBtn1").on("click",function(){
    console.log("open");
    bleep.play();
    localStorage.setItem("activity1", planed1.value);
  })

  
  $("#saveBtn2").on("click",function(){
    console.log("open");
    bleep.play();    
    localStorage.setItem("activity2", planed2.value);
     
   
  })
  $("#saveBtn3").on("click",function(){
    console.log("open");
    bleep.play();
    localStorage.setItem("activity3", planed3.value);
     
   
  })
  $("#saveBtn4").on("click",function(){
    console.log("open");
    bleep.play();
       calStorage.setItem("activity4", planed4.value);
        
  })
  $("#saveBtn5").on("click",function(){
    console.log("open");
    bleep.play();
       localStorage.setItem("activity5", planed5.value);
     
     })
  $("#saveBtn6").on("click",function(){
    console.log("open");
    bleep.play();
     localStorage.setItem("activity6", planed6.value);
        
  })
  $("#saveBtn7").on("click",function(){
    console.log("open");
    bleep.play();
     localStorage.setItem("activity7", planed7.value);
          })

  $("#saveBtn8").on("click",function(){
    console.log("open");
    bleep.play();
     localStorage.setItem("activity8", planed8.value);
     
     })
  $("#saveBtn9").on("click",function(){
    console.log("open");
    bleep.play();
     localStorage.setItem("activity9", planed9.value);
        
  })
  $("#saveBtn10").on("click",function(){
    console.log("open");
    bleep.play();
     localStorage.setItem("activity10", planed10.value);
     
     })
  
  $("#saveBtn11").on("click",function(){
    console.log("open");
    bleep.play();
     localStorage.setItem("activity11", planed11.value);
       
  })
  //getting the saved values and displaying them in correct row
  var act1= localStorage.getItem("activity1");
  console.log(act1);
  if(act1!==null){
    planed1.innerHTML=" ";
  planed1.append(act1);
  }
var act2= localStorage.getItem("activity2");
console.log(act2);
if(act2!==null){
  planed2.innerHTML=" ";
planed2.append(act2);
}
var act3= localStorage.getItem("activity3");
console.log(act3);
if(act3!==null){
  planed3.innerHTML=" "; 
planed3.append(act3);
}
var act4= localStorage.getItem("activity4");
console.log(act4);
if(act4!==null){
  planed4.innerHTML=" ";
planed4.append(act4);
}
var act5= localStorage.getItem("activity5");
console.log(act5);
if(act5!==null){
  planed5.innerHTML=" ";
planed5.append(act5);
}
var act6= localStorage.getItem("activity6");
console.log(act6);
if(act6!==null){
  planed6.innerHTML=" ";
planed6.append(act6);
}
var act7= localStorage.getItem("activity7");
console.log(act7);
if(act7!==null){
  planed1.innerHTML=" ";
planed7.append(act7);
}
var act8= localStorage.getItem("activity8");
console.log(act8);
if(act8!==null){
  planed1.innerHTML=" ";
planed8.append(act8);
}
var act9= localStorage.getItem("activity9");
console.log(act9);
if(act9!==null){
  planed1.innerHTML=" ";
planed9.append(act9);
}
var act10= localStorage.getItem("activity10");
console.log(act10);
if(act10!==null){
  planed1.innerHTML=" ";
planed10.append(act10);
}
var act11= localStorage.getItem("activity10");
console.log(act11);
if(act11!==null){
  planed1.innerHTML=" ";
planed11.append(act11)

}
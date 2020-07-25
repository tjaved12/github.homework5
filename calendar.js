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
var timedT = document.getElementById('time1')
var now = moment();


var date= now.format("MM/DD/YYYY");
     var time = now.format("HH:mm");
           console.log(now);
      currentDay.append(date);
currentTime.append(time)

  function timeDiff() {
    var current = now.format("HH");
    console.log(current);
    console.log(timedT)
    var timedF=(timedT);
    if(current < timedF){
    document.getElementById("row").style.backgroundCoMlor = "red";
  }
  

    document.getElementById("row").style.backgroundColor = "orange";
  }
  
    //var diff = now - timeblock;
    
    //if diff positive, then it's in the future
    //retun background-color: blue

    //else if diff negative,
    //return background-color: green
  
timeDiff()



  $("#saveBtn1").on("click",function(){
    console.log("open");
    localStorage.setItem("activity1", planed1.value);
  })

  
  $("#saveBtn2").on("click",function(){
    console.log("open");
     localStorage.setItem("activity2", planed2.value);
     
   
  })
  $("#saveBtn3").on("click",function(){
    console.log("open");
     localStorage.setItem("activity3", planed3.value);
     
   
  })
  $("#saveBtn4").on("click",function(){
    console.log("open");
     localStorage.setItem("activity4", planed4.value);
     
   
  })
  $("#saveBtn5").on("click",function(){
    console.log("open");
     localStorage.setItem("activity5", planed5.value);
     
   
  })
  $("#saveBtn6").on("click",function(){
    console.log("open");
     localStorage.setItem("activity6", planed6.value);
     
   
  })
  $("#saveBtn7").on("click",function(){
    console.log("open");
     localStorage.setItem("activity7", planed7.value);
     
   
  })
  $("#saveBtn8").on("click",function(){
    console.log("open");
     localStorage.setItem("activity8", planed8.value);
     
   
  })
  $("#saveBtn9").on("click",function(){
    console.log("open");
     localStorage.setItem("activity9", planed9.value);
     
   
  })
  $("#saveBtn10").on("click",function(){
    console.log("open");
     localStorage.setItem("activity10", planed10.value);
     
   
  })
  
  $("#saveBtn11").on("click",function(){
    console.log("open");
     localStorage.setItem("activity11", planed11.value);
     
   
  })
  
var act1= localStorage.getItem("activity1");
console.log(act1);
if(act1!==null){
planed1.innerHTML=" ";
planed1.append(act1)
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
  planed1.innerHTML="Enter your Appointments";
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
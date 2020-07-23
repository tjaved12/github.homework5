var currentDay = document.getElementById("currentDay");
var saveBtn = document.getElementById("saveBtn")
var planed = document.getElementById("dayplan")

  function today(){

      var today= moment();
      console.log(today);
      currentDay.append(today);

  }

  today();
  saveBtn.addEventListener("click",function(){
    console.log('open')
    localStorage.setItem("activity",planed.value);
    var savedActivity= localStorage.getItem("activity").string;
    planed.append(savedActivity)
console.log(activity);
  })
var currentDay=document.getElementById("currentDay");
var saveBtn =document.getElementById("saveBtn")

  function currentDay(){

      var today= moment();
      console.log(today);
      currentDay.append(today);

  }

  saveBtn.addEventListener("click",function(){
    

  })
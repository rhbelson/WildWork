window.onload=function() {
  var start=document.getElementById("getstarted_button");
  start.addEventListener("click",goto_tasks);

  var pbox=document.getElementById("profile");
  pbox.addEventListener("click",goto_profile);
  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);
  /*var timebox=document.getElementById("time");
  timebox.addEventListener("click",changetime);*/
  changetime();
  localStorage.clear();
}

function goto_profile() {
  location.replace("profile.html");
}


window.setInterval(function(){
  /// call your function here
  changetime();
}, 100);

function goto_tasks() {
	location.replace("tasks.html");
}

function goto_stats(){
  location.replace("stats.html");
}

function goto_todo(){
  location.replace("todolist.html");
}

function changetime() {
	var now = new Date().getTimezoneOffset(300);
	var currentTime = new Date();
  var currentDateString=""
  var weekday=currentTime.getDay();
  switch(weekday) {
      case 0:
      currentDateString+="Monday, ";
        break;
      case 1:
      currentDateString+="Tuesday, ";
        break;
      case 2:
      currentDateString+="Wednesday, ";
        break;
      case 3:
      currentDateString+="Thursday, ";
        break;
      case 4:
      currentDateString+="Friday, ";
        break;
      case 5:
      currentDateString+="Saturday, ";
        break;
      case 6:
      currentDateString+="Sunday, ";
        break;
      default:
        break;
    }
    var month=currentTime.getMonth();
    switch(month) {
      case 0:
      currentDateString+="January ";
        break;
      case 1:
      currentDateString+="February ";
        break;
      case 2:
      currentDateString+="March ";
        break;
      case 3:
      currentDateString+="April ";
        break;
      case 4:
      currentDateString+="May ";
        break;
      case 5:
      currentDateString+="June ";
        break;
      case 6:
      currentDateString+="July ";
        break;
      case 7:
      currentDateString+="August ";
        break;
      case 8:
      currentDateString+="September ";
        break;
      case 9:
      currentDateString+="October ";
        break;
      case 10:
      currentDateString+="November ";
        break;
      case 11:
      currentDateString+="December ";
        break;
      default:
        break;
    }
    currentDateString+=currentTime.getDate();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours-12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	document.getElementById("time").innerHTML=currentTimeString;
  document.getElementById("date").innerHTML=currentDateString;

}
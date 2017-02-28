window.onload=function() {
  var start=document.getElementById("done");
  start.addEventListener("click",goto_todo);
  /*var timebox=document.getElementById("time");
  timebox.addEventListener("click",changetime);*/
  changetime();
  session_task=localStorage.getItem('started_task');
  //session_task=localStorage.getItem('current_task');
  document.getElementById('session_task').innerHTML=session_task;
  session_time=localStorage.getItem('session_length');
  document.getElementById('time-date').innerHTML=session_time;

  var pbox=document.getElementById("profile");
  pbox.addEventListener("click",goto_profile);
  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);
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
function goto_profile() {
  location.replace("profile.html");
}



function changetime() {
	var now = new Date().getTimezoneOffset(300);
	var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours-12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	 /*document.getElementById("time").innerHTML=currentTimeString;*/

}
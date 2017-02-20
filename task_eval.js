window.onload=function() {
  var start=document.getElementById("done");
  start.addEventListener("click",goto_tasks);
  /*var timebox=document.getElementById("time");
  timebox.addEventListener("click",changetime);*/
  changetime();
  session_task=localStorage.getItem('started_task');
  //session_task=localStorage.getItem('current_task');
  document.getElementById('taskName').innerHTML="Great job with: "+session_task;
  session_time=localStorage.getItem('session_length');
  document.getElementById('time-date').innerHTML=session_time;

  var pbox=document.getElementById("probox");
  pbox.addEventListener("click",goto_profile);
}

window.setInterval(function(){
  /// call your function here
  changetime();
}, 100);

function goto_profile() {
  location.replace("profile.html");
}

function goto_tasks() {
	location.replace("todolist.html");
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
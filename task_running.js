var minutesLabel =""
var secondsLabel = "";
var totalSeconds = 0;
/*setInterval(setTime, 1000);*/
var elapsed_time_string="";

window.onload=function() {
  /*var start=document.getElementById("getstarted_box");
  start.addEventListener("click",goto_tasks);
  /*var timebox=document.getElementById("time");
  timebox.addEventListener("click",changetime);*/
  var currtask=localStorage.getItem('started_task');
  document.getElementById("my_task").innerHTML=currtask;
  changetime();
  var tc=document.getElementById("task_complete");
  tc.addEventListener("click",go_eval_task);
  set_time();
  console.log(elapsed_time_string);

  var pbox=document.getElementById("profile");
  pbox.addEventListener("click",goto_profile);
  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);
}

function set_time() {
  totalSeconds=totalSeconds+1;
  secondsLabel= pad(totalSeconds%60);
  minutesLabel = pad(parseInt(totalSeconds/60));
  elapsed_time_string=minutesLabel+":"+secondsLabel;
  document.getElementById('elapsed_time').innerHTML="Time Elapsed: "+elapsed_time_string;
}

            
        

function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }


function go_eval_task() {
  location.replace("task_eval.html");
  localStorage.setItem('session_length',elapsed_time_string);
}


window.setInterval(function(){
  /// call your function here
  changetime();
  set_time();
}, 1000);

// function goto_tasks() {
// 	location.replace("../RACK/tasks.html");
//   localStorage.setItem('session_length',elapsed_time_string);
// }

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

function goto_profile() {
  location.replace("profile.html");
}
function goto_stats(){
  location.replace("stats.html");
}

function goto_todo(){
  location.replace("todolist.html");
}


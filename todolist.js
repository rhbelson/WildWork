window.onload=function() {
  //var start=document.getElementById("getstarted_box");
  //start.addEventListener("click",goto_tasks);
  /*var timebox=document.getElementById("time");
  timebox.addEventListener("click",changetime);*/
  changetime();


  st1=document.getElementById('b1');
  st2=document.getElementById('b2');
  st3=document.getElementById('b3');
  st4=document.getElementById('b4');
  st5=document.getElementById('b5');
  st6=document.getElementById('b6');
  st1.addEventListener("click",start_task1);
  st2.addEventListener("click",start_task2);
  st3.addEventListener("click",start_task3);
  st4.addEventListener("click",start_task4);
  st5.addEventListener("click",start_task5);
  st6.addEventListener("click",start_task6);




  t_1=localStorage.getItem('t1');
  document.getElementById('input_box1').innerHTML=t_1;
  
  t_2=localStorage.getItem('t2');
  document.getElementById('input_box2').innerHTML=t_2;

  t_3=localStorage.getItem('t3');
  document.getElementById('input_box3').innerHTML=t_3;
  t_4=localStorage.getItem('t4');
  document.getElementById('input_box4').innerHTML=t_4;

  t_5=localStorage.getItem('t5');
  document.getElementById('input_box5').innerHTML=t_5;

  t_6=localStorage.getItem('t6');
  document.getElementById('input_box6').innerHTML=t_6;
}





window.setInterval(function(){
  /// call your function here
  changetime();
}, 100);


function start_task1() {
  console.log("hi");
  localStorage.setItem('started_task',t_1);
  location.replace("../RACK/task_running.html");

}
function start_task2() {
  localStorage.setItem('started_task',t_2);
  location.replace("../RACK/task_running.html");
}
function start_task3() {
  localStorage.setItem('started_task',t_3);
  location.replace("../RACK/task_running.html");
}
function start_task4() {
  localStorage.setItem('started_task',t_4);
  location.replace("../RACK/task_running.html");
}
function start_task5() {
  localStorage.setItem('started_task',t_5);
  location.replace("../RACK/task_running.html");
}
function start_task6() {
  localStorage.setItem('started_task',t_6);
  location.replace("../RACK/task_running.html");
}

function goto_tasks() {
	location.replace("../RACK/tasks.html");
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
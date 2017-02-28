window.onload=function() {
  //var start=document.getElementById("getstarted_box");
  //start.addEventListener("click",goto_tasks);
  /*var timebox=document.getElementById("time");
  timebox.addEventListener("click",changetime);*/
  changetime();
  var add_newtask=document.getElementById("new_task");
  add_newtask.addEventListener("click",add_new_tasks);
  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);


  


  var pbox=document.getElementById("profile");
  pbox.addEventListener("click",goto_profile);
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
  document.getElementById('input_box1').style.visibility="hidden";
  document.getElementById('input_box2').style.visibility="hidden";
  document.getElementById('input_box3').style.visibility="hidden";
  document.getElementById('input_box4').style.visibility="hidden";
  document.getElementById('input_box5').style.visibility="hidden";
  document.getElementById('input_box6').style.visibility="hidden";
  document.getElementById('b1').style.visibility="hidden";
  document.getElementById('b2').style.visibility="hidden";
  document.getElementById('b3').style.visibility="hidden";
  document.getElementById('b4').style.visibility="hidden";
  document.getElementById('b5').style.visibility="hidden";
  document.getElementById('b6').style.visibility="hidden";
  document.getElementById('dt1').style.visibility="hidden";
  document.getElementById('dt2').style.visibility="hidden";
  document.getElementById('dt3').style.visibility="hidden";
  document.getElementById('dt4').style.visibility="hidden";
  document.getElementById('dt5').style.visibility="hidden";
  document.getElementById('dt6').style.visibility="hidden";
 




  t_1=localStorage.getItem('t1');
  if (t_1) {
  document.getElementById('input_box1').style.visibility="visible";
  document.getElementById('input_box1').innerHTML=t_1;
  document.getElementById('b1').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="150px";
  document.getElementById('dt1').style.visibility="visible";
}
  
  t_2=localStorage.getItem('t2');
  if (t_2) {
  document.getElementById('input_box2').style.visibility="visible";
  document.getElementById('input_box2').innerHTML=t_2;
  document.getElementById('b2').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="280px";
  document.getElementById('dt2').style.visibility="visible";
}

  t_3=localStorage.getItem('t3');
  if (t_3) {
  document.getElementById('input_box3').style.visibility="visible";
  document.getElementById('input_box3').innerHTML=t_3;
  document.getElementById('b3').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="400px";
  document.getElementById('dt3').style.visibility="visible";
}
  t_4=localStorage.getItem('t4');
  if (t_4) {
  document.getElementById('input_box4').style.visibility="visible";
  document.getElementById('input_box4').innerHTML=t_4;
  document.getElementById('b4').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="525px";
  document.getElementById('dt4').style.visibility="visible";
  }
  

  t_5=localStorage.getItem('t5');
  if (t_5) {
  document.getElementById('input_box5').innerHTML=t_5;
  document.getElementById('input_box5').style.visibility="visible";
  document.getElementById('b5').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="650px";
  document.getElementById('dt5').style.visibility="visible";
}

  t_6=localStorage.getItem('t6');
  if (t_6) {
  document.getElementById('input_box6').innerHTML=t_6;
  document.getElementById('input_box6').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="775px";
  document.getElementById('b6').style.visibility="visible";
  document.getElementById('new_task').style.visibility="visible";
  document.getElementById('dt6').style.visibility="visible";
}


  var dt1=document.getElementById("dt1");
  dt1.addEventListener("click",delete_t1);
  var dt2=document.getElementById("dt2");
  dt2.addEventListener("click",delete_t2);
  var dt3=document.getElementById("dt3");
  dt3.addEventListener("click",delete_t3);
  var dt4=document.getElementById("dt4");
  dt4.addEventListener("click",delete_t4);
  var dt5=document.getElementById("dt5");
  dt5.addEventListener("click",delete_t5);
  var dt6=document.getElementById("dt6");
  dt6.addEventListener("click",delete_t6);
}


function refactor() {
  document.getElementById('input_box1').style.visibility="hidden";
  document.getElementById('input_box2').style.visibility="hidden";
  document.getElementById('input_box3').style.visibility="hidden";
  document.getElementById('input_box4').style.visibility="hidden";
  document.getElementById('input_box5').style.visibility="hidden";
  document.getElementById('input_box6').style.visibility="hidden";
  document.getElementById('b1').style.visibility="hidden";
  document.getElementById('b2').style.visibility="hidden";
  document.getElementById('b3').style.visibility="hidden";
  document.getElementById('b4').style.visibility="hidden";
  document.getElementById('b5').style.visibility="hidden";
  document.getElementById('b6').style.visibility="hidden";
  document.getElementById('dt1').style.visibility="hidden";
  document.getElementById('dt2').style.visibility="hidden";
  document.getElementById('dt3').style.visibility="hidden";
  document.getElementById('dt4').style.visibility="hidden";
  document.getElementById('dt5').style.visibility="hidden";
  document.getElementById('dt6').style.visibility="hidden";
 




  t_1=localStorage.getItem('t1');
  if (t_1) {
  document.getElementById('input_box1').style.visibility="visible";
  document.getElementById('input_box1').innerHTML=t_1;
  document.getElementById('b1').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="150px";
  document.getElementById('dt1').style.visibility="visible";
}
  
  t_2=localStorage.getItem('t2');
  if (t_2) {
  document.getElementById('input_box2').style.visibility="visible";
  document.getElementById('input_box2').innerHTML=t_2;
  document.getElementById('b2').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="275px";
  document.getElementById('dt2').style.visibility="visible";
}

  t_3=localStorage.getItem('t3');
  if (t_3) {
  document.getElementById('input_box3').style.visibility="visible";
  document.getElementById('input_box3').innerHTML=t_3;
  document.getElementById('b3').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="400px";
  document.getElementById('dt3').style.visibility="visible";
}
  t_4=localStorage.getItem('t4');
  if (t_4) {
  document.getElementById('input_box4').style.visibility="visible";
  document.getElementById('input_box4').innerHTML=t_4;
  document.getElementById('b4').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="525px";
  document.getElementById('dt4').style.visibility="visible";
  }
  

  t_5=localStorage.getItem('t5');
  if (t_5) {
  document.getElementById('input_box5').innerHTML=t_5;
  document.getElementById('input_box5').style.visibility="visible";
  document.getElementById('b5').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="650px";
  document.getElementById('dt5').style.visibility="visible";
}

  t_6=localStorage.getItem('t6');
  if (t_6) {
  document.getElementById('input_box6').innerHTML=t_6;
  document.getElementById('input_box6').style.visibility="visible";
  document.getElementById("To-Do-List").style.height="775px";
  document.getElementById('b6').style.visibility="visible";
  document.getElementById('new_task').style.visibility="hidden";
  document.getElementById('dt6').style.visibility="visible";
}


  var dt1=document.getElementById("dt1");
  dt1.addEventListener("click",delete_t1);
  var dt2=document.getElementById("dt2");
  dt2.addEventListener("click",delete_t2);
  var dt3=document.getElementById("dt3");
  dt3.addEventListener("click",delete_t3);
  var dt4=document.getElementById("dt4");
  dt4.addEventListener("click",delete_t4);
  var dt5=document.getElementById("dt5");
  dt5.addEventListener("click",delete_t5);
  var dt6=document.getElementById("dt6");
  dt6.addEventListener("click",delete_t6);
}



function delete_t1() {
  document.getElementById("b1").style.visibility="hidden";
  document.getElementById("dt1").style.visibility="hidden";
  document.getElementById("input_box1").style.visibility="hidden";
  localStorage.removeItem('t1');
  rearrange_tasks();
}
function delete_t2() {
  document.getElementById("b2").style.visibility="hidden";
  console.log("delete_t2 function removed");
  document.getElementById("dt2").style.visibility="hidden";
  document.getElementById("input_box2").style.visibility="hidden";
  localStorage.removeItem('t2');
  rearrange_tasks();
}
function delete_t3() {
  document.getElementById("b3").style.visibility="hidden";
  document.getElementById("dt3").style.visibility="hidden";
  document.getElementById("input_box3").style.visibility="hidden";
  localStorage.removeItem('t3');
  rearrange_tasks();
}
function delete_t4() {
  document.getElementById("b4").style.visibility="hidden";
  document.getElementById("dt4").style.visibility="hidden";
  document.getElementById("input_box4").style.visibility="hidden";
  localStorage.removeItem('t4');
  rearrange_tasks();
}
function delete_t5() {
  document.getElementById("b5").style.visibility="hidden";
  document.getElementById("dt5").style.visibility="hidden";
  document.getElementById("input_box5").style.visibility="hidden";
  localStorage.removeItem('t5');
  rearrange_tasks();
}
function delete_t6() {
  document.getElementById("b6").style.visibility="hidden";
  document.getElementById("dt6").style.visibility="hidden";
  document.getElementById("input_box6").style.visibility="hidden";
  localStorage.removeItem('t6');
  rearrange_tasks();
}

function resize() {
  number_tasks=parseInt(localStorage.getItem('num_tasks'));
  number_tasks=parseInt(number_tasks)-parseInt(1);
  localStorage.setItem('number_tasks',number_tasks);
  console.log("Your NEW number of tasks"+number_tasks);
  if (number_tasks==1) {
    localStorage.removeItem('t2');
    localStorage.removeItem('t3');
    localStorage.removeItem('t4');
    localStorage.removeItem('t5');
    localStorage.removeItem('t6');
  }
  if (number_tasks==2) {
    localStorage.removeItem('t3');
    localStorage.removeItem('t4');
    localStorage.removeItem('t5');
    localStorage.removeItem('t6');
  }
  if (number_tasks==3) {
    localStorage.removeItem('t4');
    localStorage.removeItem('t5');
    localStorage.removeItem('t6');
  }
  if (number_tasks==4) {
    localStorage.removeItem('t5');
    localStorage.removeItem('t6');
  }
  if (number_tasks==5) {
    localStorage.removeItem('t6');   
  }
}

function rearrange_tasks() {
  t_1=localStorage.getItem('t1');
  if (t_1==null) {
    if (t_2){
    localStorage.setItem('t1',t_2);}
    if (t_3){
    localStorage.setItem('t2',t_3);}
    if (t_4){
    localStorage.setItem('t3',t_4);}
    if (t_5){
    localStorage.setItem('t4',t_5);}
    if (t_6){
    localStorage.setItem('t5',t_6);}
    resize();
    refactor();
  }
  t_2=localStorage.getItem('t2');
  if (t_2==null) {
    if (t_2){
    localStorage.setItem('t2',t_3);}
    if (t_3){
    localStorage.setItem('t3',t_4);}
    if (t_4){
    localStorage.setItem('t4',t_5);}
    if (t_5){
    localStorage.setItem('t5',t_6);}
    resize();
    refactor();
  }
  t_3=localStorage.getItem('t3');
  if (t_3==null) {
    if (t_4){
    localStorage.setItem('t3',t_4);}
    if (t_5){
    localStorage.setItem('t4',t_5);}
    if (t_6){
    localStorage.setItem('t5',t_6);}
    resize();
    refactor();
  }
  t_4=localStorage.getItem('t4');
  if (t_4==null) {
    if (t_5){
    localStorage.setItem('t4',t_5);}
    if (t_6){
    localStorage.setItem('t5',t_6);}
    resize();
    refactor();
  }
  t_5=localStorage.getItem('t5');
  if (t_5==null) {
    if (t_6){
    localStorage.setItem('t5',t_6);}
    resize();
    refactor();
  }
  t_6=localStorage.getItem('t6');
  if (t_6==null) {
    resize();
    refactor();
  }

}



window.setInterval(function(){
  /// call your function here
  changetime();
}, 100);


function start_task1() {
  console.log("hi");
  localStorage.setItem('started_task',t_1);
  location.replace("task_running.html");

}
function start_task2() {
  localStorage.setItem('started_task',t_2);
  location.replace("task_running.html");
}
function start_task3() {
  localStorage.setItem('started_task',t_3);
  location.replace("task_running.html");
}
function start_task4() {
  localStorage.setItem('started_task',t_4);
  location.replace("task_running.html");
}
function start_task5() {
  localStorage.setItem('started_task',t_5);
  location.replace("task_running.html");
}
function start_task6() {
  localStorage.setItem('started_task',t_6);
  location.replace("task_running.html");
}

function goto_tasks() {
	location.replace("tasks.html");
}


function add_new_tasks() {
  location.replace("tasks.html");
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

function goto_profile() {
  location.replace("profile.html");
}

function goto_stats(){
  location.replace("stats.html");
}

function goto_todo(){
  location.replace("todolist.html");
}
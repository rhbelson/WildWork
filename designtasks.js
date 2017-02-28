 window.onload = function() {
 	cb=document.getElementById("continue_button");
 	cb.addEventListener("click",goto_todolist)
 	  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);

 	/*Make All Elements invisible to start*/
 	document.getElementById("due_date1").style.visibility = "hidden";
 	document.getElementById("due_date2").style.visibility = "hidden";
 	document.getElementById("due_date3").style.visibility = "hidden";
 	document.getElementById("due_date4").style.visibility = "hidden";
 	document.getElementById("due_date5").style.visibility = "hidden";
 	document.getElementById("due_date6").style.visibility = "hidden";
 	document.getElementById("input_box1").style.visibility = "hidden";
 	document.getElementById("input_box2").style.visibility = "hidden";
 	document.getElementById("input_box3").style.visibility = "hidden";
 	document.getElementById("input_box4").style.visibility = "hidden";
 	document.getElementById("input_box5").style.visibility = "hidden";
 	document.getElementById("input_box6").style.visibility = "hidden";
 	document.getElementById("cal1").style.visibility = "hidden";
 	document.getElementById("cal2").style.visibility = "hidden";
 	document.getElementById("cal3").style.visibility = "hidden";
 	document.getElementById("cal4").style.visibility = "hidden";
 	document.getElementById("cal5").style.visibility = "hidden";
 	document.getElementById("cal6").style.visibility = "hidden";
 	document.getElementById("task_type1").style.visibility="hidden";
 	document.getElementById("task_type2").style.visibility="hidden";
 	document.getElementById("task_type3").style.visibility="hidden";
 	document.getElementById("task_type4").style.visibility="hidden";
 	document.getElementById("task_type5").style.visibility="hidden";
 	document.getElementById("task_type6").style.visibility="hidden";
 	document.getElementById("scale1").style.visibility="hidden";
 	document.getElementById("scale2").style.visibility="hidden";
 	document.getElementById("scale3").style.visibility="hidden";
 	document.getElementById("scale4").style.visibility="hidden";
 	document.getElementById("scale5").style.visibility="hidden";
 	document.getElementById("scale6").style.visibility="hidden";

 	var pbox=document.getElementById("profile");
 	pbox.addEventListener("click",goto_profile);




 	t_1=localStorage.getItem('t1');
 	if (t_1) {
 	document.getElementById("input_box1").style.visibility = "visible";
 	document.getElementById('input_box1').innerHTML=t_1;
 	document.getElementById("due_date1").style.visibility = "visible";
 	document.getElementById("cal1").style.visibility = "visible";
 	document.getElementById("task_type1").style.visibility="visible";
 	document.getElementById("scale1").style.visibility="visible";
 	}
 
 	t_2=localStorage.getItem('t2');
 	if (t_2) {
 	document.getElementById('input_box2').innerHTML=t_2;
 	document.getElementById("input_box2").style.visibility = "visible";
 	document.getElementById("due_date2").style.visibility = "visible";
 	document.getElementById("cal2").style.visibility = "visible";
 	document.getElementById("task_type2").style.visibility="visible";
 	document.getElementById("scale2").style.visibility="visible";
	}
	t_3=localStorage.getItem('t3');
	if (t_3) {
 	document.getElementById('input_box3').innerHTML=t_3;
 	document.getElementById("input_box3").style.visibility = "visible";
 	document.getElementById("due_date3").style.visibility = "visible";
 	document.getElementById("cal3").style.visibility = "visible";
 	document.getElementById("task_type3").style.visibility="visible";
 	document.getElementById("scale3").style.visibility="visible";
	}
	t_4=localStorage.getItem('t4');
	if (t_4) {
	document.getElementById("input_box4").style.visibility = "visible";
 	document.getElementById('input_box4').innerHTML=t_4;
 	document.getElementById("due_date4").style.visibility = "visible";
 	document.getElementById("cal4").style.visibility = "visible";
 	document.getElementById("task_type4").style.visibility="visible";
 	document.getElementById("scale4").style.visibility="visible";
	}
 	t_5=localStorage.getItem('t5');
 	if (t_5) {
 	document.getElementById("input_box5").style.visibility = "visible";
 	document.getElementById('input_box5').innerHTML=t_5;
 	document.getElementById("due_date5").style.visibility = "visible";
 	document.getElementById("cal5").style.visibility = "visible";
 	document.getElementById("task_type5").style.visibility="visible";
 	document.getElementById("scale5").style.visibility="visible";
 	}

 	t_6=localStorage.getItem('t6');
 	if (t_6) {
 	document.getElementById("input_box6").style.visibility = "visible";
 	document.getElementById('input_box6').innerHTML=t_6;
 	document.getElementById("due_date6").style.visibility = "visible";
 	document.getElementById("cal6").style.visibility = "visible";
 	document.getElementById("task_type6").style.visibility="visible";
 	document.getElementById("scale6").style.visibility="visible";
 	}
}


 function goto_todolist() {
 	location.replace("todolist.html");
 	console.log("hi");
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
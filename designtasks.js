 window.onload = function() {
 	cb=document.getElementById("continue_button");
 	cb.addEventListener("click",goto_todolist)
 	/*Make All Elements invisible to start*/
 	document.getElementById("due_date1").style.visibility = "hidden";
 	document.getElementById("due_date2").style.visibility = "hidden";
 	document.getElementById("due_date3").style.visibility = "hidden";
 	document.getElementById("due_date4").style.visibility = "hidden";
 	document.getElementById("input_box1").style.visibility = "hidden";
 	document.getElementById("input_box2").style.visibility = "hidden";
 	document.getElementById("input_box3").style.visibility = "hidden";
 	document.getElementById("input_box4").style.visibility = "hidden";
 	document.getElementById("cal1").style.visibility = "hidden";
 	document.getElementById("cal2").style.visibility = "hidden";
 	document.getElementById("cal3").style.visibility = "hidden";
 	document.getElementById("cal4").style.visibility = "hidden";
 	document.getElementById("task_type1").style.visibility="hidden";
 	document.getElementById("task_type2").style.visibility="hidden";
 	document.getElementById("task_type3").style.visibility="hidden";
 	document.getElementById("task_type4").style.visibility="hidden";
 	/*document.getElementById("completeness1").style.visibility="hidden";
 	document.getElementById("completeness2").style.visibility="hidden";
 	document.getElementById("completeness3").style.visibility="hidden";
 	document.getElementById("completeness4").style.visibility="hidden";*/





 	t_1=localStorage.getItem('t1');
 	if (t_1) {
 	document.getElementById("input_box1").style.visibility = "visible";
 	document.getElementById('input_box1').innerHTML=t_1;
 	document.getElementById("due_date1").style.visibility = "visible";
 	document.getElementById("cal1").style.visibility = "visible";
 	document.getElementById("task_type1").style.visibility="visible";
 }
 
 	t_2=localStorage.getItem('t2');
 	if (t_2) {
 	document.getElementById('input_box2').innerHTML=t_2;
 	document.getElementById("input_box2").style.visibility = "visible";
 	document.getElementById("due_date2").style.visibility = "visible";
 	document.getElementById("cal2").style.visibility = "visible";
 	document.getElementById("task_type2").style.visibility="visible";
}
	t_3=localStorage.getItem('t3');
	if (t_3) {
 	document.getElementById('input_box3').innerHTML=t_3;
 	document.getElementById("input_box3").style.visibility = "visible";
 	document.getElementById("due_date3").style.visibility = "visible";
 	document.getElementById("cal3").style.visibility = "visible";
 	document.getElementById("task_type3").style.visibility="visible";
}
	t_4=localStorage.getItem('t4');
	if (t_4) {
	document.getElementById("input_box4").style.visibility = "visible";
 	document.getElementById('input_box4').innerHTML=t_4;
 	document.getElementById("due_date4").style.visibility = "visible";
 	document.getElementById("cal4").style.visibility = "visible";
 	document.getElementById("task_type4").style.visibility="visible";
}
 	t_5=localStorage.getItem('t5');
 	if (t_5) {
 	document.getElementById('input_box5').innerHTML=t_5;
 }

 	t_6=localStorage.getItem('t6');
 	if (t_6) {
 	document.getElementById('input_box6').innerHTML=t_6;
 }

 	var pbox=document.getElementById("profile_box");
 	pbox.addEventListener("click",goto_profile);
 }

 function goto_todolist() {
 	location.replace("todolist.html");
 }

 function goto_profile() {
  location.replace("profile.html");
}
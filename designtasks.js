 window.onload = function() {
 	cb=document.getElementById("continue_button");
 	cb.addEventListener("click",goto_todolist)
 	t_1=localStorage.getItem('t1');
 	document.getElementById('input_box1').innerHTML=t_1;
 	
 	t_2=localStorage.getItem('t2');
 	document.getElementById('input_box2').innerHTML=t_2;

 	t_3=localStorage.getItem('t3');
 	document.getElementById('input_box3').innerHTML=t_3;

 	// t_4=localStorage.getItem('t4');
 	// document.getElementById('input_box4').innerHTML=t_4;

 	// t_5=localStorage.getItem('t5');
 	// document.getElementById('input_box5').innerHTML=t_5;

 	// t_6=localStorage.getItem('t6');
 	// document.getElementById('input_box6').innerHTML=t_6;
 }

 function goto_todolist() {
 	location.replace("todolist.html");
 }
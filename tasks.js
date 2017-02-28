var task1="";
var task2="";
var task3="";
var task4="";
var task5="";
var task6="";
var maxplus=false;
var numtask=1;
var height=70;

function moveplus() {
	var p=document.getElementById('plusbutton');
	var style=p.currentStyle || window.getComputedStyle(p);
    var but2="editable";
    but2=but2.concat(String(numtask));
    var list=document.getElementById('my_tasks_list');
    var style4=list.currentStyle || window.getComputedStyle(list);
    

    var nt=localStorage.getItem('num_tasks');
    if (nt==null) {
        localStorage.setItem('num_tasks',2);
        console.log("You have 2 tasks");
    }

    else { 
        localStorage.setItem('num_tasks',parseInt(nt)+parseInt(1));
        console.log("You have "+ (localStorage.getItem('num_tasks'))+"tasks");
    }


    if(numtask<6) {
        numtask+=1;
        var but="editable";
        but=but.concat(String(numtask));
        console.log(but);


        var e2s=document.getElementById(but);
        var style2=e2s.currentStyle || window.getComputedStyle(e2s);
        e2s.style.visibility="visible";

        height=height+70;
        var nh=String(height)+"px";
        console.log(nh);
        list.style.height=nh;

        var e3s=document.getElementById(but2);
        var style3=e3s.currentStyle || window.getComputedStyle(e3s);
}



	var mt=style.marginTop;
	
	var new_mt=mt.charAt(0)+mt.charAt(1)+mt.charAt(2);
	new_mt=parseInt(new_mt);
    if (new_mt>589) { /*Make function to limit how far + sign can go down*/
        maxplus=true;
    }
    if (maxplus==false) {
	new_mt=parseInt(new_mt)+parseInt(70);
}
	
	console.log(new_mt);
	var original=String(new_mt)+"px";

	p.style.marginTop=String(original);

}


function cont() {
    location.replace("designtasks.html");


}


 window.onload = function() {
    var continue_button=document.getElementById('continue_button');
    continue_button.addEventListener("click",cont);

    var pbox=document.getElementById("profile");
    pbox.addEventListener("click",goto_profile);
  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);

  function goto_profile() {
  location.replace("profile.html");
}
function goto_tasks() {
    location.replace("tasks.html");
}

function goto_stats(){
  location.replace("stats.html");
}

function goto_todo(){
  location.replace("todolist.html");
}

    var e1 = document.getElementById('editable1');
    var e2=document.getElementById('editable2');
    var e3=document.getElementById('editable3');
    var e4=document.getElementById('editable4');
    var e5=document.getElementById('editable5');
    var e6=document.getElementById('editable6');
    var p=document.getElementById('plusbutton');
    p.addEventListener("click",moveplus);

    e1.onclick = function(e) {
        this.contentEditable = true;
        document.getElementById('editable1').innerHTML="";
        this.focus();

    }

    e1.onmouseout = function() {
        this.style.border = '';
        this.contentEditable = false;
        task1=document.getElementById('editable1').innerHTML; 
        localStorage.setItem('t1', task1);
        //document.getElementById("e2").style.opacity=0.8;
        //document.getElementById("e2").style.backgroundColor="rgb(c0,c0,c0)";
   		
    }
    e2.onclick = function(e) {
        this.contentEditable = true;
        document.getElementById('editable2').innerHTML="";
        this.focus();
    }

    e2.onmouseout = function() {
        this.style.border = '';
        this.contentEditable = false;
        task2=document.getElementById('editable2').innerHTML;
        localStorage.setItem('t2', task2);
    }
    e3.onclick = function(e) {
        this.contentEditable = true;
        document.getElementById('editable3').innerHTML="";
        this.focus();
    }

    e3.onmouseout = function() {
        this.style.border = '';
        this.contentEditable = false;
        task3=document.getElementById('editable3').innerHTML;
        localStorage.setItem('t3', task3);
    }
    e4.onclick = function(e) {
        this.contentEditable = true;
        document.getElementById('editable4').innerHTML="";
        this.focus();
    }

    e4.onmouseout = function() {
        this.style.border = '';
        this.contentEditable = false;
        task4=document.getElementById("editable4").innerHTML;
        localStorage.setItem('t4', task4);
    }
    e5.onclick = function(e) {
        this.contentEditable = true;
        document.getElementById('editable5').innerHTML="";
        this.focus();
    }

    e5.onmouseout = function() {
        this.style.border = '';
        this.contentEditable = false;
        task5=document.getElementById("editable5").innerHTML;
        localStorage.setItem('t5', task5);
    }
    e6.onclick = function(e) {
        this.contentEditable = true;
        document.getElementById('editable6').innerHTML="";
        this.focus();
    }

    e6.onmouseout = function() {
        this.style.border = '';
        this.contentEditable = false;
        task6=document.getElementById("editable6").innerHTML;
        localStorage.setItem('t6', task6);
    }




    t_1=localStorage.getItem('t1');
    if (t_1) {
        document.getElementById("editable1").innerHTML=t_1;
        document.getElementById("editable1").style.visibility="visible";
    }
    t_2=localStorage.getItem('t2');
    if (t_2) {
        document.getElementById("editable2").innerHTML=t_2;
        document.getElementById("editable2").style.visibility="visible";
        moveplus();
    }
    t_3=localStorage.getItem('t3');
    if (t_3) {
        document.getElementById("editable3").innerHTML=t_3;
        document.getElementById("editable3").style.visibility="visible";
        moveplus();
    }
    t_4=localStorage.getItem('t4');
    if (t_4) {
        document.getElementById("editable4").innerHTML=t_4;
        document.getElementById("editable4").style.visibility="visible";
        moveplus();
    }
    t_5=localStorage.getItem('t5');
    if (t_5) {
        document.getElementById("editable5").innerHTML=t_5;
        document.getElementById("editable5").style.visibility="visible";
        moveplus();
    }
    t_6=localStorage.getItem('t6');
    if (t_6) {
        document.getElementById("editable6").innerHTML=t_6;
        document.getElementById("editable6").style.visibility="visible";
        moveplus();
    }


        }

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
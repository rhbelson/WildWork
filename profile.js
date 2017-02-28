window.onload=function() {
	var save=document.getElementById("save_changes");
  	save.addEventListener("click",changes_save);

  	var pbox=document.getElementById("profile");
  pbox.addEventListener("click",goto_profile);
  var stats=document.getElementById("stats");
  stats.addEventListener("click",goto_stats);
  var todo=document.getElementById("todo");
  todo.addEventListener("click",goto_todo);
  var todo1=document.getElementById("navbar-header");
  todo1.addEventListener("click",goto_todo);


}

function changes_save() {
	 location.replace("todolist.html");
	 console.log("Hi");
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
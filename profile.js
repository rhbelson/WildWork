window.onload=function() {
	var save=document.getElementById("save_changes");
  	save.addEventListener("click",changes_save);


}

function changes_save() {
	 location.replace("todolist.html");
	 console.log("Hi");
}
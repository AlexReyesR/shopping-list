function createLiElement(value) {
	let newHtml = `
				<li>
					<div class="itemName">
      					${value}
      				</div>
      				<div class="buttonsDiv">
	      				<button type="submit" class="checkButton">
	      					Check
	      				</button>
	      				<button type="submit" class="deleteButton">
	      					Delete
	      				</button>
	      			</div>
      			</li> `
	$("#listItems").append(newHtml);
}

$("form > button").on("click", function(event){
	event.preventDefault();
	let newItem = $("#inputItem").val();
	createLiElement(newItem);
	$("#inputItem").val("");
});

$("#listItems").on("click", ".checkButton", function(event){
	event.preventDefault();
	if( $(this).parent().parent().hasClass("checked") )  {
		$(this).parent().parent().removeClass("checked");
	}
	else {
		$(this).parent().parent().addClass("checked");	
	}
});

$("#listItems").on("click", ".deleteButton", function(event){
	event.preventDefault();
	$(this).parent().parent().remove();
});
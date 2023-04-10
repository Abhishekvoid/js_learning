const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Adding event listener to the "Add Task" button
addTaskButton.addEventListener("click", function() {
	// Creating a new task item
	const newTaskItem = document.createElement("li");
	const taskText = document.createTextNode(newTaskInput.value);
	newTaskItem.appendChild(taskText);

	// Adding the new task item to the list
	taskList.appendChild(newTaskItem);

	// Clearing the input field
	newTaskInput.value = "";
});
// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(e) {
	// prevent form from refreshing
	e.preventDefault();
	// Todo DIV
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// Create LI
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// Checkmark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	// Delete button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);
	// Append to list
	todoList.appendChild(todoDiv);
	// Clear input value & return cursor to input field
	todoInput.value = '';
	todoInput.focus();
	todoInput.select();
}

function deleteCheck(e) {
	// console.log(e.target); // get the console log to show whichj element has been clicked.
	const item = e.target;
	// Delete Todo list
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		todo.remove();
	}
}

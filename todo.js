document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    // Function to add a task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return; // Prevent adding empty tasks

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-task');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        li.addEventListener('dblclick', editTask); 
        li.addEventListener('click', toggleComplete); 

        taskList.appendChild(li);
        newTaskInput.value = ''; // Clear the input field
    }

    // Edit task function
    function editTask() {
        const currentText = this.firstChild.textContent;
        const newText = prompt('Edit your task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            this.firstChild.textContent = newText.trim();
        }
    }

    // Toggle completed task
    function toggleComplete() {
        this.classList.toggle('completed');
    }

    // Add task button event
    addTaskButton.addEventListener('click', addTask);

    // Handle Enter key for adding tasks
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent any default form submission
            addTask();
        }
    });
});

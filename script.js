document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    li.appendChild(removeButton);

    taskSpan.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });

    taskList.appendChild(li);
}

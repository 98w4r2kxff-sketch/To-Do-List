let tasks = [];

// Add task
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    input.value = "";

    renderTasks();
}

// Render tasks
function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleComplete(${index})" style="cursor:pointer;">
                ${task.text}
            </span>

            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">X</button>
            </div>
        `;

        list.appendChild(li);
    });
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Toggle complete / incomplete
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Edit task
function editTask(index) {
    let newTask = prompt("Edit your task:", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].text = newTask.trim();
        renderTasks();
    }
}
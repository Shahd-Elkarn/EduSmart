// ==================== USER CHECK ====================
const currentUser = getCurrentUser();

if (!currentUser) {
    window.location.href = "/Auth/Login/Login.html";
}

// Unique key per user
const TASKS_KEY = `tasks_${currentUser.email}`;

// ==================== DOM ELEMENTS ====================
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const endDayBtn = document.getElementById('endDayBtn');

// ==================== LOAD TASKS ====================
let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
renderTasks();


// ==================== SAVE TASKS ====================
function saveTasks() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// ==================== RENDER TASKS ====================
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span style="text-decoration:${task.completed ? 'line-through' : 'none'}">
                ${task.text}
            </span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                <button 
                    style="background:red;color:white;border:none;border-radius:5px;padding:0.3rem 0.5rem;margin-left:0.5rem;"
                    data-delete="${index}">
                    X
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// ==================== ADD TASK ====================
addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();

    if (!text) return;

    tasks.push({
        text,
        completed: false,
        createdAt: new Date().toISOString()
    });

    saveTasks();
    taskInput.value = '';
    renderTasks();
});

// ==================== TOGGLE COMPLETE ====================
taskList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const index = e.target.dataset.index;
        tasks[index].completed = e.target.checked;
        saveTasks();
        renderTasks();
    }
});

// ==================== DELETE TASK ====================
taskList.addEventListener('click', (e) => {
    if (e.target.dataset.delete) {
        const index = e.target.dataset.delete;
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
});

// ==================== END DAY SUMMARY ====================
endDayBtn.addEventListener('click', () => {
    const incomplete = tasks.filter(task => !task.completed);

    if (incomplete.length > 0) {
        alert(
            "You didn't complete these tasks today:\n" +
            incomplete.map(t => `- ${t.text}`).join('\n')
        );
    } else {
        alert("Great job! You completed all your tasks today ✅");
    }
});


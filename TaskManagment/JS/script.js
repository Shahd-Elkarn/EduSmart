
  
        const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');
        const endDayBtn = document.getElementById('endDayBtn');

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        function renderTasks() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span style="text-decoration:${task.completed ? 'line-through' : 'none'}">${task.text}</span>
                    <div>
                        <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                        <button style="background:red; color:white; border:none; border-radius:5px; padding:0.3rem 0.5rem; margin-left:0.5rem;" data-delete="${index}">X</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        }

        addTaskBtn.addEventListener('click', () => {
            const text = taskInput.value.trim();
            if(text){
                tasks.push({ text, completed: false });
                localStorage.setItem('tasks', JSON.stringify(tasks));
                taskInput.value = '';
                renderTasks();
            }
        });

        taskList.addEventListener('change', (e) => {
            if(e.target.type === 'checkbox'){
                const index = e.target.dataset.index;
                tasks[index].completed = e.target.checked;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            }
        });

        taskList.addEventListener('click', (e) => {
            if(e.target.dataset.delete){
                const index = e.target.dataset.delete;
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            }
        });

        endDayBtn.addEventListener('click', () => {
            const incomplete = tasks.filter(task => !task.completed);
            if(incomplete.length > 0){
                alert("You didn't complete these tasks today:\n" + incomplete.map(t => "- " + t.text).join('\n'));
            } else {
                alert("Great job! You completed all your tasks today ✅");
            }
        });

        renderTasks();
   
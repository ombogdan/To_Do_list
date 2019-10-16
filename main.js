const localStorageKey = 'todos';
let todos = [];
const localStorageString = localStorage.getItem(localStorageKey);

if (localStorageString !== null) {
    todos = JSON.parse(localStorageString);
}

let activeTodoIndex = null;
const addTodo = () => {
    const taskNameEl = document.getElementById('task_name');
    const taskName = taskNameEl.value;
    const taskStat = false;

    if (activeTodoIndex === null) {
        todos.push(taskName);
    } else {
        todos[activeTodoIndex] = taskName;
    }

    taskNameEl.value = '';
    activeTodoIndex = null;
    document.getElementById('saveEditBtn').innerText = 'Create';
    renderTodos(todos);
    updateStorage();
};

const renderTodos = () => {
    const list = document.createElement('ul');
    for (const todoIndex in todos) {
        const todoEl = document.createElement('li');
        const nameOfTask = document.createElement('span');
        nameOfTask.innerText = todos[todoIndex];
        todoEl.appendChild(nameOfTask);

        const editButton = document.createElement('button');
        editButton.setAttribute("id", "editBtn");
        editButton.innerText = 'Edit';

        editButton.onclick = () => {
            edit(todoIndex);
        };

        todoEl.appendChild(editButton);
        list.appendChild(todoEl);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("id", "deleteBtn");
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => {
            deleteToDos(todoIndex);
        };
        todoEl.appendChild(deleteButton);
        list.appendChild(todoEl);
    }
    const todoListDiv = document.getElementById('todo-list');
    todoListDiv.innerHTML = '';
    todoListDiv.appendChild(list);
    updateStorage();
};

const updateStorage = () => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
};

const edit = index => {
    activeTodoIndex = index;
    document.getElementById('task_name').value = todos[index];
    const saveEditBtn = document.getElementById('saveEditBtn');
    saveEditBtn.innerText = 'Save';
};
const deleteToDos = index => {
    delete todos[index];
    renderTodos();

};
window.onload = function () {

    document.getElementById('task_name').onkeypress = function searchKeyPress(event) {
        if (event.keyCode === 13) {
            document.getElementById('saveEditBtn').click();
        }
    };
};

renderTodos();
(function() {

    window.addEventListener('load', windowLoadHandler, false);

    var item = document.createElement('li');

    // checkbox
    //var checkbox = document.createElement('input');
    var checkbox = event.target;
    var index = checkbox.getAttribute('data-todo-id');
    var todo = todoListItems[index];
    todo.completed = checkbox.checked;
    //localStorage.setItem('todo-list', JSON.stringify(todoListItems));
    checkbox.className = 'toggle';
    checkbox.type = 'checkbox';

    checbox.addEventListener('change', checkboxChangeHandler);

    checkbox.checked = todoListItems[i].completed;
    checkbox.setAttribute('data-todo-id', i);

    function checkboxChangeHandler(e) {

    }

    function migrateData() {
        var i, l;
        for (i = 0, l = todoListItems.length; i < l; i++) {
            item = todoListItems[i];
            if (typeof(item) === 'string') {
                todoListItems[i] = new TodoItem(item, false);
            }
        }
    }

    // label

    var label = document.createElement('label');
    label.appendChild(
        document.createTextNode(todoListItems[i])
    );

    //div wrapper

    var divDisplay = document.createElement('div');
    divDisplay.className = 'view';
    divDisplay.appendChild(checkbox);
    divDisplay.appendChild(label);
    item.appendChild(divDisplay);
    list.appendChild(item);

    //constructors
    function TodoItem(title, completed) {
        this.title = title;
        this.completed = completed;
    }

    var todoListItems = [];

    function redrawList() {

        var i;
        var list = document.getElementById('todo-list');
        var l = todoListItems.length;
        list.innerHTML = "";

        for (i = 0; i < l; i++) {

            var item = document.createElement('li');
            label.appendChild(
                document.createTextNode(todoListItems[i].title));
        }
    }

    function addToList(item) {
        var todo = new TodoItem(title, false);
        todoListItems.push(todo);
        //localStorage.setItem('todo-list', JSON.stringify(todoListItems));
    }

    function reloadList(item) {

        var stored = localStorage.getItem('todo-list');
        if (stored) {
            todoListItems = JSON.parse(stored);
        }
        redrawList();
    }


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
            var todoField = document.getElementById('new-todo');
            addToList(todoField.value);
            redrawList();
            todoField.value = "";
            /* list.innerHTML += ('<li>' + todo + '</li>'); */
        }
    }

    window.addEventListener('load', windowLoadHandler, false);

    function windowLoadHandler() {
        reloadList();
        document.getElementById('new-todo').addEventListener('keypress', newTodoKeyPressHandler, false);
    }

}());
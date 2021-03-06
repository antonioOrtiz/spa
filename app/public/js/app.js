(function() {

    var todoListItems = [];

    //constructors
    function TodoItem(title, completed) {
        this.title = title;
        this.completed = completed;
    }

    function redrawList() {

        var i;
        var list = document.getElementById('todo-list');
        var l = todoListItems.length;
        list.innerHTML = '';

        for (i = 0; i < l; i++) {
            var todo = todoListItems[i];
            var item = document.createElement('li');
            if (todo.completed) {
                item.className += "completed"
            }


            // checkbox

            var checkbox = document.createElement('input');
            checkbox.className = 'toggle';
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', checkboxChangeHandler);    
            checkbox.checked = todo.completed;
            checkbox.setAttribute('data-todo-id', i);
            //localStorage.setItem('todo-list', JSON.stringify(todoListItems));

            // label
            var label = document.createElement('label');
            label.appendChild(document.createTextNode(todo.title));


            //div wrapper
            var divDisplay = document.createElement('div');
            divDisplay.className = 'view';
            divDisplay.appendChild(checkbox);
            divDisplay.appendChild(label);

            item.appendChild(divDisplay);
            list.appendChild(item);
        }
    }

    function addToList(title) {
        var todo = new TodoItem(title, false);
        todoListItems.push(todo);
        saveList();
        //localStorage.setItem('todo-list', JSON.stringify(todoListItems));
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

    function reloadList(item) {
        var stored = localStorage.getItem('todo-list');
        if (stored) {
            todoListItems = JSON.parse(stored);
           migrateData();
          }
          redrawList();
    }

   function saveList() {
          localStorage.setItem('todo-list', JSON.stringify(todoListItems));
    }

     function checkboxChangeHandler(event) {
          var checkbox = event.target;
          var index = checkbox.getAttribute('data-todo-id');
          var todo = todoListItems[index];
          todo.completed = checkbox.checked;
          saveList();
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
      // (function() {

      //   var todoListItems = [];

      //   function TodoItem(title, completed) {
      //     this.title = title;
      //     this.completed = completed;
      //   }

      //   function redrawList() {
      //     var i;
      //     var list = document.getElementById('todo-list');
      //     var len = todoListItems.length;
      //     list.innerHTML="";
      //     for(i=0;i<len;i++) {
      //       var todo = todoListItems[i];
      //       var item = document.createElement("li");
      //       if (todo.completed) {
      //         item.className += "completed"
      //       }

      //       // checkbox

      //       var checkbox = document.createElement('input');
      //       checkbox.className = "toggle";
      //       checkbox.type = "checkbox";
      //       checkbox.addEventListener('change', checkboxChangeHandler);
      //       checkbox.checked = todo.completed;
      //       checkbox.setAttribute('data-todo-id', i);

      //       // label

      //       var label = document.createElement('label');
      //       label.appendChild(document.createTextNode(todo.title));

      //       // div wrapper

      //       var divDisplay = document.createElement('div');
      //       divDisplay.className="view";
      //       divDisplay.appendChild(checkbox);
      //       divDisplay.appendChild(label);

      //       item.appendChild(divDisplay);

      //       list.appendChild(item);
      //     }
      //   }
      //   function addToList(title) {
      //     var todo = new TodoItem(title, false);
      //     todoListItems.push(todo);
      //     saveList();
      //   }

      //   function migrateData() {
      //     var i,l;
      //     for (i=0,l=todoListItems.length;i<l;i++) {
      //       item = todoListItems[i];
      //       if (typeof(item) === 'string') {
      //         todoListItems[i] = new TodoItem(item, false);
      //       }
      //     }
      //   }

      //   function reloadList(item) {
      //     var stored = localStorage.getItem('todo-list');
      //     if (stored) {
      //       todoListItems = JSON.parse(stored);
      //       migrateData();
      //     }
      //     redrawList();
      //   }
      //   function saveList() {
      //     localStorage.setItem('todo-list', JSON.stringify(todoListItems));
      //   }
      //   function checkboxChangeHandler(event) {
      //     var checkbox = event.target;
      //     var index = checkbox.getAttribute('data-todo-id');
      //     var todo = todoListItems[index];
      //     todo.completed = checkbox.checked;
      //     saveList();
      //     redrawList();
      //   }

      //   function newTodoKeyPressHandler(event) {
      //     if (event.keyCode === 13) {
      //       var todoField = document.getElementById('new-todo');
      //       addToList(todoField.value);

      //       redrawList();
      //       todoField.value = "";
      //     }
      //   }
      //   window.addEventListener('load', windowLoadHandler, false);
      //   function windowLoadHandler() {
      //     reloadList();
      //     document.getElementById('new-todo').addEventListener('keypress', newTodoKeyPressHandler, false);
      //   }
      // }());
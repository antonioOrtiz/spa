(function() {

    window.addEventListener('load', windowLoadHandler, false);

    var todoListItems = [];

    function redrawList() {

        var i;
        var list = document.getElementById('todo-list');
        var l = todoListItems.length;
        list.innerHTML = "";

        for (i = 0; i < l; i++) {

            var item = document.createElement('li');
            item.appendChild(
                document.createTextNode(todoListItems[i]));
            list.appendChild(item);
        }
    }
    
    function addToList(item) {
        todoListItems.push(item);
        localStorage.setItem('todo-list', JSON.stringify(todoListItems));
    }

    function reloadList(item){

    	var stored = localStorage.getItem('todo-list');
    		if(stored){
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


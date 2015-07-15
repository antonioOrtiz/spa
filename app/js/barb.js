(function() {


    window.addEventListener('load', windowLoadHandler, false);


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
<<<<<<< HEAD
        	var todo = document.getElementById('new-do');
        	var list = document.getElementById('todo-list');
        	list.innerHTML += ("<li>"+ todo + "</li>");
=======
            var todoField = document.getElementById('new-todo').value;
            alert('We have a new Todo! ' + todoField);
            var list = document.getElementById('todo-list'), 
            item = document.createElement('li');
            item.appendChild(item);
            item.appendChild(document.createTextNode(todoField.value));
            todoField.value = '';

            //list.innerHTML += ("<li>" + todo + "</li>");
>>>>>>> refs/remotes/origin/master

        }
    }

    function windowLoadHandler() {
        document.getElementById('new-todo').addEventListener(
            'keypress',
            newTodoKeyPressHandler,
            false
        );
    }


}());
(function() {

    console.log('im getting frustrated!');

    window.addEventListener('load', windowHandler, false);


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
        	var todo = document.getElementById('new-do').value;
        	var list = document.getElementById('todo-list');
        	list.innerHTML += ("<li>"+ todo + "</li>");
            console.log('We have a new Todo!' + todo);

        }
    }

    function windowHandler() {
        document.getElementById('new-todo').addEventListener(
            'keypress',
            newTodoKeyPressHandler,
            false
        );
    }


})();
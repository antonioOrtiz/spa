(function() {

    console.log('im getting frustrated!');

    window.addEventListener('load', windowHandler, false);


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
        	var todo = document.getElementById('new-do');
        	var list = document.getElementById('todo-list');
        	list.innerHTML += ("<li>"+ todo + "</li>");

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
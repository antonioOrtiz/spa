(function() {


    window.addEventListener('load', windowLoadHandler, false);


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
            var todo = document.getElementById('new-todo').value;
            alert('We have a new Todo!' + todo);
            var list = document.getElementById('todo-list');
            list.innerHTML += ("<li>" + todo + "</li>");

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
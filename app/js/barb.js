(function() {


    window.addEventListener('load', windowLoadHandler, false);


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
            var todoField = document.getElementById('new-todo').value;
            alert('We have a new Todo! ' + todoField);
            var list = document.getElementById('todo-list'), 
            item = document.createElement('li');
            item.appendChild(item);
            item.appendChild(document.createTextNode(todoField.value));
            todoField.value = '';

            //list.innerHTML += ("<li>" + todo + "</li>");

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
(function() {

    console.log('im getting frustrated!');

    window.addEventListener('load', windowHandler, false);


    function newTodoKeyPressHandler(e) {
        if (e.keyCode === 13) {
        	var todo = document.getElementById('new-do').value;
            alert('We have a new Todo!');
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
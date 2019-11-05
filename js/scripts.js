//Business Logic for TodoList
function TodoList () {
    this.todos = [],
    this.currentId = 0
}

TodoList.prototype.addTodoItem = function(todoItem) {
    todoItem.id = this.assignId();
    this.todos.push(todoItem);
}

TodoList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}
TodoList.prototype.findtodoItem = function(id) {
    for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i]) {
            if (this.todos[i].id == id) {
                return this.todos[i];
            }
        }
    };
    return false;
}
TodoList.prototype.deletetodoItem = function(id) {
    for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i]) {
            if (this.todos[i].id == id) {
                delete this.todos[i];
                return true;
            }
        }
    };
    return false;
}

//Business Logic for Todos
function Todo (todoName, todoNote) {
    this.todoName = todoName,
    this.todoNote = todoNote 
}





//User interface logic
var List = new TodoList();

$(document).ready(function() {
    $("form#inputItem").submit(function(event) {
        event.preventDefault();
        var inputtedTodo = $("input#new-todo-item").val();
        var inputtedNote = $("input#new-todo-note").val();

        var newTodo = new Todo(inputtedTodo, inputtedNote);
        List.addTodoItem(newTodo);
        console.log(List.todos);
    })
})
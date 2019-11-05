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

function displayTodoDetails(todoDetailsDisplay) {
    var todoOutputList = $("ul#output-list");
    var htmlForStoredTodos = "";
    todoDetailsDisplay.todos.forEach(function(todoItem) {
    htmlForStoredTodos += "<li id=" + todoItem.id + ">" + todoItem.todoName + "</li>";
    });
    todoOutputList.html(htmlForStoredTodos);
};

function showTodo(todoId) {
    var todo = List.findtodoItem(todoId);
    $("#show-list-details").show();
    $(".todoName").html(todo.todoName);
    $(".todoNote").html(todo.todoNote);
    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + + todo.id +  ">Delete</button>");
}

function attachTodoListener() {
    $("ul#output-list").on("click", "li", function() {
        showTodo(this.id);
    });
    $("#buttons").on("click", ".deleteButton", function() {
        List.deletetodoItem(this.id);
        $("#show-list-details").hide();
        displayTodoDetails(List);
      });
    };




$(document).ready(function() {
    attachTodoListener();
    $("form#inputItem").submit(function(event) {
        event.preventDefault();
        var inputtedTodo = $("input#new-todo-item").val();
        var inputtedNote = $("input#new-todo-note").val();

        var newTodo = new Todo(inputtedTodo, inputtedNote);
        List.addTodoItem(newTodo);
        displayTodoDetails(List);
    })
})
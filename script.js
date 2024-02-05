//your code here
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  var newTodoInput = document.getElementById('newTodoInput');
  var addTodoBtn = document.getElementById('addTodoBtn');
  var todoList = document.getElementById('todoList');

  // Add click event for the Add todo button
  addTodoBtn.addEventListener('click', function () {
    // Get the value from the input
    var newTodoText = newTodoInput.value.trim();

    // Validate if the input is not empty
    if (newTodoText !== '') {
      // Create a new list item
      var newTodoItem = document.createElement('li');

      // Set the text of the list item
      newTodoItem.textContent = newTodoText;

      // Add the new list item to the todoList
      todoList.appendChild(newTodoItem);

      // Clear the input
      newTodoInput.value = '';
    }
  });
});



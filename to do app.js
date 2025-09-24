const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  // Check button
  const checkBtn = document.createElement("span");
  checkBtn.innerHTML = "✔";
  checkBtn.className = "check-btn";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  // Append
  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Mark complete
  checkBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Remove task
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
});

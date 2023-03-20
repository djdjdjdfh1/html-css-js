const form = document.querySelector("#workout-add")
const workoutList = document.querySelector("#workout-list")

form.addEventListener("submit", addList)

function addList(e) {
    e.preventDefault();

    const input = document.querySelector("#workout-add input");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML= input.value;
    input.value = "";

    const button = document.createElement("button");
    button.innerHTML = "X";

    workoutList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener("click", deleteList);
}

function deleteList(e) {
    li= e.target.parentNode
    li.remove();
}

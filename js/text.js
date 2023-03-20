const workoutTextForm = document.querySelector("#workout-text");

workoutTextForm.addEventListener("submit", addHead)

function addHead(event) {
    event.preventDefault();
    
    // input태그 히든
    workoutTextForm.classList.add("hidden");
    
    const workout = document.querySelector("#workout");
    const workoutH1 = document.querySelector("#workout-h1")
    // h1태그 이너텍스트
    workoutH1.innerHTML += " " + workout.value;
    workoutH1.classList.remove("hidden");

    // 리스트 추가텍스트와 li 히든 해제
    document.querySelector("#workout-list").classList.remove("hidden");
    document.querySelector("#workout-add").classList.remove("hidden");
    document.querySelector("#complete").classList.remove("hidden");
}
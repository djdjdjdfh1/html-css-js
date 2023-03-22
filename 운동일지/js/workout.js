const workoutForm = document.querySelector("#workout_form");
workoutForm.addEventListener("submit", handleWorkoutForm);

/* 서브밋 다루는 함수 */
function handleWorkoutForm(event) {
    event.preventDefault();

    const workoutText = document.querySelector("#workout_text");
    const workoutValue = workoutText.value;
    //innerHTMl이 아닌 value값에 "", 즉 빈칸을 줘야함
    workoutText.value= "";
    paintWorkout(workoutValue);
    
    // 저장 버튼의 히든 클래스 제거.classList.remove("hidden");
    saveForm.classList.remove("hidden");
}
/* 리스트 추가하는 함수 */
function paintWorkout(workoutValue) {
    const ul = document.querySelector("#workout_list");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = workoutValue;
    const button = document.createElement("button");
    button.innerHTML = "X";

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener("click",deleteWorkout);
}
/* 리스트를 삭제하는 함수 */
function deleteWorkout(event) {
    const li = event.target.parentNode;
    li.remove();
}

/* 운동리스트를 객체에 저장*/
const savedWorkoutList = [];
const saveForm = document.querySelector("#workout_save");
saveForm.addEventListener("submit", saveWorkout);

/* 저장하는 함수 */
function saveWorkout(event) {
    event.preventDefault();

    // 저장의 input값 변수설정
    const workoutDate = document.querySelector("#workout_date");

    // span 배열을 for문을 돌려서 값 출력
    const span = document.querySelectorAll("span");
    let array = [];

    for(let i=0; i<span.length; i++) {
        // span[i]만 하면 dom이 들어가기에 안의 값만 가져오려면 innerHTML
        array.push(span[i].innerHTML);
    }
    savedWorkoutList.push(new workout(workoutDate.value, array));  
}

function workout(workoutDate, workoutList) {
    this.date = workoutDate;
    this.workout = workoutList;
    }

/* 버튼을 눌렀을때 환영인사 출력 */
/* form의 submit을 눌렀을때 input의 값이 h1태그에 할당 */

// id를 통해서 직접 접근
// submit을 눌렀을때(이벤트 - submit: form) form에 이벤트
// input의 값이 h1태그에 할당(실행할 함수)
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", onLogin)

// 로그인 함수
function onLogin (event) {
    // submit이벤트는 새로고침 이벤트가 들어가있다
    event.preventDefault();

    // 값을 들고올 input태그 가져옴
    const loginId = document.querySelector("#login-id");
    // 값을 넣어줄 h1태그 가져옴
    const greeting = document.querySelector("#greeting");

    greeting.innerHTML += " "+ loginId.value+"님";
    // greeting.innerHTML = `환영합니다 ${loginId.value}님`;

    greeting.classList.remove("hidden");
    loginForm.classList.add("hidden");
}
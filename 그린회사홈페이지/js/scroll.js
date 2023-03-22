/* 스크롤 이벤트 작성 */
// 스크롤 할때마다 실행되는 함수

// 네비게이션 바 
const nav = document.querySelector("#nav")

/* 스크롤 이벤트로 조건을 걸때 사용할수 있는 속성 */
// 스크롤의 위치: scrollTop,
// 화면의 위치: scrollHeight
// 화면의 길이: clientHeight

window.addEventListener("scroll", function() {
    // scrollY가 200 이상 스크롤 되면 scrollon 클래스 추가
    if(this.scrollY >= 200) {
        nav.classList.add("scrollon");
    } else {
        // scrollY가 200미만이면 scrollon 제거
        nav.classList.remove("scrollon");
    }
})
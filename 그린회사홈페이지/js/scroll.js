/* 스크롤 이벤트 작성 */
// 스크롤 할때마다 실행되는 함수

// 네비게이션 바 
const nav = document.querySelector("#nav")

window.addEventListener("scroll", function() {
    // 스크롤 되면 scrollon 클래스 추가
    nav.classList.add("scrollon");
    })
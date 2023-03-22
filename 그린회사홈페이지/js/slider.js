/* 슬라이더 버튼을 눌렀을때 화면 전환 */
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

// 슬라이더 아이템
const sliderItems = document.querySelectorAll(".slider-item");

// 전체 슬라이더 갯수
const maxSlide = sliderItems.length;

// 현재 슬라이더를 알려주기 위한 변수
let currentSlide = 1;

// 버튼을 눌렀을때 left의 값을 이동
nextButton.addEventListener("click", function() {
    // 현재 슬라이더가 전체갯수보다 작을때 실행
    if(currentSlide < maxSlide) {
        currentSlide++; 
        // 2 => -100%, 3 => -200%, 4 => -300%    >>>>>> 화면의 넓이 곱해서 이동도 가능 
        // sliderItmes를 통해서 모든 left값을 이동 
        for( let i = 0; i<sliderItems.length; i++) {
            sliderItems[i].style.left = `${100+(-100)*currentSlide}%`;
        }
    }
})

// 이전 버튼
prevButton.addEventListener("click", function() {
    // 현재 슬라이더가 전체갯수보다 작을때 실행
    if(currentSlide > 1) {
        currentSlide--; 
        // 2 => -100%, 3 => -200%, 4 => -300%    >>>>>> 화면의 넓이 곱해서 이동도 가능 
        // sliderItmes를 통해서 모든 left값을 이동 
        for( let i = 0; i<sliderItems.length; i++) {
            sliderItems[i].style.left = `${100+(-100)*currentSlide}%`;
        }
    }
})
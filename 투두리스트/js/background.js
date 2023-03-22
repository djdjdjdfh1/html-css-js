/* body의 이미지가 새로고침 할때마다 바뀜 */
// 이미지가 새로고침할때마다 바뀜 : body를 새로 부를때마다 바뀜 -js 호출
// 1) 이미지가 여러개 
// 2) 이미지는 랜덤으로 바뀜
// 랜덤) Math.random() 정수값을 사용하기위해 원하는 횟수 곱함
// 소수 부분은 버림

const body = document.querySelector("body");
// 랜덤한 문자열을 사용하기 위해 배열과 함께 사용
// 배열의 인덱스를 랜덤하게 접근
const images = ["0.jpg", "1.jpg", "2.jpg"]

// 랜덤한 숫자갑 0~2 까지 생성
const randomIndex = Math.floor(Math.random()*images.length);

body.style.backgroundImage = `url(./img/${images[randomIndex]})`
body.style.backgroundSize = "cover"

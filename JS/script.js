const modal = document.querySelector(".modal-conatainer");  //모달
const ulClass = document.getElementsByClassName("notification-list")[0 ]; //ul들
const aTags = ulClass.getElementsByTagName('a'); // ul아래 자식, 즉 a모으기

// 모달 열기
aTags[0].addEventListener("click", () => {
    document.querySelector(".modal-conatainer").classList.add('active');
})

// 모달 닫기
const modalCloseBtn = document.querySelector(".button");
modalCloseBtn.addEventListener("click", () => {
    document.querySelector(".modal-conatainer").classList.remove('active');
})
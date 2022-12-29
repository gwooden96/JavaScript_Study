let box = document.querySelector('.box');

//.scrollHeight 전체 영역안에 있는 총높이 확인 (내용에 따라 길이 달라짐)
// console.log(box.scrollHeight);

// .clientHeight 박스 내부 영역안에 있는 총높이 확인
// console.log(box.clientHeight);


let boxHeight = box.scrollHeight - box.clientHeight -5;

let isDisable = true;

box.addEventListener('scroll', function() {

  //.scrollTo 위에서 부터 아래까지 얼마나 스크롤을 했는지 보여준다.
  // console.log(box.scrollTop);

  //총높이 -5 <= box 창의 높이 + 이동거리
  //총높이 - 창의 높이 -5 <= 이동거리

  // == 이것보다는 오차범위를 염두에 둔다면 <= 이런 방식이 좋다.
  //환경에 따라서 오차가 존재하다 보니 여유값도 필요하다

  if(isDisable && (box.scrollTop >= boxHeight)) {

    // alert('다읽음'); 확인용

    document.querySelector('#chk').disabled = false;

    //한번 동작 후 false로 변경하면서 if문에서 isDisable이 만족을 못하여 알림창은 한번만 실행된다.
    isDisable = false;
  }

});
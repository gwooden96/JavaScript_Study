// 브라우저 창 높이 확인 
// console.log(window.innerHeight);

// 브라우저 <body>태그 영역 총 높이 확인
// console.log(document.querySelector('body').clientHeight);

// 저장용변수 = 전체 높이 - 브라우저 창의 높이
let brScrHei = document.querySelector('body').clientHeight - window.innerHeight;


//윈도우에 관련된 이벤트
window.addEventListener('scroll', function() {

  //스크롤 한만큼 높이
  // console.log(window.scrollY);

  // 스크롤 한만큼의 높이 / (전체 높이 - 브라우저 창의 높이) * 100
  // console.log(window.scrollY / brScrHei * 100);

  let tolHei = window.scrollY / brScrHei * 100;

  //잦망 코드 수정 필요 ㅋㅋ
 document.querySelector('.status-bar').style.width = `${tolHei}%`;


});
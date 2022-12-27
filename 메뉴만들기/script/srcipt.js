/* JS */
// .navbar-toggler을 클릭 했을때 이벤트 함수
// document.querySelector('.navbar-toggler').addEventListener('click', function(){

    //쿼리셀렉터로 찾은 .list-group에 .show라는 클래스를 추가
    //특정 기능을 담당하는 class를 하나 더 생성해 주는 것
    //.className로 추가하면 기존 클래스가 삭제됨
//     document.querySelector('.list-group').classList.toggle('show');

// });


/* jQuery */
$('.navbar-toggler').on('click', function() {

    //추가
    // $('.list-group').addClass = .classList.add();

    //삭제
    // $('.list-group').removeClass = classList.remove();

    //토글
    $('.list-group').toggleClass('show');

});
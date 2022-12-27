/* JS */

// document.querySelector('.play-btn').addEventListener('click', function(){

//     document.querySelector('.black-bg').classList.add('show');

// });



// document.querySelector('.close-btn').addEventListener('click', function(){

//     document.querySelector('.black-bg').classList.remove('show');

// });



/* jQuery */
$('.play-btn').on('click', function() {

    $('.black-bg').addClass('show');

    //.fadeIn 부드럽게 등장
    //fade 애니메이션 기능 많이 쓰면 자바스크립트가 무거워져서 성능이 떨어짐
    // $('.black-bg').fadeIn('show');
});

$('.close-btn').on('click', function() {

    $('.black-bg').removeClass('show')

    //.fadeOut 부드럽게 퇴장
    // $('.black-bg').fadeOut('show')
});
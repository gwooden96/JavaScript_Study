/* JS */

// document.querySelectorAll('.tab-btn')[0].addEventListener('click', function() {

//     document.querySelectorAll('.tab-btn')[0].classList.add('select');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');

// });



/* jQuery */

// $('.tab-btn').eq(0).on('click', function() {

//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(0).addClass('select');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');

// });

// $('.tab-btn').eq(1).on('click', function() {

//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(1).addClass('select');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');

// });

// $('.tab-btn').eq(2).on('click', function() {

//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(2).addClass('select');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');

// });




/* jQuery 리팩토링 */

// 선택자를 미리 찾아놓으면 최적화에 도움이 된다.
// let tabBtn = $('.tab-btn');
// let tabContent = $('.tab-content');

// for(let i = 0; i<tabBtn.length; i++) {

//     tabBtn.eq(i).on('click', function() {

//         tabBtn.removeClass('select');
//         tabBtn.eq(i).addClass('select');
    
//         tabContent.removeClass('show');
//         tabContent.eq(i).addClass('show');
    
//     });

// }


//target을 이용한 반복문 없이 .list 자체가 클릭 했을때를 이용
//해당 terget이랑 .list 안에 있는 .tab-btn 중에 같은게 있는지 확인해서 출력
let tabBtn = $('.tab-btn');
let tabContent = $('.tab-content');

$('.list').on('click', function(e) {

    console.log(e.target);

    if(e.target === document.querySelectorAll('.tab-btn')[0]) {
        showTab(0);
    } else if (e.target === document.querySelectorAll('.tab-btn')[1]) {
        showTab(1);
    } else {
        showTab(2);
    }

});


//작동되는 기능들만 함수화
function showTab(i) {

    tabBtn.removeClass('select');
    tabBtn.eq(i).addClass('select');

    tabContent.removeClass('show');
    tabContent.eq(i).addClass('show');

}
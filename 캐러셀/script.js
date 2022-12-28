// let number = 1; // html과 연관된건 없음 단순 숫자

// // next 버튼
// $('.next').on('click', function() {
  
//   if(no === 1) {
//     $('.carousel').css('transform', 'translateX(-100vw)');
//     no++;
//   } else if(no === 2) {
//     $('.carousel').css('transform', 'translateX(-200vw)');
//     no++;
//   }
  

// });



// // 1번 버튼
// $('.btn1').on('click', function() {

//   $('.carousel').css('transform', 'translateX(0)');
//   number = 1;
// });

// // 2번 버튼
// $('.btn2').on('click', function() {

//   $('.carousel').css('transform', 'translateX(-100vw)');
//   number = 2;
// })

// // 3번 버튼
// $('.btn3').on('click', function() {

//   $('.carousel').css('transform', 'translateX(-200vw)');
//   number = 3;
// })





// 리펙토링

let number = 1; // html과 연관된건 없음 단순 숫자
const carousel = $('.carousel');

// next 이전
$('.previous').on('click', function() {

  if( number > 1) {
      carousel.css('transform', `translateX(-${number-2}00vw)`);
      number--;
  }
      console.log(number);
  });


// next 버튼
$('.next').on('click', function() {


  if( number < 3) {
    carousel.css('transform', `translateX(-${number}00vw)`);
    number++;
    console.log(number);
  } 


  //   if(no === 1) {
  //   $('.carousel').css('transform', 'translateX(-' +  number + '00vw)');
  //   no++;
  // } else if(no === 2) {
  //   $('.carousel').css('transform', `translateX(-${number}00vw)`);
  //   no++;
  // }
  

});






// 1번 버튼
$('.btn1').on('click', function() {

  $('.carousel').css('transform', 'translateX(0)');
  number = 1;
});

// 2번 버튼
$('.btn2').on('click', function() {

  $('.carousel').css('transform', 'translateX(-100vw)');
  number = 2;
})

// 3번 버튼
$('.btn3').on('click', function() {

  $('.carousel').css('transform', 'translateX(-200vw)');
  number = 3;
})


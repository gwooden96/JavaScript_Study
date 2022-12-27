/* JS

let cnt = 0; //클릭횟수를 저장하는 변수

let mode = document.querySelector('#mode'); //공통되는 부분은 변수안에 집어 넣고 사용

mode.addEventListener('click', function(){
    cnt++;

    //버튼 글씨 라이트 모드와 다크 모드 on/off  
    if(cnt % 2 == 1) {
        // mode.setAttribute('value', '라이트모드'); <-- 아래 코드랑 같은 기능
        mode.value='라이트모드';

        //버튼 글씨 다크모드일때 배경색 검정 글꼴 흰색
        document.body.style.background = 'black';
        document.body.style.color ='white';

    } else {
        mode.value='다크모드';

        // 버튼 글씨 라이트모드일때 배경 흰색 글꼴 검정
        document.body.style.background = 'white';
        document.body.style.color ='black';
    }


});
*/


/* jQuery */

let cnt = 0; //클릭횟수를 저장하는 변수

$('#mode').on('click', function() {
    cnt++;

    if(cnt % 2 == 1) {
        // document.querySelector('#mode').setAttribute('value', '라이트모드'); <-- 아래 코드랑 같은 기능
        // $('#mode').attr('value', '라이트모드');

        //document.querySelector('#mode').value='라이트모드'; <-- 아래 코드랑 같은 기능
        $('#mode').val('라이트모드');
        $('body').css('backgroundColor', 'black');
        $('body').css('color', 'white');
    } else {
        $('#mode').val('다크모드');
        $('body').css('backgroundColor', 'white');
        $('body').css('color', 'black');
    }

});


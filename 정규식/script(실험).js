
const regexid = /^\w{8,20}$/;
const regexpw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexemail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexphone = /^\d{2,3}-\d{3,4}-\d{4}$/;


let isid = false;
let ispw = false;
let isemail = false;
let isphone = false;


//버튼들
const idBtn = document.querySelector('#id_confirm');
const pwBtn = document.querySelector('#pw_confirm');
const emailBtn = document.querySelector('#email_confirm');
const phoneBtn = document.querySelector('#phone_confirm');


// 유효성 검사 후 결과를 표시해주는 p태그들
let idCheck = document.querySelector('.id_input_check');
let pwCheck = document.querySelector('.pw_input_check');
let emailCheck = document.querySelector('.email_input_check');
let phoneCheck = document.querySelector('.phone_input_check');












//if문 반복 공용
const arr = ['id', 'pw', 'email', 'phone'];


arr.forEach(function(item) {

  console.log(item);
/*
  `${item}Btn`.addEventListener('click', function(event) {


    event.preventDefault();
    let val = document.querySelector(`'#${item}_txt'`).value;

    if(`regex${item}`.test(val)) {
      isid = true;
      `${item}Check`.innerHTML = "사용 가능한 아이디입니다.";
      `${item}Check`.style.color = "green";
    } else if (`!regex${item}`.test(val)) {
      isid = false;
      `${item}Check`.innerHTML = "사용 불가능한 아이디입니다.";
      `${item}Check`.style.color = "tomato";
    }
    isTrue()
  });
*/
});




// 버튼 함수 공통 부분 통합
function isTrue() {
  if(isId && isPw && isEmail && isPhone) {
    document.querySelector('.reg_req_btn').style.background = 'blue';
  }
}


/* 아래는 리펙토링 전 */

/*

// 아이디
idBtn.addEventListener('click', function(event) {

  //기본동작 막기
  event.preventDefault();
  let val = document.querySelector('#id_txt').value;
  // console.log(document.querySelector('#id_txt').value);

  // console.log(regexId.test(val));

  if(regexId.test(val)) {
    isId = true;
    idCheck.innerHTML = "사용 가능한 아이디입니다.";
    idCheck.style.color = "green";
  } else if (!regexId.test(val)) {
    isId = false;
    idCheck.innerHTML = "사용 불가능한 아이디입니다.";
    idCheck.style.color = "tomato";
  }
  isTrue()
});

// 비밀번호
pwBtn.addEventListener('click', function(event) {

  event.preventDefault();
  let val = document.querySelector('#pw_txt').value;

  if(regexPw.test(val)) {
    isPw = true;
    pwCheck.innerHTML = "사용 가능한 비밀번호입니다.";
    pwCheck.style.color = "green";
  } else if (!regexPw.test(val)) {
    isPw = false;
    pwCheck.innerHTML = "사용 불가능한 비밀번호입니다.";
    pwCheck.style.color = "tomato";
  }
  isTrue()
});


// 이메일
emailBtn.addEventListener('click', function(event) {

  event.preventDefault();
  let val = document.querySelector('#email_txt').value;

  if(regexMail.test(val)) {
    isEmail = true;
    emailCheck.innerHTML = "사용 가능한 이메일입니다.";
    emailCheck.style.color = "green";
  } else if (!regexMail.test(val)) {
    isEmail = false;
    emailCheck.innerHTML = "사용 불가능한 이메일입니다.";
    emailCheck.style.color = "tomato";
  }
  isTrue()
});


// 전화번호
phoneBtn.addEventListener('click', function(event) {

  event.preventDefault();
  let val = document.querySelector('#phone_txt').value;

  console.log(phoneBtn)

  if(regexTel.test(val)) {
    isPhone = true;
    phoneCheck.innerHTML = "사용 가능한 전화번호입니다.";
    phoneCheck.style.color = "green";
  } else if (!regexTel.test(val)) {
    isPhone = false;
    phoneCheck.innerHTML = "사용 불가능한 전화번호입니다.";
    phoneCheck.style.color = "tomato";
  }
  isTrue()
});

*/







const todos = document.querySelector('#todos');
const todoList = document.querySelector('#todo-list');
const todoInput = todos.querySelector('input');

let arr = [];

todos.addEventListener('submit', onSubmit);

function saveTodo() {

  localStorage.setItem('todos', JSON.stringify(arr));

}

todos.addEventListener('submit', onSubmit);


//값 추가 기능
function onSubmit(e) {
  e.preventDefault();
  let newTodo = todoInput.value;

  // console.log(newTodo); 확인용 코드

  //시리얼 넘버 생성 key, value 생성
  let obj = {
    //key(key, text)와 value(Date.now, newTodo)값이 배열방에 들어가게 된다.
    key : Date.now(),
    text : newTodo,
  }


  //만들어둔 arr 배열방에 입력된 값을 넣어준다.
  arr.push(obj); //기존 newTodo에서 obj로 변경

  saveTodo();

  // console.log(arr); 배열방 확인용 코드
 
  todoInput.value = "";

  //아래 printTodo 함수를 onSubmit 함수 내부로 불러와서 연동
  printTodo(obj);
}




/* newTodo 첫번째 방법*/
function printTodo(newTodo) {

  //태그 생성 <li></li>
  const li = document.createElement('li');
  //태그 생성 <span></span>
  const span = document.createElement('span');

  // <li> <span></span> </li>
  li.append(span);

  //<li> <span> newTodo.text </span> </li>
  span.innerHTML = newTodo.text;
  //입력 받아 생성된 <li>태그에 id를 key에 value값인 Date.now()로 생성된 시리얼 넘버를 넣어줘서 고유번호를 새겨주는 의미
  li.id = newTodo.key;

  const btn = document.createElement('button');
  btn.innerHTML = 'X';
  li.append(btn);

  todoList.append(li);

  // console.log(li); 확인용 코드

  btn.addEventListener('click', deleteTodo)
}



/* newTodo 두번째 방법 */

// function printTodo(newTodo) {


//   const data = `<li>
//                   <span>
//                     ${newTodo} 
//                   </span>
//                   <button>x</button>
//                 </li>`
//   todoList.insertAdjacentHTML('beforeend', data);

//                             (오류)
//   document.querySelectorAll('button')[0].addEventListener('click', deleteTodo);

// }



//값 삭제 기능
function deleteTodo(e) {
  
  let pn = e.target.parentElement;
  
  //filter 조건에 만족하는 값만 arr로 넘겨준다. (리턴)
  arr = arr.filter((todo) => todo.key !== parseInt(pn.id));

  //값 추가 기능쪽에서 savaTodo로 저장했지만 값 삭제 기능쪽에서 새롭게 업데이트 되므로 다시 한번 savaTodo();를 넣어준다.
  saveTodo();
  pn.remove();

}



//배열방에 담겨있는 정보를 페이지에 보이도록
//새로고침해도 계속 출력이 되있게
let getTodo = localStorage.getItem('todos');

if(getTodo !== null) {
  let parseTodo = JSON.parse(getTodo);
  arr = parseTodo; // arr = 로컬스토리지에 있는게 배열로 보관
  // console.log(parseTodo);
  parseTodo.forEach((data) => {
    printTodo(data);
  });
}
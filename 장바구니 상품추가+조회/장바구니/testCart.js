//배열로 관리

let fruits = [
  {name : 'apple', memo : '빨개요'},
  {name : 'mango', memo : '달달함'},
  {name : 'melon', memo : '맛있음'},
]





fruits.forEach((data) => {

  let second = `<div class="col">
<div class="card" style="width: 18rem;">
  <img src=" ../img/${data.name}.jpg " class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.memo}</p>
    <button class="btn btn-primary cart">담기</button>
  </div>
</div>
</div>`;

$('.row').append(second);

});

//.previousElementSibling 자기자신 전에있는 형제요소 찾아줌
//.siblings 찾고 싶은 요소 다이렉트로 찾아줌
//상황에 맞게끔 활용하면 된다.
$('.cart').on('click', function(e){

  /* JS
  let name = e.target.previousElementSibling.previousElementSibling.innerHTML;
  */

  /* jQuery */
  
  let name = $(e.target).siblings('h5').html();

  // let.temp = localStorage.getItem('name') == let temp = JSON.parse(localStorage.name);

  if(localStorage.getItem('name') != null) {
    //로컬스토리지에 있는 name을 빼와서 다시 배열형태로 변환
    let temp = JSON.parse(localStorage.name);
    //거기에 클릭한 과일 이름을 배열에 추가
    temp.push(name);
    //다시 json으로 변환 후 로컬 스토리지에 저장시킴
    localStorage.setItem('name' , JSON.stringify(temp));
  } else {
    localStorage.setItem('name', JSON.stringify([name]));
  }
});




let list = localStorage.getItem('name');

list = JSON.parse(list);


list.forEach((data) => {


$('.list').append(`<div>${data}</div>`);



});


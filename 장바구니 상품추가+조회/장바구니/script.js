let fruits = [
  {name: 'apple', memo: '빨개요'},
  {name: 'mango', memo: '달달함'},
  {name: 'melon', memo: '맛있음'},
  {name: 'watermelon', memo: '싱싱함'},
];


fruits.forEach((data) => {
  let second = `<div class="col">
                <div class="card" style="width: 18rem;">
                  <img src="img/${data.name}.jpg" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.memo}</p>
                    <button class="btn btn-primary cart">담기</button>
                  </div>
                </div>
                </div>`;

  $('.row').eq(0).append(second);
})

$('.cart').on('click', function(e) {

  let name = $(e.target).siblings('h5').html();

  if(localStorage.getItem('items') != null) {
    
    let isHave; // 과일이 로컬스토리지에 있나 없나를 알려주는 변수 
    let index; // 과일이 로컬스토리지에 있으면 해당 위치를 저장하는 변수 

    let temp = localStorage.getItem('items'); //로컬스토리지에서 값 가져오기
    temp = JSON.parse(temp); //배열로 변환
      
    //로컬스토리지(temp)에 담기를 누른 과일(name)이 있나 없나를 찾아주는 반복문
    temp.forEach((data,i) => { //반복
      if(data.name === name){ //temp 배열에 들어있는 값을 data로 보내주어 교차확인 (순차적으로)
        isHave = true;
        index = i; //해당 과일이 있는 배열방 위치를 기억
      }
    });

    if(isHave) {
      temp[index].cnt++;
    } else{
      temp.push({'name': name, 'cnt': 1}); 
    }

  //   temp.push(name);
    
    temp = JSON.stringify(temp);

    localStorage.setItem('items', temp);


  } else {

      // 배열에 여러값을 넣기 위해 오브젝트화 및 json화
    localStorage.setItem('items', JSON.stringify([{'name': name, 'cnt': 1 }])); 
  }
});





let list = localStorage.getItem('items');

list = JSON.parse(list);

list.forEach((data) => {

  // data = Object.values(data); //묶어서 출력이 됨

  $('.list').append(`<div>${data.name} : ${data.cnt}</div>`);

});
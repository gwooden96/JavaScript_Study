// openWheater api key
const API_KEY = '7c8cf78b2f05b7fe432252200c7e35a6';
let weatherArea = document.querySelector('#weatherArea');
let weatherMain = document.querySelector('#weatherMain');
let weatherTemp = document.querySelector('#weatherTemp');



function connect(position){
  // alert('위치 연결 성공')
  const lat = position.coords.latitude;
  //위도를 함수화
  const lon = position.coords.longitude;
  //경도를 함수화
  console.log(`위도:${lat} 경도:${lon}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(URL);

  //response 응답된 정보 관련 이름
  fetch(URL).then((response) => response.json())
          .then((data) =>  {
            console.log(data.name); //지역이름
            console.log(data.weather[0].main); //날씨
            console.log(data.main.temp); //온도

            weatherArea.innerHTML = `${data.name} 지역`;
            weatherMain.innerHTML = `날씨 ${data.weather[0].main}`;
            weatherTemp.innerHTML = `온도 ${data.main.temp} °C`;
  });
};


function errorConn() {
  
  alert('위치연결실패');

}


// navigator.geolocation.getCurrentPosition(함수, 함수);
navigator.geolocation.getCurrentPosition(connect, errorConn);


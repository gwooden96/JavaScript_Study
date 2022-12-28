menu.onclick = function(event) {

  let url = event.target.getAttribute('href');

  alert(url);

  console.log(event.defaultPrevented);
  
  event.preventDefault();

  console.log(event.defaultPrevented);

  // return false;

};
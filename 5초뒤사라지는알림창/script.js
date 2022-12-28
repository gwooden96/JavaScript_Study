let cnt = 5;

setInterval(function() {
  cnt--;
  $('.count').html(cnt);
}, 1000);


setTimeout(function() {
  $('.showblock').fadeOut('fast');
  
}, 5000);




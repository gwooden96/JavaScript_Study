/* JS */
// document.querySelector('#btn').addEventListener('click', function() {
//   document.querySelector('#text').style.display = 'none';
// });

document.querySelector('#btn').addEventListener('click', function() {
     this.style.display = 'none';
   });


// .addEventListener == .on


/* jQuery */
$('#btn').on('click', function() {
  $('#text').css('display', 'none');
});
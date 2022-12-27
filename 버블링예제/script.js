// form.onclick = function(event) {

//     event.target.style.backgroundColor = 'yellow';

//     console.log(event.target.tagName);
//     console.log(this.tagName);

// }


document.querySelector('p').addEventListener('click', function(e) {

    alert('aaa');

    e.stopPropagation();
});
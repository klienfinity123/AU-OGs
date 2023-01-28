let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.music-player');
let boxContainer = document.querySelector('.container .box-container');

closePlayer.onclick = () =>{
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');
}

let boxes = document.querySelectorAll('.container .box-container .box');

boxes.forEach(box =>{

    box.onclick = () =>{
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.content h3').innerText;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }

    // Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

});
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

  function handleClick() {
    var butHTML = this.innerHTML;
    makeSound(butHTML);
    buttonAnimation(butHTML);
    }


  }

document.addEventListener("keydown",function(event){
  makeSound(event.key);//here event is letter pressed, console.log(event) will show whole detail of even, of which key property is selected to display val
  buttonAnimation(event.key);
});

  function makeSound(key){
    switch (key) {
      case 'w':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
      case 'a':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
      case 's':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
      case 'd':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
      case 'j':
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
      case 'k':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
      case 'l':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
        default: console.log(keydown.key);
  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

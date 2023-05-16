/*
In the provided code, DOM (Document Object Model) manipulation is used to detect button clicks and keyboard presses, play corresponding sounds, and apply animations.

Let's go through the code step by step:
1. Detecting Button Press:
   - `var numberOfDrumButtons = document.querySelectorAll(".drum").length;` retrieves all elements with the class "drum" and stores the number of such elements in the `numberOfDrumButtons` variable.
   - A `for` loop is used to iterate over each drum button element.
   - `document.querySelectorAll(".drum")[i].addEventListener("click", function(){...});` adds a click event listener to each drum button. When a drum button is clicked, the anonymous function inside the event listener is executed.
2. Inside the Button Click Event Listener:
   - `var buttonInnerHTML = this.innerHTML;` retrieves the innerHTML of the clicked button, which corresponds to the text or HTML content within the button.
   - `makeSound(buttonInnerHTML);` calls the `makeSound` function and passes the buttonInnerHTML as an argument to play the corresponding sound.
   - `makeAnimation(buttonInnerHTML);` calls the `makeAnimation` function and passes the buttonInnerHTML as an argument to apply the corresponding animation.
3. Detecting Keyboard Press:
   - `document.addEventListener('keydown',function(event){...});` adds a keydown event listener to the entire document. When a key is pressed, the anonymous function inside the event listener is executed.
4. Inside the Keyboard Press Event Listener:
   - `makeSound(event.key);` calls the `makeSound` function and passes the pressed key (`event.key`) as an argument to play the corresponding sound.
   - `makeAnimation(event.key);` calls the `makeAnimation` function and passes the pressed key (`event.key`) as an argument to apply the corresponding animation.
5. `makeSound(key)` function:
   - This function is responsible for playing the sound corresponding to the provided `key`.
   - It uses a `switch` statement to check the value of the `key`.
   - Depending on the value of `key`, it creates an `Audio` object and assigns the corresponding sound file to it.
   - Finally, it plays the sound using the `play()` method of the `Audio` object.
6. `makeAnimation(currentKey)` function:
   - This function is responsible for applying an animation effect to the drum button or key associated with the `currentKey`.
   - It retrieves the element with the class corresponding to `currentKey` using `querySelector`.
   - It adds the "pressed" class to the element, which triggers the animation effect.
   - After a delay of 100 milliseconds (0.1 seconds), it removes the "pressed" class to revert the animation effect.
In summary, the code uses DOM manipulation to add event listeners to drum buttons and the keyboard. When a button is clicked or a key is pressed, it plays the associated sound and applies an animation effect to the corresponding button or key.*/
//Detecting Button Press

// the dom method here will give all the buttoms with drum class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// here we are using anonymous function so that we use one function for all drum clicks
for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);

});

}

//Detecting Keyboard Press

document.addEventListener('keydown',function(event){

  makeSound(event.key);
  makeAnimation(event.key);

});

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "l":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    default: console.log();

  }

}

function makeAnimation(currentKey){

  var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
    }

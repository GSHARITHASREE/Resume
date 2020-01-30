var numberOfButtons1 =document.querySelectorAll(".button1").length;
for(var i=0 ;i < numberOfButtons1 ; i++)
{
  document.querySelectorAll(".button1")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

      });

}
var numberOfButtons2=document.querySelectorAll(".button2").length;
for(var j=0 ;j< numberOfButtons2 ;j++)
{
  document.querySelectorAll(".button2")[j].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

      });

}

function makeSound(buttonInnerHTML) {

switch(buttonInnerHTML) {


    case "sa":
      var samusic = new Audio('sounds1/samusic1.mp3');
      samusic.play();
      break;

    case "ri":
      var rimusic = new Audio('sounds1/rimusic.mp3');
      rimusic.play();
      break;

    case "ga":
      var gamusic = new Audio('sounds1/gamusic.mp3');
      gamusic.play();
      break;

    case "ma":
      var mamusic= new Audio('sounds1/mamusic.mp3');
      mamusic.play();
      break;

    case "pa":
      var pamusic = new Audio('sounds1/pamusic.mp3');
      pamusic.play();
      break;

    case "da":
      var damusic = new Audio('sounds1/damusic.mp3');
      damusic.play();
      break;

    case "ni":
      var nimusic = new Audio('sounds1/nimusic.mp3');
      nimusic.play();
      break;

      case "sa.":
        var saamusic = new Audio('sounds1/saamusic.mp3');
        saamusic.play();
        break;
default: console.log(buttonInnerHTML);


  }
}

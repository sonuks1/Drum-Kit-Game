for( var i=0;i<document.querySelectorAll(".drum").length;i++)
{

document.querySelectorAll("button")[i].addEventListener("click",function(){
     
     var buttonInnerHtml=this.innerHTML;
    
    switch (buttonInnerHtml){
        case "w":
            var mySound1 = new Audio ("sounds/tom-1.mp3");
            mySound1.play();
            break;
        case "a":
            var mySound2 = new Audio ("sounds/tom-2.mp3");
            mySound2.play();
            break;
        case "s":
            var mySound3 = new Audio ("sounds/tom-3.mp3");
            mySound3.play();
            break;
        case "d":
            var mySound4 = new Audio ("sounds/tom-4.mp3");
            mySound4.play();
            break;
        case "j":
            var snare =new Audio("sounds/crash.mp3");
            snare.play();
            break;
            case "k":
                var crash = new Audio("sounds/snare.mp3");
                crash.play();
                break;
            case "l":
                var kick =new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

        default:
            break;
    } 




   
})


}

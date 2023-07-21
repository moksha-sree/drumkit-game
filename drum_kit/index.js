for (var i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var s=this.innerHTML;
        console.log(s);
        var audio=new Audio("sounds/"+s+".mp3");
        audio.play();
        addAnimation(s);  
    });
    
}

document.addEventListener("keypress",function(event){
    console.log(event.key);
    var k=event.key;
    switch(k) {
        case "w" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();

        case "a" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();

        case "s" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();

        case "d" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();

        case "j" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();

        case "k" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();
        
        case "l" : var audio=new Audio("sounds/"+k+".mp3");
        audio.play();
    }
    addAnimation(k);  
})

function addAnimation(key){

    var obj = "."+key;
    document.querySelector(obj).classList.add('pressed');
    setTimeout(function(){

        var obj = "."+key;
        document.querySelector(obj).classList.remove('pressed');
    },100)
}
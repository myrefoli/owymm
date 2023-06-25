function changeLighter() {
    var myFlame = document.getElementById("my-flame");
    if(myFlame.style.visibility == "visible"){
        myFlame.style.visibility = "hidden";
    }
    else{
        myFlame.style.visibility = "visible";
    }
}

function bloomOpen() {
    var myBloom = document.getElementById("my-bloom");
    myBloom.src ='images/splash/bloom/slowed-1.gif'
}

function bloomClose() {
    var myBloom = document.getElementById("my-bloom");
    myBloom.src ='images/splash/bloom/slowed-reversed-1.gif'
}
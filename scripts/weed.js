function changeLighter() {
    var myFlame = document.getElementById("my-flame");
    if(myFlame.style.visibility == "visible"){
        myFlame.style.visibility = "hidden";
    }
    else{
        myFlame.style.visibility = "visible";
    }
}
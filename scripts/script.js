document.addEventListener("DOMContentLoaded", () => {
  var mySplash = document.getElementById("my-splash");
  if (!localStorage.visited) {
    mySplash.style.visibility = "visible";
    localStorage.visited = true;
  }
});

function enterMain() {
    var mySplash = document.getElementById("my-splash");
    mySplash.style.opacity = 0;
    setTimeout(function() {
        mySplash.style.zIndex = -1;
      }, 1200);    
}
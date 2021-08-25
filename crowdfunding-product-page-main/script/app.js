let cyan = "hsl(176, 50%, 47%)";
let darkCyan = "hsl(176, 72%, 28%)";
let gray = "hsl(0, 0%, 50%)"
let lightGray = "hsl(0, 0%, 90%)"


document.querySelector(".bookmark label").addEventListener("mouseup", function(){
  if (document.querySelector(".bookmark .bookmark-check").checked===true){
    // document.querySelector(".bookmark").style.backgroundColor = lightGray
    document.querySelector(".bookmark").style.color = gray
    document.querySelector(".bookmark svg circle").setAttribute("fill", "#2F2F2F")
    document.querySelector(".bookmark svg path").setAttribute("fill", "#B1B1B1")
    document.querySelector(".bookmark span").innerHTML = "Bookmark"
  }else{
    // document.querySelector(".bookmark").style.backgroundColor = cyan
    document.querySelector(".bookmark").style.color = darkCyan
    document.querySelector(".bookmark svg circle").setAttribute("fill", darkCyan)
    document.querySelector(".bookmark svg path").setAttribute("fill", "#fff")
    document.querySelector(".bookmark span").innerHTML = "Bookmarked"

  }
})

var socialStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var flag = 0

btn.addEventListener("click",function() {
    if(flag == 0){
        btn.innerHTML = "Remove Friend"
        socialStatus.innerHTML = "Friends"
        socialStatus.style.color = "green"
        flag = 1
    }else {
        btn.innerHTML = "Add Friend"
        socialStatus.innerHTML = "Stranger"
        socialStatus.style.color = "red"
        flag = 0
    }
})

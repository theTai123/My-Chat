var dark = document.querySelector(".dark");
var white = document.querySelector(".white");
var rainbow = document.querySelector(".rainbow");
var btn = document.getElementById("color").querySelectorAll("button");
var boxChat = document.querySelector(".box-chat");
var wrapper = document.querySelector(".wrapper");

function addActive(){
    btn.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

btn.forEach((item) => item.addEventListener("click", addActive));

dark.addEventListener("click", ()=>{
    wrapper.classList.remove(wrapper.classList[1]);
    wrapper.classList.add("dark");
    boxChat.classList.add("white");
});

white.addEventListener("click", ()=>{
    wrapper.classList.remove(wrapper.classList[1]);
    wrapper.classList.add("white");
    boxChat.classList.remove(boxChat.classList[1]);
});

rainbow.addEventListener("click", ()=>{
    wrapper.classList.remove(wrapper.classList[1]);
    wrapper.classList.add("rainbow");
    boxChat.classList.remove(boxChat.classList[1]);
});
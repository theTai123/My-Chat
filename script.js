let nav = document.getElementById("nav");
let text =document.getElementById("text");
let btn = nav.children[1];

console.log(btn);

window.onload = ()=>{
    text.style.display="none";
}

btn.addEventListener("click", () => {
    text.style.display="block";
   
    let newBtn =document.createElement('button');
    newBtn.innerText="click me";
    newBtn.addEventListener("click",()=>{
        alert("Hello");
    });

    if(text.querySelector('button')!==null) return;
    text.appendChild(newBtn);
});






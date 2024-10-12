var btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    alert("This form does not send any data. If you wish to contact me, please reach out via email at mohamedislaam87@gmail.com.");
});
// const val = window.getComputedStyle(document.getElementById("open")).display;
const nav=document.getElementById("open");
const clos=document.getElementById("close");
const side=document.getElementById("side-nav");
const lis=document.getElementsByClassName("lis");
nav.addEventListener('click',()=>{
    side.style.display="inline";
});

clos.addEventListener('click',()=>{
    side.style.display="none";
});

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', () => {
        side.style.display = "none";
    });
}

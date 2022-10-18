console.log("page loaded...");
document.querySelector(".vid-m").addEventListener("mouseover", over);
document.querySelector(".vid-m").addEventListener("mouseout", out);

function over(){
    document.querySelector(".vid-m").play();
    document.querySelector(".vid-m").muted = true;
    document.querySelector(".vid-m").controls = true;
}
function out(){
    document.querySelector(".vid-m").pause();
    document.querySelector(".vid-m").controls = false;
}
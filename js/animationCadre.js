//function du bouton droite
right.addEventListener("click" , function(){

    c_2.classList.add("c-2-to-left");
    c_1.classList.add("c-1-to-left");
    c0.classList.add("c0-to-left");
    c1.classList.add("c1-to-left");
    c2.classList.add("c2-to-left");

    setTimeout (function(){
        c_2.classList.remove("c-2-to-left");
        c_1.classList.remove("c-1-to-left");
        c0.classList.remove("c0-to-left");
        c1.classList.remove("c1-to-left");
        c2.classList.remove("c2-to-left");
    },1000);
});

//function du bouton right
left.addEventListener("click" , function(){

    c_2.classList.add("c-2-to-right");
    c_1.classList.add("c-1-to-right");
    c0.classList.add("c0-to-right");
    c1.classList.add("c1-to-right");
    c2.classList.add("c2-to-right");

    setTimeout (function(){
        c_2.classList.remove("c-2-to-right");
        c_1.classList.remove("c-1-to-right");
        c0.classList.remove("c0-to-right");
        c1.classList.remove("c1-to-right");
        c2.classList.remove("c2-to-right");
    },1000);
});
var bgSection=document.querySelector(".section1");
var left=document.querySelector(".btn-left");
var right=document.querySelector(".btn-right");
var titre=document.getElementById("color");
var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"];
var text=["BLUE","ORANGE","GREEN","RED","PINK","YELLOW"];
bgSection.style.backgroundImage = "url("+bgTab[0]+")";
right.style.setProperty("--btn-cursor","pointer");
right.style.setProperty("--btn-hover-color",text[1]);
left.style.setProperty("--btn-hover-color","white");

var num=0;

titre.style.setProperty("--shadow-texte",text[num]);
titre.innerHTML=text[num];

right.addEventListener("click" , function(){
    console.log(num);
    if(num<bgTab.length-1){
        num++;
        bgSection.style.backgroundImage = "url("+bgTab[num]+")";
        titre.innerHTML=text[num];
        right.style.setProperty("--btn-hover-color",text[num+1]);
        left.style.setProperty("--btn-hover-color",text[num-1]);
        titre.style.setProperty("--shadow-texte",text[num]);
        if(num==bgTab.length-1){
            right.style.setProperty("--btn-hover-color","white");
            right.style.setProperty("--btn-cursor","auto");
            } 
            else{
                left.style.setProperty("--btn-cursor","pointer");
            }
    };
});
left.addEventListener("click", function(){
    if(num>0){
        num--;
        bgSection.style.backgroundImage="url("+bgTab[num]+")";
        titre.innerHTML=text[num];
        left.style.setProperty("--btn-hover-color",text[num-1]);
        right.style.setProperty("--btn-hover-color",text[num+1]);
        titre.style.setProperty("--shadow-texte",text[num]);
        if(num==0){
            left.style.setProperty("--btn-hover-color","white");
            left.style.setProperty("--btn-cursor","auto");
        }
        else{
            right.style.setProperty("--btn-cursor","pointer");
        }
    }
});

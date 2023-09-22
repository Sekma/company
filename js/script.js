
//tableau du background-image
var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"];

//declaration des variables
var num=0;
//section1
var bgSection=document.querySelector(".section1");

//backround-image fixed
var imgFixed='img/logo.jpg'
document.querySelector(".backgroundLogo1").style.backgroundImage="url('img/logo.jpg')";
document.querySelector(".backgroundLogo2").style.backgroundImage="url('img/logo.jpg')";

//les boutons gauche et droite
var left=document.querySelector(".btn-left");
var right=document.querySelector(".btn-right");


//background-image initial

bgSection.style.backgroundImage = "url("+bgTab[num]+")";

//function du bouton droite
right.addEventListener("click" , function(){
    
    if(num<bgTab.length-1){
        num++;
    }
     else if(num==bgTab.length-1){
            num=num-(bgTab.length-1);
     }

     bgSection.style.backgroundImage = "url("+bgTab[num]+")";
          
});


//function du bouton gauche
left.addEventListener("click", function(){

    if(num>0){
        num--;   
    }
    else if(num==0){
        num=num+(bgTab.length-1);
    }

    bgSection.style.backgroundImage="url("+bgTab[num]+")";
});

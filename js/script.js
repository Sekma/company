var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"];
var text=["BLUE","ORANGE","GREEN","RED","PINK","YELLOW"];

var bgSection=document.querySelector(".section1");
var left=document.querySelector(".btn-left");
var right=document.querySelector(".btn-right");



var num=0;
bgSection.style.backgroundImage = "url("+bgTab[num]+")";


right.addEventListener("click" , function(){
    
    if(num<bgTab.length-1){
        num++;
    }
     else if(num==bgTab.length-1){
            num=num-(bgTab.length-1);
     }

     bgSection.style.backgroundImage = "url("+bgTab[num]+")";
     
     
});



left.addEventListener("click", function(){
    if(num==0){
        num=num+(bgTab.length-1);
    }
    
    else if(num>0){
        num--;   
    }

    bgSection.style.backgroundImage="url("+bgTab[num]+")";
});

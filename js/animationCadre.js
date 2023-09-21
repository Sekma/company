//tableau du background-image
var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"];
var bgNum=0;

//declaration des variables
//les cadres en bas
var c_2=document.querySelector(".cadre-2");
var c_1=document.querySelector(".cadre-1");
var c0=document.querySelector(".cadre0");
var c1=document.querySelector(".cadre1");
var c2=document.querySelector(".cadre2");

//background background-image initial
c_2.style.backgroundImage= "url("+bgTab[(bgTab.length-2)]+")";
c_1.style.backgroundImage= "url("+bgTab[(bgTab.length-1)]+")";
c0.style.backgroundImage= "url("+bgTab[bgNum]+")";
c1.style.backgroundImage= "url("+bgTab[bgNum+1]+")";
c2.style.backgroundImage= "url("+bgTab[bgNum+2]+")";

//function du bouton droite
right.addEventListener("click" , function(){
    
    if(bgNum<bgTab.length-1){
        bgNum++;
        c_2.style.backgroundImage= "url("+bgTab[(bgTab.length-2)-bgNum]+")";
        c_1.style.backgroundImage= "url("+bgTab[(bgTab.length-1)-bgNum]+")";
        c0.style.backgroundImage= "url("+bgTab[bgNum]+")";
        c1.style.backgroundImage= "url("+bgTab[bgNum+1]+")";
        c2.style.backgroundImage= "url("+bgTab[bgNum+2]+")";

    }
     else if(bgNum==bgTab.length-1){
            bgNum=bgNum-(bgTab.length-1);
            c_2.style.backgroundImage= "url("+bgTab[(bgTab.length-2)-bgNum]+")";
            c_1.style.backgroundImage= "url("+bgTab[(bgTab.length-1)-bgNum]+")";
            c0.style.backgroundImage= "url("+bgTab[bgNum]+")";
            c1.style.backgroundImage= "url("+bgTab[bgNum+1]+")";
            c2.style.backgroundImage= "url("+bgTab[bgNum+2]+")";
     }

     
        console.log(bgNum);
     
});


//function du bouton gauche
left.addEventListener("click", function(){
    if(bgNum==0){
        bgNum=bgNum+(bgTab.length-1);
    }
    
    else if(bgNum>0){
        bgNum--;   
    }
    c_2.style.backgroundImage= "url("+bgTab[(bgTab.length-2)-bgNum]+")";
    c_1.style.backgroundImage= "url("+bgTab[(bgTab.length-1)-bgNum]+")";
    c0.style.backgroundImage= "url("+bgTab[bgNum]+")";
    c1.style.backgroundImage= "url("+bgTab[bgNum+1]+")";
    c2.style.backgroundImage= "url("+bgTab[bgNum+2]+")";
        
    
});

   
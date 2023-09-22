//tableau du background-image
var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"];

//declaration des variables
//les cadres en bas
var c_2=document.querySelector(".cadre-2");
var c_1=document.querySelector(".cadre-1");
var c0=document.querySelector(".cadre0");
var c1=document.querySelector(".cadre1");
var c2=document.querySelector(".cadre2");

//les numBackground
var num_2=bgTab.length-2;
var num_1=bgTab.length-1;
var num0=0;
var num1=1;
var num2=2;

//background-image initial
c_2.style.backgroundImage= "url("+bgTab[num_2]+")";
c_1.style.backgroundImage= "url("+bgTab[num_1]+")";
c0.style.backgroundImage= "url("+bgTab[num0]+")";
c1.style.backgroundImage= "url("+bgTab[num1]+")";
c2.style.backgroundImage= "url("+bgTab[num2]+")";

//function du bouton droite
right.addEventListener("click" , function(){

//background cadre-2
if(num_2<bgTab.length-1){
    num_2++;  
}
else if(num_2==bgTab.length-1){
    num_2=num_2-(bgTab.length-1);
}

//background cadre-1
if(num_1<bgTab.length-1){
    num_1++;  
}
else if(num_1==bgTab.length-1){
    num_1=num_1-(bgTab.length-1);
}

//background cadre0
if(num0<bgTab.length-1){
    num0++;  
}
else if(num0==bgTab.length-1){
    num0=num0-(bgTab.length-1);
}

//background cadre1
if(num1<bgTab.length-1){
    num1++;  
}
else if(num1==bgTab.length-1){
    num1=num1-(bgTab.length-1);
}

//background cadre2
if(num2<bgTab.length-1){
    num2++;  
}
else if(num2==bgTab.length-1){
    num2=num2-(bgTab.length-1);
}
setTimeout (function(){
c_2.style.backgroundImage= "url("+bgTab[num_2]+")";
c_1.style.backgroundImage= "url("+bgTab[num_1]+")";
c0.style.backgroundImage= "url("+bgTab[num0]+")";
c1.style.backgroundImage= "url("+bgTab[num1]+")";
c2.style.backgroundImage= "url("+bgTab[num2]+")";
},1000);
     
});


//function du bouton gauche
left.addEventListener("click", function(){

//background cadre-2
if(num_2>0){
    num_2--;  
}
else if(num_2==0){
    num_2=num_2+(bgTab.length-1);
}

//background cadre-1
if(num_1>0){
    num_1--;  
}
else if(num_1==0){
    num_1=num_1+(bgTab.length-1);
}

//background cadre0
if(num0>0){
    num0--;  
}
else if(num0==0){
    num0=num0+(bgTab.length-1);
}

//background cadre1
if(num1>0){
    num1--;  
}
else if(num1==0){
    num1=num1+(bgTab.length-1);
}

//background cadre2
if(num2>0){
    num2--;  
}
else if(num2==0){
    num2=num2+(bgTab.length-1);
}

setTimeout (function(){
    c_2.style.backgroundImage= "url("+bgTab[num_2]+")";
    c_1.style.backgroundImage= "url("+bgTab[num_1]+")";
    c0.style.backgroundImage= "url("+bgTab[num0]+")";
    c1.style.backgroundImage= "url("+bgTab[num1]+")";
    c2.style.backgroundImage= "url("+bgTab[num2]+")";
    },1000);  
    
});

   
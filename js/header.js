var typingBool = false; 
var typingIdx=0; 

var typingTxt = $(".header_h1_n").text(); 

typingTxt=typingTxt.split("");

if(typingBool==false){ 
   typingBool=true;     
   var tyInt = setInterval(typing,200);
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    $(".header_h1").append(typingTxt[typingIdx]);
    typingIdx++; 
   } else{ 
    clearInterval(tyInt); 
   } 
}  
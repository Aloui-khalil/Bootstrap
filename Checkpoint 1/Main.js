
var message=document.getElementById("texto")
function boldFunction(){
   if (message.style.fontWeight=="bold") {
    message.style.fontWeight="normal"
   }
   else{
    message.style.fontWeight="bold"
   }
}

function ItalicFunction(){
    if(message.style.fontStyle=="italic"){ 
   message.style.fontStyle="normal"}
   else{
    message.style.fontStyle="italic"
   }
}

function UnderlineFunction(){
  if(message.style.textDecoration=="underline"){
   message.style.textDecoration="none"}
 else{
    message.style.textDecoration="underline"
 }
}
 
function changeSize(){
    message.style.fontSize=document.getElementById("size").value
}
function changeFont(){
    message.style.fontFamily=document.getElementById("font").value
}

$(".image-hover").mouseenter(function(){
    $(this).find(".bt").show();
    $(this).css("opacity","0.7");
})
$(".image-hover").mouseleave(function(){
    $(this).find(".bt").hide();
    $(this).css("opacity","1");

})

$("#red").click(function(){
   alert(window.getSelection().getRangeAt(0))
})

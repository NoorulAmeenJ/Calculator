
 var result =document.getElementById("result")
function number(x){
   
     result.value =   result.value + x
}
function Clear(){
   
    result.value =  ""
}
function back(){
   
    result.value = result.value.slice(0,-1);
    
}
function equal(){
    result.value = eval(result.value)
}
console.log("mkkf");

function eight() {

    // console.log("8")
}
var result = document.querySelector("#result");
result.addEventListener("input", (e)=>{
    console.log(e)
}
)
var answer = document.querySelector("#answer");


function equal() {
    // console.log( eval(result.value))
    var consol= eval(result.value)
    console.log(consol)
    answer.textContent = `${consol}`
    // result.textContent = `: ${consol}`
}

result.style.backgroundColor = "pink";

var three= document.getElementById('three');

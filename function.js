let outputscreen = document.getElementById("vinnu");
function display(num){
    outputscreen.value+=num;
}
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err){
        alert("invalid numbers");
    }
}
function del(){
    outputscreen.value = outputscreen.value.slice(0,-1)
}
function kill(){
    outputscreen.value=" ";
}
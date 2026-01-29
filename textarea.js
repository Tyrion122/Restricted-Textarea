let quantity = document.getElementById("textarea").value; 

document.getElementById("textarea").addEventListener("input", () =>{
    quantity = document.getElementById("textarea").value;
    document.getElementById("symbolsP").innerText = quantity.length + "/250";
    if (quantity.length == 250){
    document.getElementById("textarea").style.color = "red";
    document.getElementById("textarea").style.borderColor = "red";
    document.getElementById("symbolsP").style.color = "red";
    }else{
        document.getElementById("textarea").style.color = "";
        document.getElementById("textarea").style.borderColor = "";
        document.getElementById("symbolsP").style.color = "";
    };
}); 



let symbols; //можливо лишнє ще незнаю
const maxSymbols = 250; //обмеження треба ще застосувати

let quantity = document.getElementById("textarea").value; 
//console.log(quantity + "/250"); //вже не потрібно

document.getElementById("textarea").addEventListener("input", () =>{
    quantity = document.getElementById("textarea").value;
    //console.log(quantity.length + "/250"); //вже не потрібно
    document.getElementById("symbolsP").innerText = quantity.length + "/250";
}); 

if (quantity.length == 250){
    document.getElementById("textarea").attributes("readOnly", "true");//обмеження не працює 
};


/*

symbols = 5;
symbols = document.getElementById("symbolsP").innerText  //незнаю ще як реалізувати

*/


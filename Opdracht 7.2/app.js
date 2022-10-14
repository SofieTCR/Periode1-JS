let Budget = 100;
let product = prompt("Vul de kosten van uw product in", 0);

let ResultP = document.getElementById("ResultParagraph");
if (Budget >= product) {
    ResultP.innerHTML = "U heeft genoeg geld!";
    ResultP.style.color = "green";
}
else {
    ResultP.innerHTML = "Helaas, te weinig geldt";
    ResultP.style.color = "red";
}
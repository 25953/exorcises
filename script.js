function CalculateArea(){
    var radius =document.form1.txtRadius.value;
    var b = document.getElementById("demo").innerHTML = ("<P>De omtrek is: " + (2 * radius * Math.PI) + "</p>");
}

function CalculateArea2(){
    var radius =document.form1.txtRadius.value;
    var a = document.getElementById("demo2").innerHTML = ("<P>De oppervlakte is: " + (radius * radius * Math.PI) + "</p>");
}


function Rectangle(){
    var hoogte =document.form1.hoogte.value;
    var hoogte = document.getElementById("demo3").innerHTML = ("<P>De oppervlakte is: " + (a * b) + "</p>");
}

function Rectangle2(){
    var breedte =document.form1.breedte.value;
    var breedte = document.getElementById("demo4").innerHTML = ("<P>De omtrek is: " + (2* (a * b)) + "</p>");
}
function ctof(){
    let c = document.getElementById('celsius').value;

    let fah = ((9/5)*c + 32).toFixed(2)

    document.getElementById('f').innerHTML="Fahrenheit: "+fah
}

function ftoc(){
    let f = document.getElementById('fahr').value;

    let cel = ((5/9)*(f-32)).toFixed(2)

    document.getElementById('c').innerHTML="Celcius: "+cel
}

function bmi(){
    let w = document.getElementById('kg').value;
    let h = document.getElementById('height').value;

    let b = (w / (h * h)).toFixed(2);
    

    document.getElementById('res').innerHTML = "your BMI is "+b;
}
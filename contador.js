let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;

    if (cuenta === 10) {
        document.getElementById("numero").style.color = "red";
    }

    if (cuenta === 20) {
        document.getElementById("numero").style.color = "black";    
    }
    if (cuenta === 30) {
        document.getElementById("numero").style.color = "green";    
    }
    if (cuenta === -10) {
        document.getElementById("numero").style.color = "blue";
    }
    if (cuenta === -20) {
        document.getElementById("numero").style.color = "orange";    
    }
    if (cuenta === -30) {
        document.getElementById("numero").style.color = "purple";    
    }
    if (cuenta === 999) {
        alert("Jodaaaaaa, tienes muchoo tiempo libre no?");
    }
}

function disminuir() {
    cuenta--;
    document.getElementById("numero").innerHTML = cuenta;

    if (cuenta === 10) {
        document.getElementById("numero").style.color = "red";
    }

    if (cuenta === 20) {
        document.getElementById("numero").style.color = "black";    
    }
    if (cuenta === 30) {
        document.getElementById("numero").style.color = "green";    
    }
    if (cuenta === -10) {
        document.getElementById("numero").style.color = "blue";
    }
    if (cuenta === -20) {
        document.getElementById("numero").style.color = "orange";    
    }
    if (cuenta === -30) {
        document.getElementById("numero").style.color = "purple";    
    }
}

function reset() {
    cuenta = 0;
    document.getElementById("numero").innerHTML = cuenta;
    document.getElementById("numero").style.color = "rgb(255, 0, 200)";
}
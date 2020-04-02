
document.getElementById('botao-2').onclick = function(){ 
    document.getElementById('txt-quantidade2').value = parseInt(document.getElementById('txt-quantidade2').value) - 1 
}

document.getElementById('botao-unico2').onclick = function(){ 
    document.getElementById('txt-quantidade2').value = parseInt(document.getElementById('txt-quantidade2').value) + 1 
}

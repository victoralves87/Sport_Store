/*
function grande(){
    let div = document.getElementById("aumenta")
    div.style.width = '300px';
}

*/

function exibir(categoria){
    alert(categoria)

}


let elementos = document.getElementById("produtos")
console.log(elementos);
for(var i=0;i < elementos.length; i++){
    console.log(elementos[i].id)
}
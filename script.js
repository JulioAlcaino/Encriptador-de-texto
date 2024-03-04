const textoIngresado = document.querySelector(".box-texto");
const mensaje = document.querySelector(".box-texto2");



function btnEncriptar() {
    const textoEncriptado = encriptar(textoIngresado.value)

    mensaje.value = textoEncriptado

    textoIngresado.value = "";

}

function btnDesencriptar() {
    var textoDesencriptado = desencriptar(textoIngresado.value)

    mensaje.value = textoDesencriptado

    textoIngresado.value = "";

}


async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(mensaje.value);
      alert('Contenido copiado al portapapeles');
     
    } catch (err) {
      alert('Error al copiar: ', err);
    }
  }



function encriptar(stringEncriptada){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()


    for(let i=0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    } 
    return stringEncriptada
}



function desencriptar(stringDesencriptada){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){

        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }

    } 
    return stringDesencriptada
}

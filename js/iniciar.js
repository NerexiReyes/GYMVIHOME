document.querySelector('#boton').addEventListener('click',sesion)

 function sesion(){
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contrasena").value;
    if(user == "admin" && pass == "1234" ){
      alert("bienvenido");
      window.location ='index2.html';
    } else {
      alert ("datos incorrecto");
      window.location='sesion.html';
    }
  }

  
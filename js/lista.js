function capturar(){
    function persona(cedula,nombre,apellido,ciudad,deporte){
        this.cedula = cedula;
        this.nombre = nombre;
        //console.log(nombreCapturar);
        this.apellido = apellido;
        this.ciudad = ciudad;
        this.deporte = deporte;
    }
    var cedulaCapturar = document.getElementById("cedula").value;
    var nombreCapturar = document.getElementById("nombre").value;
    var apellidoCapturar = document.getElementById("apellido").value;
    var cuidadCapturar = document.getElementById("ciudad").value;
    var deporteCapturar = document.getElementById("deporte").value;

    if(cedula == ""){
        document.getElementById("cedula").focus();
    }else{
        if(nombre == ""){
            document.getElementById("nombre").focus();  
    }else {
        if(apellido == ""){
            document.getElementById("apellido").focus();
    } else {
        if(ciudad == ""){
            document.getElementById("ciudad").focus();
    } else {
        if(deporte == ""){
            document.getElementById("deporte").focus();
        } else {
    nuevosujeto = new persona(cedulaCapturar,nombreCapturar,apellidoCapturar,cuidadCapturar,deporteCapturar);
    console.log(nuevosujeto);
    agregar;

    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
   document.getElementById("apellido").value = "";
    document.getElementById("ciudad").value= "";
    document.getElementById("deporte").value = "";
    document.getElementById("cedula").focus();


    }
}
    }
}
    }


}
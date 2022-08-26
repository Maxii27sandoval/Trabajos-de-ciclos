let juego = confirm("Bienvenido al Club Pueblos Bajos");
let numero=Math.floor(Math.random(0) * 11);
console.log(numero)       
let respuesta;
if (juego) {
    do{
        respuesta= parseInt(prompt("Ingrese su numero de camiseta del goleador del torneo del 1 al 11"));
        if(numero === respuesta){
            alert("Bienvenido Jugador");
        } else{
                respuesta = alert("Parece que este Numero no esta registrado en el equipo VUELVE A INTENTARLO ")
            }
    }while(respuesta !=numero);
}else{
    alert("Que lastima, te esperamos la proxima :)");
}




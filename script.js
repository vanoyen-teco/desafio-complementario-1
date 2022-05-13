let userAdmin;
let condition = false;
do{
    let msj = false;
    if(userAdmin === "" || userAdmin === undefined){
        userAdmin = prompt('Por favor ingrese su nombre.');
    }else if(userAdmin === null){
        condition = true;
        msj = 'Saliendo del sitio.';
    }else if(userAdmin == 'webmaster'){
        condition = true;
        msj = 'Gracias, ya podemos continuar';
    }else{
        userAdmin = prompt(`Ingrese otro usuario, ${userAdmin} no posee privilegios.`);
    }
    if(msj){
        console.log(msj);
    }
}while(!condition);
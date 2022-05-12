let userAdmin;
let condition = false;
let msj;
do{
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
}while(condition == false);
if(condition){
    console.log(msj);
}else{
    console.log('Lo sentimos, no podemos continuar');
}

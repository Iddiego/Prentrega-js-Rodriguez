//Selección de plan (Definiciones)

let token = 300;
let valorMe = 80;
let valorBi = 150;
let valorTri = 500;

function consultarToken(){
    alert("Cantidad De Token: " + token);
    seleccionarOpcion();
}

function finalizar(){
    alert("Operación Finalizada, gracias");
}


function pagarPlan3(valor3){
    if (valor3 === "si"){
        if(token >= valorTri);
        alert("Saldo insuficiente, su saldo es : "  + token);
        seleccionarOpcion();
    }else{
        if( valor3 === "no");
        alert("no se realizo la operación");
        seleccionarOpcion();
    }
}

function pagarPlan2(valor2){
    if(valor2 === "si"){
        if(token >= valorBi);
        token = token - valorBi
        alert("Pago Exitoso Con Token");
        finalizar();
    }else{
        if( valor2 === "no");
        alert("no se realizo la operación");
        seleccionarOpcion();  
    }
}

function pagarPlan(valor){
    if(valor === "si"){
        if( token >= valorMe);
        token = token - valorMe
        alert("Pago Exitoso Con Token");
        finalizar();
    }else{
        if(valor === "no")
        alert("no se realizo la operación");
        seleccionarOpcion();
    }
}

function seleccionarOpcion(){
    console.log("1 Saldo en Token");
    console.log("2 Plan Mensual");
    console.log("3 Plan Bimestral");
    console.log("4 Plan Trimestral");
    console.log("5 Salir")
    
    let op = prompt("Ingrese la opción");

        switch(op){
            case "1" :
                consultarToken();
                break;
            case "2":
                let valor = prompt("¿Desea pagar con token? el valor es : " + valorMe);
                pagarPlan(valor);
                break;
            case "3":
                let valor2 = prompt("¿Desea pagar con token? el valor es : " + valorBi);
                pagarPlan2(valor2);
                break;
            case "4":
                let valor3 = prompt("¿Desea pagar con token? el valor es : " + valorTri);
                pagarPlan3(valor3);               
                break;
            case "5":
                console.log("Salir");
                finalizar();
                break;
            default:
                console.log("Operacion Invalida");
        }
}


function validarUsuario(usuario){
    if(usuario === "Diego"){
        seleccionarOpcion();
        }else{
            alert("Usuario No Existe");
        }
}

function ingresarUsuario(inicio){
        if(inicio){
            let usuario = prompt("Ingrese Usuario");
            validarUsuario(usuario);

        }else{
            alert("Necesita un usuario");
        }
    }

function ingresoPlan(){
        let inicio = confirm("¿Tiene Usuario?");
        ingresarUsuario (inicio);
    }



// Ejecuciones

ingresoPlan()


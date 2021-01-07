// VALIDACIONES EN JS SOLICITADAS EN LAS TAREAS

function validar(){

    var pago = document.getElementById('pago').value
    var mes = document.getElementById('mespago').value
    var anho = document.getElementById('anhopago').value
    var run = document.getElementById('run').value


    if(pago==""){
        document.getElementById('pago').style.borderColor="red";
        document.getElementById('pago').style.background="#e57373";
        alert('Debe Ingresar un valor');
        document.getElementById('pago').focus();
        return false;
    }else{
        if(pago < 0 || pago > 100000000){
            document.getElementById('pago').style.borderColor="red";
            document.getElementById('pago').style.background="#e57373";
            alert('El monto debe ser mayor o igual a cero y menor o igual a $99.999.999');
            document.getElementById('pago').focus();
            return false;
        }else{
            document.getElementById('pago').style.borderColor="green";
            document.getElementById('pago').style.background="#aed581";
        }
    }

    if(mes==""){
        document.getElementById('mespago').style.borderColor="red";
        document.getElementById('mespago').style.background="#e57373";
        alert('Debe Seleccionar un mes');
        document.getElementById('mespago').focus();
        return false;
    }else{
        document.getElementById('mespago').style.borderColor="green";
        document.getElementById('mespago').style.background="#aed581";
    }

    if(anho==""){
        document.getElementById('anhopago').style.borderColor="red";
        document.getElementById('anhopago').style.background="#e57373";
        alert('Debe Seleccionar un año');
        document.getElementById('anhopago').focus();
        return false;
    }else{
        if(anho < 2010 || anho > 2050){
            document.getElementById('anhopago').style.borderColor="red";
            document.getElementById('anhopago').style.background="#e57373";
            alert('El año de pago debe estar entre 2010 y 2050');
            document.getElementById('anhopago').focus();
            return false;
        }else{
            document.getElementById('anhopago').style.borderColor="green";
            document.getElementById('anhopago').style.background="#aed581";
        }
    }

    if(run==""){
        document.getElementById('run').style.borderColor="red";
        document.getElementById('run').style.background="#e57373";
        alert('Debe Ingresar un RUT');
        document.getElementById('run').focus();
        return false;
    }else{
        document.getElementById('run').style.borderColor="green";
        document.getElementById('run').style.background="#aed581";
        alert('Valores Correctamente Ingresados');
        return false;
    }
   
}

////////////////////////////////////////////////////////////////////////
///////////////////////////JQUERY GRUPAL 9//////////////////////////////
////////////////////////////////////////////////////////////////////////


$(document).ready(function(){
    $("#estilo1").on("click",function(){
        $("#tabla").css("background-color", "blue");
        $("#cabecera").css("color", "#FFFFFF");
        $("#tabla").css("border", "solid");
        $("#tabla").css("border-width", "5px");
        $("#tabla").css("border-color", "#000000");
    });
});

$(document).ready(function(){
    $("#estilo2").on("click",function(){
        $("#tabla").css("background-color", "green");
        $("#cabecera").css("color", "#ffff00");
        $("#tabla").css("border", "solid");
        $("#tabla").css("border-width", "5px");
        $("#tabla").css("border-color", "#0000ff");
    });
});

$(document).ready(function(){
    $("#estilo3").on("click",function(){
        $("#tabla").css("background-color", "yellow");
        $("#cabecera").css("color", "#000000");
        $("#tabla").css("border", "solid");
        $("#tabla").css("border-width", "5px");
        $("#tabla").css("border-color", "#ff0000");
    });
});

$(document).ready(function(){
    $("#actividades").on( "click", function() {
        $('#tabla-actividades').show();
    });

    $("#actividades2").on( "click", function() {
        $('#tabla-actividades').show();
    });

    $("#actividades3").on( "click", function() {
        $('#tabla-actividades').show();
    });
    
    $("#tabla-actividades").on( "click", function() {
        $('#tabla-actividades').hide();
    });
});


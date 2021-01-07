//VALIDACIONES CON EL PLUGIN JSVALIDATE

$.validator.addMethod("terminaPor", function(value, element, parametro){

})

$("#actualizar-form").validate({
    rules: {
        run: {
            required: true,
            minlength: 9,
            maxlength: 10
        },

        nombre_cliente: {
            required: true,
            minlength: 3,
            maxlength: 50
        },

        apellido_cliente: {
            required: true,
            minlength: 3,
            maxlength: 50
        },

        fono_cliente: {
            number: true,
            required: true,
            minlength: 8,
            maxlength: 11
        },

        afp: {
            required: true
        },

        salud: {
            required: true
        },

        direccion: {
            required: true,
            minlength: 3,
            maxlength: 50
        },

        comuna: {
            required: true,
            minlength: 3,
            maxlength: 50
        },

        edad: {
            number: true,
            required: true,
            minlength: 2,
            maxlength: 2
        }

    }
})


$("#guardar").click(function(){
    if($("#actualizar-form").valid() == false){
        return;
    }
    let run = $("#run").val()
    let nombre_cliente = $("#nombre_cliente").val()
    let apellido_cliente = $("#apellido_cliente").val()
    let fono_cliente = $("#fono_cliente").val()
    let afp = $("#afp").val()
    let salud = $("#salud").val()
    let direccion = $("#direccion").val()
    let comuna = $("#comuna").val()
    let edad = $("#edad").val()    
});

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
 
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });

//ASISTENTES

$.validator.addMethod('formato-tel', function (value, element) {
    return this.optional(element) || /^(\+569)?\d{8}$/.test(value);
}, "Por favor entre un número de teléfono válido");

$("#asistente-form").validate({
    rules: {
        id_asis: {
            number: true,
            required: true,
            min: 1,
            max: 9999
        },

        nombre_asis: {
            required: true,
            minlength: 1,
            maxlength: 99
        },

        edad_asis: {
            number: true,
            required: true,
            min: 1,
            max: 149
        },

        correo_asis: {
            required: true,
            email: true
        },

        telefono_asis: {
            required: true,
            minlength: 12,
            maxlength: 12,
            'formato-tel': true
        },

        fecha: {
            required: true
        },

        cliente: {
            required: true,
            minlength: 3,
            maxlength: 50
        }

    }
})


$("#guardar-asis").click(function(){
    if($("#asistente-form").valid() == false){
        return;
    }
    let id_asis = $("#id_asis").val()
    let nombre_asis = $("#nombre_asis").val()
    let edad_asis = $("#edad_asis").val()
    let correo_asis = $("#correo_asis").val()
    let telefono_asis = $("#telefono_asis").val()
    let fecha = $("#fecha").val()
    let cliente = $("#cliente").val()
    
});

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
 
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });

//LOGIN

$.validator.addMethod("rut", function(value, element) {
    return this.optional(element) || $.Rut.validar(value);
  }, "Este campo debe ser un rut valido.");

  $("#jq-validation").validate();
  
  $('#rut_demo_int').Rut({
                      validation: false
                    });

$("#login-form").validate({
    rules: {
        

        pass: {
            required: true,
            minlength: 1,
            maxlength: 20
        }

    }
})


$("#ingresar").click(function(){
    if($("#login-form").valid() == false){
        return;
    }
    
    let rut_demo_int = $("#rut_demo_int").val()
    let pass = $("#pass").val()
    
});

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
 
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });

  //ACCIDENTES

  $("#form_acci").validate({
    rules: {
        id_acci: {
            number: true,
            required: true,
            min: 1,
            max: 9999
        },

        fecha_acci: {
            required: true
        },

        hora_acci: {
            required: true
        },

        lugar_acci: {
            required: true,
            minlength: 1,
            maxlength: 149
        },

        origen_acci: {
            required: true,
            maxlength: 100
        },

        cliente_acc: {
            required: true
        },

        consecuencias: {
            maxlength: 100
        }

    }
})

$("#guardar_acci").click(function(){
    if($("#form_acci").valid() == false){
        return;
    }
    let id_acci = $("#id_acci").val()
    
    let fecha_acci = $("#fecha_acci").val()
    let hora_acci = $("#hora_acci").val()
    let lugar_acci = $("#lugar_acci").val()
    let origen_acci = $("#origen_acci").val()
    let cliente_acc = $("#cliente_acc").val()
    let consecuencias = $("#consecuencias").val() 
});

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
 
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });





















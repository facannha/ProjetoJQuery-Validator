//Validação simples
$("#formComentario").validate();

//Validação com maiores funções
$("#formularioValidation").validate({
    debug: true,
    rules: {
        campo1: {
            required: true,
        },
        campo2: {
            minlength: 3,
            maxlength: 4,
            //ou rangelength: [3, 4] realiza a mesma coisa
        },

        campo3: {
            min: 10,
            max: 15,
            //ou range: [10, 15]
        },
        campo4: {
            accept: "audio/*"
        },
        telefone_pessoal: {
            require_from_group: [1, ".grupo_telefone"]
        },
        telefone_casa: {
            require_from_group: [1, ".grupo_telefone"]
        },
        telefone_trabalho: {
            require_from_group: [1, ".grupo_telefone"]
        }
    },
    messages:{
        campo1: {
            accept: "Mensagem customizada: Informe um email válido!"
        }
    }
});

//Validação com API AddMethod()
jQuery.validator.addMethod('celular', function (value, element) {
    value = value.replace("(","");
    value = value.replace(")", "");
    value = value.replace("-", "");
    value = value.replace(" ", "").trim();
    if (value == '0000000000') {
        return (this.optional(element) || false);
    } else if (value == '00000000000') {
        return (this.optional(element) || false);
    }
    if (["00", "01", "02", "03", , "04", , "05", , "06", , "07", , "08", "09", "10"]
    .indexOf(value.substring(0, 2)) != -1) {
        return (this.optional(element) || false);
    }
    if (value.length < 10 || value.length > 11) {
        return (this.optional(element) || false);
    }
    if (["6", "7", "8", "9"].indexOf(value.substring(2, 3)) == -1) {
        return (this.optional(element) || false);
    }
    return (this.optional(element) || true);
}, 'Informe um número de telefone celular válido!');

$( "#formularioValidaTelefoneCelular" ).validate({
  debug: true,
  rules: {
    telefone_celular: {
      required: true,
                  celular: true,
                }
  }
});
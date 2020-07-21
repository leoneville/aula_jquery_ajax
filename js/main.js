
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url_cep = "https://viacep.com.br/ws/"+ cep +"/json/";
    console.log(url_cep);
    $.ajax({
        url: url_cep,
        type: "GET",
        success: function(response){
            $("#logradouro").html(response.logradouro);
            console.log(response);
            //document.getElementById("logradouro").innerHTML = `Rua: ${response.logradouro}`;
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //alert(response.logradouro);
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});

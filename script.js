function clicou(){
    var script = document.createElement('script');

    //Sincroniza com o callback.
    script.src = 'https://viacep.com.br/ws/' + document.getElementById('cep').value +'/json/?callback=chama_cep';

    document.body.appendChild(script);
}

function chama_cep(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('cep_resul').innerText = conteudo.cep;
        document.getElementById('rua').innerText = conteudo.logradouro;
        document.getElementById('bairro').innerText = conteudo.bairro;
        document.getElementById('cidade').innerText = conteudo.localidade;
        document.getElementById('estado').innerText = conteudo.uf;
        document.getElementById('ddd').innerText = conteudo.ddd;
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

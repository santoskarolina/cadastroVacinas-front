function subirScroll(){
    window.scrollTo({
        top: 0, //posicao do scroll
        behavior:'smooth', //velocidade suave
    });
};

function mesagem(){
   document.querySelector('.mensagem').style.display = 'block';
   setTimeout(() => {
    document.querySelector('.mensagem').style.display = 'none';
   }, 6000);
};

async function cadastrar(){
    //variaveis dos inputs
    var nome = document.querySelector('.nome').value;
    var cpf = document.querySelector('.cpf').value;
    var nomeMae = document.querySelector('.nomeMae').value;
    var email = document.querySelector('.input-email').value;
    var telefone = document.querySelector('.telefone').value;
    var contato = document.querySelector('.contato').value;
    var dataNascimento = document.querySelector('.data').value;

    //acamado
    var select = document.querySelector('.select'); //pegar o select
	var option = select.options[select.selectedIndex]; //pegar o valor do select
    //-----
    var cep = document.querySelector('.cep').value;
    var endereco = document.querySelector('.endereco').value;
    var bairro = document.querySelector('.bairro').value;
    var numero = document.querySelector('.numero').value;
    var complemento = document.querySelector('.complemento').value;

    
    if( cpf == '' ){
        document.querySelector('.rule-cpf').innerHTML = 'CPF é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-cpf').innerHTML = '';
        }, 6000);
    }else if(nome == ''){
        document.querySelector('.rule-nome').innerHTML = 'Nome é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-nome').innerHTML = '';
        }, 6000);
    }else if(email == ''){
        document.querySelector('.rule-email').innerHTML = 'Email é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-email').innerHTML = '';
        }, 6000);
    }else if(nomeMae == ''){
        document.querySelector('.rule-mae').innerHTML = 'Nome da mãe é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-mae').innerHTML = '';
        }, 6000);
    }else if(email.indexOf('@') == -1){//emal invalio
        document.querySelector('.rule-email').innerHTML = 'Email inválido';
        setTimeout(() => {
            document.querySelector('.rule-email').innerHTML = '';
        }, 6000);
    }else if(telefone == ''){
        document.querySelector('.rule-telefone').innerHTML = 'Telefone é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-telefone').innerHTML = '';
        }, 6000);
    }else if(contato == ''){
        document.querySelector('.rule-contato').innerHTML = 'Telefone para contato é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-contato').innerHTML = '';
        }, 6000);
    }else if(dataNascimento == ''){
        document.querySelector('.rule-data').innerHTML = 'Data de nascimento é obrigatória';
        setTimeout(() => {
            document.querySelector('.rule-data').innerHTML = '';
        }, 6000);
    }else if(cep == ''){
        document.querySelector('.rule-cep').innerHTML = 'CEP é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-cep').innerHTML = '';
        }, 6000);
    }else if(endereco == ''){
        document.querySelector('.rule-endereco').innerHTML = 'Endereco é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-endereco').innerHTML = '';
        }, 6000);
    }else if(bairro == ''){
        document.querySelector('.rule-bairro').innerHTML = 'Bairro é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-bairro').innerHTML = '';
        }, 6000);
        
    }else if(numero == ''){
        document.querySelector('.rule-numero').innerHTML = 'Número é obrigatório';
        setTimeout(() => {
            document.querySelector('.rule-numero').innerHTML = '';
        }, 6000);
    } else {
        let req =  await fetch('http://localhost:8080/pessoas', {
           method: 'POST',
           body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                nomeMae: nomeMae,
                email: email,
                dataNascimento: dataNascimento,
                telefone: telefone,
                telefoneContato: contato,
                pacienteAcamado: option.value,
                cep: cep,
                enderecoC: endereco,
                bairro: bairro,
                numero: numero,
                complemento: complemento,
           }),
           headers: {
            "Content-type": "application/json"
        }
       });    
        subirScroll(); 
        mesagem(); 
    }
};
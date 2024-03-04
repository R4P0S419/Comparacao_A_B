const form = document.getElementById("form-value");
const valorA = document.getElementById("valor-a");
const valorB = document.getElementById("valor-b");


form.addEventListener('submit', function(e){
    e.preventDefault();

    if (valorA.value < valorB.value) {

        const mensagemSucesso = 'A é menor que B, valido!';

        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        const mensagemErro = 'A é maior que B, invalido!';

        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'none';

        alert("A é menor que B");
    } else {

        const mensagemErro = 'A é maior que B, invalido!';

        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        const mensagemSucesso = 'A é menor que B, valido!!';

        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';

        alert("A é maior que B");
        
    }
})
























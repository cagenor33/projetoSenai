//================================================================================
// VALIDAÇÃO DO FORMULÁRIO - CONTATO
//================================================================================

    function showMessage(input, message, type) {
        // pega o elemento small e setar a msg
        const msg = input.parentNode.querySelector("small");
        msg.innerText = message;
        // atualizar a input com a classe
        input.className = type ? "success" : "error";
        return type;
    }
    
    function showError(input, message) {
        return showMessage(input, message, false);
    }
    
    function showSuccess(input) {
        return showMessage(input, "", true);
    }
    
    function hasValue(input, message) {
        if (input.value.trim() === "") {
            return showError(input, message);
        }
        return showSuccess(input);
    }
    
    function validateEmail(input, requiredMsg, invalidMsg) {
        // chechando se o valor é vazio
        if (!hasValue(input, requiredMsg)) {
            return false;
        }
        // validando formato do e-mail
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const email = input.value.trim();
        
        if (!emailRegex.test(email)) {
            return showError(input, invalidMsg);
        }
        return true;
    }
    
    const form = document.querySelector("#cadastro_contato");
    
    const NAME_REQUIRED = "Por favor, digite seu nome!";
    const EMAIL_REQUIRED = "Porfavor digite seu e-mail!";
    const EMAIL_INVALID = "Por favor, digite seu e-mail no formato correto!";
    const MESSAGE_REQUIRED = "Porfavor digite sua mensagem!";
    
    form.addEventListener("submit", function (event) {
        // para o botão submit
        event.preventDefault();
    
        // valida o formulário
        let nameValid = hasValue(form.elements["nomeContato"], NAME_REQUIRED);
        let emailValid = validateEmail(form.elements["emailContato"], EMAIL_REQUIRED, EMAIL_INVALID);
        let messageValid = hasValue(form.elements["sugestao"], MESSAGE_REQUIRED);
        // se válida envie o formulário.
        if (nameValid && emailValid && messageValid) {
            alert("Enviado com sucesso!");
            form.submit()
            document.querySelector("#nomeContato").value = "";
            document.querySelector("#emailContato").value = "";
            document.querySelector("#sugestao").value = "";
        }
    });
    
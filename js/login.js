window.onload = function() {
    var form = document.getElementById("login-form");

    form.addEventListener('submit', function(event) {
        var email = document.getElementById("email").value;
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            alert("Por favor, insira um endereço de email válido. Ex: exemplo@exemplo.pt");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
};
window.onload = function() {
    var form = document.getElementById("signup-form");
    if (form) {
        var btn = form.querySelector(".btn"); 

        btn.addEventListener('click', function(event) {
            event.preventDefault(); 

            var firstName = form.querySelector("#firstName").value;
            var lastName = form.querySelector("#lastName").value;
            var email = form.querySelector("#email").value;
            var password = form.querySelector("#password").value;
            var confirmPassword = form.querySelector("#confirmPassword").value;
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            //verificar email válido
            if (!regex.test(email)) {
                alert("Por favor, insira um endereço de email válido. Ex: exemplo@exemplo.pt");
                return; 
            }

            // Verificar se as passwords são iguais
            if (password !== confirmPassword) {
                alert("As palavras-passe não correspondem. Por favor, tente novamente.");
                return; 
            }

            form.querySelector("#firstName").value = '';
            form.querySelector("#lastName").value = '';
            form.querySelector("#email").value = '';
            form.querySelector("#password").value = '';
            form.querySelector("#confirmPassword").value = '';
        });
    }
};

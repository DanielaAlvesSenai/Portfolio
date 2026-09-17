function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!login.includes("@")) {
        alert("Digite um e-mail válido!");
        return;
    }

    window.location.href = "index.html";
}

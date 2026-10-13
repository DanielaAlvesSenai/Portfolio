
import { banco } from "./supabase.js";

async function cadastrarUsuario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }

    const { data, error } = await banco.auth.signUp({
        email: email,
        password: senha,
        options: {
            data: {
                nome: nome
            }
        }
    });

    if (error) {
        alert("Erro no cadastro: " + error.message);
        return;
    }

    alert("Cadastro realizado! Verifique seu e-mail se for solicitada uma confirmação.");

    window.location.href = "./index.html";
}

window.cadastrarUsuario = cadastrarUsuario;

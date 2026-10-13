
import { banco } from "./supabase.js";

async function logar() {
    alert("O botão Conectar está funcionando!");

    const email = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value;

    const { data, error } = await banco.auth.signInWithPassword({
        email: email,
        password: senha
    });

    if (error) {
        alert("Erro do Supabase: " + error.message);
        console.error(error);
        return;
    }

    alert("Login realizado com sucesso!");

    window.location.href = "./index.html";
}

window.logar = logar;

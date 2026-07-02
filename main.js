const numeroSenha=document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent=tamanhoSenha;
constbotoes=document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick=diminuiTamanho;
botoes[1].onclick=diminuiTamanho;
function diminuiTamanho(){
    ife (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// 1. BANCO DE DADOS DOS LIVROS COM SUAS PALAVRAS-CHAVE
const acervoLivros = [
    {
        titulo: "O Poder do Agora",
        autor: "Eckhart Tolle",
        tags: ["ansiedade", "futuro", "preocupado", "mente", "estresse", "ansiosa", "ansioso", "pensamentos", "pensando demais", "acelerado", "acelerada", "medo do futuro", "preocupada", "crise"],
        motivo: "Este livro é perfeito para acalmar a mente e focar no presente. Se você está ansioso com o futuro ou preso a pensamentos repetitivos, ele te ajuda a encontrar clareza e paz."
    },
    {
        titulo: "A Sutil Arte de Ligar o F*da-se",
        autor: "Mark Manson",
        tags: ["trabalho", "pressao", "cobrança", "fracasso", "perdido", "desanimado", "carreira", "pressão", "cobrando", "falhei", "errado", "desanimada", "cansado das pessoas", "opinião", "estressado"],
        motivo: "Ideal para momentos de crise profissional ou quando você sente que está se cobrando demais. Ele traz uma perspectiva realista sobre aceitar as falhas e focar no que realmente importa."
    },
    {
        titulo: "Mulheres que Correm com os Lobos",
        autor: "Clarissa Pinkola Estés",
        tags: ["termino", "solitude", "autoconhecimento", "identidade", "superar", "mulher", "relacionamento", "término", "fim", "terminei", "ex", "namorado", "namorada", "sozinha", "sozinho", "solitário", "solitária"],
        motivo: "Um clássico sobre o resgate da força interior e intuição. Excelente para quem está passando por términos, separações ou momentos de redescoberta pessoal e independência."
    },
    {
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        tags: ["escolhas", "duvida", "destino", "sonhos", "mudar", "mudança", "dúvida", "inseguro", "insegura", "rumo", "caminho", "decisão", "decidir", "projeto", "recomeçar"],
        motivo: "Uma história inspiradora sobre seguir seus sonhos e ouvir seu coração. Ótimo para quando você está em uma encruzilhada na vida e precisa de motivação para continuar e confiar na jornada."
    },
    {
        titulo: "Essencialismo",
        autor: "Greg McKeown",
        tags: ["cansado", "cansada", "sem tempo", "produtividade", "foco", "rotina", "tarefas", "esgotado", "esgotada", "sobrecarregado", "sobrecarregada", "muita coisa", "correria", "tempo"],
        motivo: "Se você sente que está fazendo muita coisa mas não sai do lugar, este livro ensina a eliminar o que é desnecessário para focar apenas no que realmente gera valor na sua vida."
    }
];

// 2. O MOTOR DE BUSCA (A LÓGICA DO PROCURAR)
function buscarLivro() {
    // Pega o texto que o usuário digitou, remove espaços extras e põe em minúsculo
    const textoUsuario = document.getElementById('userInput').value.toLowerCase().trim();
    const resultContainer = document.getElementById('resultContainer');
    
    // Alerta se clicar no botão sem digitar nada
    if (!textoUsuario) {
        alert("Por favor, digite uma frase contando como você está se sentindo!");
        return;
    }

    let livroRecomendado = null;
    let maiorNumeroDeCombinacoes = 0;

    // O motor faz a varredura: testa palavra por palavra do desabafo do usuário
    acervoLivros.forEach(livro => {
        let combinacoes = 0;
        
        livro.tags.forEach(tag => {
            if (textoUsuario.includes(tag)) {
                combinacoes++; // Soma 1 ponto para o livro se achar a tag no texto
            }
        });

        // O livro que bater mais palavras-chave ganha a indicação
        if (combinacoes > maiorNumeroDeCombinacoes) {
            maiorNumeroDeCombinacoes = combinacoes;
            livroRecomendado = livro;
        }
    });

    // 3. EXIBIÇÃO DO RESULTADO NA TELA
    if (livroRecomendado) {
        // Se encontrou alguma tag correspondente, mostra o livro certo
        document.getElementById('bookTitle').innerText = livroRecomendado.titulo;
        document.getElementById('bookAuthor').innerText = "Por " + livroRecomendado.autor;
        document.getElementById('bookDescription').innerText = livroRecomendado.motivo;
    } else {
        // Resposta padrão (Coringa) caso nenhuma tag seja detectada
        document.getElementById('bookTitle').innerText = "O Pequeno Príncipe";
        document.getElementById('bookAuthor').innerText = "Por Antoine de Saint-Exupéry";
        document.getElementById('bookDescription').innerText = "Não conseguimos identificar uma palavra-chave exata no seu desabafo, mas este clássico é um abraço na alma. Ele ajuda a desacelerar e lembrar o que realmente importa na vida quando tudo parece confuso.";
    }
    
    // Torna o card invisível do resultado em visível na página
    resultContainer.style.display = 'block';
}



const acervoLivros = [
    {
        titulo: "O Poder do Agora",
        autor: "Eckhart Tolle",
        tags: ["ansiedade", "futuro", "preocupado", "mente", "estresse", "ansiosa", "ansioso", "pensamentos"],
        motivo: "Este livro é perfeito para acalmar a mente e focar no presente. Se você está ansioso com o futuro ou preso a pensamentos repetitivos, ele te ajuda a encontrar clareza e paz."
    },
    {
        titulo: "A Sutil Arte de Ligar o F*da-se",
        autor: "Mark Manson",
        tags: ["trabalho", "pressao", "cobrança", "fracasso", "perdido", "desanimado", "carreira", "pressão"],
        motivo: "Ideal para momentos de crise profissional ou quando você sente que está se cobrando demais. Ele traz uma perspectiva realista sobre aceitar as falhas e focar no que realmente importa."
    },
    {
        titulo: "Mulheres que Correm com os Lobos",
        autor: "Clarissa Pinkola Estés",
        tags: ["termino", "solitude", "autoconhecimento", "identidade", "superar", "mulher", "relacionamento", "término"],
        motivo: "Um clássico sobre o resgate da força interior e intuição feminina. Excelente para quem está passando por términos, divórcios ou momentos de redescoberta pessoal."
    },
    {
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        tags: ["escolhas", "duvida", "destino", "sonhos", "mudar", "mudança", "desanimada", "desanimado"],
        motivo: "Uma história inspiradora sobre seguir seus sonhos e ouvir seu coração. Ótimo para quando você está em uma encruzilhada na vida e precisa de motivação para continuar."
    },
    {
        titulo: "Essencialismo",
        autor: "Greg McKeown",
        tags: ["cansado", "cansada", "sem tempo", "produtividade", "foco", "rotina", "tarefas", "esgotado"],
        motivo: "Se você sente que está fazendo muita coisa mas não sai do lugar, este livro ensina a eliminar o que é desnecessário para focar apenas no que realmente gera valor na sua vida."
    }
];

function buscarLivro() {
    const textoUsuario = document.getElementById('userInput').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    
    if (!textoUsuario.trim()) {
        alert("Por favor, digite uma frase contando como você está se sentindo!");
        return;
    }

    let livroRecomendado = null;
    let maiorNumeroDeCombinacoes = 0;

    acervoLivros.forEach(livro => {
        let combinacoes = 0;
        livro.tags.forEach(tag => {
            if (textoUsuario.includes(tag)) {
                combinacoes++;
            }
        });

        if (combinacoes > maiorNumeroDeCombinacoes) {
            maiorNumeroDeCombinacoes = combinacoes;
            livroRecomendado = livro;
        }
    });

    if (!livroRecomendado) {
        livroRecomendado = {
            titulo: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            motivo: "Não conseguimos identificar uma dor específica no seu relato, mas 'O Pequeno Príncipe' é uma leitura universal e reconfortante. Ela nos lembra de olhar a vida com mais simplicidade e focar no que realmente é essencial e invisível aos olhos."
        };
    }

    document.getElementById('bookTitle').innerText = livroRecomendado.titulo;
    document.getElementById('bookAuthor').innerText = "Por " + livroRecomendado.autor;
    document.getElementById('bookDescription').innerText = livroRecomendado.motivo;
    
    resultContainer.style.display = 'block';
}

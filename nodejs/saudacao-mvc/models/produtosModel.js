module.exports = {  
    listarProdutos: () => {
        // Implementação simples em memória (sem banco): retorna um array de nomes de produtos
        // Pode ser substituído por leitura de arquivo ou consulta a banco mais tarde
        const produtos = [
            'Camiseta',
            'Calça',
            'Boné',
            'Caneca',
            'Meia'
        ];

        return produtos;
    }
};
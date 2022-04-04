const chalk = require('chalk');
const fs = require('fs');

function extraLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    const resultados = [];

    let temp;

    while((temp = regex.exec(texto)) !== null) {
        resultados.push({ [temp[1]]: temp[2] })
    }

    return resultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho.'));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraLinks(texto));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('Programa finalizado!!!'))
    }
}

// pegaArquivo('./arquivos/texto1.md');

module.exports = pegaArquivo;

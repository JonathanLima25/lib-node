const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURL = require('./http-valida');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), validaURL(resultado));
    } else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho);
const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo:', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const res = await pegaArquivo('/home/jonathan/Estudo/lib-node/lib-node/test/arquivos/texto1.md');
        expect(res).toEqual(arrayResult)
    })
})

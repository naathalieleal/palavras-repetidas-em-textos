import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch(erro) {
    console.log(trataErros(erro));
  } 
})

function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    
    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
           console.log('Arquivo criado'); 
        })
        .catch((erro) => {
            throw erro
        })
        .finally(() => console.log('operação finalizada'))
        
}

//Outra forma de executar o código de forma assíncrona, utilizando async e await, com try e catch
//Essa sintaxe é mais simplificada: se tirar async e await funciona normalmente. Leitura mais fluída que com o "then", e mais nova também
/* async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch(erro) {
        throw erro;
    }
} */
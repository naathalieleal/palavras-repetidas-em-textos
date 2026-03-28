import fs from 'fs';
import path from 'path'; //gerenciamento de arquivos referenciados dentro do programa. Quando utiliza bibloeteca commander, precisa incluir
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk'; //biblioteca para colorir textos no terminal

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options; //sintaxe de envolver duas variáveis em chaves é chamada de desetruturação, ferramenta do JavaScript

        if(!texto || !destino) {
            console.error(chalk.red('Erro: favor inserir caminho de origem e destino'))
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
        } catch (erro) {
            console.log('Ocorreu um erro no processamento', erro);
        }
    })

program.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => { //fs.readFile: lê assíncronamente todo o conteúdo de um arquivo
      try {
        if (erro) throw erro
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, destino);
      } catch(erro) {
        console.log(trataErros(erro));
      } 
    })
}

//ao invés de usar funções callback, a forma mais moderna é usar promises, conforme abaixo

function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    
    fs.promises.writeFile(arquivoNovo, textoPalavras) //fs.promises.writeFile(): processamento assíncrono baseado em promessas. Ou seja, ao invés de uma função callback, a função pode receber apenas os parâmetros necessários. O uso do async/await (ou then) possibilitará a resolução das promessas e retorno dos dados esperados (ou do erro).
        .then(() => {
           console.log(chalk.green('Arquivo criado')); 
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
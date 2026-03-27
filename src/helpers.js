function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
} 

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    let paragrafosSemDuplicadas = [];
   
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');

        if(duplicadas.length > 0 ) {
            textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`
        } else {
            paragrafosSemDuplicadas.push(indice + 1);
        }
    })
    return textoFinal;
}

export { montaSaidaArquivo };
function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
} 

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    let paragrafosSemDuplicadas = [];
 
    let comDuplicadas  = 0;
    let semDuplicadas  = 0;
    
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas  = filtraOcorrencias(paragrafo);
        
        if(duplicadas.length > 0 ) {
            textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas.join(', ')} \n`;
            comDuplicadas++;
        } else {
            paragrafosSemDuplicadas.push(indice + 1);
            textoFinal += `sem palavras duplicadas no parágrafo ${indice + 1} \n`;
            semDuplicadas++ ;
        }       
    })

    return `Quantidade de parágrafos com palavras duplicadas: ${comDuplicadas}\nQuantidade de parágrafos sem palavras duplicadas: ${semDuplicadas}\n\n${textoFinal}`        
    
}

export { montaSaidaArquivo };
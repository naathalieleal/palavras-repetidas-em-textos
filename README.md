# 📊 Contador de Palavras

Projeto desenvolvido durante estudos de JavaScript com Node.js.

O script lê arquivos `.txt` e identifica a frequência das palavras, ignorando caracteres especiais e palavras com menos de 3 caracteres.

---

## 🚀 Tecnologias utilizadas

* JavaScript
* Node.js
* Módulo nativo `fs`

---

## ⚙️ Como funciona

* Lê um arquivo `.txt` via terminal
* Trata erros de leitura de arquivo (ex: arquivo não encontrado)
* Separa o texto em parágrafos
* Divide em palavras
* Remove caracteres especiais
* Conta a frequência de cada palavra
* Identifica palavras duplicadas por parágrafo
* Gera automaticamente um arquivo `resultado.txt` com a saída formatada

---

## 📁 Estrutura do projeto

```bash
arquivos/
  texto-aprendizado.txt
  texto-kanban.txt
  texto-web.txt

resultados/
  resultado.txt

src/
  cli.js
  index.js
  helpers.js
  erros/
    funcoesErro.js

package.json
README.md
```

---

## 📦 Como executar o projeto

1. Execute o script passando o arquivo de entrada e a pasta de saída, por exemplo:

```bash
node src/cli.js -t ./arquivos/texto-web.txt -d ./resultados
```
Onde:

-t ou --texto: caminho do arquivo de entrada (.txt)
-d ou --destino: pasta onde o resultado será salvo


2. O resultado será salvo automaticamente em:
```bash
./resultados/resultado.txt
```
Onde:

- O primeiro argumento é o caminho do arquivo de entrada (.txt)
- O segundo argumento é a pasta onde o resultado será salvo


---

## 📂 Saída

O arquivo `resultado.txt` será gerado automaticamente na pasta informada, contendo as palavras duplicadas organizadas por parágrafo.

Exemplo de saída:

```txt
palavras duplicadas no parágrafo 1: javascript, node
palavras duplicadas no parágrafo 2: projeto
```

---

## ➕ Como adicionar novos textos

1. Adicione um novo arquivo `.txt` dentro da pasta `arquivos/`

```bash
arquivos/novo-texto.txt
```

2. Execute o script informando o novo arquivo e a pasta de saída:

```bash
node src/cli.js ./arquivos/novo-texto.txt ./resultados
```

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
* Retorna um objeto com a contagem
* Gera automaticamente um arquivo `resultado.txt` com a contagem

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
  erros/
    funcoesErro.js

package.json
README.md
```

---

## 📦 Como executar o projeto

1. Execute o script passando o arquivo de entrada e a pasta de saída:

```bash
node src/cli.js arquivos/texto-web.txt ./resultados/
```

2. O resultado será salvo automaticamente em:
```bash
./resultados/resultado.txt
```
Onde:

- O primeiro argumento é o caminho do arquivo de entrada (.txt)
- O segundo argumento é a pasta onde o resultado será salvo


---

## 📂 Saída

O arquivo `resultado.txt` será gerado automaticamente na pasta informada, contendo a contagem das palavras em formato JSON.

Exemplo de saída (JSON): 
```md
```json
{
  "javascript": 3,
  "node": 2
}
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

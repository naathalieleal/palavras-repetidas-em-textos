# 📊 Contador de Palavras

Projeto desenvolvido durante estudos de JavaScript com Node.js.

O script lê arquivos `.txt` e identifica palavras duplicadas, ignorando caracteres especiais e palavras com menos de 3 caracteres.

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

---

## 📁 Estrutura do projeto

```bash
arquivos/
  texto-aprendizado.txt
  texto-kanban.txt
  texto-web.txt

src/
  index.js
  erros/
    funcoesErro.js

README.md
```

---

## 📦 Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

2. Acesse a pasta do projeto:

```bash
cd SEU-REPOSITORIO
```

3. Execute o script passando o caminho do arquivo:

```bash
node src/index.js ./arquivos/texto-web.txt
```

---

## ➕ Como adicionar novos textos

1. Adicione um novo arquivo `.txt` dentro da pasta `arquivos/`

```bash
arquivos/novo-texto.txt
```

2. Execute o script com o novo arquivo:

```bash
node src/index.js ./arquivos/novo-texto.txt
```

---

## 📌 Exemplo de saída

```bash
{ javascript: 3, node: 2, projeto: 1 }
```
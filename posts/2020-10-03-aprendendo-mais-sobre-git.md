---
title: Aprendendo mais sobre Git
description: Quais são os comandos mais importantes do Git em nosso dia-a-dia?
date: 2020-10-03 07:53:12
image: assets/images/yancy-min-842ofhc6mai-unsplash.jpg
category: dev
background: "#011627"
---
![Tela mostrando diferentes branches do Git](assets/images/yancy-min-842ofhc6mai-unsplash.jpg "Tela mostrando diferentes branches do Git")

[\
Introdução](#introducao)

[Iniciando o Git](#init)

[Listando modificações](#git-status)

[Removendo arquivos do Stage](#git-reset)

[Desfazendo o último commit](#git-revert)

[Alterando a descrição do último commit](#git-commit-amend)

[Listando modificações](#git-status)

[Visualizando o histórico de commits](#historico-commits)

[Desfazendo alterações desde o último commit](#desfazendo-alteracoes)

[Apagando arquivos do Git](#apagando-arquivos)

[Listando Branches locais](#listando-branches-locais)

[Listando Branches remotas](#listando-branches-remotas)

[Criando uma nova Branch](#criando-branch)

[Trocando de Branch](#trocando-branch)

[Criando uma Branch e ja trocando para ela](#criando-branch-trocando)

[Renomeando uma Branch](#renomeando-branch)

[Apagando uma Branch](#apagando-branch)

[Agora, algumas dicas](#dicas)

[Nomes para Branch](#nomes-branch)

[Padrões: Commits, Branches](#padroes)



<h2 id="introducao">Introdução</h2>

Nesse post, vamos aprender o motivo de utilizarmos Git em todos os nossos projetos e ainda vamos conhecer alguns comandos que, considero ser os mais importantes no nosso dia-a-dia.

E sim, vão ter comandos que irão ficar de fora dessa lista, mas aqui, o foco é conhecer os comandos **mais utilizados**. Assim, em posts futuros, iremos ver outros comandos.

Esse post tem 2 objetivos: 

1. Oferecer uma lista de comandos úteis do Git
2. Ser uma lista de consulta, ou seja, direta ao ponto

**Depois de vermos os comandos, veremos algumas dicas para quando estivermos trabalhando em um time.**

Então, sem mais enrolação, vamos para a lista! XD

<br/>

<h2 id="init">Iniciando o Git</h2>

Esse é com certeza o mais importante comando (e também o mais conhecido), pois é através dele que iniciamos o git em nosso projeto.

```bash
git init
```

<br/>

<h2 id="git-status">Listando modificações</h2>

```bash
git status
```

<br/>

<h2 id="git-reset">Removendo arquivos do Stage</h2>

Com executamos `git add`, incluímos os arquivos modificados ao Stage, ou seja, os arquivos estão prontos para serem *commitados*.

Mas caso tenha adicionado arquivo por engano, podemos desfazer com:

```bash
git reset
```

<br/>

<h2 id="git-revert">Desfazendo o último commit</h2>

Esse comando já salvou minha vida algumas vezes. As vezes fazemos um *commit* porém, por algum motivo, precisamos desfazer. Caso o *commit* que deseja desfazer seja o último, basta executar:

```bash
git revert HEAD
```

<br/>

<h2 id="git-commit-amend">Alterando a descrição do último commit</h2>

Caso tenha descrito o *commit* de forma errada, ou queria alterar por qualquer outro motivo, basta executar:

```bash
git commit --amend
```

<br/>

<h2 id="git-status">Listando modificações</h2>

Quando precisamos ver quais foram as últimas mudanças desde o último commit, usamos:

```bash
git status
```

<br/>

<h2 id="historico-commits">Visualizando o histórico de commits</h2>

Para vermos o histórico de commits:

```bash
git log
```

<br/>

<h2 id="desfazendo-alteracoes">Desfazendo alterações desde o último commit</h2>

Quando modificamos um ou mais arquivos, mas ainda não adicionamos ao Stage com `git add`, podemos desfazer essas alterações para o estado em que estávamos no último *commit*:

```bash
git checkout . # Desfaz todas as alterações

git checkout nome_do_arquivo # Desfaz as alterações apenas do arquivo
```

<br/>

<h2 id="apagando-arquivos">Apagando arquivos do Git</h2>

Semelhante ao `git checkout`, mas quando queremos apagar arquivos que ainda não estão no Stage, assim, removendo esses arquivos do Git, fazemos:

```bash
git clean -df
```

> Use com cuidado, pois apaga todos os arquivos que ainda não estão no Stage

<br/>

<h2 id="listando-branches-locais">Listando Branches locais</h2>

Para listar todos as branches locais de nosso projeto, basta executar:

```bash
git branch
```

<br/>

<h2 id="listando-branches-remotas">Listando Branches remotas</h2>

Agora, para listar as Branches que estão no repositório remoto:

```bash
git branch -a
```

<br/>

<h2 id="criando-branch">Criando uma nova Branch</h2>

Para criarmos uma nova Branch, basta:

```bash
git branch nome_da_branch
```

<br/>

<h2 id="trocando-branch">Trocando de Branch</h2>

Depois de criarmos uma nova Branch, para trocarmos, basta:

```bash
git checkout nome_da_branch
```

<br/>

<h2 id="criando-branch-trocando">Criando uma Branch e ja trocando para ela</h2>

E se existisse um comando que fosse uma fusão do `git branch` e `git checkout`? Existe! 

```bash
git checkout -b nome_da_branch
```

<br/>

<h2 id="renomeando-branch">Renomeando uma Branch</h2>

Para renomear a Branch em que estamos:

```bash
git branch -m novo_nome_da_branch
```

Estamos em uma Branch, e queremos renomear outra:

```bash
git branch -m nome_atual_da_branch novo_nome_da_branch
```

<br/>

<h2 id="apagando-branch">Apagando uma Branch</h2>

Para apagar uma Branch:

```bash
git branch -d nome_da_branch
```

<br/>

<hr/>

<h2 id="dicas">Agora, algumas dicas</h2>

Quando estamos trabalhando sozinhos, temos o costume de trabalhar diretamente na Branch Master (a Branch principal), o que não é nenhum pouco recomendado, mesmo trabalhando sozinho.

Então o que precisamos fazer depois de clonar o repositório do Github para nossa máquina é:

1. Criar uma nova Branch!
2. Trocar para a Branch criada

Após trabalharmos, realizamos um ou mais commits e fazemos um Pull Request.

```bash
git pull origin nome_da_branch
```

Uma vez que subimos uma PR (Pull Request), outro dev revisará o código alterado para aí sim, aprovar ou não.

<br/>

<h2 id="nomes-branch">Nomes para Branch</h2>

Sempre que vamos criar uma variável, uma função, uma classe e etc, precisamos ser o mais claro possível em relação ao o que elas fazem. Com uma Branch, não poderia ser diferente.

Sempre que vamos fazer alguma alteração no código, a melhorar maneira de começar é criando uma nova Branch (não economize nas Branches).

No geral, eu gosto de seguir um padrão onde, eu vejo o que será alterado e classifico em:

* Feature
* Fix
* Chore

### Feature

São novas funcionalidades ao projeto, por exemplo, criar uma nova rota no Backend.

### Fix

São correções de bugs.

### Chore

Uma chore é geralmente definida como: "não é nem uma feature, nem uma correção de bugs", ou seja, são alterações, porém não chegam a ser uma feature.

> Existem vários padrões e variam de time para time. 
>
> Por exemplo: além de Feature, Fix, Chore, existem Docs, Tests, Revert, Style e etc...

Sabendo disso, eu crio uma nova Branch da seguinte forma:

```bash
git checkout -b feature/usersRoutes
```

Ou seja, eu sei que nessa Branch, eu vou criar as rotas de usuários.

<br/>

<hr/>

<h2 id="padroes">Padrões: Commits, Branches</h2>

Como vimos acima, existem vários padrões desde criar Branches novas, até como escrever nossos commits. 

Nesse post focamos nos comandos mais utilizados e padrões de Branches. Estou escrevendo um post sobre padrões de commits e ferramentas que irão nos auxiliar nessas tarefas.

Espero você no próximo post! Grande abraço e obrigado por ler até aqui.
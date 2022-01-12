---
title: Como você pode aumentar sua produtividade no Insomnia com essa dica
description: Veja como você pode automatizar o processo inserir o token em todas
  as suas requisições
date: 2022-01-12 08:19:23
image: assets/images/douglas-lopes-ehyv_xoz4ia-unsplash.jpeg
category: misc
background: "#fb5607"
---
![Mac aberto com o Insomnia](assets/images/douglas-lopes-ehyv_xoz4ia-unsplash.jpeg "Mac aberto com o Insomnia")

### Introdução

O [Insomnia](https://insomnia.rest/),para quem não conhece, é um software que nos permite fazer requisições à APIs, assim nos ajudando no desenvolvimento tanto do Backend (ex.: testar as chamadas para cada endpoint sem necessitar de um Frontend) quanto do Frontend (ex.: para vermos o retorno do endpoint antes de implementarmos a tela).

O que muitos podem não saber é que o Insomnia tem muitas (MUITAS mesmo) funcionalidades interessantes que podemos utilizar para sermos mais produtivos no nosso trabalho e é sobre uma delas que vamos conhecer hoje.

Então bora lá!

### O problema

Imagina (ou lembre kkk) que você tem inúmeros endpoints na sua API, daí todos eles (ou a maioria) precisam de um token para acessá-lo.

Aí você vai no endpoint `/login` ou algo similar para fazer o login, então recebe como retorno o **token**, agora precisa ir em cada endpoint, inserir o token nos Headers. Se tiver poucos endpoints já será um trabalho fazer isso, agora imagine com centenas deles...

E ainda tem o problema que o token, em algum momento vai expirar e você terá que repetir esse processo novamente, para todos os endpoints que precisar acessar. Triste né?!

Bom, aí é que entra a dica!

### Solução

Vamos abrir nosso Insomnia e vamos no endpoint de **autenticação da nossa API** e entramos com login e senha, então receberemos o token de acesso:

![Insomnia aberto mostrando endpoint de login](assets/images/insomina-1.png "Insomnia aberto mostrando endpoint de login")

Agora vamos no endpoint que precisamos acessar que precisa de autenticação, vamos na aba **Header**, colocamos o parâmetro que ele precisa, no meu caso é `Authorization` com o valor `Bearer` damos o comando "Ctrl + Barra de Espaço" e digitamos `response` e selecionamos a opção `Body Attribute`, como na imagem abaixo:

![Insomnia aberto mostrando como colocar a variavel](assets/images/insomina-2.png "Insomnia aberto mostrando como colocar a variavel")

Por fim, clicamos no botão que foi inserido e essa tela será exibida:

![Insomnia aberto mostrando como colocar a variavel](assets/images/insomina-3.png "Insomnia aberto mostrando como colocar a variavel")

2 - Em Request, selecionamos o endpoint de autenticação

3 - Colocamos `$.` + o nome do campo da resposta, que no meu caso é `token`. Pronto!

Agora bastanta copiar e colar nos endpoints que precisa de autenticação, apenas uma vez e nunca mais!

### Conclusão

Nesse post, aprendemos uma funcionalidade muito útil do Insomnia que nos poupa muito tempo no dia-a-dia. Ele traz inúmeras funções incríveis para nos ajudar, caso queira ver mais posts como esses, trazendo dicas, não deixe de deixar seu comentário. Muito obrigado por ler até aqui, até o próximo post!
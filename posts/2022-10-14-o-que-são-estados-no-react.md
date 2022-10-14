---
title: O que são estados no React?
description: Você sabe o que são derived state?
date: 2022-10-14 09:12:36
image: assets/images/lautaro-andreani-uysbcu9rp3y-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![code editor open](assets/images/lautaro-andreani-uysbcu9rp3y-unsplash.jpeg "code editor open")

## Introdução

Nos útlimos posts, aprendemos sobre componentes, props e agora chegou a hora de entendermos o próximo conceito do React: os estados (states).

Vamos entender sobre:

* O que são estados?
* Para que servem os estados?
* Quando utilizar?
* Quando não utilizar?
* O que são derived state?

Se você perdeu os outros posts: 

* [Componentes parte 1](https://www.devjuniorplus.com.br/o-que-são-componentes-no-react/)
* [Componentes parte 2](https://www.devjuniorplus.com.br/o-que-são-componentes-no-react-part-2/)
* [O que são props e para que servem?](https://www.devjuniorplus.com.br/o-que-são-e-para-que-servem-as-props-no-react/)

Pronto?! Então bora!

## O que são estados?

Estados são uma forma de guardar informações dentro de componentes React.

Imagine que a cada interação do usuário (exemplo: um clique no botão) dispara eventos na tela e precisamos guardar informações seja para enviar para API, para abrir um modal em tela ou simplesmente habilitar um botão. Nesses casos, precisamos de um estado que guarde essa informação e que possamos mudá-la, caso necessário.

## Para que servem os estados?

Imagine o seguinte cenário: 

> Criar um formulário de login, onde terá dois inputs (email e senha)

Você poderia pensar em criar o seguinte componente:

```tsx

```

Funcionaria, certo? Bom... Mais ou menos

Porque o usuário iria digitar nos inputs, mas o formulário não iria ser submitido certo? Então vamos corrigir.

```tsx

```

Nesse ponto, o que você faria? O que deveria ir abaixo no `event.preventDefault()`?!

Acertou se você pensou nos estados!

Vamos melhorar esse exemplo:

```tsx

```

Agora o que precisamos é utilizar nossos `states`, dessa forma:

```tsx

```

## Quando utilizar?

Vimos vários exemplos de utilização dos estados, mas vamos recapitular:

* Guardar inputs do usuário (OBS.: caso seja um formulário complexo, utilizar libs como React Hook Form ao invés de estados)
* Guardar retorno de APIs (OBS.: Existem libs como React Query que gerencia chamadas HTTP, podendo ser uma melhor alternativa nesse caso)
* Abrir/fechar modais/toogles/menus...

Em geral, qualquer informação que precisamos "manipular" (utilizar e/ou modificar), podemos guardar nos estados. 

## Quando não utilizar?

As vezes cometemos alguns equívocos utilizando estados quando não são necessários, por exemplo:

* Guardar o tamanho de arrays/objetos/strings (.length)
* Guardar vários inputs de um formulário complexo
* Ter vários estados relacionados a uma única informação (nesse caso, podemos utilizar o useReducer)

Na maioria das vezes, não precisamos de um estado, podemos utilizar uma váriavel comum. Existe o conceito de derived state, que vamos falar agora!

Se você prefere estudar com vídeos, tem um em que explico quando não utilizar os estados.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uHxC8FH3l10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## O que são derived state?

Vamos utilizar bastante os `states` no nosso dia-a-dia, para várias situações diferentes, como mencionado anteriormente.

Entretanto, existem alguns momentos que não precisamos de `states` e podemos utilizar variáveis simples do JS.

Como no exemplo abaixo:

```tsx

```

Tenho um vídeo explicando sobre derived state, confere lá:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wLTwcdrOSH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusão

Nesse post, aprendemos sobre os estatos no React, o que são e para que servem além de vários detalhes a mais.

Existem diversas maneiras de utilizar os estados, como vimos anteriormente.

Os estados são uma ferramenta poderosa que precisamos utilizar com atenção, pois não precisamos de um estado para tudo nos nossos componentes.

Em um próximos post, vamos conhecer os hooks do React (bom, nesse post já conhecemos o primeiro: `useState`).

Espero que tenha te ajudado a entender mais sobre os estados em uma aplicação React, grande abraço e até a próxima.
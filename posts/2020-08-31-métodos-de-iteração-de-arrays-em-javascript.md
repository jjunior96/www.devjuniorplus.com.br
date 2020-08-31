---
title: Métodos de iteração de arrays em Javascript
description: Você sabe qual a diferença entre forEach() e map()?
date: 2020-08-31 09:51:00
image: assets/images/iteration.jpg
category: js
background: "#ffbe0b"
---
![sequencia de tijolos ](assets/images/iteration.jpg "sequencia de tijolos")

# Introdução

Dando continuidade ao último [post](https://alvesjunior.netlify.app/operacoes-de-um-array-em-javascript/) sobre arrays em Javascript, onde discutimos sobre as formas de declarar um array, a **Mutation Mutator API** entre outras coisas, hoje vamos falar sobre a **Array Iteration API**.

A ***Array Iteration API***, fornecem os ***Iteration Methods*** (métodos de iteração) que nada mais são que:

> Conjunto de operações que fazem a iteração de um array.

Bem provavelmente você já utilizou pelo menos um desses métodos. 

Vamos conhecer e entender um pouco mais sobre esses métodos!

<br />

# forEach

Executa a função passada por parâmetro para cada elemento do array.

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"];
pessoas.forEach((pessoa) => console.log(pessoa));
```

<br />

# filter

Retorna um novo array contendo somente os elementos que retornaram **true** na função passada por parâmetro.

Pode ser usado para qualquer situação onde precisamos restringir a quantidade de elementos de um array, seguindo algum critério.

```javascript
const pessoas = [
  {
    nome: "Maria",
    idade: 30
  },
  {
    nome: "Joaquim",
    idade: 58
  },
  {
    nome: "Marcos",
    idade: 17
  }
];

pessoas.filter(function(pessoa) {
  return pessoa.idade < 18;
});

// output: { nome: "Marcos", idade: 17 }
```

<br />

# find

Retorna o primeiro elemento do array que retornou **true** na função passada por parâmetro.

*É como se fazer uma <mark>filter()</mark>, e retornar o primeiro elemento dele.*

```javascript
const pessoas = [
  {
    nome: "Maria",
    idade: 30
  },
  {
    nome: "Joaquim",
    idade: 58
  },
  {
    nome: "Marcos",
    idade: 17
  }
];

pessoas.find(function(pessoa) {
  return pessoa.name === "Maria";
});

// output: { nome: "Maria", idade: 30 }
```

<br />

# some

Retorna **true** se um ou mais elementos retornaram **true** na função passada por parâmetro.

```javascript
const pessoas = [
  {
    nome: "Maria Alves",
    idade: 30
  },
  {
    nome: "Joaquim Pereira",
    idade: 58
  },
  {
    nome: "Marcos Alves",
    idade: 17
  }
];

pessoas.some(function(pessoa) {
  return pessoa.name.includes("Alves");
});

// output: true
```

<br />

# every

Retorna **true** se **todos** elementos retornaram **true** na função passada por parâmetro.

```javascript
const pessoas = [
  {
    nome: "Maria Alves",
    idade: 30
  },
  {
    nome: "Joaquim Pereira",
    idade: 58
  },
  {
    nome: "Marcos Alves",
    idade: 17
  }
];

pessoas.every(function(pessoa) {
  return pessoa.name.includes("Alves");
});

// output: false
```

<br />

# map

Retorna um novo array com base no retorno da função passada por parâmetro.

```
Converte um array em outro, com base na função passada por parâmetro.
```

```javascript
const pessoas = [
  {
    nome: "Maria",
    idade: 30
  },
  {
    nome: "Joaquim",
    idade: 58
  },
  {
    nome: "Marcos",
    idade: 17
  }
];

pessoas.map((pessoa) => pessoa.name);

// output: ["Maria", "Joaquim", "Marcos"]
```

<br />

# reduce

Retorna um valor com base no retorno da função passada por parâmetro.

```
Basicamente é uma função de acumulação
```

```javascript
const carrinhoCompras = [
  {
    nome: "Café",
    preco: 9.90
  },
  {
    nome: "Arroz",
    preco: 10.95
  },
  {
    nome: "Açucar",
    preco: 5.59
  }
];

carrinhoCompras.reduce(function(total, item) {
  return total + item.preco;
}, 0);

// output: 26.44
```

### Parâmetros:

1. Função;
2. Valor de inicialização do acumulador;

A função passada para o reduce, recebe dois parâmetros, o **acumulador** e o **item**.

<br />

- - -

<br />

> # map vs forEach, fight!
>
> Eu tinha muitas dúvidas sobre o <mark>map()</mark> e o <mark>forEach()</mark>, como "quando utilizar um ou o outro?", "qual o melhor?" etc.
>
> Depois de várias pesquisas sobre cada um, cheguei a uma resposta definitiva sobre qual o melhor: **depende do contexto!**
>
> Brincadeiras à parte, a verdade é essa, pois cada um tem suas aplicações. O que temos que ter em mente, é como cada um deles trabalha, daí escolher a melhor opção para cada situação. 
>
> Se precisamos encadear operações como mapear os elementos de um array e filtrar os elementos pares, sem dúvidas vamos precisar utilizar o <mark>map()</mark>. Ele permite esse encadeamento, já o <mark>forEach()</mark> não.
>
> ## Exemplo <mark>map()</mark>:
>
> Temos um array ***numeros*** com valores de 1 até 10.
>
> Primeiro multiplicamos cada elemento por 3.
>
> Depois precisamos apenas dos valores pares.
>
> ```javascript
> const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
>
> const numerosPares = numeros.map((numero) => numero * 3)
>                             .filter((numero) => numero % 2 === 0);
>
> console.log(numerosPares); // [ 6, 12, 18, 24, 30 ]
> ```
>
> Se tentarmos o mesmo com o <mark>forEach()</mark>, temos o seguinte erro:
>
> ```javascript
> numeros.forEach((numero) => numero * 3)
> 			 .filter((numero) => numero % 2 === 0);
>
> // TypeError: Cannot read property 'filter' of undefined
> ```
>
> ## Exemplo <mark>forEach()</mark>:
>
> Temos um array ***nomes***. Queremos transformar todos os nomes em caixa alta. Podemos utilizar o <mark>forEach()</mark>, onde a função será executada para cada elemento do array.
>
> ```javascript
> const nomes = ["Maria", "Joaquim", "José"];
>
> nomes.forEach(function(nome, index) {
>   return nomes[index] = nome.toUpperCase();
> });
> console.log(nomes); // [ 'MARIA', 'JOAQUIM', 'JOSÉ' ]
> ```

<br />

- - -

<br />

# Conclusão

Nesse post, vimos os métodos de iteração com arrays em Javascript, alguns exemplos e as diferenças entre o <mark>map()</mark> e o <mark>forEach()</mark>.

Vou continuar trazendo mais conteúdos sobre Javascript, como funcionalidades das versões mais novas, dicas e curiosidades para aprendermos cada vez mais essa linguagem tão incrível! Isso tudo além dos conteúdos sobre livros que estou lendo atualmente, React e vários outras coisas que estou estudando. Então fica ligado!

Abraço e até a próxima.
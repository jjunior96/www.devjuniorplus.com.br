---
title: Operações de um Array em Javascript
description: " Vamos conhecer o push, splice, fill e outros métodos dos arrays
  mais alguns detalhes importantes que talvez você não saiba"
date: 2020-08-30 09:08:02
image: assets/images/jsmutator.jpg
category: js
background: "#ffbe0b"
---
![computador com codigo aberto em tela](assets/images/jsmutator.jpg "computador com codigo aberto em tela")

Para facilitar a utilização desse post como pesquisa, dividi em tópicos:



* [Introdução](#introducao)
* [Declarando um array em JS](#declarando-um-array-em-js)
* [Propriedade length](#propriedade-length)
* [Array Mutator API](#array-mutator-api)
* [push](#push)
* [pop](#pop)
* [unshift](#unshift)
* [shift](#shift)
* [splice](#splice)
* [sort](#sort)
* [reverse](#reverse)
* [fill](#fill)

<br />



## Introdução

Em várias linguagens de programação, temos o tipo de dado **Array**, que nos permitem armazenar vários dados como uma lista. Em Javascript também temos essa estrutura, mas de uma forma um pouco diferente. Os Arrays em JS são na verdade **objetos** que oferecem operações para **acessar** e **manipular** suas propriedades.

Arrays são similares as **Strings**, sendo que, ambos consistem de uma sequência de elementos que podem ser acessados via índice. Porém, devemos lembrar que ***Strings são um tipo de dados imutável***, o que significa que não podemos alterá-lo. Já os ***Arrays são mutáveis***, o que significa que ao acessar os métodos ***Array Mutator API***, o Array original será alterado.

## Declarando um array em JS

Antes de qualquer coisa, vamos ver as formas de declarar um Array em JS, que basicamente são duas:

1. Declarar e já atribuir (ou não) seus valores:

   ```js
   const pessoas = []; // Declara um array vazio

   const pessoas = ['Maria', 'José', 'Joaquim', 'Marcos']; 
   ```
2. Utilizar a função construtora: 

   ```js
   const pessoas = new Array(); // Declara utilizando a função construtora

   const pessoas = new Array('Maria', 'José', 'Joaquim', 'Marcos'); 
   ```

*A primeira forma a mais usual.*

> ### ***Nota***
>
> Na segunda forma, temos um detalhe importante que precisa ser mencionado. Veja o exemplo abaixo:
>
> ```js
> const numeros = new Array(10, 9, 12, 34); // => [10, 9, 12, 34]
> ```
>
> Isso é o comportamento padrão que esperamos, porém, se passarmos apenas um número para a função construtora, o que acontede é:
>
> ```javascript
> const numeros = new Array(10); // => Aloca um array com 10 posições vazias
> ```

## Propriedade length

Podemos descobrir a quantidade de elementos de um Array acessando a propriedade **length**, dessa forma:

```javascript
const numeros = [10, 20, 30, 40, 50];
console.log(numeros.length); // 5
```

> ### *Notas*
>
> 1. Se no array existir posições vazias, quando acessamos a propriedade **length**, essas posições serão contadas também. Quando o correto seria apenas mostrar a quantidade de elementos válidos dentro do array.
> 2. Se inserimos elementos em índices espaçados, o **length** também irá nos retornar um número inesperado. Exemplo:
>
>    ```javascript
>    const numeros = [];
>    numeros[0] = 10;
>    numeros[10] = 20;
>    numeros[20] = 30;
>
>    console.log(numeros.length); // Qual o valor será exibido?
>
>    // output:
>    // [10, <9 espaços vazios>, 20, <9 espaços vazios>, 30];
>    // Resposta = 21 
>    ```

## Array Mutator API

> Conjunto de operações que **modificam** o Array original

### push()

O método <mark>push()</mark> adiciona um novo elemento no **final** do array.

***Exemplo:***

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"];
pessoas.push("João");

// output: ["Maria", "Joaquim", "Marcos", "João"]
```

***Retorno:***

O interessante do <mark>push()</mark> é que ele retorna um novo <mark>length()</mark> como resultado.

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"]; // length = 3
console.log(pessoas.push("João")); // 4, length agora é 4
```

### pop()

O método <mark>pop()</mark> remove um elemento do **final** do array, ou seja, é o inverso do <mark>push()</mark>.

***Exemplo:***

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"];
pessoas.pop();

// output: Marcos
```

***Retorno:***

Retorna o elemento que foi removido do **final** do array.

### unshift()

O método <mark>unshift()</mark> adiciona um elemento no **início** do array.

***Exemplo:***

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"];
console.log(pessoas.unshift("Marcos"));

// output: 4
```

***Retorno:***

Semelhante ao <mark>push()</mark>, o <mark>unshift()</mark>também retorna o novo <mark>length()</mark>.

### shift()

O método <mark>shift()</mark> remove um elemento do **início** do array, ou seja, o inverso do <mark>unshift()</mark>.

***Exemplo:***

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"];
console.log(pessoas.shift("Marcos"));

// output: Marcos
```

***Retorno:***

O <mark>shift()</mark> retorna o elemento que foi removido do **início** do array.

### splice()

O método <mark>splice()</mark> remove, adiciona ou substitui um ou mais elementos em uma determinada posição do array.

***Parâmetros:*** 

1. **Remove**: (*posição_do_elemento*, *quantos_elementos_serão_removidos*);
2. **Adiciona**: (*posição_do_elemento*, 0, *elemento_1*, *elemento_2*, ..., *elemento_n*);
3. **Substitui**: (*posição_do_elemento*, *quantos_elementos_serão_substituídos*, *elemento_que_será_incluso*);

***Exemplos:***

```javascript
// Remove
const pessoas = ["Maria", "Joaquim", "Marcos"];
console.log(pessoas.splice(1, 1)); // posição 1, remove 1

// outuput:
// ["Joaquim"]

// array atual: 
// ["Maria", "Marcos"]
```

```javascript
// Adiciona
const pessoas = ["Maria", "Joaquim", "Marcos"];
console.log(pessoas.splice(1, 0, "Marcia", "Paulo")); // posição 1, remove nenhum, adiciona "Marcia" e "Paulo"

// outuput:
// [] 

// array atual: 
// ["Maria", "Marcia", "Paulo", "Joaquim", "Marcos"]
```

```javascript
// Substitui
const pessoas = ["Maria", "Marcia", "Paulo", "Marcos"];
console.log(pessoas.splice(1, 2, "Joaquim")); // posição 1, remove 2, adiciona "Joaquim"

// outuput:
// ["Marcia", "Paulo"] elementos removidos

// array atual: 
// ["Maria", "Joaquim", "Marcos"]
```

***Retorno:***

1. **Remove**: retorna um array com os elementos removidos;
2. **Adiciona**: \[ ];
3. **Substitui**: retorna um array com os elementos removidos;

### sort()

O método <mark>sort()</mark> ordena os elementos do array de acordo com a função de ordenação.

***Exemplo:***

```javascript
const pessoas = [
  {
    name: "Maria",
    age: 30
  },
  {
    name: "Joaquim",
    age: 53
  },
  {
    name: "Marcos",
    age: 18
  }
];

pessoas.sort(function(a, b) {
  return a.age - b.age; // ordena de forma crescente
});

//output: 
/* [
**	{ name: "Marcos", age: 18 },
**  { name: "Maria", age: 30 },
**  { name: "Joaquim", age: 53 }
** ]
*/
```

***Retorno:***

1. **(a - b)**: ordena de forma crescente, do menor para o maior;
2. **(b - a)**: ordena de forma decrescente, do maior para o menor;

> ### *Nota*
>
> 1. **return -1 ou 0**: O array fica como está, não altera a ordem;
> 2. **return 1**: O array é invertido;
>
> Para ordernar pelo nome, podemos fazer: 
>
> ```javascript
> pessoas.sort(function(a, b) {
>   return (a.name <= b.name) ? -1 : 1;
> });
> ```
>
> Ou
>
> ```javascript
> pessoas.sort(function(a, b) {
>   return a.name.localeCompare(b.name); // Ordena de forma crescente
> });
> ```
>
> *<mark>localeCompare()</mark> é um método para Strings onde retorna 1 ou -1; utilizado para palavras com acentuação e/ou caracteres específicos de uma região.* 

### reverse()

O método <mark>reverse()</mark> inverte a ordem dos elementos do array.

***Exemplo:***

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos"];
console.log(pessoas.reverse());

// output: ["Marcos", "Joaquim", "Maria"]
```

***Retorno:***

O array invertido. Para desfazer a inversão, basta realizar outro <mark>reverse()</mark>.

### fill()

O método <mark>fill()</mark> preenche os elementos de acordo com a posição de início e fim.

***Parâmetros:*** 

1. **1 parâmetro**: (*elemento*) => Preenche **todo** o array com esse elemento;
2. **2 parâmetro**: (*elemento*, *posição_inicial*) => Preenche da **posição_inicial** até o **final** do array com esse elemento;
3. **3 parâmetro**: (*posição_do_elemento*,  *posição_inicial*,  *posição_final*) => Preenche da **posição_inicial** até **posição_final** do array com esse elemento;

***Exemplo:***

```javascript
const pessoas = ["Maria", "Joaquim", "Marcos", "Paulo"];
pessoas.fill("José");
// output: ["José", "José", "José", "José"]

pessoas.fill("José", 1);
// output: ["Maria", "José", "José", "José"]

pessoas.fill("José", 1, 2);
// output: ["Maria", "José", "José", "Paulo"]
```

***Retorno:***

O array preenchido com o elemento passado por parâmetro.
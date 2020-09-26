---
title: Aprendendo sobre testes e TDD
description: Vamos aprender sobre essa prática tão importante que é o TDD
date: 2020-09-26 09:02:17
image: assets/images/david-travis-wc6mj0krzgw-unsplash.jpg
category: dev
background: "#011627"
---
![Quadro com varios card e uma pessoa segurando um dos cards escrito: run a usability test](assets/images/david-travis-wc6mj0krzgw-unsplash.jpg "Quadro com cards e test")



* [Introdução](#introducao)
* [O Bug mais caro do mundo](#o-bug-mais-caro)
* [Tipos de testes](#tipos-de-testes)
* [TDD, o que é?](#tdd-o-que)
* [Diga não ao console.log()](#diga-nao)
* [TDD: Red, Green e Refactor](#red-green-refactor)
* [Framework para testes](#framework)
* [Iniciando nosso projeto](#projeto)
* [Criando nosso primeiro teste](#criando-primeiro-teste)
* [Melhorando nosso teste](#melhorando-teste)
* [Finalizando nossos casos de testes](finalizando-testes)
* [Conclusão](#conclusao)

<br />

<h2 id="introducao">Introdução</h2>

Um dos principais objetivos em fazermos testes de software, é ter a garantia de qualidade.

Por meio dos testes, podemos melhorar a estabilidade, funcionalidades, usabilidade, performance e claro, a segurança do nosso software.

E por mais que ainda parece que os custos e tempo para fazermos os testes sejam altos, a história de resultados catastróficos causados por falhas em software, nos diz que sim, vale a pena termos testes.

<br />

<h2 id="o-bug-mais-caro">O bug mais caro do mundo</h2>

A sonda Mars Climate Orbiter (MCO) foi projetada pelos EUA e lançada em dezembro de 1998, com o objetivo de permitir o estudo do clima em Marte.

Porém, o MCO foi destruído ao entrar na atmosfera de Marte.

### Por que?

Por um erro de cálculo, pois os desenvolvedores utilizaram a medida inglesa de unidades, já o sistema do MCO realizavam cálculos com o sistema métrico.

### Resultado

O MCO explodiu na atmosfera marciana, custando 193,1 milhões USD. (Se hoje já é uma fortuna, imagina em 1998).

`Esse é um exemplo extremo de erro envolvendo software, mas serve para entendermos que quando se trata de bug, o céu é o limite para o que ele pode causar.`

<br />

<h2 id="tipos-de-testes">Tipos de testes</h2>

Agora que já entendemos a importância dos testes em nossos projetos, precisamos entender os tipos de testes que podemos ter.

Existem várias nomenclaturas e vários tipos diferentes, mas podemos resumir em dois:

* Testes unitários
* Testes de integração

### Testes unitários

São testes feitos de forma isolada, ou seja, testamos pequenos pedaços do nosso código (por exemplo classes ou funções).

**Objetivo**: nos testes unitários, precisamos testar se o código está se comportando como o **desenvolver** espera.

### Testes de integração

São testes feitos para checar se as unidades funcionam entre si, ou seja, se quando integrados com outras unidades do projeto, a integração funciona (por exemplo, múltiplas classes e funções).

**Objetivo**: nos testes de integração, precisamos testar se o software funciona como o **usuário** espera.

<br />

<h2 id="">TDD, o que é?</h2>

Test-Driven Development ou, Desenvolvimento orientado à Testes foi descoberto em 2003 por Kent Beck, engenheiro de software americano, criador também do Extreme Programming (XP). Ele ainda foi um dos 17 signatários originais do Agile Manifesto em 2001.

Na prática, é uma abordagem de desenvolvimento onde primeiro escrevemos nossos testes e depois criamos nosso código, ou seja, precisamos saber qual será o resultado que o código irá gerar, assim nosso teste já **espera** esse resultado.

\*-Guarde a palavra **espera***.

O TDD se baseia em testes unitários, mas **não quer dizer** que se aplica apenas a testes unitários.

Como se os testes unitários fossem a **ferramenta**, e o TDD é a técnica.

<br />

<h2 id="diga-nao">Diga não ao console.log()</h2>

Que atire a primeira pedra quem nunca debugou um código com um console.log().

Mas sabemos, no fundo, que essa não é a melhor forma de testar nosso código (certo?!).

Então sempre que acharmos um bug em nosso código, com certeza, é hora de escrever um teste.

<br />

<h2 id="red-green-refactor">TDD: Red, Green e Refactor</h2>

![Ciclo do TDD, red green, refactor](assets/images/tdd.png "Ciclo do TDD, red green, refactor")

Esse é o ciclo do TDD: Red, Green e Refactor.

### Red

Primeiro escrevemos um teste para que ele falhe. Sim! Ele deve falhar. Pois o código ainda nem existe, lembra?

### Green

Agora devemos escrever a solução mais simples para que o teste passe.

### Refactor

Agora escrevemos de fato nosso código por completo, toda a funcionalidade e testamos novamente. 

`Caso não passe, devemos voltar a etapa anterior.`

> Primeiro faça, depois faça certo e por fim, faça melhor! 

<br />

<h2 id="framework">Framework para testes</h2>

Existem inúmeros frameworks para criarmos nossos testes. Nesse post, vamos utilizar o <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a>.

<br />

<h2 id="projeto">Iniciando nosso projeto</h2>

Nesse post, vamos criar uma aplicação simples para podermos começar a entender e escrever nossos testes. Iremos criar uma função de soma, onde receberá dois parâmetros inteiros.

Primeiro, vamos executar `yarn init -y` para criarmos o package.json.

Depois, vamos instalar o Jest, com o seguinte comando:

```bash
yarn add jest -D
```

Agora, vamos criar um script para executar nossos testes e nosso `package.json` deve estar semelhante a esse:

```javascript
// package.json
{
  "name": "sum",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^26.4.2"
  }
}
```

> Existe um Snippet do Jest para o VS Code, o que auxilia bastante na escrita dos testes. Basta procurar por "Jest Snippets" na loja  de extensões dentro do próprio VC Code e instalá-lo.

<br />

<h2 id="criando-primeiro-teste">Criando nosso primeiro teste</h2>

Podemos criar na raíz do nosso projeto, um arquivo `sum.spec.js`, é nesse arquivo que vamos criar nossos testes.

`O Jest por padrão, procura os arquivos que contenham "spec" ou "test" no nome.`

### Escrevendo o teste

```javascript
it('should sum 5 and 5 the result must be 10', () => {
  expect(sum(5, 5)).toBe(10);
});
```

Ao executar o teste `yarn test`, esse é o resultado:

![imagem do terminal com erro ao executar o teste](assets/images/1.png "imagem do terminal com erro ao executar o teste")

Logicamente, nosso teste não passou pois ainda nem criamos o arquivo `sum`. Então vamos escrevê-lo.

<br />

## sum.js

```javascript
module.exports.sum = (number1, number2) => {
  return number1 + number2;
}
```

Rodando nosso `yarn test`:

![imagem do terminal com teste passando](assets/images/2.png "imagem do terminal com teste passando")

### Como ter certeza que o teste está correto?

O `expect` permite que nós negamos o que está após dele com o `not`. Com o teste passando, fazendo a negação, o teste precisa falhar, assim temos certeza que não é um falso-positivo.

```javascript
expect(sum(5, 5)).not.toBe(10);
```

![imagem do terminal com teste dando erro novamente](assets/images/3.png "imagem do terminal com teste dando erro novamente")

<br />

<h2 id="melhorando-teste">Melhorando nosso teste</h2>

Como sabemos, o Javascript permite algumas coisas, digamos, estranhas. 

Por exemplo, se somarmos:

```javascript
return 2 + 3 // resultado = 5
```

Nada de novidade até aqui. Porém, se fizermos: 

```javascript
return 2 + "3" // resultado = 23
```

Nesse exemplo, o que acontece é que, como o 3 é uma string, o JS converte o 2 para uma string também, e por fim, concatena os dois, resultando em uma string "23". Sabendo que isso pode acontecer, precisamos previnir isso com um teste.

```javascript
it('should sum 5 and 5 even if on of them is a string and the result must be 10', () => {
  expect(sum('5', '5')).toBe(10);
});
```

No `sum.js`, precisamos assegurar que os números passados via parâmetro sejam números e não string.

```javascript
module.exports.sum = { number1, number2 } => {
  const int1 = parseInt(number1);
  const int2 = parseInt(number2);
  
  return int1 + int2;
}
```

> Dica: Existe uma forma pouco conhecida de transformar uma variável em um número, usando o operador "+".
>
> Exemplo: 
>
> ```javascript
> return +num1 + +num2; // ambas variáveis serão convertidas para números
> ```
>
> OBS.: Cuidado, pois caso seja passado uma string vazia (""), será retornado 0, e não um NaN, como é de se esperar.

Nosso teste está passando agora:

![imagem do terminal com teste passando e finalizado](assets/images/4.png "imagem do terminal com teste passando e finalizado")

Agora, podemos verificar se a soma pode ser executada, mesmo depois das variáveis serem convertidas para números, pois pode ser um `NaN`.

```javascript
it('should throw an error if what is provided to the method connot be summed', () => {
  expect(() => {
    sum('', 2)
  }).toThrowError();
});
```

E precisamos criar a verificação no `sum.js`:

```javascript
module.exports.sum = { number1, number2 } => {
  const int1 = parseInt(number1);
  const int2 = parseInt(number2);
  
  if(Number.isNaN(int1) || Number.isNaN(int2)) {
  	throw new Error('Please, check your input.');
	}
  
  return int1 + int2;
}
```
<br />
<h2 id="finalizando-testes">Finalizando nossos casos de testes</h2>

Agora podemos apenas acrescentar testes para verificar se as entradas são Arrays, objetos ou sejam vazios.

```javascript
it('should throw an error if what is provided to the method connot be summed', () => {
  expect(() => {
    sum('', 2)
  }).toThrowError();

  // Não pode ser um array
	expect(() => {
    sum([2, 2])
  }).toThrowError();
  
  // Não pode ser um objeto
  expect(() => {
    sum({})
  }).toThrowError();
  
	 // Não pode ser passado vazio
   expect(() => {
    sum()
 }).toThrowError();
});
```



Para um função extremamente simples, conseguimos cobrir muitos casos de testes. XD

<hr />

<h2 id="conclusao">Conclusão</h2>

Nesse post aprendemos um pouco sobre TDD, as motivações de escrevermos testes em nossos projetos, sejam pequenos ou, principalmente em grandes e aplicamos tudo isso na prática utilizando o Jest.

Espero ter motivado você a escrever testes, caso ainda não fazia e continuar escrevendo, se já rodava testes em seus projetos.
O código feito nesse post está no Github, <a href="https://github.com/jjunior96/test-exemple-blog" target="_blank" rel="noopener noreferrer">aqui</a>.

Obrigado por ter lido até aqui! Grande abraço e até a próxima.


---
title: "Typescript: 7 conceitos importantes que você deveria saber"
description: Features importantes do Typescript
date: 2023-01-24 08:41:13
image: assets/images/james-harrison-vpoexr5wmr4-unsplash.jpg
category: ts
background: "#3a86ff"
---
![notebook aberto com vscode](assets/images/james-harrison-vpoexr5wmr4-unsplash.jpg "notebook aberto com vscode")

## Versão em vídeo

Claro, se você preferir, tem um vídeo onde eu explico todos esses detalhes:

<iframe width="560" height="315" src="https://www.youtube.com/embed/7DhlW2HvztE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Introdução

Que o TypeScript evoluiu e cresceu, todo mundo já sabe (ou deveria kkk). Mas a linguagem possui várias features super interessantes que muitos ainda não conhecem.
O post de hoje é sobre algumas dessas features.
Pronto?! Então bora lá!

## Intersection types

O primeiro dos conceitos é básico, porém muito útil e um dos mais utilizados no dia a dia de qualquer dev que trabalhar com TypeScript: **Intersection types**.
Talvez você não conheça pelo nome, mas um exemplo com código acho que pode melhorar:

```typescript
type PersonProps = {
	name: string;
	doc: string;
	age: number;
};

type ContactProps = {
	phone: string;
	email: string;
};

type AddressProps = {
	city: string;
	zipCode: string | number;
};

// Exemplo utilizando o Intersection types
type CustomerProps = PersonProps & ContactProps & AddressProps;
```

Com o **Intersection types** podemos "juntar" vários tipos para criar uma nova tipagem. No exemplo acima, o `CustomerProps` é a "junção" de `PersonProps`, `ContactProps` e `AddressProps`. Encadeamos as tipagens utilizando o `&`.

> A `CostumerProps` possuem **todos** os atributos das tipagens listadas acima.

## Union types

Semelhante à feature anterior, a **Union types** "unir" 2 ou mais tipagens.
Vamos para o exemplo:

```typescript
type PersonProps = {
	name: string;
	doc: string;
	age: number;
};

type ContactProps = {
	phone: string;
	email: string;
};

type AddressProps = {
	city: string;
	zipCode: string | number;
};

// Exemplo utilizando o Union types
type CustomerProps = PersonProps | ContactProps | AddressProps;
```

Agora, o `CustomerProps` contém **ou não** as tipagens  `PersonProps`, `ContactProps` e `AddressProps`.

> Semelhante ao operador **OR** (`||`).

## Generic types

O nome já diz tudo, são tipos genéricos, muito úteis quando não sabemos o tipo exato de, por exemplo, os parâmetros e/ou retorno de uma função.
Exemplo:

```typescript
function exampleFunction<T>(args: T): T {
	return args;
}

// Uso
exampleFunction({ name: 'Junior' });
exampleFunction({ name: 'Junior', age: 26 });
exampleFunction({ name: 'Junior', age: 26, city: 'City' });
```

Por meio de inferência, o Typescript define a tipagem com base nos parâmetros.

## Pick

Imagine o seguinte caso:
Temos uma tipagem de `PersonProps` com contém várias props e uma delas é `doc`.
Então, precisamos criar uma tipagem de `DocumentsProps`, onde vamos precisar de algumas propriedades e uma deolas é justamente a `doc`, igual a de `PersonProps`. 
Esse é um caso perfeito para utilizarmos o Pick do TS.
Exemplo:

```typescript
type PersonProps = {
	name: string;
	doc: string;
	age: number;
};

type DocumentsProps = {
	cpf: string;
} & Pick<PersonProps, 'doc'>; // { cpf: string, doc: string }
```

## Omit

O Omit é o inverso do Pick. Utilizando ele, dada uma tipagem, querendo todas as propriedades exceto a(s) informadas.
Exemplo:

```typescript
type PersonProps = {
	name: string;
	doc: string;
	age: number;
};

type PersonWithoutDocProps = Omit<PersonProps, 'doc'>; // { name: string, age: number }
```

## Type guards

Uma das features mais importantes para evitar erros provenientes de tipos incompatíveis.
Com ela, podemos checar os tipos de, por exemplo, parâmetros de uma função antes de realizar qualquer operação.
Exemplo:

```typescript
function double(a: unknown) {
	if (typeof a === 'number') {
		return `Resultado = ${a * 2}`;
	}
	throw new Error(
	`Erro - Não foi possível calcular o dobro do parametro do tipo ${typeof a}`
	);
}

double(2) // 4
double(''); // Error
```


> Livros que em ensinaram muito sobre TypeScript:
> - Aprendendo TypeScript:
> 	https://amzn.to/3Wzqw3q
> - Guia prático de TypeScript
> 	https://amzn.to/3HpwvDE
> 
> 



## Conclusão

O Typescript nos provê inúmeras features para criar códigos mais consistentes.
Nesse post, vimos algumas delas.
Um código bem escrito, com as tipagens corretas, é uma documentação viva!
Deixa nos comentários, qual feature você mais curte do Typescript!
Valeu galera, grande abraço e até a próxima.

<hr>
*Links de afiiliados, ajudam a manter o blog.

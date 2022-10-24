---
title: Por que você não deve usar ternário no React?
description: Entenda os tipos de condicionais possíveis dentro do JSX
date: 2022-10-24 08:37:12
image: assets/images/dim-hou-bjd3khntikg-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![forbidden](assets/images/dim-hou-bjd3khntikg-unsplash.jpeg "forbidden")

## O uso do ternário

Se você estuda sobre React.js ou já trabalha com ele, com certeza já precisou renderizar algo na tela de forma condicional, ou seja, dependendo do resultado de uma condição mostrar ou não uma informação ao usuário.

Isso é muito comum em qualquer aplicação e no React.js não seria diferente. 

O Javascript (ou Typescript) nos permite fazer essas verificações de algumas formas:

### 1 - Forma "completa", com `if else`:

```ts
if (condicao) {
    // algum código aqui
} else {
    // outro código aqui
};
```

## 2 - Forma com ternário:

Podemos reduzir a expressão anterior utilizando o ternário:

```ts
condicao ? `algum código aqui` : `outro código aqui`;
```

> NOTA 1: No React.js, dentro do `return()` que é a parte que será renderizada (o HTML) precisamos utilizar o ternário e não o `if else`.

## Blz, mas por quê não devemos utilizar o ternário?

Vamos analizar o exemplo abaixo:

```tsx
return (
    <>
        {condicao 
            ? <Input placeholder="placeholder 1" /> 
            : <Input placeholder="placeholder 2" /> 
        }
    </>
);
```

No código acima, com base na `condicao` queremos que mude o placeholder do componente `<Input />`.

### Mas qual o problema? Isso não funciona?

Sim, funciona, porém... Temos um problema.

O componente `<Input />` será sempre o mesmo, independente da `condicao`, não será desmontado! 

Quando fazemos uma condicional para renderizar um elemento/componente dentro do React, esperamos que ele desmonte o anterior e monte o correto.

> NOTA 2: Pessoalmente, eu não gosto de utilizar muito o ternário pois, dependendo do caso, se torna difícil de entender com clareza o que está acontencendo.
>
> NOTA 3: Quero deixar claro que, não é proibido utilizar ternário (kkk). Mas se for utilizar, tenha em mente:
>
> * O problema citado acima;
> * Que precisa deixar claro/simples a condição;
> * E em hipótese nenhuma utilize ternário nested (aninhado), ou seja, ternário com mais de 2 branches.
>
> ```tsx
> // 🚫 NAO FAÇA ISSO
> return (
>     <>
>         {condicao 
>             ? <Input placeholder="placeholder 1" /> 
>             : condicao2 ? (
>                 <Input placeholder="placeholder 2" />     
>             ) : (
>                 <Input placeholder="placeholder 3" /> 
>             )
>         }
>     </>
> );
> ```

## Como vou renderizar de forma condicional então???

Uma forma que gosto bastante e utilizo quase que 100% das ocasiões hoje em dia é com o operador lógico AND (&& no JS/TS).

Exemplo:

```tsx
return (
    <>
        {condicao && <Input placeholder="placeholder 1" />} {/* Se condicao = true, exibe esse componente */}
        {!condicao && <Input placeholder="placeholder 2" />} {/* Se condicao = false, exibe esse outro componente */}
    </>
);
```

> NOTA 4: Dessa forma, além de ficar mais claro qual dos componentes vão ser renderizados, não temos o mesmo problema do ternário, pois garantimos que somente o componente correto será montado em tela.

## E o operador lógico OR (||), tem algum detalhe???

Na verdade... Tem sim! 😅

Mas fica tranquilo/tranquila, é apenas questão de tomar um cuidado na hora de escrever a condicional.

Exemplo:

```tsx
return (
    <>
        {condicao1 || condicao2 && <ComponenteA />} {/* ERRADO */}   
    </>
)
```

Se você fizer dessa forma, vai funcionar, mas não da forma que espera.

A condição com o `AND (&&)` vai ter preferência, ou seja, vai agrupar a `( {condicao2 && <ComponenteA />} )`, como se fosse adicionado parentêses por volta dessa parte da condição, e só depois irá comparar (OR) com a `condicao1` trazendo um resultado não esperado.

`{condicao1 || ( condicao2 && <ComponenteA /> ) }` 

### Corrigindo esse problema

Para corrigir isso é fácil, bastar deixar explícito qual a expressão que deseja verificar com o `OR`, nesse caso:

```tsx
return (
    <>
        {( condicao1 || condicao2 ) && <ComponenteA />} {/* CORRETO */}   
    </>
)
```

> NOTA 5: SEMPRE que utilizar o operador lógico OR (||), utilizar parênteses para deixar explícito a expressão!

## DICA DE OURO

Sempre que for fazer alguma verificação dentro do JSX, ou seja, do `return` de um componente React, cheque com booleans!

### Strings

```tsx
{userName && <Component />} // 🚫 NAO FAÇA ISSO

{!!userName && <Component />} // ✅ FAÇA ISSO
```

### Array

```tsx
{Array.isArray(myArray) && <Component />}
// ou 
{myArray.length > 0 && <Component />}
```

### Object

```tsx
{Object.entries(myObj).length > 0 && <Component />}
// ou
{!!myObj.name && <Component />}
```

### Function

```tsx
{typeof myFunction === 'function' && <Component />}
```

## Dica bônus: componente RenderIF

Podemos criar um componente para fazer esse papel de, dado uma condição, renderizarmos ou não um elemento em tela.

A implementação é bem simples:

```tsx
export type RenderIfProps = {
  conditional: boolean;
  children: React.ReactNode;
};

const RenderIf = ({ conditional, children }: RenderIfProps) => {
  return (
    <S.Container>
      {conditional && children}
    </S.Container>
  );
};

export default RenderIf;
```

### Utilizando o componente

```tsx
import RenderIf from 'components/RenderIf';

// {...}

return (
    <>
        <RenderIf conditional={condicao}>
            <ComponenteA />
        </RenderIf>
    </>
);
```

> NOTE 6: A implementação desse componente é completamente opcional, caso utilize apenas o AND (&&) já está excelente!

## Conclusão

Nesse post, vimos muitas formas de criarmos condicionais dentro no React. 

Vimos que a utilização do ternário nem sempre é a mais indicada, além de (talvez) trazer dificuldade no entendimento do código, assim tornando a manutenção mais custosa.

Aprendemos que a melhor alternativa nesse caso, é a utilização do operador lógico `AND (&&)`.

Além disso, entendemos que precisamos sempre deixar explícito (com parênteses) a condição quando utilizamos o operador `lógico OR (||)` para evitar resultados inesperados.

O por fim, vimos que podemos utilizar o poder dos componentes do React para criar um componente que se encarregue de, dado uma condição, renderizar um componente ou não.

Espero que esse post tenha de ajudado e entender mais sobre alguns conceitos do React. Estou muito feliz que tenha chegado até aqui. Muito obrigado mesmo!!!

Fico por aqui, grande abraço e até o próximo post!
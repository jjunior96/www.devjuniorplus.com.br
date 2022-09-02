---
title: O que são componentes no React - Part II?
description: Vamos entender um dos principais conceitos do React
date: 2022-09-02 07:11:09
image: assets/images/devin-pickell-1eRS74C-alQ-unsplash.jpeg
category: react
background: "#7b2cbf"
---


## Introdução

No último post ([clique aqui](https://www.devjuniorplus.com.br/o-que-s%C3%A3o-componentes-no-react/)), começamos a entender o que são componentes em React.

Agora vamos criar nosso primeiro componentes, ou seja, bora codar!

</br>

## Preparativos

Vamos utilizar o [Vite](https://vitejs.dev/guide/) + TypeScript (se é a primeira vez utilizando, não se preocupe, vai ser bem simples e vamos aprendendo aos poucos). 

Acesse esse [link](https://vite.new/react-ts), onde o Vite já disponibiliza um ambiente web para podermos começar de forma rápida.

</br>

## Nosso primeiro componente

Vamos primeiro entrar no arquivo `App.tsx` e limpar ele, deixando somente o básico, dessa forma:

```tsx
function App() {
  return (
    <div>
      Hello World
    </div>
  )
};

export default App;

```

Lembra que falamos no [último post](https://www.devjuniorplus.com.br/o-que-s%C3%A3o-componentes-no-react/) que um componente React é uma função que retorna um HTML? Perceba que temos uma função chamada `App` e retorna uma `div` escrito "Hello World".

Vamos agora criar nosso primeiro componente de fato. Dentro da pasta `src`, crie um novo arquivo chamado: `MyComponent.tsx`.

```tsx
function MyComponent() {
  return (
    <p>My component</p>
  )
};

export default MyComponent;

```

Agora precisamos chamar esse componente em algum lugar. 

Volte no arquivo `App.tsx` e importe o `MyComponent`

```tsx
import MyComponent from './MyComponent'; // <- importação do MyComponent

function App() {
  return (
    <MyComponent /> // <- Componente
  );
}

export default App;

```

Agora, no browser, podemos ver "My component" que é o texto que temos dentro no nosso componente `MyComponent` certo? Massa né?!

Mas e se quisermos ter dois componentes sendo exibidos em tela? Por exemplo nosso "Hello World" e o "My component", como podemos fazer?

```tsx
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      Hello World
      
      <MyComponent /> {/* <- Podemos colocar o MyComponent dentro da div (children) */}
    </div>
  );
}

export default App;

```

Mas se quisermos ter mais de um elemento HTML, como podemos fazer?

Daí, nesse caso precisamos sempre ter **um único** por volta, como um container.

```tsx
// 🚫 Forma errada! Isso vai retornar erro, pois temos dois elementos dentro do return
return (
  // 1 elemento
  <div>
    Hello World
  </div>
  
  // 2 elemento
  <MyComponent /> 
);

// ✅ Forma correta! Apenas um elemento dentro do return 
return (
  // 1 elemento
  <div>
   	<div>
    	Hello World
  	</div>
    
    <MyComponent /> 
  </div>
);


```

</br>

## Fragment

Outra forma que podemos ter vários elementos sendo retornados de um componente, é utilizando `Fragment` do React.

```tsx
return (
  <React.Fragment>
   	<div>
    	Hello World
  	</div>
    
    <MyComponent /> 
  </React.Fragment>
);

// OU simplesmente

return (
  <>
   	<div>
    	Hello World
  	</div>
  
    <MyComponent /> 
  </>
);
```

</br>

## Componentes mais dinâmicos

> Tá, mas como eu crio componentes que posso passar um texto e ele exibir em tela?

Boa pergunta! Para isso, precisamos entender o próximo conceito conceito importante no React: `props`.

O próximo post vai ser focado apenas em props, para entendermos bem e começarmos a criar componentes mais dinâmicos.

</br>

## Conclusão

Nesse post, aprofundamos mais sobre componentes, como podemos criar nossos próprios e utilizarmos em nossos projetos.

Criamos nosso primeiro componente, aprendemos sobre o `Fragment` do React, que nos permite "envelopar" vários componentes dentro do `return`.

No próximo post, vamos aprender sobre `props` e enviar informações para nossos componentes e muito mais! 

Até a próxima!
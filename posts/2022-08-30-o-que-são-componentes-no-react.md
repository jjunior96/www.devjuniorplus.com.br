---
title: O que são componentes no React?
description: Vamos entender um dos principais conceitos do React
date: 2022-08-30 07:11:09
image: assets/images/christopher-gower-m_hrflhgabo-unsplash.jpeg
category: react
background: "#7b2cbf"
---


## Componentes - Part I

Quando criamos um projeto em React, seja com Vite, CRA (create react app) ~~não utilizar mais por favor~~ ou Next.js, temos um arquivo **principal**: App.js (ou .tsx se estiver utilizando TypeScript).

Esse componente é a "porta de entrada" do nosso projeto.

```tsx
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Users from'./pages/Users';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={User} path="/user" title="Usuário" />
      <Route component={Login} path="/login" title="Login" exact />
    </Switch>
  </BrowserRouter>
);

export default App;

```

Agora vamos entender melhor o código acima.

Nesse projeto temos duas páginas: `Login` e `Users`. Cada página é um componente, ou seja, o componente `App` possui outros componentes dentro dele. 

### Mas afinal, o que é um componente?!

Um componente em React nada mais é do que uma função que retorna um HTML. **Como assim?** Eu explico.

Observe o código abaixo:

```typescript
function minhaFuncao() { // 	 <- declaração da função
  return /* alguma coisa */ // <- retorna alguma coisa
}
```

É uma função simples em Javascript, certo? Não recebe nada de **parâmetro** e **retorna** qualquer coisa.

No React, os componentes são exatamente uma função, porém eles retornam **um elemento HTML**.

```tsx
function App() {// 			 <- declaração da função
  return <h1>App</h1> // <- retorna um elemento HTML
}
```

Funções podem receber parâmetros, certo? Pois bem, os componentes, por serem uma funções também podem. Esses parâmetros são chamados de `Props`. Mas isso vai ser assunto para um próximo post!

## Conclusão

Nesse post, entendemos o básico de um dos principais conceitos do React: **componentes**.

Aprendemos que componentes em React são funções que retornam um HTML.

Através deles, podemos criar interfaces muito complexas apenas fazendo `composição de componentes` (assunto que abordarei em outro post).

No próximos post, vamos aprofundar mais nos componentes, criar nosso primeiro componente e muito mais! 

Grande abraço e até lá!



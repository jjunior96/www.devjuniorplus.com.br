---
title: O que você deve saber sobre React Hooks?
description: Entenda como funciona o fluxo dos React Hooks
date: 2022-03-08 05:36:19
image: assets/images/tatiana-rodriguez-txzjvxnwyq4-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![Hooks in box](assets/images/tatiana-rodriguez-txzjvxnwyq4-unsplash.jpeg "Hooks")

## Introdução

Nas versões mais antigas do React, antes de 16.8, tínhamos duas formas de criar nossos componentes: stateless ou stateful

### Stateless

São componentes que podiam ser escritos em formato de funções que como o nome já diz, não possuíam estado (state).

### Stateful

Já os componentes que precisavam guardar estado, precisavam ser escritos no formato de classe.

Nos componentes criados com classes, tínhamos o **life cycle**, ciclo de vida dos componentes.

Bom, depois da versão **16.8** isso mudou, pois foram introduzidos os **React Hooks** e com eles podemos criar componentes em formato de função que podem guardar estados e o fluxo mudou e é sobre isso que vamos falar nesse post: **O React Hook Flow**.

>  Tenho um post falando sobre os React Hooks [aqui](<>).

## React Hook Flow

Para facilitar o entendimento, vamos dizer que os **Hook Flow** (componentes funcionais) é o equivalente ao **Life Cycle** (componentes classes).

`*A partir de agora vamos focar apenas nos Hooks, portanto não vamos mais falar sobre componentes de classes, ok?`

O fluxo é divido em 3 partes:

1. Mount
2. Update
3. Unmount

![Flow React Hooks](assets/images/01-react-hook-flow.png "Flow React Hooks")

## Pontos importantes

1. ### Quando são causados **updates**?

Em 3 situações: 

* O componente Pai re-renderiza (**re-render**);
* Quando algum estado (**state**) muda;
* Quando algum contexto (**context**) muda;

2. ### O que são Lazy Initializers?

São funções passadas para **useState** e o **useReducer**. `Daqui a pouco vamos entender o porque isso é importante.`

Entendido isso, vamos prosseguir.

## Um pouco de código...

Vamos criar um componente simples apenas para entender na prática os passos mostrados no diagrama acima.

```tsx
import React, { useEffect, useState } from "react";

const Main = () => {
  // Lazy initializer 
  const [counter, setCounter] = useState(() => {
    console.log("%c lazy initializer", "color: #CBE2CC");
    return 0;
  });

  // Sem Array dependências
  useEffect(() => {
    console.log("%c useEffect(() => {})", "color: #bada55");

    return () =>
      console.log("%c cleanup useEffect(() => {})", "color: #FFEEB4");
  });
  
  // Array de dependências vazio []
  useEffect(() => {
    console.log("%c useEffect(() => {}, [])", "color: #1251c1");

    return () =>
      console.log("%c cleanup useEffect(() => {}, [])", "color: #FFEEB4");
  }, []);

  // Array de dependências com uma dependência [counter]
  useEffect(() => {
    console.log("%c useEffect(() => {}, [counter])", "color: #7159c1");

    return () =>
      console.log(
        "%c cleanup useEffect(() => {}, [counter])",
        "color: #FFEEB4"
      );
  }, [counter]);

  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
  );
};

export default Main;
```

### Mount

1. Executa os **lazy initializers**;
2. Renderização;
3. React atualiza o DOM;
4. Executa LayoutEffects (semelhantes ao useEffect);
5. O Browser "pinta" a tela;
6. Executa os Effects (useEffect);

### Update

1. Renderização;
2. React atualiza o DOM;
3. Executa função cleanup dos LayoutEffects (**return** do LayoutEffect);
4. Executa LayoutEffects;
5. O Browser "pinta" a tela;
6. Executa função cleanup dos Effects (**return** do useEffect);
7. Executa os Effects (useEffect);

### Unmount

1. Executa função cleanup dos LayoutEffects (**return** do LayoutEffect);
2. Executa função cleanup dos Effects (**return** do useEffect);

### Executando nosso componente...

Agora vamos ver o resultado na pratica:

![Console log](assets/images/02-console-01.png "Console log")

Assim que o componente é executado (**mount**):

1. Executou o **lazy initializer**
2. Executou o useEffect sem array de dependências (será executado sempre que o componente for atualizado)
3. Executou o useEffect com array de dependências vazio
4. Executou o useEffect com **counter** no array de dependências (será executado **apenas se o** **counter** for atualizado)

Ao clicar no botão, atualizamos o **counter** (state) para 1, ou seja, o componente será renderizado pois um estado mudou. Resultado:

![Console log 2](assets/images/03-console-02.png "Console log 2")

Quando o componente foi atualizado (**update**):

1. Executou cleanup do useEffect (return do useEffect sem array de dependências);
2. Executou o cleanup do useEffect com **counter** no array de dependências  (return do useEffect com **counter** no array de dependências);
3. Executou o useEffect sem array de dependências (será executado sempre que o componente for atualizado)
4. Executou o useEffect com **counter** no array de dependências (será executado **apenas se o** **counter** for atualizado)

Quando o componente deixar de estar em tela (**unmount**):

1. Executou **cleanup** do useEffect (return do useEffect sem array de dependências);
2. Executou o **cleanup** do useEffect com **counter** no array de dependências  (return do useEffect com **counter** no array de dependências);

`* Quando o componente é desmontado (unmount), é executado apenas as funções cleanup.`

![Console log 3](assets/images/04-console-03.png "Console log 3")

## Conclusão

Nesse post aprendemos como funciona o React Hook Flow, como é o processo de **Montar, Atualizar e Desmontar** um componente em React.

Espero ter ajudado a entender um pouco mais como o React trabalha em background para criar nossas UIs.

Grande abraço e até o próximo post!!!
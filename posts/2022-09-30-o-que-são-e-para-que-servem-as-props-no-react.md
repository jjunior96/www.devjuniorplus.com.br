---
title: "# O que são e para que servem as Props no React?"
description: "Vamos entender um conceito muito importante no React: as Props"
date: 2022-09-30 08:12:37
image: assets/images/yannik-mika-gjfbkfi874o-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![send boxes](assets/images/yannik-mika-gjfbkfi874o-unsplash.jpeg "send boxes")



## Introdução

Como essa é a terceira parte de uma série de posts aqui, recomendo, caso você tenha perdido os outros, a dar uma olhada [aqui](https://www.devjuniorplus.com.br/o-que-são-componentes-no-react-part-2/).

Vamos aprender como podemos deixar nossos componentes mais dinâmicas utilizando as `props`.

Pronto?! Então bora!

## O que são props?

Podemos entender as props como se fossem paramêtros que podemos passar para um componente, semelhante a funções.

```typescript
function soma(a: number, b: number) {
    return a + b;
}

soma(1 + 2) // será retornado 3
```

No React, podemos passar informações de um componente para outro via `props`, dessa forma:

```tsx
const ComponentePai = () => {
    const nome = 'Nome';

    return (
        <ComponenteFilho nome={nome} />
    )
}


const ComponenteFilho = ({ nome }) => {
    return (
        <p>O nome é: {nome} </p>
    )
}
```

## Para que servem as props?

Como vimos no exemplo anterior, através das `props` podemos passar informações de um componente para outro, dessa forma, podemos deixar nossos componentes mais dinâmicos.

## Indo além... unindo estados e props

Vamos ter um post dedicado para os estados (states), mas por hora, vamos apenas entender que no React para guardar uma informações, utilizamos os estados, certo?

Dito isso, vamos para um exemplo:

```tsx
const App = () => {
    const [name, setName] = useState('');

    const handleInputName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <Header name={name} />
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                value={name} 
                onChange={handleInputName}
            />
        </div>                
    )
}

const Header = ({ name }) => {
    return (
        <p>{name}</p>
    )
}
```

Não se preocupe se não entendeu 100% do código acima, o objetivo aqui é apenas ver o funcionamento das `props` com os `states`. 

Nesse exemplo, a medida que o usuário digita seu nome no `input` o componente `<Header />` exibe o que foi digitado. 

Perceba, são dois componentes diferentes `<App />` (componente pai) e `<Header />` (componente filho), as ações que acontecem no `<App />`, refletem no componente `<Header />`.

## Um tipo especial de Props: children

E se a gente precisasse passar um componente como `prop`, teria como? A resposta é **sim**.

### Mas como?!

Temos um tipo especial de prop que se chama `children`. Através dela, podemos passar componentes via `props`.

```tsx
const ComponentePai = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const ComponenteFilho = () => {
    return (
        <p>
           Componente Filho
        </p>
    )
}

const App = () => {
    return (
        <ComponentePai>
            <ComponentFilho />    
        </ComponentePai>
    )
};
```

No exemplo acima, repare no `<ComponentePai />`, ele recebe uma `props children`.

Agora veja no `<App />`, o `<ComponenteFilho />` é passado dentro do `<ComponentePai />`. 

É dessa forma que passamos um componente como props para outro, através do `children`!

## Conclusão

Nesse post, entendemos o que são e para que servem as `props` no React. No dia a dia como desenvolvedor React, utilizamos muito as `props`, principalmente a `children` para passarmos um componente para outro.

Espero ter ajudado a entender as props no React com esse post. Qualquer dúvida ou sugestão, deixe nos comentários! 

Muito obrigado por ler até aqui! Vejo você no próximo post ~~spoiler: sobre states~~, até lá!
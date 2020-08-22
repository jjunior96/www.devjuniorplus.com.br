---
title: Conhecendo o JSX
description: Você sabe o que é o JSX? Conhece o Babel.js? Então vamos descobrir!
date: 2020-08-22 07:56:18
image: assets/images/jsx.jpg
category: react
background: "#7b2cbf"
---
# Introdução

No último post, entendemos o básico do funcionamento do React, se ainda não viu, [confere aqui](https://alvesjunior.netlify.app/come%C3%A7ando-com-react/).

Agora vamos continuar o exemplo para entender o que é o JSX do React.<br/>

# Afinal, o que é JSX?

> JSX é uma extensão de sintaxe para JavaScript. É semelhante a uma linguagem de template, mas com todo o poder do JavaScript

Acima, temos a definição de JSX da própria documentação do React.<br/>

# Mas o que isso quer dizer?

Bom, vamos para um exemplo prático e depois retornamos para explicar melhor, ok?

```javascript
const root = document.getElementById("root");
ReactDOM.render(<h1 id='title'>Hello World</h1>, root);
```

O código acima é um exemplo de JSX, a segunda linha, fazemos um chamada ao render do ReactDOM, **passando um elemento HTML diretamente**.<br/>

# Hein?! Como assim?! HTML dentro do Javascript?

Então... Na verdade isso não é HTML, é o **JSX**. (Vamos ver na prática porque não é HTML, calma ae.)

É a sintaxe HTML, mas dentro do Javascript com todos os poderes que ele nos permite!<br/>

# Vamos escrever e ver na prática

Vamos usar o arquivo **index.html** do último artigo (**<u>confere aqui</u>**), vamos apenas utilizar o Javascript dentro da tag **script**, assim: 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Start Learning</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Importa o React -->
    <script
      src="https://unpkg.com/react@16/umd/react.development.js"
      crossorigin
    ></script>
    
    <!-- Importa o ReactDOM -->
    <script
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
      crossorigin
    ></script>

    <!-- Nosso script -->
    <script>
      const root = document.getElementById("root");

      ReactDOM.render(<h1 id='title'>Hello World</h1>, root);
    </script>
  </body>
</html>
```

Se a gente tentar executar esse código agora, nada será mostrado no browser. **POR QUÊ?** **DEU ERRO?**

Não, é por que os browsers não "entendem" JSX, daí precisamos de alguém que posso "traduzir" o JSX para Javascript que o browser entenda.

Chamamos esse "tradutor" de **transpiler** (tipo especial de **compilador**) de Javascript. O mais utilizado atualmente é o [Babel.js](http://babeljs.io/).

Agora precisamos importa-lo para poder testar nosso código no browser:

```html
<!-- Importa o Babel -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Uma última coisa antes de testar: precisamos também informar na tag script, que vamos utilizar o Babel.js:

```html
<script type="text/babel">
```

Pronto, salvando o arquivo e indo ao browser temos:

![Exemplo dentro do browser](assets/images/imagem1.png "Exemplo dentro do browser")

<br/>

# Mas o que o Babel.js fez?

Para entender melhor, vamos ao site do Babel.js e acessar o menu **Try it out**, na barra superior.

Agora escrevemos o seguinte código:

![Exemplo dentro do site do Babel.js](assets/images/img2.png "Exemplo dentro do site do Babel.js")

<br/> # O que quer dizer esse código?

É simplesmente uma variável recebendo uma função anônima. Mas o importante aqui, é saber que **funções anônimas foram inseridas na versão ES6 do Javascript** e alguns browsers "entendem" somente até a versão ES5, daí a necessidade de utilizarmos o Babej.js. 

Ele vai "traduzir" o nosso JSX para uma forma que o browser "entenda". (ES significa EcmaScript, em outro post eu explico sobre as diferentes versões do JS).<br/>

# Melhorando nosso exemplo

Até aqui, entendemos o que é JSX e qual a função do Babel.js dentro do nosso código.

Agora, vamos ver o que acontece se copiarmos nosso script para dentro do site do Babel.js:

![Transpilaçao do codigo que escrevemos para o que o browser entende](assets/images/img3.png "Transpilaçao do codigo que escrevemos para o que o browser entende")

<br/>Veja que ele fez exatamente o que tínhamos feito no [último post](https://alvesjunior.netlify.app/come%C3%A7ando-com-react/), criou o elemento h1 através do React.createElement.<br/>

Muito massa né?<br/>

# Conclusão

Demos mais um passo rumo ao React, entendemos na prática o que é JSX e precisamos do Babel.js.

E agora sim, no próximo post, vamos começar finalmente a criar nosso primeiro projeto com o **create-react-app**.

Eu vou ficando por aqui.

Abraços e até a próxima!
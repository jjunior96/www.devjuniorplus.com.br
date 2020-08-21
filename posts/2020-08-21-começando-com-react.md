---
title: Começando com React
description: Conceitos básicos por trás do React!
date: 2020-08-21 09:12:52
image: assets/images/1.jpg
category: react
background: "#7b2cbf"
---
![Apenas comece!](assets/images/1.jpg "Apenas comece!")

# Introdução

## O objetivo desse post é entender os conceitos mais básicos do React.

Primeiro vamos criar um projeto com apenas dois arquivos: (caso você utilize o VS Code, tem uma dica massa no final :D )

> index.html
>
> script.js

Dentro do arquivo **index.html**, vamos criar uma **div** **com id="root"** e importar nosso **script.js**, como no exemplo:

```html
<!DOCTYPE *html*>
<html *lang*="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Start Learning</title>
  </head>
  <body>
    <div id="root"></div>
    
    <!-- Importa nosso script -->
    <script src="script.js"></script>
  </body>
</html>
```

Será nessa **div** que vamos inserir nosso componente React.

Precisamos de mais uma ultima coisa antes de partir para o Javascript, importar o React no nosso **index.html**:

```html
<!-- Importa o React -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<!-- Importa o ReactDOM -->
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

Por enquanto não vamos nos preocupar em entender os detalhes, apenas que o React é divido em várias "partes", o ReactDOM, por exemplo, é a parte responsável por manipular o DOM (Document Object Model).

Pronto, agora temos tudo o que precisamos para começar a entender o React!

No arquivo **script.js**, precisamos obter a **div#root** que criamos no nosso **index.html**, para isso podemos fazer:

```js
const root = document.getElementById('root');
```

Dessa forma, selecionamos o elemento com id = root, dentro do **index.html**, como podemos ter um único elemento com ele id, esta perfeito!

Agora, para criar nosso primeiro elemento React, fazemos:

```js
const titulo = React.createElement("h1", { id: "title" }, "Hello World");
```

O método **createElement** do React recebe como parâmetro: 

1. a tag que será criada, no caso **h1**;
2. as propriedades da tag, no caso o **h1** terá um **id=title**
3. o conteúdo para tag, nesse caso, o famoso "Hello World"

Para renderizar na tela, usamos o ReactDOM, que importamos junto com o React no **index.html**, dessa forma:

```js
ReactDOM.render(titulo, root);
```

Onde o **primeiro** parâmetro é o **elemento** que será renderizado, e o **segundo** parâmetro é **onde** será renderizado.

Agora, abrimos nosso arquivo **index.html**:

![Exibindo no Browser o Hello World criado](assets/images/imagem1.png "Exibindo no Browser o Hello World criado")

Podemos clicar com o botão direito e ir em inspecionar, e vemos que a tag **h1**, com o **id="title"** foi inserido dentro da nossa **div id="root"**.

![Exibindo os elementos no Browser](assets/images/imagem2.png "Exibindo os elementos no Browser")

# **Podemos ir um pouco mais além**

Vamos criar um subtítulo com a tag h2, dessa forma:

```javascript
const subtitulo = React.createElement("h2", { id: "subtitle" }, "Subtitle");
```

E vamos criar também uma nova div, para agrupar o **titulo** e o **subtitulo**, assim:

```javascript
const post = React.createElement("div", null, titulo, subtitulo)
```

Se você perceber, temos duas coisas interessantes aí:

1. Passamos **null** do segundo parametro, o quer dizer que não vamos passar propriedades para esse elemento
2. No final, passamos dois parametros: titulo e subtitulo, isso porque, o ultimos parametro do **createElement** pode receber tanto o conteudo para a tag, como filhos.

Vamos no browser para entender o que aconteceu na prática:

![Browser, verificando o elemento](assets/images/imagem3.png "Browser, verificando o elemento")

Massa né?<br/>

> Dica: se você utiliza o VS Code para escrever seus códigos, instale a extensão **Live Server**, assim, basta ir no arquivo **index.htm**l e clicar com o botão direito do mouse, e ir em "Open with Live Server". O massa é que, sempre que você salva qualquer arquivo dentro desse projeto, ele faz um reload automático!
>
> ![Extensao Live Server VS Code](assets/images/imagem4.png "Extensao Live Server VS Code")

# Conclusão

Nesse post aprendemos o funcionamento básico do React.

Na vida real, não utilizamos o React dessa forma, no próximo post, vamos aprender a começar um projeto com o **create-react-app**.

Te espero lá!
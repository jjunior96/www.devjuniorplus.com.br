---
title: Usando o create-react-app do React
description: Vamos aprender como usar essa ferramenta fornecida pelo React
date: 2020-08-24 09:02:28
image: assets/images/jsx.jpg
category: react
background: "#7b2cbf"
---
# Introdução

Como vimos no **<u>post anterior</u>**, podemos importar o React dentro dos nossos projetos, basta fazer a importação dentro no arquivo index.html e então podemos utilizar todo o poder dessa biblioteca.

Porém, essa não é a melhor forma de trabalharmos com o React. Hoje vamos aprender uma forma melhor de utilizar o React, através do **create-react-app**.

> Precisamos ter o [Node](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/get-npm) instalado em nossa máquina.<br/>

Eu gosto de utilizar o [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable) no lugar do npm, mas vai do seu gosto. Durante esse tutorial, vou utilizar o yarn. :D

Comando:

```bash
npx create-react-app meu-app
```

\*Esse comando irá instalar tudo que vamos precisar dentro da pasta "meu-app"

Aguardamos um pouco, esse processo pode levar uns minutos.

Quando finalizar, vamos rodar os comandos:

```bash
cd meu-app
yarn start
```

Nesse momento, ele irá abrir nosso browser com algo parecido com essa tela:

![React executando no browser](assets/images/1-reactrodando.png "React executando no browser")

Vamos abrir nosso projeto no VS Code para entender melhor o que está acontecendo. <br />

![VS code aberto](assets/images/2-vscode.png "VS code aberto")

# Beleza, mas onde nosso programa começa?

Sempre pelo o arquivo index.html, que nesse caso está em **public/index.html**

![Arquivo index.html aberto no VS Code](assets/images/3-indexhtml.png "Arquivo index.html aberto no VS Code")

Note que temos uma div#root (div com id=root), que é exatamente o que fizemos nos posts passados, é nessa div que será inserido todo nosso código React. <br />

Agora vamos abrir arquivo **src/index.js**:

![Arquivo index.js aberto no VS Code](assets/images/4-indexjs.png "Arquivo index.js aberto no VS Code")

Esse é o arquivo principal do React, ele que recupera a div#root no index.html.

Outro arquivo importante para entendermos é o App.js, ele é o componente principal da nossa aplicação. 

<br />

# Resumindo:

1. Escrevemos todos os nossos componentes em React
2. Importamos para o App.js 
3. O index.js importa o App.js 
4. O index.js "injeta" no index.html. <br />

# Hein?! Cadê? Que bagunça é essa?!

Criei essa imagem para ficar mais claro como fica essa "ordem" na prática:

![Ilustraçao para explicar o conceito de componentizacao](assets/images/ilustracao.png "Ilustraçao para explicar o conceito de componentizacao")

Bom, agora que entendemos a estrutura base do nosso projeto, vamos o arquivo App.js e editar-lo da seguinte forma:

![Arquivo App.js editado](assets/images/5-appeditado.png "Arquivo App.js editado")

Podemos ver no nosso browser que ele fez o reload automaticamente e agora está exibindo nosso "Hello World".

![Browser executando nosso programa](assets/images/6-appeditado.png "Browser executando nosso programa")



```javascript
esse reload automático da página com // o Weback é simplesmente fantástico! Mas e assunto para um próximo post. :D <br/>
```

<br />

# Conclusão

Hoje aprendemos a criar um projeto com o **create-react-app**, entendemos a estrutura básica e começamos a modificar o componente **App**. No próximo post, vamos ir mais afundo, entendemos os componentes e vamos criar nosso primeiro componente! <br/>

Grande abraço! Até a próxima.
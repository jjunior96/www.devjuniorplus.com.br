---
title: Criando um ToDo List para entender o React
description: Com esse exemplo básico, vamos aprender conceitos muito importantes do React.
date: 2020-08-26 09:59:03
image: assets/images/imagemcomponentes.jpg
category: react
background: "#7b2cbf"
---
![Pecas de Lego](assets/images/imagemcomponentes.jpg "Pecas de Lego")

# Introdução

[Playlist de vídeo sobre React](https://www.youtube.com/playlist?list=PLzILwKck99iar3MQeGw3W_MoMlVBYhrCY)

Existem vários conceitos que precisamos entender para dominar essa lib. Mas podemos dizer que existem três que são os **mais importantes**. 

Esses conceitos estão presentes em praticamente todas aplicações construídas com React, podemos até ir além e dizer que são a **base do React**. <br />

# E que conceitos tão importantes são esses?

**Componentes**, **estado** e **propriedades(props)**. Então bora entender esses conceitos na prática? Bora! <br />

# Vamos iniciar nosso projeto

 No post sobre create-react-app (se não viu, está [aqui](https://alvesjunior.netlify.app/usando-o-create-react-app-do-react/)), utilizamos o componente App.js que é criado por padrão.

Nesse projeto, vamos apagar ele e criar o nosso próprio componente, o Todo.js!

```jsx
import React from 'react';

function Todo() {
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form >
        <input type="text" placeholder="Adicione uma tarefa" />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list" >
        <li>Item</li>
      </ul>
    </div>
  );
}

export default Todo;
```

Precisamos agora capturar o input do usuário, para isso, criamos uma função como abaixo:

```jsx
function handleChangeInput(event) {
   const inputTask = event.target.value;
}
```


E passar a **handleInputTask** no **onChange** do input:

```jsx
<input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} />
```

# Blz, mas como fazemos para adicionar o novo item na lista?

Precisamos saber duas coisas primeiro:

1. Não podemos alterar uma variável diretamente em React, precisamos utilizar **estado (state)**;
2. Precisamos criar um função que será executada assim que o usuário clicar no botão "Adicionar".

Primeiro vamos criar um **estado** para salvar o input do usuário:

```jsx
import React, { useState } from 'react'; // <------ importar o useState do React

function Todo() {
	const [task, setTask] = useState(""); // <------ estado

  // ...
}
```

Nossa função **handleChangeInput** fica assim:

```jsx
function handleChangeInput(event) {
  const inputTask = event.target.value;
  
  setTask(inputTask); // <----- atualizamos o estado "task" atraves de "setTask"
}
```

`O useState é um Hook do React, que nos permite trabalhar com estados. Retorna um valor (task) e uma função para atualizar o valor (setTask).` 

\*Por convenção, criamos o **nomeEstado** e a função **setNomeEstado***.

<br />

## Próximo passo: criar uma lista onde será salvo nossos itens

Já estamos atualizando o valor do estado, mas ainda precisamos de algo a mais.

Precisamos entrar com um valor no input, clicar em "adicionar" e então, o item é adicionado na nossa lista.

Será necessário outro estado para nossa lista de tarefas:

```jsx
const [itemsList, setItemsList] = useState([]); // <----- será um Array
```

## Criando a função que adiciona o item na lista

Adicionando items na lista:

```jsx
// Adiciona um novo elemento na lista
function handleAddItemToList(event) {
  event.preventDefault(); // <----- desabilita o refresh na pagina ao enviar um formulário
  
  setItemsList([...itemsList, task]); // <----- Copia todos os items ja existentes e entao adiociona o novo item
}
```

Basta passarmos essa função ao `onSubmit` do formulário:

```jsx
<form onSubmit={handleAddItemToList}>
```

<br />

Para começarmos a ver funcionando, precisamos alterar nossa `ul`:

```js
<ul className="todo-list">
  {itemsList.map((item, index) => ( // <----- Percorremos o array de todos
  	<li key={index}>{item}</li> // <----- Para cada item do array, criamos um `li`
	))}
</ul>
```

>  OBS.: No React, quando lidamos com Arrays, é muito importante passarmos uma `key` para o primeiro elemento que será renderizado, nesse caso é o `li`. **Note que utilizamos o `index` do array como key**.

Agora, queremos que ao clicar no botão de adicionar, o campo de input fique limpo.

Podemos fazer assim:

```jsx
function handleAddItemToList(event) {
  event.preventDefault();
  
  setItemsList([...itemsList, text]);
  
  // Limpa o campo de input
  setTask("");
}
```

Basta chamar o **setTask** e passar vazio para ele.

Mas para que funcione de fato, precisamos também passar o valor de "task" como "value" do input, assim:

```jsx
<input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
```

<br />

# Ok, tudo certo né?

Bom, ainda não, porque temos um efeito colateral, pois se não inserirmos nada no input e clicar em adicionar, será adicionado um item **vazio**, não é isso o que queremos.

![resultado no browser](assets/images/imagemaddbranco.png "resultado no browser")

Para corrigir, basta criarmos uma verificação antes de adicionarmos um novo item na lista, dessa forma:

```jsx
function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) { // <----- Se nao tiver vazio, nao faz nada
      return
    };
    
    setItemsList([...itemsList, task]); 
    setTask(""); // <----- Reseta o valor do input
  }
```

<br />

### O código completo até aqui

```js
import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState(""); 
  const [itemsList, setItemsList] = useState([]); 

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask); 
  }
  
  function handleAddItemToList(event) {
    event.preventDefault(); 

    if (!task) { 
      return
    };
    
    setItemsList([...itemsList, task]);
    setTask(""); 
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />

        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list" >
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
```

> Se preferir, esse é o commit: https://github.com/jjunior96/studies-react/commit/221795792609ceeb876380008fa9716ccc324e27

# Separando os componentes

Um dos conceitos importantes do React é justamente a componentização. Podemos criar interfaces visuais complexas, que são compostas por vários componentes simples, componentes que são especialistas no que fazem.

Por exemplo: 

![exemplo de componentização](assets/images/imagemfeitacomponentes.png "exemplo de componentização")

Usando meu próprio site como exemplo, podemos ver que a interface pode ser divida em vários componentes. Assim, podemos reutilizar componentes entre diversas páginas dentro do mesmo projeto, ou até em projetos diferentes! 

Bom, de volta ao código, vamos criar uma pasta **components**, dentro dela, outra pasta com o nome de **List** e um arquivo **index.js**

> src/components/List/index.js

Recortamos nossa lista que esta dentro de **Todo.js** e criarmos nosso componente dentro de **List/index.js**, dessa forma:

```jsx
// src/components/List/index.js
import React from 'react';

function List(props) {
  return (
    <ul className="todo-list">  
      {props.itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List;
```

<br />

Agora, dentro de **Todo.js**, precisamos importar esse componente **List**. Para isso, basta fazermos:

```jsx
// Importa meu componente List
import List from './components/List';
```

<br />

E chamar esse componente, passando as props, que no caso é o **itemsList**:

```jsx
// src/Todo.js
// {...}
return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form >
        <input type="text" onChange={handleInputText} value={text} />
        <button type="submit" onClick={addItem} >Adiciona</button>
      </form>
    
      <List itemsList={itemsList} /> {/* <--------- passando o `itemList` como props para o componente */}
    </div>
  );
// {...}
```

<br />

# Continuando nossa refatoração

Vamos criar um componente de `Input` e outro de `Button`. São bem simples, pra gente treinar a componentização. :) 

```js
// src/components/Input/index.js

import React from 'react';

function Input(props) {
  return (
    <input onChange={props.onChange} placeholder={props.placeholder} value={props.value} type={props.type} />
  )
}

export default Input;
```



```js
// src/components/Button/index.js

import React from 'react';

function Button(props) {
  return (
    <button type={props.type}>
      {props.children}
    </button>
  )
}

export default Button;
```

> DICA: Coloque um console.log() para ver o que vem nas `props` dos componentes, para entender o real funcionamento das propriedades dentro do React. Altere as props enviadas e veja o que acontece!



### Indo além...

Agora vamos criar um novo componente para o **form**.

```jsx
// src/components/Form/index.js

import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export default Form;
```

<br />

Agora, no componente **Todo** (componente pai), vai ficar assim:

```jsx
import React, { useState } from 'react';

import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import List from './components/List';

import './todo.css';

function Todo() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask); 
  }
  

  function handleAddItemToList(event) {
    event.preventDefault(); 

    if (!task) { 
      return
    };
    
    setItemsList([...itemsList, task]); 
    setTask(""); 
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      
      {/* Nosso componente de Form */}
      <Form onSubmit={handleAddItemToList}>
        {/* Nosso componente de Input */}
        <Input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />

        {/* Nosso componente de Button */}
        <Button type="submit">Adicionar</Button>
      </Form>

     {/* Nosso componente de List */}
     <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;
```

<br />

# Nosso ToDo List já está adicionando novas tarefas, porém...

Como pode perceber, a aplicação está funcionando, porém ainda está bem "feia". Podemos melhorar isso, e vamos! <br />

No próximo post, vamos adicionar alguns estilos CSS para nossa aplicação ficar show! 

![como nossa aplicacao vai ficar](assets/images/todolist.png "como nossa aplicacao vai ficar")

Além disso, precisamos também adicionar as funcionalidades de: 

1. Marcar tarefa como feita
2. Excluir tarefa

**Vamos criar tudo isso no próximo post! :D**

<br />

# Conclusão

Bom, chegamos ao fim de mais um estudo sobre React. Aprendemos muitos conceitos importantes, como componentes, estados e propriedades. Esses 3 conceitos são a base principal de qualquer aplicação construída utilizando React. Entender com bastante clareza esses 3 pontos é extremamente importante para evoluir. <br />

[Código desenvolvido nesse post](https://github.com/jjunior96/studies-react/tree/master/beginner/todo-list)

<br />

Espero que eu tenha ajudado você a entender um pouco melhor esses conceitos. Qualquer dúvida, deixe nos comentários, ficarei muito feliz em responder. :D

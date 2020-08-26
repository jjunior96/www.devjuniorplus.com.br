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
function handleInputTask(event) {
   let inputTask = event.target.value;
}
```

\
E passar a **handleInputTask** no **onChange** do input:

```jsx
<input type="text" placeholder="Adicione uma tarefa" onChange={handleInputTask} />
```

# Blz, mas como fazemos para adicionar o novo item na lista?

Precisamos saber duas coisas primeiro:

1. Não podemos alterar um objeto/array diretamente em React, precisamos utilizar **estado**;
2. Precisamos criar um função que será executada assim que o usuário clicar no botão "Adicionar".

Primeiro vamos criar um **estado** para salvar o input do usuário:

```jsx
import React, { useState } from 'react'; // <------ importar o useState do React

function Todo() {
	const [task, setTask] = useState(""); // <------ estado

  // ...
}
```

Nossa função **handleInputTask** fica assim:

```jsx
function handleInputTask(event) {
  let inputTask = event.target.value;
  setTask(inputTask); // <----- atualizamos o estado "task" atraves de "setTask"
}
```

`O useState é um Hook do React, que nos permite trabalhar com estados. Retorna um valor (task) e uma função para atualizar o valor (setTask).` 

\*Por convenção, criamos o **nomeEstado** e a função **setNomeEstado***.

<br />

## Próximo passo: criar uma lista onde será salvo nossos itens

Já estamos atualizando o valor do estado, mas não é isso que queremos.

Precisamos entrar com um valor no input, clicar em "adicionar" e então, o item é adicionado na nossa lista.

Será necessário outro estado para nossa lista de tarefas:

```jsx
const [itemsList, setItemsList] = useState([]); // <----- será um Array
```

## Criando a função que adiciona o item na lista

Adicionando items na lista:

```jsx
// Adiciona um novo elemento na lista
function addItem(event) {
  event.preventDefault(); // <----- desabilita o refresh na pagina ao clicar no botão
  setItemsList([...itemsList, task]); // <----- Copia todos os items ja existentes e entao adiociona o novo item
}
```

Basta passarmos essa função ao botão, para ser executada assim que ele seja clicado:

```jsx
<button type="submit" onClick={addItem} >Adicionar</button>
```

<br />

Agora, queremos que ao clicar no botão de adicionar, o campo de input seja limpado.

Podemos fazer assim:

```jsx
function addItem(event) {
  event.preventDefault();
  setItemsList([...itemsList, text]);
  // Limpa o campo de input
  setTask("");
}
```

Basta chamar o **setText** e passar vazio para ele.

Mas para que funcione de fato, precisamos também passar o valor de "task" como "value" do input, assim:

```jsx
<input type="text" placeholder="Adicione uma tarefa" onChange={handleInputTask} value={task} />
```

<br />

# Ok, tudo certo né?

Bom, ainda não, pois isso causa um efeito colateral, pois se não inserirmos nada no input e clicar em adicionar, será adicionado, não é isso o que queremos.

![resultado no browser](assets/images/imagemaddbranco.png "resultado no browser")

Para corrigir, basta criarmos uma verificação antes de adicionarmos um novo item na lista, dessa forma:

```jsx
// Verifica se tem um item para adicionar
if(text) {
  setItemsList([...itemsList, text]);
  // Limpa o campo de input
  setText("");
}
```

<br />

# Separando os componentes

Um dos conceitos importantes do React é justamente a componentização. Podemos criar interfaces complexas, que são compostas por vários componentes simples, componentes que são especialistas no que fazem.

Por exemplo: 

![exemplo de componentização](assets/images/imagemfeitacomponentes.png "exemplo de componentização")

Usando meu próprio site como exemplo, podemos ver que a interface pode ser divida em vários componentes. Assim, podemos reutilizar componentes entre diversas páginas dentro do mesmo projeto, ou até em projetos diferentes! 

Bom, de volta ao código, vamos criar uma pasta **components**, dentro dela, outra pasta com o nome de **List** e um arquivo **index.js**

> src/components/List/index.js

Recortamos nossa lista que esta dentro de **Todo.js** e criarmos nosso componente dentro de **List/index.js**, dessa forma:

```jsx
// src/components/List/index.js
import React from 'react';

function List (props) {
  return(
    <ul className="todo-list" >
      {props.itemsList.map(item => (<li>{item}</li> ))}
    </ul>
  )
}

export default List;
```

<br />

Agora, dentro de **Todo.js**, precisamos importar esse componente **List**. Para isso, basta fazermos:

```jsx
// Importa o meu componente List
import List from './components/List';
```

<br />

E chamar esse componente, passando as props, que no caso é o **itemsList**:

```jsx
// src/Todo.js
return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form >
        <input type="text" onChange={handleInputText} value={text} />
        <button type="submit" onClick={addItem} >Adiciona</button>
      </form>
    
      <List itemsList={itemsList} /> {/* <--------- */}
    </div>
  );
```

<br />

# Continuando nossa refatoração

Vamos agora criar um novo componente para o **form**.

Mas antes, precisamos entender algumas coisas. O nosso **form** tem algumas particularidades que precisamos levar em conta:

1. Ele precisa acessar o estado **itemsList** para inserir o novo item, porém, esse é um estado pertencente do componente **Todo** (componente pai).
2. O estado **task** pertence ao **form**, então tudo ok.
3. As funções **handleInputTask** e **addItem** também pertencem ao **form**.

```jsx
import React, { useState } from 'react';

function Form(props) {
  const [task, setTask] = useState("");

  function handleInputTask(event) {
    let inputTask = event.target.value;
    setTask(inputTask);
  }

  function addItem(event) {
    event.preventDefault();
    
    if(task) {
      props.onAddItem(task) // <-----------
      setTask("");
    }
  }
  
  return (
    <form >
      <input type="text" onChange={handleInputTask} value={task} />
      <button type="submit" onClick={addItem} >Adiciona</button>
    </form>
  )
}

export default Form;
```

<br />

No componente **Todo**  (componente pai), precisamos passar a propriedade **onAddItem** (que na verdade é uma função) para o **Form**.

```jsx
import React, { useState } from 'react';

import List from './components/List';
import Form from './components/Form';

function Todo() {
  const [itemsList, setItemsList] = useState([]);
  
  function onAddItem(newItem) { 		// <------------ 
    setItemsList([...itemsList, newItem])
  }
  
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      
      <Form onAddItem={onAddItem}/> { /* <------------ */ }

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
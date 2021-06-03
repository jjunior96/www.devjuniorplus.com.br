---
title: Aprendendo TypeScript - Parte 1
description: Iniciando os estudos com TypeScript
date: 2020-09-19 08:42:28
image: assets/images/safar-safarov-msn8tfhj0is-unsplash.jpg
category: ts
background: "#3a86ff"
---
![computador em cima da mesa com codigo aberto](assets/images/safar-safarov-msn8tfhj0is-unsplash.jpg "computador em cima da mesa com codigo aberto")



* [Instalação](#instalacao)
* [Tipos primitivos](#tipos)
* [Type Inference](#type-inference)
* [Type Aliasses](#type-aliasses)
* [Classes](#classes)
* [Modifiers (public, private, readonly, protected)](#modifiers)
* [Getters & Setters](#get-set)
* [Abstract](#abstract)
* [Interfaces](#interfaces)
* [Propriedades opcionais](#propriedade-opcional)
* [Extender interfaces](#extender-interfaces)
* [Implements](#implements)
* [Conclusão](#conclusao)

<br />

<h2 id="instalacao">Instalação</h2>

Primeiramente, precisamos ter o <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" >Node.js</a> em instalado em nossa máquina.

Após instalar o Node.js, podemos prosseguir com a instalação do <a href="https://www.typescriptlang.org/download" target="_blank" rel="noopener noreferrer" >TypeScript</a>, basta rodar o comando:

```bash
npm install -g typescript
```

Agora, para criamos um arquivo de configuração do TypeScript, podemos executar:

```bash
tsc --init
```

Na raíz do projeto, será criado um arquivo tsconfig.json, como esse:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist", // Pasta para onde será compilado
    "baseUrl": "./",
    "incremental": true
  }
}
```

`O arquivo terá muitas outras configurações comentadas, mas as mais importante para esse momento inicial, são essas acima.`

<br />

<h2 id="tipos">Tipos primitivos</h2>

### boolean (true / false)

```typescript
let isOpen: boolean;
isOpen = true;
```

### String

```typescript
// 'foo', "foo", `foo`
let message: string;
message = `foo ${isOpen}`;
```

### Number

```typescript
// (int, float, hex, binary)
let total: number;
total = 0xff0;
```

### Array

```typescript
// (type[])

// Primeira notação
let items: string[];
items = ["foo", "bar"];

// Segunda notação
let values: Array<number>; // Generic
values = [1, 2, 3];
```

### Tuple

```typescript
// Array, onde ja sei qual os tipos e qual o tamanho do Array
let title : [number, string];
title = [1, "foo"]; // correto

title = [1, "foo", true]; // errado
```

### Enum

```typescript
// Conjunto chave valor, facilitando a identificação
enum Colors {
  white = '#fff';
  black = "#000";
}
```

### Any

```typescript
// Qualquer coisa TERROR DO TS, NÃO UTILIZAR!!
let coisa: any; // ou let coisa;
coisa = [1];
coisa = "foo";
```

### Void

```typescript
// Vazio, nao retorna nada. Usado para tipar funções onde não é retornado nada!
function logger(): void {
  console.log('foo');
}
```

### Null / undefined

```typescript

```

### Never

```typescript
// Um erro não retorna nada, nunca retorna nada, sempre vai cair na excessão
function error(): never {
	thow new Error("error");  
}
```

### Object

```typescript
let cart: object;

cart = {
  key: "fi"
}
```

<br />

<h2 id="type-inference">Type Inference</h2>

```typescript
// O TS faz um Type Inference para string, no caso!
let message = "mensagem"; // Define que message é do tipo string
message = 1; // Erro!
```

> No TypeScript não precisamos tipar tudo, apenas o que for necessário!

<br />

<h2 id="type-aliasses">Type Aliasses</h2>

```typescript
function logDetails(uid: number, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails(123, "sapato"); // Certo!
logDetails("123", "sapato"); // Errado!

// Corrigindo
function logDetails(uid: number | string, item: string) {...}
logDetails("123", "sapato"); // Agora está correto
```

Mas o Type Aliasses é muito mais poderoso que isso...

```typescript
// Type Alias
type Uid = number | string;

// Varios funções, onde os parâmetros são do tipo Uid, que eu criei!
function logDetails(uid: Uid, item: string){...}
function logInfo(uid: Uid, user_name: string){...}
```

Outro exemplo:

```typescript
type Platform = 'Windows' | 'Linux' | 'MacOS';

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform('ios'); // Retorna erro!
renderPlatform('Windows'); // Retorna Windows
```

```typescript
type AccountInfo = {
  id: number;
  name: string;
  email?: string; // O "?" significa que esse atributo é opcional (string | undefined)
}

const account: AccountInfo = {
  id: 123,
  name: "Junior"
  email: "junior@email.com"
}

type CharInfo = {
  nickname: string;
  level: number;
}

type PlayerInfo = AccountInfo & CharInfo; // Junta os dois tipos (Intersection)

// Não é necessário passar na mesma ordem!
const player: PlayerInfo = {
  id: 123,
  name: "Junior"
  email: "junior@email.com",
  nickname: "junior996";
  level: 10;
}
```

<br />

<h2 id="classes">Classes</h2>

```typescript
class UserAccount {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

const user = new UserAccount("Junior", 23); // Cria uma instância de UserAccount
user.logDetails(); // Executa o método da classe

// Herança
class CharAccount extends UserAccount {
  nickname: string;
  level: number;
  
  constructor(name: string, age: number, nickname: string, level: number) {
    // pega as propriedades superior, da classe que estamos extendendo
    super(name, age) {
      this.nickname = nickname;
      this.level = level;
    }
  }
}

const newUser = new UserAccount("Marcos", 32, "marcos123", 82);
newUser.logDetails(); 
```

> Para rodar:
>
> ```bash
> tsc --watch # irá compilar os arquivos .ts 
> ```
>
> ```bash
> yarn add nodemon -D # instalar o Nodemon
> nodemon dist/nome_arquivo.js # para executar
> ```

<br />

<h2 id="modifiers">Modifiers (public, private, readonly, protected)</h2>

### Public

É implícito, quando não passamos nenhum modifier, ele é atribuído por padrão.

### Private

Permite acessar e modificar as propriedades dentro da classe.

### Readonly

Permite, fora da classe, apenas acessar, não alterar.

### Protected

Semelhante ao private, porém, permite ser acessada dentro das subclasses também, já o private não, apenas dentro da própria classe.

```typescript
class CharAccount extends UserAccount {
  private nickname: string; // nickname só pode ser acessado dentro dessa classe!
  readonly level: number; // readonly permite apenas ler, não editar a propriedade!
  
  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age) {
      this.nickname = nickname;
      this.level = level;
    }
  }
}

const newUser = new UserAccount("Marcos", 32, "marcos123", 82);
newUser.nickname; // Error! 
newUser.level; // Funciona!
newUser.level = 99 // Error! Só pode ser lida, não alterada
```

<br />

<h2 id="get-set">Getters & Setters</h2>

```typescript
class UserAccount {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
  
  get getName() {
    console.log("---GET---");
    return this.name;
  }
  
  set setName(name: string) {
    this.name = name
  }
}

const user = new UserAccount("Junior", 23); // Cria uma instância de UserAccount
user.getName; // Acessa o getName, como se fosse uma propriedade
user.setName = "Jorge";
```

<br />

<h2 id="abstract">Abstract</h2>

Classes que são apenas modelos para outras classes, não podemos criar instâncias a partir delas.

Significa que, eu não consigo criar um objeto a partir dessa classe. Eu só consigo estender essa classe.

```typescript
abstract class UserAccount {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new UserAccount("Marcos", 32, "marcos123", 82); // Error!
```

<br />

<h2 id="interfaces">Interfaces</h2>

Um conjunto de dados para descrever a estrutura de um objeto. **Exclusivamente para objetos**.

```typescript
interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars: (title: string) => void; // Assinatura dos métodos
}

const theLastOfUs: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Metro, Uncharted`);
  }
}

theLastOfUs.title; // "The Last of Us"
```

> Os modifiers funcionam para as interfaces (public, private, readonly, protected)
>
> ```typescript
> interface Game {
>   private title: string;
>   readonly description: string;
>   protected genre: string;
>   platform: string[];
>   getSimilars: (title: string) => void;
> }
> ```

<br />

<h2 id="propriedade-opcional">Propriedades opcionais</h2>

```typescript
interface Game {
  title: string;
  description: string;
  genre: string;
  platform?: string[]; // platform é opcional (?), posso passar ou não 
  getSimilars: (title: string) => void;
}
```

<br />

<h2 id="estender-interfaces">Estender interfaces</h2>

Semelhante as classes, as interfaces também podem estender de outras interfaces.

```typescript
interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars: (title: string) => void;
}

const theLastOfUs: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Metro, Uncharted`);
  }
}

interface DLC extends Game {
  originalGame: Game; // Objeto com todos as propriedades da interface Game
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie",
  genre: "Action",
  platform: ["PS3", "PS4"],
  originalGame: theLastOfUs, // Objeto inteiro, declarado acima!
  newContent: ["3 hours story", "new caracters"]
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Metro, Uncharted`);
  }
}
```

<br />

<h2 id="implements">Implements</h2>

Posso extender uma classe de uma interface. 

Como? Com o `implements`.

```typescript
interface Game {
  title: string;
  description: string;
  genre: string;
  platform?: string[]; // Propriedade opcional (?)
  getSimilars?: (title: string) => void; // Propriedade opcional (?)
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  
  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
```

<hr />

## Mini curso sobre TypeScript

<iframe width="560" height="315" src="https://www.youtube.com/embed/mRixno_uE2o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<hr />

<h2 id="conclusao">Conclusão</h2>

Nesse post, vimos um resumo de algumas funcionalidades do TypeScript. Nos próximos posts, iremos aprender mais afundo cada uma delas, além de outras funcionalidades.
Grande abraço e até a próxima!

---
title: Criando formulários com React Hook Form
description: Aprenda a criar formulários de forma simples no React
date: 2021-10-27 08:19:11
image: assets/images/leon-dewiwje-lddmtgf89gu-unsplash.jpeg
category: react
background: "#7b2cbf"
---
## Introdução

Praticamente em todas as aplicações web (e mobile também), precisamos lidar com formulários, nem seja apenas na tela de login.

Existem várias formas de criar e gerenciar formulários, podemos simplesmente utilizar a tag `<form>` do HTML e 

guadar os inputs em `states` do React. 

```tsx
<form onSubmit={handleSubmit}>
  <input name="email" onChange={(event) => setInputEmail(event.target.value)} />
  <input name="password" onChange={(event) => setInputPassword(event.target.value)} />
  
	<button type="submit">Enviar</button>
<form>
```



Mas, a medida que os formulários crescem, precisamos de uma estratégia diferente, pois image salvar 15 valores de `inputs` em 15 estados diferentes... Complicado né?!

Bom, para facilitar nossa vida, existem várias libs para lidar com formulários em React como Unform, Formik, KendoReact Form, React Final Form, React Hook Form entre várias outras. Nesse post, irei focar na **[React Hook Form](https://react-hook-form.com/)**.

## Conhecendo a React Hook Form

Primeira coisa a se destacar é a [documentação](https://react-hook-form.com/get-started) da lib que está incrível, com bastante exemplo (tanto em JS quanto TS) e vários tópicos mais avançados.



## Instalação

No nosso exemplo, vamos utilizar o Next.js com Styled Components. Caso não tenha familiaridade com eles, não tem problema, pode seguir o exemplo, não tem nada complicado (e se tiver use os comentários que vou lhe ajudar).

```bash
# vamos usar meu template nesse exemplo, basta executar o comando abaixo:
npx create-next-app form-example -e https://github.com/jjunior96/next-template
```

Agora, vamos instalar o React Hook Form:

```bash
yarn add react-hook-form

# ou npm install react-hook-form
```

Tudo pronto para continuar!



## Mãos na massa

Sem mais enrolação, vamos criar nosso primeiro formulário:

```tsx
// src/components/Form/index.tsx

import { FormHTMLAttributes } from 'react';

import * as S from './styles';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <S.Container onSubmit={onSubmit}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Form;
```

````typescript
// src/components/Form/styles.ts

import styled from 'styled-components';

export const Container = styled.form``;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;
`;

````



Vamos acessar o template de Dashboard (`src/templates/Dashboard/index.tsx`) e vamos apagar o conteúdo e deixá-lo assim:

```tsx
// src/templates/Dashboard/index.tsx

import { useForm } from "react-hook-form";

import Form from "components/Form";

const Dashboard() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />
      
      <button type="submit">Enviar</button>
    </Form>
  );
}

export default Dashboard;
```

Pronto, template da nossa página criado!

> OBS.: No Next.js, todos os arquivos criados dentro da pasta `pages` se tornam uma rota.
>
> Exemplo: 
>
> A pagina: `src/pages/users.tsx`
>
> Acessamos no browser: `localhost:3000/users`
>
> Simples né?!
>
> Vamos continuar nosso exemplo.

Agora podemos executar:

```bash
yarn dev

# ou npm run dev
```

E acessar o browser em `localhost:3000`.



## Recapitulando

Nesse post, aprendemos a como usar a lib React Hook Form para lidar com nossos formulários em React.

Vale lembrar que o que fizemos é o básico que podemos realizar com essa lib, pois existem inúmeras outras funções interessantes como validação, que o React Hook Form traz de forma nativa ou podemos integrar com o [Yup](https://www.npmjs.com/package/yup) por exemplo, entre outras coisas.

Caso você queira que eu traga mais coisas sobre esse lib fantástica que é o React Hook Form, basta deixar nos comentários abaixo e não deixe de me mandar uma mensagem e me seguir nas redes sociais:

[LinkedIn](https://www.linkedin.com/in/junior-alves-b66a10127/)

[Instagram](https://www.instagram.com/devjuniorplus/)

[YouTube](https://www.youtube.com/channel/UCERTT0Z4u-0dFask_kL83sw)

[GitHub](https://github.com/jjunior96)

Muito obrigado por ler até aqui, espero ter te ajudado e até a próxima!
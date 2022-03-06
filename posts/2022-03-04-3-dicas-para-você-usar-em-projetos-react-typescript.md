---
title: "3 dicas para você usar em projetos React + Typescript! "
description: Aprenda a usar essas features do Typescript!
date: 2022-03-04 08:39:21
image: assets/images/chi-lok-tsang-koxxmfunspa-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![Hong Kong](assets/images/chi-lok-tsang-koxxmfunspa-unsplash.jpeg "Image from Chi Lok TSANG - Unsplash")

## Introdução

> Antes de mais nada, se você está aprendendo sobre React + Typescript, fiz um vídeo que ficou bem massa, depois da uma olhada lá. 😎 
<iframe width="560" height="315" src="https://www.youtube.com/embed/A4wImDtQw7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hoje vamos abordar uma dica rápida porém muito útil no dia-a-dia como Dev se você utiliza Typescript: 

* Pick 
* Omit

Bora aprender a usar na prática com exemplos da vida real?! 

## Pick

Veja o exemplo abaixo: 

```tsx
// src/components/Modal/index.tsx

// Tipagem do componente Modal
export type ModalProps = {
  title: string;
  isOpen: boolean;
  size?: 'small' | 'xsmall' | 'medium' | 'large';
  children: React.ReactNode;
  onRequestClose: () => void;
};

// Componente Modal
const Modal = ({
  title,
  isOpen,
  size = 'medium',
  children,
  onRequestClose
}: ModalProps) => {
 
  return (
  	<S.Container size={size}> {/* a propriedade `size` é passada para o Container */}
    	
    </S.Container>
  )
}
```

> Nesse exemplo, vamos usar React + Styled Components

Criamos um `type` para um componente de `Modal`, agora vamos estilizar usando o [Styled Components](https://styled-components.com/):

```ts
// src/components/Modal/styles.ts
import styled, { css } from 'styled-components';

// "Pegamos" apenas a propriedade `size` de `ModalProps`
type ContainerProps = Pick<ModalProps, 'size'>;

// Passamos a tipagem para o component Container
export const Container = styled.div<ContainerProps>`
	${({ size }) => css` // Recebe props e desestrutura, pegando o `size`
		${size === 'small' && // Verifica se o `size` é igual "small" e aplica uma estilização
    css`
      width: 26rem;
      height: 80%;
    `}
	`}
`; 
```

Ou seja, aproveitamos a tipagem para do componente `Modal` e utilizamos apenas uma propriedade do `ModalProps` para nosso componente estilizado `Container`.

Nesse caso poderíamos criar uma nova tipagem apenas para o `Container`, não teria problema. 

**Mas a vantagem em utilizar Pick nesse caso é que, como a propriedade `size` recebe apenas algumas opções, se alterarmos no `ModalProps` automaticamente alteramos no `ContainerProps`.**

```ts
// src/components/Modal/index.tsx
export type ModalProps = {
  title: string;
  isOpen: boolean;
  size?: 'medium' | 'large'; // -> Perceba que `size` agora só aceita duas opções
  children: React.ReactNode;
  onRequestClose: () => void;
};

// src/components/Modal/styles.ts
type ContainerProps = Pick<ModalProps, 'size'>; // -> Nao precisamos mexer em nada aqui, o `size` vai aceitar apenas 'medium' ou 'large'
```

Com o `Pick` podemos selecionar mais de uma propriedade de um tipo:

```ts
type ContainerProps = Pick<ModalProps, 'size' | 'title' | ...>; // Podemos selecionar quantas propriedades quisermos

// Mesmo que fazer: 
type ContainerProps = {
  size: 'small' | 'xsmall' | 'medium' | 'large';
  title: string;
	// ...
};
```

## Omit

O `Omit` é bem parecido com o `Pick`, porém ao invés de selecionar uma propriedade de uma tipagem, ele remove (omite).

Exemplo:

```tsx
export type ModalProps = {
  title: string;
  isOpen: boolean;
  size?: 'small' | 'xsmall' | 'medium' | 'large';
  children: React.ReactNode;
  onRequestClose: () => void;
};

type ContainerProps = Omit<ModalProps, 'title'>;

// O mesmo que fazer:
//	type ContainerProps = { -> Todas as propriedades menos a `title`
//		isOpen: boolean;
// 		size?: 'small' | 'xsmall' | 'medium' | 'large';
// 		children: React.ReactNode;
// 		onRequestClose: () => void;
//	};
```

E assim como o `Pick`, podemos remover uma ou várias propriedades de uma tipagem.

```ts
type ContainerProps = Omit<ModalProps, 'title' | 'isOpen' | 'size'>;

// O mesmo que fazer:
//	type ContainerProps = { -> Todas as propriedades menos a `title`, `isOpen` e `size`
// 		children: React.ReactNode;
// 		onRequestClose: () => void;
//	};
```

Massa né?!

## Dica bônus

Se você utiliza a lib [react-select](https://react-select.com/home) com validação utilizando o [Yup](https://www.npmjs.com/package/yup), podemos fazer o seguinte para melhorar nossa validação:

```tsx
// Validação com React-Select + Yup
const schema = Yup.object().shape({
  id: Yup.object().required("Campo obrigatório") // Passamos como objeto, por causa do react-select
});
```

```ts
// Tipagem para User
export type UserProps = {
  id: number;
  name: string;
  password: string;
};

// Tipagem para um formulário de Adição
type SubmitDataProps = {
  id: {
    value: number;
  };
} & Omit<UserProps, 'id'>;
```

Exemplo de formulário utilizando **React Select**:

```tsx
return (
  <Form onSubmit={handleSubmitData}>
		<Select
			name="id"
			placeholder="Selecione um usuário"
			options={usersoptions}
		/>
    
    <Button type="submit">Adicionar</Button>
  </Form>
);
```

Quando um usuário é selecionado e o formulário é submetido, o **React Select** envia como:

```ts
{
  id: {
    value: 1 // usuario com id 1 por exemplo
  }
}
```

Agora basta criar um objeto para enviar na chamada à API:

```ts
const handleSubmitData = (data: SubmitDataProps) {
  const { id, ...rest } = data;
  
  const dataSubmit = {
    ...rest,
    id: id.value
  }
  
  await postUser(dataSubmit); // Exemplo de chamada à API para criar um usuário
}
```

## Conclusão

Nesse post aprendemos como utilizar o `Pick` e o `Omit`, duas funcionalidades muito úteis que o Typescript nos prove.

Além disso, aprendemos a utilizar o **React Select** com Typescript e validação utilizando o **Yup**.

Se quiser mais conteúdo sobre **React Select**, **Yup** ou **Typescript**, fique ligado aqui e no canal do [YouTube](https://www.youtube.com/channel/UCERTT0Z4u-0dFask_kL83sw/videos), ta sempre tendo bastante coisa nova!

Qualquer dúvida deixe nos comentários aqui ou me manda no meu [LinkedIn](https://www.linkedin.com/in/junior-alves-b66a10127/), será um prazer responder. Até a próxima!

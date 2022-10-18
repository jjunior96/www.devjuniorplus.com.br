---
title: Como trocar o placeholder do input type='file'?!
description: Conheça uma maneira incrível de personalizar seus inputs no React
date: 2022-10-18 07:03:38
image: assets/images/pmv-chamara-qomic8mcr0y-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![revista de mockups aberta sobre a mesa](assets/images/pmv-chamara-qomic8mcr0y-unsplash.jpeg "Preview")

## Introdução

Se você já trabalha com desenvolvimento web a um certo tempo, com certeza, em algum momento, já precisou de criar ou utilizar um componente de upload `input type='file'`.

Em algum momento você quis alterar o `placeholder` do `input type='file'` e se deparou com um problema: não tem como de forma nativa, ele não possui nenhuma propriedade para essa finalidade!

Mas tem existe uma maneira e é o que vamos aprender agora!

Pronto, então bora!

## Um spoiler

![Imagem do resultado final](assets/images/screen-shot-2022-10-17-at-8.28.22-am.png "Imagem do resultado final")

Esse é o resultado final que nosso componente de Upload! Legal né?!

## O componente Upload

```tsx
// src/components/Upload/index.tsx
import { forwardRef, InputHTMLAttributes } from 'react';
import { FiInbox as BoxIcon } from 'react-icons/fi';

import PhotoPreview from 'components/PhotoPreview';

import * as S from './styles';

type Props = {
  accept?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  file: File | null;
  emptyText?: string;
};

export type UploadProps = InputHTMLAttributes<HTMLInputElement> & Props;

const Upload: React.ForwardRefRenderFunction<HTMLInputElement, UploadProps> = (
  {
    file,
    accept = '',
    isRequired = false,
    isDisabled = false,
    emptyText = 'Clique ou arreste um arquivo',
    ...rest
  },
  ref
) => {
  const nameImage = file ? file.name : emptyText;

  return (
      <S.Container isDisabled={isDisabled}>
        <S.Content hasFile={!!file}>
          <BoxIcon size={32} />

          {/* Um título da imagem anexada */}
          <S.Text>{nameImage}</S.Text>

          <input
            {...rest}
            accept={accept}
            ref={ref}
            type="file"
            title={file ? `${file.name}` : 'No file selected'} // Para acessibilidade
          />

          {/* Thumbnail da imagem anexada */}
          <PhotoPreview src={file ? URL.createObjectURL(file) : ''} />
        </S.Content>
      </S.Container>
  );
};

export default forwardRef(Upload);
```

## A estilização

```ts
// src/components/Upload/styles.ts

import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

type ContainerProps = {
  isDisabled: boolean;
};

type ContentProps = {
  hasFile: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isDisabled }) => css`
    width: 100%;

    background-color: ${lighten(0.1, '#D9D9D9')};

    border: 0.16rem dashed ${lighten(0.6, '#343a40')};
    border-radius: 0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem;

    transition: border 0.3s ease-in-out;

    position: relative;

    input {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;

      cursor: pointer;
      width: 100%;

      margin: 0 auto;

      background-color: #FAFAFA;
      opacity: 0;
    }

    &:hover {
      border-color: ${darken(0.1, '#24A66B')};
    }

    ${isDisabled &&
    css`
      cursor: not-allowed;

      color: #91AAB4;

      input {
        pointer-events: none;
      }

      ${Content} {
        > svg {
          color: #91AAB4;
        }

        ${Text} {
          color: #91AAB4;
        }
      }

      &:hover {
        border-color: ${lighten(0.6, '#343a40')};
      }
    `}
  `}
`;

export const Content = styled.div<ContentProps>`
  ${({ theme, hasFile }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > svg {
      color: #3E606F;

      ${hasFile &&
      css`
        color: #24A66B;
      `}
    }

    ${Text} {
      ${hasFile &&
      css`
        color: #24A66B;
      `}
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: #3E606F;

    margin-top: 1.6rem;
  `}
`;
```

Vamos criar também um component `PhotoPreview` para quando o usuário anexar alguma imagem no nosso componente de Upload, ele consiga ver uma thumbnail dela.

![Imagem do resultado final com preview](assets/images/screen-shot-2022-10-17-at-8.44.10-am.png "Imagem do resultado final com preview")



## O componente PhotoPreview

```tsx
// src/components/PhotoPreview/index.tsx

import * as S from './styles';

type PhotoPreviewProps = {
  src: string;
};

const PhotoPreview = ({ src }: PhotoPreviewProps) => {
  return <S.Container>{src && <S.ImageContainer src={src} />}</S.Container>;
};

export default PhotoPreview;
```

## Os estilos PhotoPreview

```ts
// src/components/PhotoPreview/styles.ts

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;

    cursor: pointer;
  `}
`;

export const ImageContainer = styled.img`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    object-fit: cover;

    width: 100%;
    height: 20rem;

    border: 1px solid #91AAB4;

    overflow: hidden;
  `}
`;
```

## Utilizando nosso componente

Para utilizar nosso componente, precisamos apenas nos lembra de um detalhe: é um componente de input, portanto precisamos de um `form` por volta dele.

```tsx
const [imagePreview, setImagePreview] = useState<File | null>(null);

const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files?.length) {
      setImagePreview(null);

      return;
    }

    setImagePreview(files[0]);
};

return (
    <form>
        <Upload 
            file={imagePreview} // O arquivo anexado
            onChange={handleUpload} // Função para alterar o state do arquivo
            isRequired
        />
    </form>
)
```

## Observações finais

Como você deve ter percebido, a utilização do componente é bem simples, porém, da forma que está, em cada formulário que precisarmos desse componente, vamos ter que ter um estado `imagePreview` e uma função `handleUpload`, certo?

O que podemos fazer nesse caso é criar um custom hook para não precisamos ficar copiando e colando esse código em todos os lugares. #FicaADica

## Conclusão

O objetivo desse post era trazer uma forma de estilizar e personalizar um componente básico que é o `input type='file'`, mas fazer isso de uma forma diferente, usando a criatividade para pensar fora da caixa.

Conseguimos criar nosso próprio componente de upload utilizando conceitos básicos de CSS e do React. O que quero que perceba é que, entendendo os conceitos básicos, já é possível criar muitas coisas interessantes, basta usar a criatividade.

Espero que tenha gostado, muito obrigado por ler até aqui! Valeu e até a próxima!
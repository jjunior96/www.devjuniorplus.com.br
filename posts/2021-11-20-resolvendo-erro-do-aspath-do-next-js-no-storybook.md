---
title: Resolvendo erro do "asPath" do Next.js no Storybook
description: Veja como corrigir erro do useRouter do Next.js no Storybook
date: 2021-11-20 07:05:23
image: assets/images/eugen-str-crhsiry3jwy-unsplash.jpeg
category: react
background: "#7b2cbf"
---
![Ferramentas ](assets/images/eugen-str-crhsiry3jwy-unsplash.jpeg "Fixing problems")

### Introdução

Venho estudando bastante documentação no Frontend, especificamente o Storybook e ao mesmo tempo me aprofundo mais no Next.js. Mas hoje tive um erro com o Storybook utilizando o `useRouter` do Next.js.

### O problema

Hoje eu estava criando alguns componentes básicos para treinar a criação de stories e deparei com esse erro:

![Erro do asPath](assets/images/image-error.png "Erro do asPath")

O componente que havia criado era apenas um Link que mudava a cor do background se a pagina em que o usuário está é a pagina do link.

Chamei de `ActiveLink`. Abaixo o código do componente:

```typescript
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

export type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
} & LinkProps;

const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const isCurrentPath =
    asPath === href || asPath === rest.as || asPath.startsWith(String(rest.as));

  return (
    <Link href={href} {...rest}>
      <S.LinkActived isActive={!!isCurrentPath}>{children}</S.LinkActived>
    </Link>
  );
};

export default ActiveLink;
```

O problema vem exatamente de estar utilizando o `userRouter` do Next.js, pois o Storybook não "conhece" esse elemento o que acaba gerando o erro.

### Corrigindo o erro

Para corrigir é simples, primeiro vamos instalar um `addon` para o Storybook. (Se você não sabe o que é um Addon, basta acessar [aqui](https://storybook.js.org/addons)).

```bash
yarn add -D storybook-addon-next-router
# ou
npm install --save-dev storybook-addon-next-router
```

Depois de instalado, agora presicamos criar uma pasta (se ainda não tiver) na raiz do projeto para as confiurações do Storybook:

`.storybook/preview.js`

```typescript
import { RouterContext } from "next/dist/shared/lib/router-context";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  }
}
```

Agora vamos criar o `.storybook/main.js`

```typescript
module.exports = {
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
}
```

Agora precisamos apenas passar a informação do nextRouter no stories do componente que estava com erro:

```typescript
export default {
  title: 'ActiveLink',
  component: ActiveLink,
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/'
    },
  }
} as Meta;
```

Pronto!

![Erro corrigido](assets/images/screen-shot-2021-11-20-at-7.11.21-am.png "Erro corrigido")

### Conslusão

Qualquer dúvida ou sugestão, deixe nos comentários, gostaria de ter seu feedback! Espero ter ajudado com esse post, fique com Deus e até a próxima. 😎
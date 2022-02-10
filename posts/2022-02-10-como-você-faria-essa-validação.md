---
title: Como você faria essa validação?
description: Validação avançada com Yup!
date: 2022-02-10 07:54:23
image: assets/images/leon-dewiwje-lddmtgf89gu-unsplash.jpeg
category: misc
background: "#fb5607"
---
## Introdução

Vamos para mais um dica aqui, dessa vez uma dica de validação de formulários. Utilizo bastante o Yup no meu dia-a-dia, o que me faz sempre procurar novas funcionalidades dessa lib incrível. 

## O problema

Alguns dias atrás precisei fazer a seguinte validação:

Meu formulário possui vários campos, mas dois eram **dependentes um do outro**, `data entrada` e `data saída`. 

![form with two fields](assets/images/screen-shot-2022-02-10-at-7.40.14-am.png "Formulario")

Não eram obrigatórios, **MAS** se o `data entrada` fosse preenchido, o `data saída` se tornava obrigatório.

## Solução

Com o Yup é simples! Veja o exemplo:

```jsx
// Criamos o schema normalmente
const schema = Yup.object().shape({
  data_inicio: Yup.date(), // Perceba que não é obrigatório
  data_fim: Yup.date()
    .notRequired() // Perceba que não é obrigatório
    .when('data_inicio', { 
      is: (val: Date) => val !== undefined, // Mas se o `data_inicio` estiver preenchido...
      then: Yup.date().required('Informar a data saída') // ...se torna obrigatório
    })
});
```

![form with two fields](assets/images/screen-shot-2022-02-10-at-7.41.11-am.png "Formulario com mensagem de erro")

**Massa né?!**

## Conclusão

Esse post foi uma dica rápida de validação com o Yup. 

Quero trazer mais dicas sobre ele e sobre o **React Hook Form**, lib para gerenciamento de formulários que venho utilizando a quase 1 ano. Se tiver interesse em mais posts como esse, deixa nos comentário ou me manda uma mensagem no [LinkedIn](https://www.linkedin.com/in/junior-alves-b66a10127/) pra gente trocar uma idéia! Valeu e até a proxima.
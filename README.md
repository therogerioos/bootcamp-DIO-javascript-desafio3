# Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada


## Comentários da entrega de projeto do Rogerio Oliveira

Trabalhar com objeto e classe sempre será um desafio incrível, e agora entendo o quanto é importante ter aprendido com o grande Java, ficou mais simples para construir no JavaScript. Let's Go!

Após, construir a classe, realizei a criação de dois métodos, o primeiro é o __*atacar()*__ que chama o segundo método __*verificarPoder()*__, este compara o tipo de herói, e retorna qual o poder utilizado no ataque, retornando ao método atacar, realiza a concatenação do tipo do herói e o poder utilizado, sempre impresso com o uso do __*console.log()*__

Criei uma variável que instancia um novo objeto, no exemplo, foram criado 4 objetos diferentes para validar todos os heróis do desafio.

Por fim, a chamada do método através do nome do objeto, e o nome do método.

 
Bons estudos 😉
#Trybers and Dragons da Trybe
---
Este projeto tem por objetivo a utilização de arquitetura SOLID junto com os princípios de POO para desenvolver um jogo no estilo Dungeons & Dragons de interpretação de papéis (role play), o conhecido estilo RPG.

###Tecnologias
Este projeto teve a utilização das seguintes tecnologis em seu desenvolvimento:
-__Docker__ para a conteinerização da aplicação.
-__ESLint__ para a padronização e correção do código.
-__Git__ para versionamento.
-__VS Code__ para edição do código.
-__SOLID__ para arquitetura e organização do código realizado em  paradigma POO.
-__Node.js__ para execução de testes e instalação de packages de bibliotecas.
-__Typescript__ para tipagem da linguagem.

###Como usar
Para a utilização do repositório no desenvolvimento foi configurado um `Docker compose`

# code block
Clone o repositório
https://github.com/joaovictorschiavon/trybers-and-dragons.git

Instale as dependências
npm install

Inicie o Docker Compose
docker-compose up -d

Abra uma linha de comando dentro do container
docker exec -it trybers_and_dragon bash

Instale as dependências dentro do contâiner
npm install
...

###Instanciando personagens
Personagens do tipo `Character` por ser criados e tem os métodos de `levelUp e attack`
# code block
const personagem = new Character('nome genérico');
personagem.levelUp;
personagem.attack(OtherCharacterOrMonster)
...

###Instanciando monstros
Monstros podem ser criados, em especial há o monstro do tipo `Dragon`, ambos possuem métodos de `attack`
# code block
const monster = new Monster();
const dragon = new Dragon();
monster.attack(personagem);
dragon.attack(personagem);
...

###Batalhas de RPG
***
####___Batalha PVP (Player contra Player)___
Com dois personagens do tipo caracter criado é possível criar uma batalha entre os dois e para saber o vencedor basta utilizar o método `fight`, se o primeiro personagem adicionado ganhar será retornado 1, se o segundo personagem ganhar será retornado -1. Obs: você pode aumentar o lvl o dos personagens antes da balalha usando o método `levelUp`:
#code block
const batalhaPvp = new PVP(personagem1, personagem2);
console.log(batalhaPvp.fight()); // 1 ou -1
...

####___Batalha PVE (Player contra "Environment")____
Na batalha PVE você pode colocar um personagem para lutar com um grupo(array) de inimigos de sua escolha (outros personagens, monstros e dragões). Para descobrir o lado vitorioso basta utilizar o método `fight` na batalha, retornará 1 se o personagem ganhar e -1 se o grupo ganhar) Obs: você pode aumentar o lvl o dos personagens antes da balalha usando o método `levelUp`:
# code block
const balatalhaPve = new PVE(personagem1, [personagem2, monster, dragon]);
console.log(batalhaPvp.fight()); // 1 ou -1
...

***

Criado por ___Trybe___ e desenvolvido por ___João Victor Schiavon___
[Link]http://www.linkedin.com/in/joaovictorschiavon


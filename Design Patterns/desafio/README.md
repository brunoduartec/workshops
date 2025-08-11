# Desafio: Refatoração de um Arcanoid com Problemas de SOLID

## Objetivo

O desafio consiste em analisar e refatorar um código de um jogo simples de Arcanoid, implementado em JavaScript com Three.js, que foi propositalmente escrito violando diversos princípios SOLID. O objetivo é exercitar a identificação de problemas de design e a aplicação de Design Patterns para melhorar a estrutura do código.

---

## Etapas do Desafio

### 1. Refatoração Livre com Design Patterns
- Analise o código do jogo.
- Identifique pontos problemáticos e refatore utilizando Design Patterns que julgar adequados.
- **Importante:** Nesta etapa, não utilize o método estruturado de diagnóstico. Use sua experiência e criatividade para propor melhorias.

### 2. Refatoração Guiada pelo Método de Diagnóstico
- Agora, utilize o método descrito abaixo (baseado no arquivo `docs/metodo.md`).
- Siga as etapas:
  1. Identifique sintomas e problemas no código.
  2. Classifique o tipo de problema (Criação, Estrutura ou Comportamento).
  3. Relacione com o(s) princípio(s) SOLID violado(s).
  4. Consulte padrões de projeto sugeridos para o caso.
  5. Aplique o padrão e refatore o código.
- Compare os resultados e reflita sobre as diferenças entre as abordagens.

---

## Método de Diagnóstico para Aplicação de Design Patterns com base nos Princípios SOLID

Este método tem como objetivo ajudar desenvolvedores a identificar problemas recorrentes no código, classificá-los de forma orientada (Criação, Estrutura ou Comportamento), reconhecer princípios SOLID violados e, a partir disso, escolher padrões de projeto (Design Patterns) adequados para refatoração e melhoria do design.

### Etapas do Método

#### 🔎 Etapa 1: Identifique o Sintoma no Código
Observe seu código e anote os pontos de frustração, dificuldades de manutenção, extensibilidade ou testes. Exemplos:
- Classe muito grande e com responsabilidades diversas
- Muitos `if/else` ou `switch` para tratar comportamentos
- Dificuldade em testar um componente
- Mudança em uma parte do código quebra outras
- Subclasses que “estragam” o comportamento da classe base

#### 🧠 Etapa 2: Classifique o Tipo de Problema
Use a triagem abaixo para determinar se o problema é de **Criação**, **Estrutura** ou **Comportamento**:
- **Criação:** Problemas relacionados à forma como objetos são instanciados, uso excessivo de `new`, dificuldade de testes, etc.
- **Estrutura:** Classes muito acopladas, estrutura difícil de entender, necessidade de esconder detalhes de implementação, etc.
- **Comportamento:** Fluxo complexo, muitos `if/else`, lógica espalhada, necessidade de adicionar comportamentos sem alterar existentes, etc.

#### 🧩 Etapa 3: Verifique Qual Princípio SOLID Está Sendo Violado
| Princípio | Sintomas Comuns |
|-----------|-----------------|
| **SRP** (Responsabilidade Única) | Classe com muitas responsabilidades; difícil testar ou manter |
| **OCP** (Aberto/Fechado) | Mudanças exigem alterar código existente; `if/else` constantes |
| **LSP** (Substituição de Liskov) | Subclasses quebram o comportamento da classe base |
| **ISP** (Segregação de Interface) | Interfaces com muitos métodos desnecessários |
| **DIP** (Inversão de Dependência) | Código fortemente acoplado a classes concretas |

#### 🛠️ Etapa 4: Consulte a Tabela de Padrões GoF Sugeridos
Use a combinação entre o tipo de problema (Criação/Estrutura/Comportamento) e o princípio SOLID violado para encontrar padrões indicados.

Exemplo:
- Problema: Muitos `if/else` para variações → Tipo: Comportamento
- Princípio violado: OCP
- Padrões sugeridos: Strategy, Template Method, State


#### 🛠️ Etapa 4: Consulte a Tabela de Padrões GoF Sugeridos

Use a combinação entre o tipo de problema (Criação/Estrutura/Comportamento) e o princípio SOLID violado para encontrar padrões indicados.

Exemplo:

- Problema: Muitos `if/else` para variações → Tipo: Comportamento
- Princípio violado: OCP
- Padrões sugeridos: Strategy, Template Method, State

---

### 🛠️ Etapa 4: Consulte a Tabela de Padrões GoF Sugeridos

Use a combinação entre o tipo de problema (Criação/Estrutura/Comportamento) e o princípio SOLID violado para encontrar padrões indicados.

##### Mapeamento entre SOLID e padrões GoF

###### 🧱 Padrões Criacionais

| Princípio SOLID                 | Padrões Criacionais Relevantes                |
| ------------------------------- | -------------------------------------------- |
| **SRP (Single Responsibility)** | Abstract Factory, Builder, Factory Method     |
| **OCP (Open/Closed)**           | Abstract Factory, Builder, Factory Method     |
| **DIP (Dependency Inversion)**  | Abstract Factory, Factory Method, Prototype   |

###### 🧩 Padrões Estruturais

| Princípio SOLID                 | Padrões Estruturais Relevantes                 |
| ------------------------------- | --------------------------------------------- |
| **SRP (Single Responsibility)** | Adapter, Bridge, Composite, Decorator, Facade |
| **OCP (Open/Closed)**           | Adapter, Bridge, Decorator, Proxy             |
| **DIP (Dependency Inversion)**  | Adapter, Bridge, Composite, Decorator         |

###### ⚙️ Padrões Comportamentais

| Princípio SOLID                 | Padrões Comportamentais Relevantes                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| **SRP (Single Responsibility)** | Chain of Responsibility, Command, Mediator, Observer, State, Strategy, Template Method, Visitor    |
| **OCP (Open/Closed)**           | Chain of Responsibility, Command, Mediator, Observer, State, Strategy, Template Method, Visitor    |
| **DIP (Dependency Inversion)**  | Chain of Responsibility, Mediator, Observer, Strategy                                              |
| **LSP (Liskov Substitution)**   | Strategy, Template Method, State, Visitor                                                          |

---

##### Checklist de Diagnóstico SOLID → Design Patterns

| 🚨 Sintoma no Código                                                                 | ⚠️ Princípio SOLID Violado     | 🛠️ Padrões GoF Relevantes (dos 23)                                             | 💡 Dica Prática |
|--------------------------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------|----------------|
| Classe faz muitas coisas (responsabilidade misturada)                               | SRP                            | **Command**, **Strategy**, **Template Method**, **Facade**, **Composite**     | Separe lógicas em classes diferentes com foco único |
| Precisa alterar código existente para novos comportamentos                          | OCP                            | **Decorator**, **Strategy**, **State**, **Template Method**, **Visitor**      | Use composição e polimorfismo para estender |
| Subclasses sobrescrevem métodos e quebram o funcionamento esperado                  | LSP                            | **Strategy**, **Template Method**, **State**, **Visitor**                      | Garanta contratos consistentes e evite surpresas ao substituir |
| Classe depende de implementações concretas                                          | DIP                            | **Abstract Factory**, **Factory Method**, **Bridge**, **Strategy**, **Observer** | Programe para abstrações e injete dependências |
| Muitos `if/else` ou `switch` para executar ações                                    | OCP, SRP                       | **Command**, **Strategy**, **State**, **Template Method**                     | Use polimorfismo para encapsular variações |
| Algoritmo extenso com etapas claras que podem ser delegadas em sequência.           | SRP, OCP                       | **Chain of Responsibility**                                                  | Evite acoplamento criando uma cadeia flexível de handlers |
| Precisa criar objetos com lógica complexa ou dependente de contexto                 | SRP, DIP                       | **Builder**, **Abstract Factory**, **Factory Method**, **Prototype**          | Delegue criação para uma estrutura dedicada |
| Várias classes diferentes fazem chamadas semelhantes a objetos externos             | SRP                            | **Facade**, **Adapter**, **Proxy**                                            | Crie uma fachada ou adaptador para simplificar o uso |
| Muitos objetos similares ocupando memória                                            | SRP, OCP                       | **Flyweight**                                                                 | Compartilhe objetos imutáveis para reduzir uso de memória |
| Precisa navegar por uma coleção sem expor estrutura                                 | SRP, OCP                       | **Iterator**                                                                  | Encapsule a navegação em um iterador dedicado |
| Precisa interpretar ou traduzir linguagens ou expressões                            | SRP, OCP                       | **Interpreter**                                                               | Crie classes para representar e interpretar expressões |
| Deseja desfazer/refazer operações                                                   | SRP, OCP                       | **Command**, **Memento**                                                     | Armazene estado e encapsule ações reversíveis |
| Deseja aplicar ações em todos os elementos de uma estrutura                         | OCP, LSP                       | **Visitor**, **Composite**                                                   | Use Visitor para operações e Composite para estrutura |
| Deseja notificar objetos automaticamente quando outro muda                          | OCP, DIP                       | **Observer**, **Mediator**                                                   | Use Observer para notificação e Mediator para coordenação |
| Muitos objetos precisam interagir mas estão fortemente acoplados                    | DIP, SRP                       | **Mediator**, **Observer**, **Command**                                      | Centralize a comunicação em um objeto intermediário |
| Deseja encapsular construção de objetos complexos                                   | SRP, DIP                       | **Builder**, **Prototype**                                                   | Separe a construção da representação |
| Precisa acessar objetos remotos ou proteger acesso                                  | SRP, DIP                       | **Proxy**                                                                     | Crie um objeto que controla o acesso a outro |
| Precisa oferecer várias implementações intercambiáveis                              | DIP, LSP                       | **Bridge**, **Strategy**, **Adapter**                                        | Separe abstração da implementação concreta |

#### 📋 Etapa 5: Aplique o Padrão de Projeto
Depois de identificar o padrão adequado:
1. Estude a estrutura do pattern.
2. Modele a solução com base no problema detectado.
3. Refatore o código.
4. Verifique se a violação do SOLID foi resolvida.

---

## Dicas
- Documente as decisões tomadas em cada etapa.
- Compare as duas abordagens e reflita sobre os aprendizados.
- Use o método como guia em outros projetos!

---

Bom desafio e bons estudos!

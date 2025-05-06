# Design Patterns vs Princípios SOLID (Versão Completa)

Esta tabela relaciona cada Design Pattern aos princípios SOLID aplicáveis, com explicações específicas por princípio.

## Strategy
- **OCP**: Permite trocar algoritmos sem modificar a classe que os utiliza, facilitando extensão.
- **DIP**: A classe depende de uma interface para o algoritmo, e não de uma implementação específica.

## Observer
- **OCP**: Permite adicionar novos observers sem modificar o subject.
- **DIP**: O subject depende de abstrações (interface de observer), não de implementações concretas.

## Decorator
- **OCP**: Permite adicionar funcionalidades a um objeto sem alterar sua estrutura.
- **SRP**: Cada decorator tem uma responsabilidade única, mantendo o foco do objeto original.

## Factory Method
- **SRP**: Separa a lógica de criação da lógica de negócio.
- **OCP**: Permite adicionar novas implementações sem alterar o cliente.
- **DIP**: Cliente depende da abstração retornada pela fábrica, não da classe concreta.

## Abstract Factory
- **OCP**: Permite introduzir novas famílias de objetos sem alterar o código cliente.
- **DIP**: Cliente trabalha com interfaces, desacoplado das implementações concretas.

## Singleton
- **SRP**: Centraliza a responsabilidade de controle de uma única instância.

## Adapter
- **OCP**: Permite adaptar uma interface existente sem modificá-la.
- **DIP**: Depende de abstrações para permitir interoperabilidade entre interfaces distintas.

## Composite
- **OCP**: Permite tratar objetos individuais e composições de forma uniforme.
- **LSP**: Objetos compostos e simples podem ser usados de forma intercambiável sem quebrar comportamento.

## Command
- **SRP**: Separa a solicitação da execução da ação.
- **OCP**: Permite introduzir novos comandos sem alterar o invocador.

## Mediator
- **SRP**: Centraliza a comunicação entre objetos, evitando que eles assumam responsabilidades de coordenação.

## Template Method
- **OCP**: Permite modificar partes do algoritmo sem alterar sua estrutura principal.
- **LSP**: As subclasses podem ser substituídas mantendo o comportamento esperado.

## Builder
- **SRP**: Separa a lógica de construção de objetos complexos da lógica de negócio.
- **OCP**: Permite criar diferentes representações de um objeto sem modificar quem o usa.

## Prototype
- **OCP**: Permite criar novos objetos por clonagem, sem depender de classes concretas.

## Proxy
- **SRP**: Adiciona responsabilidades como controle de acesso, cache, etc., mantendo o objeto real focado.
- **OCP**: Permite modificar o comportamento de acesso sem alterar o objeto real.

## Chain of Responsibility
- **SRP**: Cada handler da cadeia tem uma responsabilidade clara e única.
- **OCP**: Novos manipuladores podem ser adicionados sem alterar a lógica existente.
- **DIP**: Cada handler pode depender apenas de abstrações, não de manipuladores específicos.

## State
- **OCP**: Permite adicionar novos estados sem alterar o contexto.
- **SRP**: Cada classe de estado encapsula um comportamento específico.

## Facade
- **SRP**: Oferece uma interface unificada para um conjunto de funcionalidades, simplificando o uso externo.

## Interpreter
- **SRP**: Cada classe representa uma regra gramatical específica.
- **OCP**: Novas regras podem ser adicionadas sem modificar as existentes.

## Bridge
- **DIP**: A abstração e a implementação são desacopladas por meio de interfaces.
- **OCP**: Permite variar abstrações e implementações independentemente.

## Flyweight
- **SRP**: Responsável por compartilhamento e gerenciamento de instâncias comuns.
- **OCP**: Novos estados compartilháveis podem ser incluídos sem afetar os clientes.

## Memento
- **SRP**: Separa a lógica de armazenamento de estado da lógica de negócio.

## Visitor
- **OCP**: Permite adicionar novas operações sem modificar os elementos existentes.
- **SRP**: Cada visitor implementa uma operação específica, mantendo foco em uma responsabilidade.


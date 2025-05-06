# Design Pattern: Adapter

## Problema

- Interfaces incompatíveis entre sistemas que precisam trabalhar juntos.

## Solução

- Criar um adaptador que converta a interface de uma classe para outra esperada pelo cliente.

## Diagrama em Mermaid

```mermaid
classDiagram
    class Target {
        <<interface>>
        +request(): void
    }

    class Adaptee {
        +specificRequest(): void
    }

    class Adapter {
        +request(): void
    }

    Adapter --> Adaptee
    Target <|.. Adapter
```


---

# Design Pattern: Decorator

## Problema

- Adicionar funcionalidades em tempo de execução sem alterar o código existente.

## Solução

- Encapsular o objeto original com decoradores que adicionam comportamento.

## Diagrama em Mermaid

```mermaid
classDiagram
    class Component {
        <<interface>>
        +operation(): void
    }

    class ConcreteComponent {
        +operation(): void
    }

    class Decorator {
        -component: Component
        +operation(): void
    }

    class ConcreteDecoratorA {
        +operation(): void
    }

    class ConcreteDecoratorB {
        +operation(): void
    }

    Component <|.. ConcreteComponent
    Component <|.. Decorator
    Decorator <|-- ConcreteDecoratorA
    Decorator <|-- ConcreteDecoratorB
```


---

# Design Pattern: Factory Method

## Problema

- Criação de objetos com muita lógica condicional.
- Código rígido e difícil de manter.

## Solução

- Criar uma interface de criação e mover a lógica de criação para subclasses.

## Diagrama em Mermaid

```mermaid
classDiagram
    class Creator {
        +factoryMethod(): Product
    }

    class ConcreteCreator {
        +factoryMethod(): Product
    }

    class Product {
        <<interface>>
    }

    class ConcreteProductA
    class ConcreteProductB

    Creator <|-- ConcreteCreator
    Product <|.. ConcreteProductA
    Product <|.. ConcreteProductB
    ConcreteCreator --> Product
```


---

# Design Pattern: Observer

## Problema

- Comunicação acoplada entre componentes que precisam reagir a eventos.

## Solução

- Permitir que objetos observadores se registrem e sejam notificados automaticamente de mudanças.

## Diagrama em Mermaid

```mermaid
classDiagram
    class Subject {
        +attach(o: Observer)
        +detach(o: Observer)
        +notify()
    }

    class ConcreteSubject {
        -state: number
        +getState(): number
        +setState(state: number): void
    }

    class Observer {
        <<interface>>
        +update(): void
    }

    class ConcreteObserverA {
        +update(): void
    }

    class ConcreteObserverB {
        +update(): void
    }

    Subject <|-- ConcreteSubject
    Observer <|.. ConcreteObserverA
    Observer <|.. ConcreteObserverB
    ConcreteSubject --> Observer
```


---

# Design Pattern: Strategy

## Problema

- Código com múltiplos blocos de `if/else` ou `switch` para comportamentos diferentes.
- Dificuldade para escalar ou alterar comportamentos sem mexer no código existente.
- Viola o Princípio Aberto-Fechado (OCP).

## Solução

- Criar uma interface comum (`Strategy`) com diferentes implementações.
- Delegar o comportamento à interface.

## Diagrama em Mermaid

```mermaid
classDiagram
    class Context {
        -strategy: Strategy
        +setStrategy(s: Strategy): void
        +execute(): void
    }

    class Strategy {
        <<interface>>
        +execute(): void
    }

    class ConcreteStrategyA {
        +execute(): void
    }

    class ConcreteStrategyB {
        +execute(): void
    }

    Context --> Strategy
    Strategy <|.. ConcreteStrategyA
    Strategy <|.. ConcreteStrategyB
```


---

